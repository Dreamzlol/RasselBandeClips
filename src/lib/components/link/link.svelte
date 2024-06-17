<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	export let href: string
	export let className: string
</script>

<a {href} {...$$restProps} class={twMerge(className, 'relative no-underline cursor-pointer')}>
	<slot />
	<span class="absolute bottom-0 left-1/2 h-0.5 w-0 bg-black transition-all duration-300 ease-out"></span>
</a>

<style>
	a:hover span {
		width: 100%;
		left: 0;
	}
</style>
