/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2024: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		'svelte/no-at-html-tags': 'error',
		'svelte/no-target-blank': 'error',
		'svelte/block-lang': [
			'error',
			{
				enforceScriptPresent: true,
				script: ['ts']
			}
		],
		'svelte/button-has-type': 'error',
		'svelte/no-at-debug-tags': 'error',
		'svelte/no-ignored-unsubscribe': 'error',
		'svelte/no-immutable-reactive-statements': 'error',
		'svelte/no-inline-styles': 'error',
		'svelte/no-reactive-functions': 'error',
		'svelte/no-reactive-literals': 'error',
		'svelte/no-unused-svelte-ignore': 'error',
		'svelte/no-useless-mustaches': 'error',
		'svelte/prefer-destructured-store-props': 'error',
		'svelte/require-each-key': 'error',
		'svelte/require-event-dispatcher-types': 'error',
		'svelte/require-optimized-style-attribute': 'error',
		'svelte/require-stores-init': 'error',
		'svelte/valid-each-key': 'error'
	}
}
