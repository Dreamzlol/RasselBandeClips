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
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
		role="dialog"
		aria-modal="true"
		aria-labelledby="popupTitle"
	>
		<h2 class="absolute top-0 z-50 mt-8 p-8 text-4xl text-white">
			{title}
		</h2>
		<button
			class="absolute right-0 top-0 z-50 p-8 opacity-40 transition-all duration-300 hover:rotate-90 hover:opacity-100"
			on:click={onClose}
			on:keydown={handleKeyDown}
		>
			<X class="h-14 w-14 text-white" />
		</button>
		<div
			class="fixed z-50 flex aspect-auto h-[70%] w-[70%] items-center justify-center p-2 align-middle text-white"
		>
			<iframe
				src={embedUrl + '&parent=example.com&parent=localhost'}
				{title}
				height="100%"
				width="100%"
				allowfullscreen
				class="h-full w-full"
			></iframe>
		</div>
	</div>
{/if}
