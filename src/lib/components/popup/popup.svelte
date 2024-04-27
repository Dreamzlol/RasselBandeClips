<script lang="ts">
	import { X } from 'lucide-svelte'
	import { createEventDispatcher } from 'svelte'

	export let embedUrl: string
	export let title: string

	const dispatch = createEventDispatcher()

	const handleClose = () => {
		dispatch('close')
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			handleClose()
		}
	}

	$: iframeSrc = `${embedUrl}&parent=example.com&parent=localhost`
</script>

{#if embedUrl}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
		role="button"
		tabindex="0"
		on:click={handleClose}
		on:keydown={handleKeyDown}
		aria-label="Close"
	>
		<h2 class="absolute top-0 z-50 mt-8 p-8 text-xl text-white md:text-4xl">{title}</h2>
		<button
			class="absolute right-0 top-0 z-50 p-8 transition duration-300 hover:rotate-90"
			on:click={handleClose}
			on:keydown={handleKeyDown}
			aria-label="Close"
			tabindex="0"
		>
			<X class="h-10 w-10 text-white" />
		</button>
		<div class="fixed z-50 flex h-1/3 w-11/12 items-center justify-center p-2 text-white md:h-2/3 md:w-2/3">
			<iframe src={iframeSrc} {title} allowfullscreen class="h-full w-full"></iframe>
		</div>
	</div>
{/if}
