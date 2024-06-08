import type { Clip, DateRange, TwitchClip } from '$lib/types'
import { env } from '$env/dynamic/public'

export const getClips = async (broadcaster_id: string, clipCount: string, dateRange?: DateRange): Promise<Clip[]> => {
	const params: Record<string, string> = {
		broadcaster_id,
		first: clipCount
	}

	if (dateRange?.start && dateRange?.end) {
		params.started_at = dateRange.start.toString()
		params.ended_at = dateRange.end.toString()
	}

	const url = new URL('https://api.twitch.tv/helix/clips')
	url.search = new URLSearchParams(params).toString()

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Client-ID': env.PUBLIC_TWITCH_CLIENT_ID,
			Authorization: `Bearer ${env.PUBLIC_TWITCH_ACCESS_TOKEN}`
		}
	})

	if (!response.ok) {
		console.error('Error fetching clips:', response.statusText)
		return []
	}

	const data = await response.json()
	return data.data.map((clip: TwitchClip) => ({
		slug: clip.id,
		embedUrl: clip.embed_url,
		title: clip.title,
		views: clip.view_count,
		date: clip.created_at,
		thumbnail: clip.thumbnail_url
	}))
}
