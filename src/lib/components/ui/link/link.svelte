<script lang="ts">
	export let href: string
</script>

<a {href} class="text-sm text-white transition duration-200 ease-in" {...$$restProps}>
	<slot />
</a>
