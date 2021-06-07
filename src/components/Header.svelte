<script lang="ts">
	import { page } from '$app/stores';
	import { nightMode } from '../domain/night-mode';
	import NightModeToggle from './NightModeToggle.svelte';
	let isMenuActive = false;
</script>

<section class="hero">
	<nav class="navbar hero-body" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<div class="column">
				<p class="title">
					RP Whale <span class:desaturated={$nightMode}>🐳</span>
				</p>
				<p class="subtitle">
					Unofficial staking calculator utility for <a href="https://rplanet.io" target="_blank"
						>RPlanet</a
					>.
				</p>
			</div>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				class:is-active={isMenuActive}
				on:click={() => (isMenuActive = !isMenuActive)}
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>
		<div class="navbar-menu" class:is-active={isMenuActive}>
			<div class="navbar-start">
				<!-- navbar items -->
			</div>

			<div class="navbar-end">
				<a class="navbar-item" class:is-active={$page.path === '/'} href="/"> Home </a>
				<a class="navbar-item" class:is-active={$page.path === '/donations'} href="/donations"> Donations </a>
				<a class="navbar-item" class:is-active={$page.path === '/about'} href="/about"> About </a>
				<div class="navbar-item">
					<NightModeToggle />
				</div>
			</div>
		</div>
	</nav>
</section>
