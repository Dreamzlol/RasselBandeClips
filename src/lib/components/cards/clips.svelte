<script lang="ts">
	import { onMount } from 'svelte'
	import axios from 'axios'
	import { Play } from 'lucide-svelte'
	import Popup from '$lib/components/popup/popup.svelte'
	import { getLocalTimeZone } from '@internationalized/date'
	import type { DateRange } from 'bits-ui'

	export let id: string
	export let clipCount: string = '3'
	export let username: string | null = null
	export let dateRange: DateRange | null = null

	$: clipCount, getClipsBroadcasterId(id)

	type Clip = {
		slug: string
		embedUrl: string
		title?: string
		views: number
		date: string
		thumbnail: string
	}

	let clips: Clip[] = []
	let selectedClip: Clip | null = null
	let isPopupOpen = false

	const token = 'b1gdecz3mue2drfgap90exvisf0dsc'
	const clientId = '03c7zjksu4tdubv343mddpahollgyg'

	async function getClipsBroadcasterId(id: string) {
		const startDate = dateRange?.start?.toDate(getLocalTimeZone()).toISOString()
		const endDate = dateRange?.end?.toDate(getLocalTimeZone()).toISOString()
		const url = dateRange
			? `https://api.twitch.tv/helix/clips?broadcaster_id=${id}&first=${clipCount}&started_at=${startDate}&ended_at=${endDate}`
			: `https://api.twitch.tv/helix/clips?broadcaster_id=${id}&first=${clipCount}`

		const headers = {
			Authorization: `Bearer ${token}`,
			'Client-Id': clientId
		}

		try {
			const response = await axios.get(url, { headers })
			if (response.data.data.length === 0) {
				console.error('No clips found')
				return
			}
			clips = response.data.data.map((clip) => ({
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

	onMount(() => {
		getClipsBroadcasterId(id)
	})

	$: if (dateRange) {
		getClipsBroadcasterId(id)
	}
</script>

<div class="flex items-start justify-start pt-14 py-8">
	{#if username}
		<h2 class="text-3xl font-bold text-white">{username}</h2>
	{/if}
</div>
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
	<Popup title={selectedClip.title} embedUrl={selectedClip.embedUrl} onClose={closePopup} />
{/if}
