<script lang="ts">
	export let href: string

	type $$Props = {
		href: string
		class?: string
	}

	let className: $$Props['class'] = undefined
	export { className as class }

	const defaultClasses =
		'border-b border-transparent text-sm text-white transition duration-200 ease-in hover:border-white'

	function cn(...classes: (string | undefined | false)[]) {
		return classes.filter(Boolean).join(' ')
	}
</script>

<a {href} class={cn(defaultClasses, className)} on:click|preventDefault>
	<slot />
</a>
