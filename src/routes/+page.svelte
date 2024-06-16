<script lang="ts">
	import type { PageData } from './$types'
	import BroadcasterCard from '$lib/components/cards/broadcasterCard.svelte'
	import ClipsCard from '$lib/components/cards/clipsCard.svelte'
	import Arrow from '$lib/components/icons/arrow.svelte'
	import Crown from '$lib/components/icons/crown.svelte'
	import { reveal } from 'svelte-reveal'

	export let data: PageData
</script>

<main class="container flex flex-col">
	<section class="flex h-screen flex-col items-center justify-center" use:reveal={{ duration: 500, reset: true }}>
		<div class="py-32 sm:py-48 lg:py-56">
			<h1
				class="border-2 border-black bg-[#FFA6F6] p-8 text-center text-4xl font-bold text-black shadow-[6px_6px_0px_rgba(0,0,0,1)] md:text-8xl"
			>
				Die Rasselbande<br />Clips of the Month!
			</h1>
			<p class="px-8 pt-4 text-center text-lg font-normal text-black">
				Die besten Clips der letzten Monate, von heute und aus aller Zeit.
			</p>
		</div>
		<Arrow class="h-14 w-14 animate-bounce self-center fill-black" />
	</section>

	<section id="clipsOfTheMonth" class="flex h-screen flex-col items-center justify-center">
		<div class="flex flex-col items-center justify-center" use:reveal={{ duration: 500, reset: true }}>
			<h1 class="text-4xl font-bold text-black md:text-8xl">Clips of the Month</h1>
			<p class="text-md px-8 pt-8 text-center font-normal text-black">
				Die besten Clips der letzten Monate, von heute und aus aller Zeit.
			</p>
		</div>
		<div
			class="relative flex flex-col items-center justify-center pt-14 md:pt-28"
			use:reveal={{ duration: 500, reset: true }}
		>
			<div class="grid w-full max-w-4xl grid-cols-1 gap-8 p-4 md:grid-cols-2">
				{#each data.broadcasters as broadcaster (broadcaster.broadcasterId)}
					<BroadcasterCard
						avatarAlt={broadcaster.avatarAlt}
						avatarSrc={broadcaster.avatarSrc}
						colorScheme={broadcaster.colorScheme}
						link={broadcaster.linkClips}
						userName={broadcaster.userName}
					/>
				{/each}
			</div>
		</div>
	</section>

	<section class="flex flex-col items-center justify-center">
		<div class="relative flex items-center justify-center">
			<h2 class="text-5xl font-bold text-black md:text-8xl" use:reveal={{ duration: 500, reset: true }}>
				Hall of Fame
			</h2>
			<Crown
				class="absolute right-0 top-0 -mt-6 mr-4 flex h-10 w-10 items-end justify-end md:-mt-10 md:mr-6 md:h-16 md:w-16"
			/>
		</div>
		<div class="flex flex-col items-center justify-center" use:reveal={{ duration: 500, reset: true }}>
			<p class="text-md px-8 pt-4 text-center font-normal text-black">
				Die Drei am meisten angesehenen Clips aller Zeiten.
			</p>
		</div>
		<div class="flex flex-col">
			{#each data.broadcasters as broadcaster (broadcaster.broadcasterId)}
				<ClipsCard id={broadcaster.broadcasterId} userName={broadcaster.userName} />
			{/each}
		</div>
	</section>
</main>
