<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte'
	import * as Accordion from '$lib/components/ui/accordion/index.js'

	export let show: boolean
</script>

<div
	class:translate-x-0={show}
	class:translate-x-full={!show}
	class="fixed inset-y-0 right-0 z-50  w-full border-l border-white/20 bg-[#070b12] backdrop-blur transition-transform duration-300 ease-in-out"
>
	<div class="flex h-full flex-col items-center justify-center ">
		<div class="flex flex-col items-center justify-center gap-4 align-middle">
			<Link
				class="flex h-12 w-full items-center justify-center pr-4 text-2xl font-medium text-white"
				href="/startpage"
			>
				Startseite
			</Link>
			<Accordion.Root class="w-full  text-white">
				<Accordion.Item value="item-1" class="border-none">
					<Accordion.Trigger class="flex h-12 w-full items-center justify-center text-2xl">
						Rasselbande
					</Accordion.Trigger>
					<Accordion.Content class="w-full">
						<a href="/knirpz" class="block py-2 text-white">Knirpz</a>
						<a href="/ronnyberger" class="block py-2 text-white">RonnyBerger</a>
						<a href="/daefoxi" class="block py-2 text-white">daefoxi</a>
						<a href="/zeusspezial" class="block py-2 text-white">ZeusSpezial</a>
						<a href="/einsebastian" class="block py-2 text-white">EinSebastian</a>
						<a href="/mysteryblue" class="block py-2 text-white">MysteryBlue</a>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
			<Accordion.Root class="w-full text-white">
				<Accordion.Item value="item-1" class="border-none">
					<Accordion.Trigger class="flex h-12 w-full items-center justify-center text-2xl">
						Hall of Fame
					</Accordion.Trigger>
					<Accordion.Content class="w-full">
						<a href="/knirpz" class="block py-2 text-white">Knirpz</a>
						<a href="/ronnyberger" class="block py-2 text-white">RonnyBerger</a>
						<a href="/daefoxi" class="block py-2 text-white">daefoxi</a>
						<a href="/zeusspezial" class="block py-2 text-white">ZeusSpezial</a>
						<a href="/einsebastian" class="block py-2 text-white">EinSebastian</a>
						<a href="/mysteryblue" class="block py-2 text-white">MysteryBlue</a>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</div>
	</div>
</div>
