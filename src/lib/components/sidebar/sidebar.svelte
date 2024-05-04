<script lang="ts">
	import type { PopupEvents } from '$lib/types'
	import type { PageData } from '../../../routes/$types'
	import * as Accordion from '$lib/components/ui/accordion/index.js'
	import { createEventDispatcher } from 'svelte'

	export let data: PageData
	export let show: boolean

	const dispatch = createEventDispatcher<PopupEvents>()

	const handleLinkClick = () => {
		dispatch('close')
	}
</script>

<div
	class="fixed inset-y-0 right-0 z-50 w-full border-l border-white/20 bg-[#070b12] backdrop-blur transition-transform duration-300 ease-in-out"
	class:translate-x-0={show}
	class:translate-x-full={!show}
>
	<div class="flex h-full flex-col items-center justify-center">
		<div class="flex flex-col items-center justify-center gap-4">
			<a
				class="flex h-12 w-full items-center justify-center pr-4 text-2xl font-medium text-white"
				href="/"
				on:click={handleLinkClick}
			>
				Startseite
			</a>

			<Accordion.Root class="w-full text-white">
				<Accordion.Item class="border-none" value="item-1">
					<Accordion.Trigger class="flex h-12 w-full items-center justify-center text-2xl">
						Clips of the Month
					</Accordion.Trigger>
					<Accordion.Content class="w-full">
						{#each data.broadcasters as broadcaster (broadcaster.broadcasterId)}
							<a class="block py-2 text-white" href={broadcaster.linkClips} on:click={handleLinkClick}>
								{broadcaster.userName}
							</a>
						{/each}
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>

			<Accordion.Root class="w-full text-white">
				<Accordion.Item class="border-none" value="item-1">
					<Accordion.Trigger class="flex h-12 w-full items-center justify-center text-2xl font-normal">
						Hall of Fame
					</Accordion.Trigger>
					<Accordion.Content class="w-full">
						{#each data.broadcasters as broadcaster (broadcaster.broadcasterId)}
							<a class="block py-2 font-normal text-white" href={broadcaster.linkHall} on:click={handleLinkClick}>
								{broadcaster.userName}
							</a>
						{/each}
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</div>
	</div>
</div>
