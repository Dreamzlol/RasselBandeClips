<script lang="ts">
	import type { DateRange } from 'bits-ui'

	import { onMount } from 'svelte'
	import { Play } from 'lucide-svelte'
	import Popup from '$lib/components/popup/popup.svelte'
	import { env } from '$env/dynamic/public'
	import axios from 'axios'
	import type { Clip, TwitchClip } from '$lib/types'

	export let id: string
	export let clipCount: string = '3'
	export let userName: string | null = null
	export let dateRange: DateRange | null = null

	let clips: Clip[] = []
	let selectedClip: Clip | null = null
	let isPopupOpen = false

	const fetchClips = async () => {
		try {
			const response = await axios.get('https://api.twitch.tv/helix/clips', {
				params: {
					broadcaster_id: id,
					first: clipCount
				},
				headers: {
					'Client-ID': env.PUBLIC_TWITCH_CLIENT_ID,
					Authorization: `Bearer ${env.PUBLIC_TWITCH_ACCESS_TOKEN}`
				}
			})

			clips = response.data.data.map((clip: TwitchClip) => ({
				slug: clip.id,
				embedUrl: clip.embed_url,
				title: clip.title,
				views: clip.view_count,
				date: clip.created_at,
				thumbnail: clip.thumbnail_url
			}))
		} catch (error) {
			console.error('Error fetching clips:', error)
		}
	}

	const openPopup = (clip: Clip) => {
		selectedClip = clip
		isPopupOpen = true
	}

	const closePopup = () => {
		isPopupOpen = false
	}

	onMount(fetchClips)

	$: if (dateRange) {
		fetchClips()
	}
</script>

{#if userName}
	<h2 class="py-8 pt-14 text-3xl font-bold text-white">{userName}</h2>
{/if}

<div class="grid grid-cols-2 gap-4 gap-x-8 gap-y-8 md:grid-cols-3">
	{#each clips as clip}
		<div class="relative w-full overflow-hidden">
			<button
				class="relative flex w-full items-center justify-center bg-transparent p-0 focus:outline-none"
				aria-label="Open video popup for {clip.title}"
				on:click={() => openPopup(clip)}
			>
				<img class="h-48 w-full object-cover" src={clip.thumbnail} alt={clip.title} />
				<div class="absolute inset-0 flex items-center justify-center">
					<Play fill="#9147ff" class="h-16 w-16 text-transparent transition-all hover:scale-110" />
				</div>
			</button>
			<div class="pt-2">
				<h3 class="font-medium text-white">{clip.title}</h3>
				<p class="text-sm text-gray-500">Views: {clip.views}</p>
				<p class="text-sm text-gray-500">Date: {new Date(clip.date).toLocaleDateString()}</p>
			</div>
		</div>
	{/each}
</div>

{#if isPopupOpen && selectedClip}
	<Popup title={selectedClip.title} embedUrl={selectedClip.embedUrl} on:close={closePopup}>
		<div class="aspect-w-16 aspect-h-9">
			<iframe
				src={selectedClip.embedUrl}
				title={selectedClip.title}
				frameborder="0"
				allowfullscreen
				class="h-full w-full"
			></iframe>
		</div>
	</Popup>
{/if}