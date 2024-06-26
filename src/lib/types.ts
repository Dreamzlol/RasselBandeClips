export interface TwitchClip {
	id: string
	embed_url: string
	title: string
	view_count: number
	created_at: string
	thumbnail_url: string
}

export type Clip = {
	slug: string
	embedUrl: string
	title?: string
	views: number
	date: string
	thumbnail: string
}

export interface Broadcaster {
	userName: string
	broadcasterId: string
	avatarSrc: string
	avatarAlt: string
	gradientClass: string
	link: string
}

export interface PopupEvents {
	close: void
}

export type DateRange = {
	start: Date | string
	end: Date | string
}
