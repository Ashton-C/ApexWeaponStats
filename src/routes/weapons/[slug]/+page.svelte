<script lang="ts">
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let weapon = $derived(data.weapon);

  let burstDamage = $derived(
    weapon.pellets ? weapon.damage * weapon.pellets : weapon.damage
  );
  let dps = $derived(Math.round((burstDamage * weapon.fireRate) / 60));
</script>

<svelte:head>
  <title>{weapon.name} · ApexWeaponStats</title>
  <meta name="description" content={weapon.description} />
</svelte:head>

<a class="back-link" href="/weaponstats">← All weapons</a>

<header class="weapon-detail__head">
  <h1>{weapon.name}</h1>
  <div class="weapon-detail__tags">
    <span class="tag">{weapon.class}</span>
    <span class="tag ammo-{weapon.ammo.toLowerCase()}">{weapon.ammo} ammo</span>
  </div>
</header>

<p class="lede">{weapon.description}</p>

<section class="weapon-detail__stats">
  <h2>Stats</h2>
  <dl>
    <div>
      <dt>Body damage</dt>
      <dd>
        {weapon.damage}
        {#if weapon.pellets}<span class="muted">× {weapon.pellets} pellets = {burstDamage}</span>{/if}
      </dd>
    </div>
    <div>
      <dt>Fire rate</dt>
      <dd>{weapon.fireRate} <span class="muted">RPM</span></dd>
    </div>
    <div>
      <dt>Magazine</dt>
      <dd>{weapon.magSize} <span class="muted">rounds (base)</span></dd>
    </div>
    <div>
      <dt>Sustained DPS</dt>
      <dd>~{dps} <span class="muted">body</span></dd>
    </div>
  </dl>
</section>

<p class="disclaimer">
  Stats are reference values from a recent season and may not reflect the current in-game patch.
</p>
