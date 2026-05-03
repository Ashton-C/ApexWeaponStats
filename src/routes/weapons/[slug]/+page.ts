import { error } from '@sveltejs/kit';
import { getWeapon, weapons } from '$lib/data/weapons';
import type { PageLoad } from './$types';

export const prerender = true;

export const entries = () => weapons.map((w) => ({ slug: w.slug }));

export const load: PageLoad = ({ params }) => {
  const weapon = getWeapon(params.slug);
  if (!weapon) error(404, `Weapon "${params.slug}" not found`);
  return { weapon };
};
