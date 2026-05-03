<script lang="ts">
  import type { Weapon } from '$lib/data/weapons';
  import {
    damagePerShot,
    damagePerSecond,
    rosterRanges
  } from '$lib/stats';

  interface Props {
    weapon: Weapon;
  }

  let { weapon }: Props = $props();

  const ranges = rosterRanges();

  let rows = $derived([
    {
      label: 'Damage / shot',
      value: damagePerShot(weapon),
      max: ranges.damage.max,
      suffix: ''
    },
    {
      label: 'Fire rate',
      value: weapon.fireRate,
      max: ranges.fireRate.max,
      suffix: ' RPM'
    },
    {
      label: 'Magazine',
      value: weapon.magSize,
      max: ranges.magSize.max,
      suffix: ' rds'
    },
    {
      label: 'Sustained DPS',
      value: damagePerSecond(weapon),
      max: ranges.dps.max,
      suffix: ''
    }
  ]);
</script>

<div class="statbars">
  {#each rows as row (row.label)}
    {@const pct = Math.min(100, (row.value / row.max) * 100)}
    <div class="statbars__row">
      <div class="statbars__label">{row.label}</div>
      <div class="statbars__track">
        <div class="statbars__fill" style="width: {pct}%"></div>
      </div>
      <div class="statbars__value">
        {row.value}{row.suffix}
        <span class="muted">/ {row.max}{row.suffix}</span>
      </div>
    </div>
  {/each}
</div>
