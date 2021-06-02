import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const nightMode = createNightMode();

function createNightMode() {
	let enabled = 'false';
	if (browser) {
		enabled = localStorage.getItem('dark-mode') || 'false';
	}
	const { subscribe, set } = writable(enabled === 'true');
	return {
		subscribe,
		toggle: () => {
			const on = localStorage.getItem('dark-mode') || 'false';
			let darkLink = document.getElementById('dark-theme');
			if (on == 'true') {
				localStorage.setItem('dark-mode', 'false');
				if (darkLink) {
					darkLink.remove();
				}
				set(false);
			} else {
				localStorage.setItem('dark-mode', 'true');
				darkLink = document.createElement('link');
				darkLink.setAttribute('rel', 'stylesheet');
				darkLink.id = 'dark-theme';
				darkLink.setAttribute('href', 'https://unpkg.com/bulma-prefers-dark');
				document.head.appendChild(darkLink);
				set(true);
			}
		}
	};
}
