<script lang="ts">
	import type { PageData } from '../../../routes/$types'
	import * as Accordion from '$lib/components/ui/accordion/index.js'

	export let data: PageData
	export let show: boolean
	export let onLinkClick: () => void
</script>

<div
	class:translate-x-0={show}
	class:translate-x-full={!show}
	class="fixed inset-y-0 right-0 z-50 w-full border-l border-white/20 bg-[#070b12] backdrop-blur transition-transform duration-300 ease-in-out"
>
	<div class="flex h-full flex-col items-center justify-center">
		<div class="flex flex-col items-center justify-center gap-4">
			<a
				class="flex h-12 w-full items-center justify-center pr-4 text-2xl font-medium text-white"
				href="/"
				on:click={onLinkClick}
			>
				Startseite
			</a>
			<Accordion.Root class="w-full text-white">
				<Accordion.Item value="item-1" class="border-none">
					<Accordion.Trigger class="flex h-12 w-full items-center justify-center text-2xl">
						Clips of the Month
					</Accordion.Trigger>
					<Accordion.Content class="w-full">
						{#each data.broadcasters as broadcaster}
							<a href={broadcaster.linkClips} class="block py-2 text-white" on:click={onLinkClick}
								>{broadcaster.userName}</a
							>
						{/each}
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
			<Accordion.Root class="w-full text-white">
				<Accordion.Item value="item-1" class="border-none">
					<Accordion.Trigger class="flex h-12 w-full items-center justify-center text-2xl">
						Hall of Fame
					</Accordion.Trigger>
					<Accordion.Content class="w-full">
						{#each data.broadcasters as broadcaster}
							<a href={broadcaster.linkHall} class="block py-2 text-white" on:click={onLinkClick}
								>{broadcaster.userName}</a
							>
						{/each}
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</div>
	</div>
</div>
