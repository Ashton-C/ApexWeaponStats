import type { Weapon } from './data/weapons';
import { weapons } from './data/weapons';

export interface ShieldTier {
  label: string;
  shortLabel: string;
  hp: number;
  color: string;
}

export const SHIELD_TIERS: ShieldTier[] = [
  { label: 'White (50)', shortLabel: 'White', hp: 150, color: '#dee2e6' },
  { label: 'Purple (100)', shortLabel: 'Purple', hp: 200, color: '#b388ff' },
  { label: 'Red (125)', shortLabel: 'Red', hp: 225, color: '#ef476f' }
];

export function damagePerShot(w: Weapon): number {
  return w.damage * (w.pellets ?? 1);
}

export function damagePerSecond(w: Weapon): number {
  return Math.round((damagePerShot(w) * w.fireRate) / 60);
}

export function damagePerMag(w: Weapon): number {
  return damagePerShot(w) * w.magSize;
}

export function shotsToKill(w: Weapon, hp: number): number {
  return Math.ceil(hp / damagePerShot(w));
}

/** Time in seconds to drop a target with `hp` HP, ignoring travel/reaction time. */
export function timeToKill(w: Weapon, hp: number): number {
  const shots = shotsToKill(w, hp);
  if (shots <= 1) return 0;
  const interval = 60 / w.fireRate;
  return (shots - 1) * interval;
}

export interface RosterRanges {
  damage: { min: number; max: number };
  fireRate: { min: number; max: number };
  magSize: { min: number; max: number };
  dps: { min: number; max: number };
}

export function rosterRanges(): RosterRanges {
  const dmg = weapons.map(damagePerShot);
  const dps = weapons.map(damagePerSecond);
  const rpm = weapons.map((w) => w.fireRate);
  const mag = weapons.map((w) => w.magSize);
  return {
    damage: { min: Math.min(...dmg), max: Math.max(...dmg) },
    fireRate: { min: Math.min(...rpm), max: Math.max(...rpm) },
    magSize: { min: Math.min(...mag), max: Math.max(...mag) },
    dps: { min: Math.min(...dps), max: Math.max(...dps) }
  };
}
