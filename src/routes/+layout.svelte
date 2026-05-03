<script lang="ts">
  import '../app.css';
  import { page } from '$app/state';

  let { children } = $props();

  const links = [
    { href: '/weaponstats', label: 'Weapons' },
    { href: '/compare', label: 'Compare' },
    { href: '/contactme', label: 'Contact' }
  ];

  function isActive(href: string) {
    if (href === '/') return page.url.pathname === '/';
    return page.url.pathname.startsWith(href);
  }
</script>

<header class="site-header">
  <a class="brand" href="/">ApexWeaponStats</a>
  <nav class="nav" aria-label="Primary">
    {#each links as link (link.href)}
      <a href={link.href} class:is-active={isActive(link.href)}>{link.label}</a>
    {/each}
  </nav>
</header>

<main class="site-main">
  {@render children()}
</main>

<footer class="site-footer">
  <small>Not affiliated with Respawn or EA. Apex Legends is a trademark of EA.</small>
</footer>
