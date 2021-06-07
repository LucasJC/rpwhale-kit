import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: vercel(),
		ssr: false,
		prerender: {
			enabled: false
		},
		vite: {
			optimizeDeps: {
				include: ['atomicmarket']
			}
		}
	}
};

export default config;
