<script lang="ts">
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { weapons, type Weapon } from '$lib/data/weapons';
  import {
    damagePerMag,
    damagePerSecond,
    damagePerShot
  } from '$lib/stats';
  import TtkChart from '$lib/components/TtkChart.svelte';
  import StatBars from '$lib/components/StatBars.svelte';

  function findOr(slug: string | null, fallback: Weapon): Weapon {
    return weapons.find((w) => w.slug === slug) ?? fallback;
  }

  let slugA = $derived(page.url.searchParams.get('a'));
  let slugB = $derived(page.url.searchParams.get('b'));

  let weaponA = $derived(findOr(slugA, weapons[0]));
  let weaponB = $derived(findOr(slugB, weapons[1]));

  function setSlug(side: 'a' | 'b', value: string) {
    const params = new URLSearchParams(page.url.searchParams);
    params.set(side, value);
    if (!params.has('a')) params.set('a', weaponA.slug);
    if (!params.has('b')) params.set('b', weaponB.slug);
    goto(`?${params.toString()}`, { replaceState: true, keepFocus: true, noScroll: true });
  }

  function diff(a: number, b: number) {
    if (a === b) return '';
    return a > b ? 'better' : 'worse';
  }

  let rows = $derived([
    {
      label: 'Damage / shot',
      a: damagePerShot(weaponA),
      b: damagePerShot(weaponB)
    },
    { label: 'Fire rate (RPM)', a: weaponA.fireRate, b: weaponB.fireRate },
    { label: 'Magazine', a: weaponA.magSize, b: weaponB.magSize },
    { label: 'Sustained DPS', a: damagePerSecond(weaponA), b: damagePerSecond(weaponB) },
    { label: 'Damage / mag', a: damagePerMag(weaponA), b: damagePerMag(weaponB) }
  ]);
</script>

<svelte:head>
  <title>Compare weapons · ApexWeaponStats</title>
</svelte:head>

<h1 class="page-title">Compare weapons</h1>
<p class="lede">Pick any two weapons to see them side by side.</p>

<div class="compare__pickers">
  <label class="compare__picker">
    <span class="filters__label">Weapon A</span>
    <select value={weaponA.slug} onchange={(e) => setSlug('a', e.currentTarget.value)}>
      {#each weapons as w (w.slug)}
        <option value={w.slug}>{w.name}</option>
      {/each}
    </select>
  </label>
  <span class="compare__vs" aria-hidden="true">vs</span>
  <label class="compare__picker">
    <span class="filters__label">Weapon B</span>
    <select value={weaponB.slug} onchange={(e) => setSlug('b', e.currentTarget.value)}>
      {#each weapons as w (w.slug)}
        <option value={w.slug}>{w.name}</option>
      {/each}
    </select>
  </label>
</div>

<div class="compare__heads">
  <div class="compare__head">
    <h2>{weaponA.name}</h2>
    <div class="weapon-detail__tags">
      <span class="tag">{weaponA.class}</span>
      <span class="tag ammo-{weaponA.ammo.toLowerCase()}">{weaponA.ammo}</span>
    </div>
    <p class="muted">{weaponA.description}</p>
  </div>
  <div class="compare__head">
    <h2>{weaponB.name}</h2>
    <div class="weapon-detail__tags">
      <span class="tag">{weaponB.class}</span>
      <span class="tag ammo-{weaponB.ammo.toLowerCase()}">{weaponB.ammo}</span>
    </div>
    <p class="muted">{weaponB.description}</p>
  </div>
</div>

<section class="chart-card">
  <div class="chart-card__head">
    <h2>Stat-by-stat</h2>
    <p class="muted">Higher is better for every row in this list.</p>
  </div>
  <table class="compare-table">
    <thead>
      <tr>
        <th>Stat</th>
        <th>{weaponA.name}</th>
        <th>{weaponB.name}</th>
      </tr>
    </thead>
    <tbody>
      {#each rows as row (row.label)}
        <tr>
          <th scope="row">{row.label}</th>
          <td class="cmp cmp--{diff(row.a, row.b)}">{row.a}</td>
          <td class="cmp cmp--{diff(row.b, row.a)}">{row.b}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<section class="chart-card">
  <div class="chart-card__head">
    <h2>Time to kill</h2>
    <p class="muted">Shorter bars are faster kills.</p>
  </div>
  <TtkChart weapons={[weaponA, weaponB]} />
</section>

<div class="compare__statbars">
  <section class="chart-card">
    <div class="chart-card__head">
      <h3>{weaponA.name} vs roster</h3>
    </div>
    <StatBars weapon={weaponA} />
  </section>
  <section class="chart-card">
    <div class="chart-card__head">
      <h3>{weaponB.name} vs roster</h3>
    </div>
    <StatBars weapon={weaponB} />
  </section>
</div>
