import type { Clip, DateRange, TwitchClip } from '$lib/types'
import type { ClassValue } from 'clsx'
import type { TransitionConfig } from 'svelte/transition'
import { env } from '$env/dynamic/private'
import axios from 'axios'
import { clsx } from 'clsx'
import { cubicOut } from 'svelte/easing'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

type FlyAndScaleParams = {
	y?: number
	x?: number
	start?: number
	duration?: number
}

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node)
	const transform = style.transform === 'none' ? '' : style.transform

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA
		const [minB, maxB] = scaleB

		const percentage = (valueA - minA) / (maxA - minA)
		const valueB = percentage * (maxB - minB) + minB

		return valueB
	}

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str
			return str + `${key}:${style[key]};`
		}, '')
	}

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0])
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0])
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1])

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			})
		},
		easing: cubicOut
	}
}

export async function fetchClips(broadcaster_id: string, clipCount: string, dateRange?: DateRange): Promise<Clip[]> {
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
