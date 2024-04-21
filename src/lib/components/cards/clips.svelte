<script lang="ts">
	import { onMount } from 'svelte'
	import axios from 'axios'

	import { Play } from 'lucide-svelte'

	type Clip = {
		slug: string
		embedUrl: string
		title: string
		views: number
		date: string
		thumbnail: string
	}

	let clips: Clip[] = []

	const token = 'b1gdecz3mue2drfgap90exvisf0dsc'
	const clientId = '03c7zjksu4tdubv343mddpahollgyg'
	const broadcasterId = '529112648' // Replace with actual broadcaster ID

	async function getClipsByBroadcaster(broadcasterId: string) {
		const url = `https://api.twitch.tv/helix/clips?broadcaster_id=${broadcasterId}&first=3`
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

	onMount(() => {
		getClipsByBroadcaster(broadcasterId)
	})
</script>

<div class="flex gap-4 pt-14">
	{#each clips as clip}
		<div class="relative overflow-hidden text-white">
			<div class="relative">
				<img class="h-48 w-full object-cover" src={clip.thumbnail} alt={clip.title} />
				<div class="absolute inset-0 flex items-center justify-center">
					<Play fill="#9147ff" class="h-16 w-16 text-transparent transition-all hover:scale-110" />
				</div>
			</div>
			<div class="pt-2">
				<h3 class="font-bold">{clip.title}</h3>
				<p class="text-sm text-gray-500">Aufrufe: {clip.views}</p>
				<p class="text-sm text-gray-500">Datum: {new Date(clip.date).toLocaleDateString()}</p>
			</div>
		</div>
	{/each}
</div>
