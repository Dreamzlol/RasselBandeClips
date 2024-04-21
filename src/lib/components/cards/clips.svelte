<script lang="ts">
	import { onMount } from 'svelte'
	import axios from 'axios'
	import { Play } from 'lucide-svelte'
	import Popup from '$lib/components/popup/popup.svelte'

	export let id: string
	export let username: string

	type Clip = {
		slug: string
		embedUrl: string
		title: string
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
		const url = `https://api.twitch.tv/helix/clips?broadcaster_id=${id}&first=3`
		const headers = {
			Authorization: `Bearer ${token}`,
			'Client-Id': clientId
		}

		try {
			const response = await axios.get(url, { headers })
			console.log(response)
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
</script>

<div class="flex items-start justify-start pt-14">
	<h2 class="text-left text-3xl font-bold text-white">{username}</h2>
</div>
<div class="flex gap-4 pt-8">
	{#each clips as clip}
		<div class="relative overflow-hidden">
			<button
				class="relative flex w-full cursor-pointer items-center justify-center border-none bg-transparent p-0 focus:outline-none"
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
				<p class="text-sm text-gray-500">Aufrufe: {clip.views}</p>
				<p class="text-sm text-gray-500">Datum: {new Date(clip.date).toLocaleDateString()}</p>
			</div>
		</div>
	{/each}
</div>

{#if isPopupOpen && selectedClip}
	<Popup title={selectedClip.title} embedUrl={selectedClip.embedUrl} onClose={closePopup} />
{/if}
