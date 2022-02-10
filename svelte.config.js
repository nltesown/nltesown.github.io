import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
	},
	files: {
		assets: 'static',
		lib: 'src/lib'
	},
	paths: {
		assets: '',
		base: ''
	}
};

export default config;
