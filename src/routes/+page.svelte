<script lang="ts">
  import { weapons } from '$lib/data/weapons';
  import WeaponCard from '$lib/components/WeaponCard.svelte';

  const featured = weapons.slice(0, 6);
</script>

<h1 class="page-title">Welcome to ApexWeaponStats</h1>
<p class="lede">A reference for the weapons of Apex Legends.</p>

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
