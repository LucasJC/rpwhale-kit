<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="container">
	<Header />
	<slot />
</div>
<Footer />
