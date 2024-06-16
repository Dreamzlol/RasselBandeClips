import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	alias: {
		'@/*': './path/to/lib/*'
	},
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'meta-shift',
			showToggleButton: 'always',
			toggleButtonPos: 'bottom-right',
			openKey: 'enter',
			escKey: 'Escape'
		}
	}
}
export default config
