<script lang="ts">
	import type { PageData } from './$types'
	import BroadcasterCard from '$lib/components/cards/broadcasterCard.svelte'
	import ClipsCard from '$lib/components/cards/clipsCard.svelte'
	import Arrow from '$lib/components/icons/arrow.svelte'
	import Crown from '$lib/components/icons/crown.svelte'
	import Heart from '$lib/components/icons/heart.svelte'
	import { reveal } from 'svelte-reveal'

	export let data: PageData
</script>

<main class="container flex flex-col">
	<section class="flex h-screen flex-col items-center justify-center" use:reveal={{ duration: 500, reset: true }}>
		<div class="py-32 sm:py-48 lg:py-56">
			<h1
				class="bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
			>
				Die Rasselbande<br />Clips of the Month!
			</h1>
			<p class="px-8 pt-4 text-center text-lg font-normal text-gray-400">
				Die besten Clips der letzten Monate, von heute und aus aller Zeit.
			</p>
		</div>
		<Arrow class="h-14 w-14 animate-bounce self-center fill-purple-500" />
	</section>

	<section id="clipsOfTheMonth" class="flex h-screen flex-col items-center justify-center">
		<div class="flex flex-col items-center justify-center" use:reveal={{ duration: 500, reset: true }}>
			<h1
				class="bg-gradient-to-t from-blue-600 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent md:text-7xl"
			>
				Clips of the Month
			</h1>
			<p class="px-8 pt-4 text-center text-lg font-normal text-gray-400">
				Die besten Clips der letzten Monate, von heute und aus aller Zeit.
			</p>
		</div>
		<div
			class="relative flex flex-col items-center justify-center pt-14 md:pt-28"
			use:reveal={{ duration: 500, reset: true }}
		>
			<Heart class="absolute h-[15%] w-[15%]" />
			<div class="grid w-full max-w-4xl grid-cols-1 gap-8 p-4 md:grid-cols-2">
				{#each data.broadcasters as broadcaster (broadcaster.broadcasterId)}
					<BroadcasterCard
						avatarAlt={broadcaster.avatarAlt}
						avatarSrc={broadcaster.avatarSrc}
						gradientClass={broadcaster.colorScheme}
						link={broadcaster.linkClips}
						userName={broadcaster.userName}
					/>
				{/each}
			</div>
		</div>
	</section>

	<section class="flex flex-col items-center justify-center">
		<div class="relative flex items-center justify-center">
			<h2
				class="bg-gradient-to-t from-yellow-700 to-yellow-200 bg-clip-text text-4xl font-bold text-transparent md:text-7xl"
				use:reveal={{ duration: 500, reset: true }}
			>
				Hall of Fame
			</h2>
			<Crown
				class="absolute right-0 top-0 -mt-6 mr-4 flex h-10 w-10 items-end justify-end md:-mt-10 md:mr-6 md:h-16 md:w-16"
			/>
		</div>
		<div class="flex flex-col items-center justify-center" use:reveal={{ duration: 500, reset: true }}>
			<p class="px-8 pt-4 text-center text-lg font-normal text-gray-400">
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
