<script lang="ts">
  import type { Weapon } from '$lib/data/weapons';
  import { damagePerSecond } from '$lib/stats';

  interface Props {
    weapons: Weapon[];
    highlightSlug?: string | undefined;
  }

  let { weapons, highlightSlug }: Props = $props();

  let sorted = $derived(
    weapons.map((w) => ({ w, dps: damagePerSecond(w) })).sort((a, b) => b.dps - a.dps)
  );
  let max = $derived(Math.max(1, ...sorted.map((r) => r.dps)));
</script>

<div class="leaderboard">
  {#each sorted as { w, dps } (w.slug)}
    {@const pct = (dps / max) * 100}
    <a
      class="leaderboard__row {highlightSlug === w.slug ? 'is-active' : ''}"
      href="/weapons/{w.slug}"
    >
      <span class="leaderboard__name">{w.name}</span>
      <div class="leaderboard__track">
        <div
          class="leaderboard__fill ammo-bg-{w.ammo.toLowerCase()}"
          style="width: {pct}%"
        ></div>
      </div>
      <span class="leaderboard__value">{dps}</span>
    </a>
  {/each}
</div>
