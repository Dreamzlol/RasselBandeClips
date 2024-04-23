<script lang="ts">
	import { X } from 'lucide-svelte'

	export let embedUrl: string
	export let title: string
	export let onClose: () => void

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			onClose()
		}
	}
</script>

{#if embedUrl}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
		role="button"
		tabindex="0"
		on:click={onClose}
		on:keydown={handleKeyDown}
		aria-label="Close popup"
	>
		<h2 class="absolute top-0 z-50 mt-8 p-8 text-xl text-white md:text-4xl">{title}</h2>
		<button
			class="absolute right-0 top-0 z-50 p-8 transition duration-300 hover:rotate-90"
			on:click={onClose}
			on:keydown={handleKeyDown}
			aria-label="Close popup"
			tabindex="0"
		>
			<X class="h-10 w-10 text-white" />
		</button>
		<div class="fixed z-50 flex h-1/3 w-11/12 items-center justify-center p-2 text-white md:h-2/3 md:w-2/3">
			<iframe src={`${embedUrl}&parent=example.com&parent=localhost`} {title} allowfullscreen class="h-full w-full"
			></iframe>
		</div>
	</div>
{/if}
