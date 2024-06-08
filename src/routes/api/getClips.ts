import type { Clip, DateRange, TwitchClip } from '$lib/types'
import { env } from '$env/dynamic/public'
import axios from 'axios'

export const getClips = async (broadcaster_id: string, clipCount: string, dateRange?: DateRange): Promise<Clip[]> => {
	const params: Record<string, string> = {
		broadcaster_id,
		first: clipCount
	}

	if (dateRange && dateRange.start && dateRange.end) {
		params.started_at = new Date(dateRange.start.toString()).toISOString()
		params.ended_at = new Date(dateRange.end.toString()).toISOString()
	}

	try {
		const response = await axios.get('https://api.twitch.tv/helix/clips', {
			params: params,
			headers: {
				'Client-ID': env.PUBLIC_TWITCH_CLIENT_ID,
				Authorization: `Bearer ${env.PUBLIC_TWITCH_ACCESS_TOKEN}`
			}
		})

		return response.data.data.map((clip: TwitchClip) => ({
			slug: clip.id,
			embedUrl: clip.embed_url,
			title: clip.title,
			views: clip.view_count,
			date: clip.created_at,
			thumbnail: clip.thumbnail_url
		}))
	} catch (error) {
		console.error('Error fetching clips:', error)
		throw new Error('Failed to fetch clips')
	}
}
