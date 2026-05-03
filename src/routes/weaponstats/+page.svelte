<script lang="ts">
  import { weaponsByClass } from '$lib/data/weapons';
</script>

<svelte:head>
  <title>Weapons · ApexWeaponStats</title>
</svelte:head>

<h1 class="page-title">Weapons</h1>
<p class="lede">Detailed stats are coming soon. For now, here's the roster.</p>

<div class="weapon-classes">
  {#each Object.entries(weaponsByClass) as [className, weapons] (className)}
    <section class="weapon-class">
      <h2>{className}</h2>
      <ul class="weapon-list">
        {#each weapons as weapon (weapon.slug)}
          <li class="weapon">{weapon.name}</li>
        {/each}
      </ul>
    </section>
  {/each}
</div>
