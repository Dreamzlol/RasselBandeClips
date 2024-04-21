<script lang="ts">
	import { reveal } from 'svelte-reveal'
	import Navigation from '$lib/components/navigation/navigation.svelte'
	import { Button } from '$lib/components/ui/button'
	import Footer from '$lib/components/footer/footer.svelte'
	import StreamerCard from '$lib/components/cards/streamer.svelte'
	import ClipsCard from '$lib/components/cards/clips.svelte'
	import Arrow from '$lib/components/icons/arrow.svelte'
	import Heart from '$lib/components/icons/heart.svelte'
	import Crown from '$lib/components/icons/crown.svelte'

	const scrollToClipsOfTheMonth = () => {
		const section = document.getElementById('clipsOfTheMonth')
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}
</script>

<Navigation />

<div class="container flex flex-col">
	<div
		class="flex h-screen flex-col items-center justify-center"
		use:reveal={{ duration: 500, reset: true }}
	>
		<div class="py-32 sm:py-48 lg:py-56">
			<h1
				class="bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-6xl"
			>
				Die Rasselbande<br />Clips of the Month!
			</h1>
			<p class="md:text-md pt-4 text-center text-sm text-gray-400">
				Die besten Clips der letzten Monate, von heute und aller Zeiten.
			</p>
			<div class="mt-10 flex items-center justify-center">
				<Button on:click={scrollToClipsOfTheMonth}>Lets go!</Button>
			</div>
		</div>

		<Arrow
			class="h-10 w-10 animate-bounce self-center fill-purple-500"
			on:click={scrollToClipsOfTheMonth}
		/>
	</div>
	<div class="flex h-screen flex-col items-center justify-center" id="clipsOfTheMonth">
		<div
			class="flex flex-col items-center justify-center"
			use:reveal={{ duration: 500, reset: true }}
		>
			<h1
				class="bg-gradient-to-t from-cyan-600 to-blue-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl"
			>
				Clips of the Month
			</h1>
			<p class="md:text-md pt-4 text-center text-sm text-gray-400">
				Die besten Clips der letzten Monate, von heute und aller Zeiten.
			</p>
		</div>
		<div
			class="flex flex-col items-center justify-center pt-14 md:pt-28"
			use:reveal={{ duration: 500, reset: true }}
		>
			<div class="flex flex-wrap justify-center gap-8 p-4">
				<StreamerCard
					link="/knirpz"
					avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/4fd0f679-952e-4ff4-a725-fbdb3bff574f-profile_image-70x70.png"
					avatarAlt="knirpz"
					userName="Knirpz"
					gradientFrom="from-yellow-600"
					gradientTo="to-yellow-200"
				/>
				<StreamerCard
					link="/ronnyberger"
					avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/029c4ead-9a5d-4c23-ad93-41e6b6326dbb-profile_image-70x70.png"
					avatarAlt="ronnyberger"
					userName="RonnyBerger"
					gradientFrom="from-purple-600"
					gradientTo="to-purple-200"
				/>
			</div>
		</div>
		<div
			class="flex flex-col items-center justify-center"
			use:reveal={{ duration: 500, reset: true }}
		>
			<div class="flex flex-wrap justify-center gap-8 p-4">
				<StreamerCard
					link="/daefoxi"
					avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/816f9be9-b34d-44d9-8d89-49b84b669201-profile_image-70x70.png"
					avatarAlt="daefoxi"
					userName="daefoxi"
					gradientFrom="from-pink-600"
					gradientTo="to-pink-200"
				/>
				<div class="absolute mt-14 flex items-center justify-center align-middle md:mt-2">
					<Heart class="h-[20%] w-[20%]" />
				</div>
				<StreamerCard
					link="/zeusspezial"
					avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/39a738f3-ca86-4478-96ce-5a2e92ead87b-profile_image-70x70.png"
					avatarAlt="zeusspezial"
					userName="ZeusSpezial"
					gradientFrom="from-blue-600"
					gradientTo="to-blue-200"
				/>
			</div>
		</div>
		<div
			class="flex flex-col items-center justify-center"
			use:reveal={{ duration: 500, reset: true }}
		>
			<div class="flex flex-wrap justify-center gap-8 p-4">
				<StreamerCard
					link="/einsebastian"
					avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/1def2d40-4495-4f55-812c-04978231b6f2-profile_image-70x70.png"
					avatarAlt="einsebastian"
					userName="EinSebastian"
					gradientFrom="from-red-600"
					gradientTo="to-red-200"
				/>
				<StreamerCard
					link="/mysteryblue"
					avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/93d0fa70-49e6-4bdd-b0ef-1a1d12a74116-profile_image-70x70.png"
					avatarAlt="mystery_blue"
					userName="Mystery_Blue"
					gradientFrom="from-green-600"
					gradientTo="to-green-200"
				/>
			</div>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center">
		<div class="relative flex items-center justify-center">
			<h2
				class="bg-gradient-to-t from-yellow-700 to-yellow-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl"
				use:reveal={{ duration: 500, reset: true }}
			>
				Hall of Fame
			</h2>
			<Crown
				class="absolute right-0 top-0 -mt-6 mr-4 flex h-10 w-10 items-end justify-end md:-mt-10 md:mr-6 md:h-16 md:w-16"
			/>
		</div>
		<div class="flex flex-col">
			<ClipsCard username="Knirpz" id="529112648" />
			<ClipsCard username="RonnyBerger" id="531019578" />
			<ClipsCard username="daefoxi" id="451635946" />
			<ClipsCard username="ZeusSpezial" id="147118536" />
			<ClipsCard username="EinSebastian" id="427135151" />
			<ClipsCard username="Mystery_Blue" id="90631404" />
		</div>
	</div>
</div>

<Footer />
