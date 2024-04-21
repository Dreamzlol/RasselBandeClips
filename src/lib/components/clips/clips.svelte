<script lang="ts">
	import { onMount } from 'svelte'
	import axios from 'axios'

	let clips: { slug: string; embedUrl: string }[] = []

	const token = 'b1gdecz3mue2drfgap90exvisf0dsc'
	const clientId = '03c7zjksu4tdubv343mddpahollgyg'

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
		const broadcasterId = '529112648' // Replace with actual broadcaster ID
		getClipsByBroadcaster(broadcasterId)
	})
</script>

{#each clips as clip}
	<iframe
		title={clip.slug}
		src={clip.embedUrl + '&parent=example.com&parent=localhost'}
		height="360"
		width="640"
		allowfullscreen
	></iframe>
{/each}
