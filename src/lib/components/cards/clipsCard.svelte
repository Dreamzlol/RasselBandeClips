<script lang="ts">
	import type { Clip, DateRange } from '$lib/types'
	import Popup from '$lib/components/popup/popup.svelte'
	import { Play } from 'lucide-svelte'
	import { onMount } from 'svelte'
	import { getClips } from '../../../routes/api/getClips'

	export let id: string
	export let clipCount: string = '3'
	export let userName: string
	export let dateRange: DateRange

	let clips: Clip[] = []
	let selectedClip: Clip | null = null
	let isPopupOpen = false

	const updateClips = async () => {
		try {
			clips = await getClips(id, clipCount, dateRange)
		} catch (error) {
			console.error('Failed to update clips:', error)
		}
	}

	const openPopup = (clip: Clip) => {
		selectedClip = clip
		isPopupOpen = true
	}

	const closePopup = () => {
		isPopupOpen = false
	}

	onMount(updateClips)
</script>

{#if userName}
	<h2 class="py-8 pt-14 text-4xl font-bold text-white">{userName}</h2>
{/if}

<div class="grid grid-cols-2 gap-4 gap-x-8 gap-y-8 md:grid-cols-3">
	{#each clips as clip (clip.slug)}
		<div class="relative overflow-hidden">
			<button
				class="relative flex items-center justify-center bg-transparent p-0 focus:outline-none"
				aria-label={clip.title}
				type="button"
				on:click={() => openPopup(clip)}
			>
				<img class="object-cover" alt={clip.title} src={clip.thumbnail} />
				<div class="absolute inset-0 flex items-center justify-center">
					<Play class="h-14 w-14 text-transparent transition-all hover:scale-110 md:h-24 md:w-24" fill="#9147ff" />
				</div>
			</button>
			<div class="pt-2">
				<h3 class="font-medium text-white">{clip.title}</h3>
				<p class="text-sm font-normal text-gray-500">Views: {clip.views}</p>
				<p class="text-sm font-normal text-gray-500">Datum: {new Date(clip.date).toLocaleDateString('de-DE')}</p>
			</div>
		</div>
	{/each}
</div>

{#if isPopupOpen && selectedClip}
	<Popup embedUrl={selectedClip.embedUrl} title={selectedClip.title} on:close={closePopup}>
		<div class="aspect-w-16 aspect-h-9">
			<iframe
				class="h-full w-full"
				allowfullscreen
				frameborder="0"
				src={selectedClip.embedUrl}
				title={selectedClip.title}
			></iframe>
		</div>
	</Popup>
{/if}
