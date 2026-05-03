<script lang="ts">
  import { weaponsByClass } from '$lib/data/weapons';
</script>

<h1 class="page-title">Welcome to ApexWeaponStats</h1>
<p class="lede">A reference for the weapons of Apex Legends.</p>

<div class="weapon-classes">
  {#each Object.entries(weaponsByClass) as [className, weapons] (className)}
    <section class="weapon-class">
      <h2>{className}</h2>
      <ul class="weapon-list">
        {#each weapons as weapon (weapon.slug)}
          <li class="weapon weapon-{weapon.slug}">{weapon.name}</li>
        {/each}
      </ul>
    </section>
  {/each}
</div>
