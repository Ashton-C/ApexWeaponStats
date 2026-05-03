<script lang="ts">
  import { weapons } from '$lib/data/weapons';
  import { damagePerSecond } from '$lib/stats';
  import WeaponCard from '$lib/components/WeaponCard.svelte';
  import DpsLeaderboard from '$lib/components/DpsLeaderboard.svelte';

  const featured = weapons.slice(0, 6);
  const topDps = [...weapons].sort((a, b) => damagePerSecond(b) - damagePerSecond(a))[0];
</script>

<section class="hero">
  <div class="hero__copy">
    <span class="hero__eyebrow">Apex Legends · weapon reference</span>
    <h1 class="hero__title">Stats, charts, and side-by-side comparisons.</h1>
    <p class="hero__lede">
      Browse the full roster, dig into time-to-kill at every shield tier, and compare any
      two guns head-to-head.
    </p>
    <div class="hero__cta">
      <a class="btn btn--primary" href="/weaponstats">Browse weapons</a>
      <a class="btn btn--ghost" href="/compare">Compare two →</a>
    </div>
  </div>

  <aside class="hero__stat">
    <span class="hero__stat-label">Highest sustained DPS</span>
    <a class="hero__stat-card" href="/weapons/{topDps.slug}">
      <span class="hero__stat-name">{topDps.name}</span>
      <span class="hero__stat-value">{damagePerSecond(topDps)} <span class="muted">dps</span></span>
      <span class="hero__stat-meta">{topDps.class} · {topDps.ammo} ammo</span>
    </a>
  </aside>
</section>

<section>
  <div class="section-head">
    <h2>Featured weapons</h2>
    <a href="/weaponstats">View all →</a>
  </div>
  <div class="weapon-grid">
    {#each featured as weapon (weapon.slug)}
      <WeaponCard {weapon} />
    {/each}
  </div>
</section>

<section class="chart-section">
  <div class="section-head">
    <h2>DPS leaderboard</h2>
    <span class="muted">Body shots, sustained fire</span>
  </div>
  <DpsLeaderboard weapons={weapons} />
</section>
