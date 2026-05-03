<script lang="ts">
  import type { PageData } from './$types';
  import { weapons } from '$lib/data/weapons';
  import { damagePerMag, damagePerSecond, damagePerShot } from '$lib/stats';
  import StatBars from '$lib/components/StatBars.svelte';
  import TtkChart from '$lib/components/TtkChart.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let weapon = $derived(data.weapon);

  let perShot = $derived(damagePerShot(weapon));
  let dps = $derived(damagePerSecond(weapon));
  let perMag = $derived(damagePerMag(weapon));

  let classmates = $derived(
    weapons.filter((w) => w.class === weapon.class && w.slug !== weapon.slug).slice(0, 2)
  );
  let ttkRoster = $derived([weapon, ...classmates]);
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
  <h2>Headline stats</h2>
  <dl>
    <div>
      <dt>Body damage / shot</dt>
      <dd>
        {perShot}
        {#if weapon.pellets}<span class="muted">({weapon.damage} × {weapon.pellets})</span>{/if}
      </dd>
    </div>
    <div>
      <dt>Fire rate</dt>
      <dd>{weapon.fireRate} <span class="muted">RPM</span></dd>
    </div>
    <div>
      <dt>Magazine</dt>
      <dd>{weapon.magSize} <span class="muted">rds (base)</span></dd>
    </div>
    <div>
      <dt>Sustained DPS</dt>
      <dd>{dps} <span class="muted">body</span></dd>
    </div>
    <div>
      <dt>Damage / mag</dt>
      <dd>{perMag}</dd>
    </div>
  </dl>
</section>

<section class="chart-card">
  <div class="chart-card__head">
    <h2>How it stacks up</h2>
    <p class="muted">Each stat as a fraction of the highest in the roster.</p>
  </div>
  <StatBars {weapon} />
</section>

<section class="chart-card">
  <div class="chart-card__head">
    <h2>Time to kill</h2>
    <p class="muted">
      Body shots only, ignoring travel & reaction time. Compared with
      {classmates.length > 0
        ? `other ${weapon.class.toLowerCase()}s in the roster.`
        : 'the rest of its class.'}
    </p>
  </div>
  <TtkChart weapons={ttkRoster} />
</section>

<p class="disclaimer">
  Stats are reference values from a recent season and may not reflect the current in-game patch.
</p>
