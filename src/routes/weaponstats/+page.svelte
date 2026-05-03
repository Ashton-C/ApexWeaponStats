<script lang="ts">
  import { weapons, type AmmoType, type Weapon, type WeaponClass } from '$lib/data/weapons';
  import { damagePerSecond } from '$lib/stats';
  import WeaponCard from '$lib/components/WeaponCard.svelte';
  import DpsLeaderboard from '$lib/components/DpsLeaderboard.svelte';

  type SortKey = 'class' | 'name' | 'dps' | 'damage' | 'rpm' | 'mag';

  const ALL_CLASSES: WeaponClass[] = [
    'Assault',
    'SMG',
    'LMG',
    'Marksman',
    'Sniper',
    'Shotgun',
    'Pistol'
  ];
  const ALL_AMMO: AmmoType[] = ['Light', 'Heavy', 'Energy', 'Shotgun', 'Sniper'];

  let classFilters = $state<WeaponClass[]>([]);
  let ammoFilters = $state<AmmoType[]>([]);
  let sort = $state<SortKey>('class');

  function toggleClass(c: WeaponClass) {
    classFilters = classFilters.includes(c)
      ? classFilters.filter((x) => x !== c)
      : [...classFilters, c];
  }

  function toggleAmmo(a: AmmoType) {
    ammoFilters = ammoFilters.includes(a)
      ? ammoFilters.filter((x) => x !== a)
      : [...ammoFilters, a];
  }

  function clearFilters() {
    classFilters = [];
    ammoFilters = [];
  }

  function sortFn(a: Weapon, b: Weapon) {
    switch (sort) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'dps':
        return damagePerSecond(b) - damagePerSecond(a);
      case 'damage':
        return b.damage * (b.pellets ?? 1) - a.damage * (a.pellets ?? 1);
      case 'rpm':
        return b.fireRate - a.fireRate;
      case 'mag':
        return b.magSize - a.magSize;
      case 'class':
      default:
        return a.class.localeCompare(b.class) || a.name.localeCompare(b.name);
    }
  }

  let filtered = $derived(
    weapons
      .filter((w) => classFilters.length === 0 || classFilters.includes(w.class))
      .filter((w) => ammoFilters.length === 0 || ammoFilters.includes(w.ammo))
      .toSorted(sortFn)
  );

  let hasFilters = $derived(classFilters.length > 0 || ammoFilters.length > 0);
</script>

<svelte:head>
  <title>Weapons · ApexWeaponStats</title>
</svelte:head>

<h1 class="page-title">Weapons</h1>
<p class="lede">
  The full roster, filterable and sortable. Click a card for full stats and time-to-kill charts.
</p>

<section class="filters" aria-label="Filter weapons">
  <div class="filters__row">
    <span class="filters__label">Class</span>
    <div class="chips">
      {#each ALL_CLASSES as c (c)}
        <button
          type="button"
          class="chip {classFilters.includes(c) ? 'is-active' : ''}"
          onclick={() => toggleClass(c)}
        >
          {c}
        </button>
      {/each}
    </div>
  </div>

  <div class="filters__row">
    <span class="filters__label">Ammo</span>
    <div class="chips">
      {#each ALL_AMMO as a (a)}
        <button
          type="button"
          class="chip ammo-chip ammo-{a.toLowerCase()} {ammoFilters.includes(a) ? 'is-active' : ''}"
          onclick={() => toggleAmmo(a)}
        >
          {a}
        </button>
      {/each}
    </div>
  </div>

  <div class="filters__row filters__row--end">
    <label class="filters__sort">
      <span class="filters__label">Sort</span>
      <select bind:value={sort}>
        <option value="class">By class</option>
        <option value="name">Name (A–Z)</option>
        <option value="dps">DPS (high → low)</option>
        <option value="damage">Damage / shot</option>
        <option value="rpm">Fire rate</option>
        <option value="mag">Magazine size</option>
      </select>
    </label>
    {#if hasFilters}
      <button type="button" class="filters__clear" onclick={clearFilters}>
        Clear filters
      </button>
    {/if}
  </div>
</section>

{#if filtered.length === 0}
  <p class="empty-state">No weapons match these filters.</p>
{:else}
  <p class="filters__count">
    Showing <strong>{filtered.length}</strong> of {weapons.length} weapons.
  </p>
  <div class="weapon-grid">
    {#each filtered as weapon (weapon.slug)}
      <WeaponCard {weapon} />
    {/each}
  </div>
{/if}

<section class="chart-section">
  <div class="section-head">
    <h2>Sustained DPS leaderboard</h2>
    <span class="muted">All weapons ranked by body DPS</span>
  </div>
  <DpsLeaderboard weapons={weapons} />
</section>
