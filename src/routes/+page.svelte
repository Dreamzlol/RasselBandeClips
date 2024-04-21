<script lang="ts">
	import { reveal } from 'svelte-reveal'
	import Navigation from '$lib/components/navigation/navigation.svelte'
	import { Button } from '$lib/components/ui/button'
	import Footer from '$lib/components/footer/footer.svelte'
	import Streamer from '$lib/components/card/streamer.svelte'
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

<div class="container flex flex-col self-center">
	<div
		class="flex h-screen flex-col items-center justify-center"
		use:reveal={{ duration: 700, reset: true }}
	>
		<div class="relative px-6 pt-14 lg:px-8">
			<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div class="text-center">
					<h1
						class="bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
					>
						Die Rasselbande<br />Clips of the Month!
					</h1>
					<p class="pt-4 text-gray-400">
						Die besten Clips der letzten Monate, von heute und aller Zeiten.
					</p>
					<div class="mt-10 flex items-center justify-center">
						<Button on:click={scrollToClipsOfTheMonth}>Lets go!</Button>
					</div>
				</div>
			</div>
		</div>

		<Arrow class="animate-bounce self-center fill-purple-500" on:click={scrollToClipsOfTheMonth} />
	</div>

	<div class="flex h-screen flex-col items-center justify-center" id="clipsOfTheMonth">
		<div class="flex items-center justify-center" use:reveal={{ duration: 700, reset: true }}>
			<h2
				class="bg-gradient-to-t from-cyan-600 to-blue-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl"
			>
				Clips of the Month
			</h2>
		</div>
		<div
			class="flex flex-col items-center justify-center pt-14 md:pt-28"
			use:reveal={{ duration: 700, reset: true }}
		>
			<div class="flex flex-wrap justify-center gap-8 p-4">
				<Streamer
					link="/knirpz"
					avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/4fd0f679-952e-4ff4-a725-fbdb3bff574f-profile_image-70x70.png"
					avatarAlt="knirpz"
					userName="Knirpz"
					gradientFrom="from-yellow-600"
					gradientTo="to-yellow-200"
				/>

				<Streamer
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
			use:reveal={{ duration: 700, reset: true }}
		>
			<div class="flex flex-wrap justify-center gap-8 p-4">
				<Streamer
					link="/daefoxi"
					avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/816f9be9-b34d-44d9-8d89-49b84b669201-profile_image-70x70.png"
					avatarAlt="daefoxi"
					userName="daefoxi"
					gradientFrom="from-pink-600"
					gradientTo="to-pink-200"
				/>

				<div class="absolute flex items-center justify-center pt-14 align-middle md:pt-2">
					<Heart class="h-[20%] w-[20%]" />
				</div>

				<Streamer
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
			use:reveal={{ duration: 700, reset: true }}
		>
			<div class="flex flex-wrap justify-center gap-8 p-4">
				<Streamer
					link="/einsebastian"
					avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/1def2d40-4495-4f55-812c-04978231b6f2-profile_image-70x70.png"
					avatarAlt="einsebastian"
					userName="EinSebastian"
					gradientFrom="from-red-600"
					gradientTo="to-red-200"
				/>

				<Streamer
					link="/mysteryblue"
					avatarSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/93d0fa70-49e6-4bdd-b0ef-1a1d12a74116-profile_image-70x70.png"
					avatarAlt="mysteryblue"
					userName="MysteryBlue"
					gradientFrom="from-green-600"
					gradientTo="to-green-200"
				/>
			</div>
		</div>
	</div>

	<div
		class="flex h-screen flex-col items-center justify-center"
		use:reveal={{ duration: 700, reset: true }}
	>
		<div class="relative flex items-center justify-center">
			<h2
				class="bg-gradient-to-t from-yellow-700 to-yellow-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl"
			>
				Hall of Fame
			</h2>
			<Crown
				class="absolute right-0 top-0 -mt-6 mr-4 flex h-10 w-10 items-end justify-end md:-mt-10 md:mr-6 md:h-16 md:w-16"
			/>
		</div>
	</div>
</div>

<Footer />
