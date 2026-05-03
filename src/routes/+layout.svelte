<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<header class="site-header">
  <a class="brand" href="/">ApexWeaponStats</a>
  <nav class="nav">
    <a href="/weaponstats">Weapons</a>
    <a href="/contactme">Contact</a>
  </nav>
</header>

<main class="site-main">
  {@render children()}
</main>

<footer class="site-footer">
  <small>Not affiliated with Respawn or EA. Apex Legends is a trademark of EA.</small>
</footer>
