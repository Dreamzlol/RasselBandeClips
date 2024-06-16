<script lang="ts">
	import type { PopupEvents } from '$lib/types'
	import { X } from 'lucide-svelte'
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'

	export let embedUrl: string
	export let title: string | undefined

	const isDevelopment = process.env.NODE_ENV === 'development'
	$: iframeSrc = `${embedUrl}&parent=${isDevelopment ? 'localhost' : 'rassel-bande-clips.vercel.app'}`

	const dispatch = createEventDispatcher<PopupEvents>()

	const handleClose = () => {
		dispatch('close')
		removeNoScroll()
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			handleClose()
		}
	}

	const addNoScroll = () => document.body.classList.add('overflow-hidden')
	const removeNoScroll = () => document.body.classList.remove('overflow-hidden')

	onMount(() => {
		addNoScroll()
	})

	onDestroy(() => {
		removeNoScroll()
	})
</script>

{#if embedUrl}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl"
		aria-label="Close"
		role="button"
		tabindex="0"
		on:click={handleClose}
		on:keydown={handleKeyDown}
	>
		<button
			class="absolute right-0 top-0 z-50 p-8 transition duration-300 hover:rotate-90"
			aria-label="Close"
			tabindex="0"
			type="button"
			on:click={handleClose}
			on:keydown={handleKeyDown}
		>
			<X class="h-10 w-10 text-black" />
		</button>
		<h2 class="absolute top-20 z-50 text-xl font-bold text-white md:text-6xl text-stroke">{title}</h2>
		<div class="fixed z-50 flex h-1/2 w-1/2 items-center justify-center p-2 text-white">
			<iframe class="aspect-video w-full border-black  border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]" allowfullscreen src={iframeSrc} {title}></iframe>
		</div>
	</div>
{/if}

<style>
	.text-stroke {
		text-shadow: 3px 3px 0px black;
		-webkit-text-stroke: 2px black;
	}
</style>