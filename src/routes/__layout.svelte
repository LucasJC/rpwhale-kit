<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
</script>

<main>
  <div class="container">
    <Header />
    <slot />
  </div>
  <Footer />
</main>