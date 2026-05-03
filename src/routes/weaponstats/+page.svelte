<script lang="ts">
  import { weaponsByClass } from '$lib/data/weapons';
  import WeaponCard from '$lib/components/WeaponCard.svelte';

  const grouped = weaponsByClass();
</script>

<svelte:head>
  <title>Weapons · ApexWeaponStats</title>
</svelte:head>

<h1 class="page-title">Weapons</h1>
<p class="lede">Every weapon in the current roster, grouped by class. Click a card for full stats.</p>

{#each Object.entries(grouped) as [className, list] (className)}
  <section class="weapon-class-section">
    <h2>{className}</h2>
    <div class="weapon-grid">
      {#each list as weapon (weapon.slug)}
        <WeaponCard {weapon} />
      {/each}
    </div>
  </section>
{/each}
