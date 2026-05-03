// Weapon data for ApexWeaponStats.
//
// NOTE: Apex Legends rebalances weapons frequently. The numbers below reflect
// a recent season's stats and should be verified against the in-game firing
// range or a current community wiki before being treated as authoritative.

export type WeaponClass =
  | 'Assault'
  | 'SMG'
  | 'LMG'
  | 'Marksman'
  | 'Sniper'
  | 'Shotgun'
  | 'Pistol';

export type AmmoType =
  | 'Light'
  | 'Heavy'
  | 'Energy'
  | 'Shotgun'
  | 'Sniper'
  | 'Special';

export interface Weapon {
  name: string;
  slug: string;
  class: WeaponClass;
  ammo: AmmoType;
  /** Body damage per projectile. */
  damage: number;
  /** Number of projectiles per shot (1 for most guns; >1 for shotguns). */
  pellets?: number;
  /** Rounds per minute. For ramping/burst weapons this is the sustained rate. */
  fireRate: number;
  /** Base magazine size (no extended mag). */
  magSize: number;
  description: string;
  /** Path to a transparent PNG of the weapon under /static, e.g. '/weapons/flatline.png'. */
  iconUrl?: string;
}

export const weapons: Weapon[] = [
  {
    name: 'VK-47 Flatline',
    slug: 'flatline',
    class: 'Assault',
    ammo: 'Heavy',
    damage: 19,
    fireRate: 600,
    magSize: 20,
    description:
      'Fully-automatic heavy AR. Forgiving recoil pattern and high per-shot damage make it a versatile mid-range pick.'
  },
  {
    name: 'R-301 Carbine',
    slug: 'r-301',
    class: 'Assault',
    ammo: 'Light',
    damage: 14,
    fireRate: 810,
    magSize: 18,
    description:
      'Light, controllable assault rifle. Lower damage per shot than the Flatline but a much higher fire rate and easier recoil.'
  },
  {
    name: 'HAVOC Rifle',
    slug: 'havoc',
    class: 'Assault',
    ammo: 'Energy',
    damage: 18,
    fireRate: 672,
    magSize: 24,
    description:
      'Energy AR with a brief charge-up before firing. Pairs naturally with a Turbocharger hop-up to remove the spin-up.'
  },
  {
    name: 'Hemlok Burst AR',
    slug: 'hemlok',
    class: 'Assault',
    ammo: 'Heavy',
    damage: 20,
    fireRate: 930,
    magSize: 18,
    description:
      'Three-round burst with single-fire toggle. Punishing in mid-range duels when you can land all three shots.'
  },
  {
    name: 'R-99 SMG',
    slug: 'r-99',
    class: 'SMG',
    ammo: 'Light',
    damage: 11,
    fireRate: 1080,
    magSize: 18,
    description:
      'Highest fire rate in the game. Shreds at close range; mag size and recoil are the main limitations.'
  },
  {
    name: 'Volt SMG',
    slug: 'volt',
    class: 'SMG',
    ammo: 'Energy',
    damage: 15,
    fireRate: 720,
    magSize: 19,
    description:
      'Energy SMG with very low recoil and consistent damage. Great all-rounder for new players.'
  },
  {
    name: 'C.A.R. SMG',
    slug: 'car',
    class: 'SMG',
    ammo: 'Light',
    damage: 13,
    fireRate: 930,
    magSize: 20,
    description:
      'Accepts both Light and Heavy ammo. Solid hip-fire spread and a compelling mid-range option for an SMG.'
  },
  {
    name: 'Alternator SMG',
    slug: 'alternator',
    class: 'SMG',
    ammo: 'Light',
    damage: 16,
    fireRate: 600,
    magSize: 19,
    description:
      'Slower fire rate but high per-shot damage. Easy to control and rewarding when you connect your shots.'
  },
  {
    name: 'Devotion LMG',
    slug: 'devotion',
    class: 'LMG',
    ammo: 'Energy',
    damage: 16,
    fireRate: 900,
    magSize: 36,
    description:
      'Ramping fire rate that climbs the longer you hold the trigger. Devastating once it gets going.'
  },
  {
    name: 'Spitfire LMG',
    slug: 'spitfire',
    class: 'LMG',
    ammo: 'Light',
    damage: 19,
    fireRate: 540,
    magSize: 35,
    description:
      'Big mag, slow fire rate, hits hard per shot. A classic suppression weapon that dominates open engagements.'
  },
  {
    name: 'Sentinel',
    slug: 'sentinel',
    class: 'Sniper',
    ammo: 'Sniper',
    damage: 70,
    fireRate: 42,
    magSize: 4,
    description:
      'Bolt-action sniper. Can be charged with a shield cell to deal bonus damage to shielded enemies.'
  },
  {
    name: 'Longbow DMR',
    slug: 'longbow',
    class: 'Marksman',
    ammo: 'Sniper',
    damage: 60,
    fireRate: 78,
    magSize: 5,
    description:
      'Semi-auto marksman rifle with a tight projectile and headshot multiplier. Reliable long-range option.'
  },
  {
    name: 'Wingman',
    slug: 'wingman',
    class: 'Pistol',
    ammo: 'Sniper',
    damage: 45,
    fireRate: 156,
    magSize: 5,
    description:
      'High-skill heavy pistol. Hits like a sniper at any range if your aim holds up.'
  },
  {
    name: 'Peacekeeper',
    slug: 'peacekeeper',
    class: 'Shotgun',
    ammo: 'Shotgun',
    damage: 11,
    pellets: 9,
    fireRate: 56,
    magSize: 5,
    description:
      'Pump-action with a tight pellet spread. The Precision Choke hop-up tightens it further for mid-range fights.'
  },
  {
    name: 'EVA-8 Auto',
    slug: 'eva-8',
    class: 'Shotgun',
    ammo: 'Shotgun',
    damage: 7,
    pellets: 9,
    fireRate: 126,
    magSize: 8,
    description:
      'Fully-automatic shotgun. Lower per-shot damage than the Peacekeeper but a much higher cyclic rate.'
  },
  {
    name: 'RE-45 Auto',
    slug: 're-45',
    class: 'Pistol',
    ammo: 'Light',
    damage: 12,
    fireRate: 780,
    magSize: 16,
    description:
      'Full-auto sidearm. Strong drop-in pistol when you have nothing else; falls off as proper SMGs come online.'
  },
  {
    name: 'P2020',
    slug: 'p2020',
    class: 'Pistol',
    ammo: 'Light',
    damage: 18,
    fireRate: 420,
    magSize: 14,
    description:
      'Semi-auto starter pistol. Modest on its own; the Hammerpoint hop-up makes it a real threat against unshielded targets.'
  },
  {
    name: 'Mastiff Shotgun',
    slug: 'mastiff',
    class: 'Shotgun',
    ammo: 'Shotgun',
    damage: 13,
    pellets: 8,
    fireRate: 84,
    magSize: 6,
    description:
      'Lever-action shotgun with a tight horizontal pellet pattern. Punishing at close range and surprisingly capable at mid range.'
  },
  {
    name: 'Mozambique Shotgun',
    slug: 'mozambique',
    class: 'Shotgun',
    ammo: 'Shotgun',
    damage: 13,
    pellets: 3,
    fireRate: 132,
    magSize: 6,
    description:
      'Three-barrel break-action pistol-shotgun. The internet meme that learned to bite once Hammerpoints arrived.'
  },
  {
    name: 'Triple Take',
    slug: 'triple-take',
    class: 'Marksman',
    ammo: 'Sniper',
    damage: 23,
    pellets: 3,
    fireRate: 78,
    magSize: 5,
    description:
      'Three-shot energy marksman that fires a tight cluster. Charge the Choke to tighten spread further at long range.'
  },
  {
    name: 'Charge Rifle',
    slug: 'charge-rifle',
    class: 'Sniper',
    ammo: 'Sniper',
    damage: 90,
    fireRate: 26,
    magSize: 4,
    description:
      'Hitscan sniper with a brief charge-up before the shot. Ideal for static defenders; awkward to use on the move.'
  },
  {
    name: 'Kraber .50-Cal',
    slug: 'kraber',
    class: 'Sniper',
    ammo: 'Special',
    damage: 145,
    fireRate: 26,
    magSize: 4,
    description:
      'Care-package sniper. A clean body shot deletes most opponents through any shield tier — and missing hurts.'
  },
  {
    name: 'L-STAR EMG',
    slug: 'l-star',
    class: 'LMG',
    ammo: 'Energy',
    damage: 18,
    fireRate: 600,
    magSize: 24,
    description:
      'Heat-based energy LMG with chunky plasma projectiles. No traditional reload — vents heat after sustained fire.'
  },
  {
    name: 'Nemesis Burst AR',
    slug: 'nemesis',
    class: 'Assault',
    ammo: 'Energy',
    damage: 17,
    fireRate: 750,
    magSize: 24,
    description:
      'Four-round burst energy AR with a fire-rate ramp. Stay engaged and the time between bursts shrinks dramatically.'
  },
  {
    name: '30-30 Repeater',
    slug: '30-30',
    class: 'Marksman',
    ammo: 'Heavy',
    damage: 42,
    fireRate: 138,
    magSize: 6,
    description:
      'Lever-action marksman that rewards charged shots with bonus damage. Versatile from medium to long range.'
  },
  {
    name: 'Rampage LMG',
    slug: 'rampage',
    class: 'LMG',
    ammo: 'Heavy',
    damage: 28,
    fireRate: 300,
    magSize: 28,
    description:
      'Heavy-hitting LMG that can be revved with a Thermite Grenade for a major fire-rate boost. Ruthless in open areas.'
  },
  {
    name: 'Bocek Compound Bow',
    slug: 'bocek',
    class: 'Marksman',
    ammo: 'Special',
    damage: 60,
    fireRate: 120,
    magSize: 1,
    description:
      'Drawable compound bow with stackable hop-ups. Silent, high-impact single-shot damage at full draw.'
  },
  {
    name: 'Prowler Burst PDW',
    slug: 'prowler',
    class: 'SMG',
    ammo: 'Heavy',
    damage: 14,
    fireRate: 1080,
    magSize: 20,
    description:
      'Five-round burst SMG. With Selectfire it converts to full-auto and becomes one of the best close-range options in the game.'
  }
];

export function weaponsByClass(): Record<WeaponClass, Weapon[]> {
  const grouped = {} as Record<WeaponClass, Weapon[]>;
  for (const weapon of weapons) {
    (grouped[weapon.class] ??= []).push(weapon);
  }
  return grouped;
}

export function getWeapon(slug: string): Weapon | undefined {
  return weapons.find((w) => w.slug === slug);
}
