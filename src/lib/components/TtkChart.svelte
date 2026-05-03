<script lang="ts">
  import type { Weapon } from '$lib/data/weapons';
  import { SHIELD_TIERS, shotsToKill, timeToKill } from '$lib/stats';

  interface Props {
    weapons: Weapon[];
  }

  let { weapons }: Props = $props();

  let rows = $derived(
    weapons.flatMap((w) =>
      SHIELD_TIERS.map((tier) => ({
        weapon: w,
        tier,
        ttk: timeToKill(w, tier.hp),
        shots: shotsToKill(w, tier.hp)
      }))
    )
  );

  let maxTtk = $derived(Math.max(0.001, ...rows.map((r) => r.ttk)));
</script>

<div class="ttk">
  <div class="ttk__legend">
    {#each SHIELD_TIERS as tier (tier.label)}
      <span class="ttk__legend-item">
        <span class="ttk__swatch" style="background: {tier.color}"></span>
        {tier.label} = {tier.hp} HP
      </span>
    {/each}
  </div>

  {#each weapons as w (w.slug)}
    <div class="ttk__group">
      <div class="ttk__group-name">{w.name}</div>
      <div class="ttk__group-bars">
        {#each SHIELD_TIERS as tier (tier.label)}
          {@const ttk = timeToKill(w, tier.hp)}
          {@const shots = shotsToKill(w, tier.hp)}
          {@const pct = Math.max(2, (ttk / maxTtk) * 100)}
          <div class="ttk__bar-row">
            <span class="ttk__bar-label">{tier.shortLabel}</span>
            <div class="ttk__bar-track">
              <div
                class="ttk__bar-fill"
                style="width: {pct}%; background: {tier.color}"
              ></div>
            </div>
            <span class="ttk__bar-value">
              {ttk.toFixed(2)}s
              <span class="muted">· {shots} shots</span>
            </span>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
