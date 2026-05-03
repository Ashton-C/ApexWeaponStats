<script lang="ts">
  import type { Weapon } from '$lib/data/weapons';

  interface Props {
    weapon: Weapon;
  }

  let { weapon }: Props = $props();

  let damageLabel = $derived(
    weapon.pellets ? `${weapon.damage} × ${weapon.pellets}` : `${weapon.damage}`
  );
</script>

<a class="weapon-card" href="/weapons/{weapon.slug}">
  <div class="weapon-card__head">
    <h3>{weapon.name}</h3>
    <span class="weapon-card__ammo ammo-{weapon.ammo.toLowerCase()}">{weapon.ammo}</span>
  </div>
  <p class="weapon-card__class">{weapon.class}</p>
  <dl class="weapon-card__stats">
    <div>
      <dt>Damage</dt>
      <dd>{damageLabel}</dd>
    </div>
    <div>
      <dt>RPM</dt>
      <dd>{weapon.fireRate}</dd>
    </div>
    <div>
      <dt>Mag</dt>
      <dd>{weapon.magSize}</dd>
    </div>
  </dl>
</a>
