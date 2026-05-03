export type WeaponClass = 'Assault' | 'SMG' | 'Sniper';

export interface Weapon {
  name: string;
  slug: string;
}

export const weaponsByClass: Record<WeaponClass, Weapon[]> = {
  Assault: [
    { name: 'Flatline', slug: 'flatline' },
    { name: 'R-301', slug: 'r-301' }
  ],
  SMG: [
    { name: 'R-99', slug: 'r-99' },
    { name: 'Volt', slug: 'volt' }
  ],
  Sniper: [
    { name: 'Sentinel', slug: 'sentinel' },
    { name: 'Longbow', slug: 'longbow' }
  ]
};
