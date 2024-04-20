<script lang="ts">
	import Navigation from '$lib/components/navigation/navigation.svelte'
	import { Button } from '$lib/components/ui/button'
	import Card from '$lib/components/ui/card/card.svelte'
	import * as Avatar from '$lib/components/ui/avatar'

	import Arrow from '$lib/components/icons/arrow.svelte'
	import Heart from '$lib/components/icons/heart.svelte'
	import Crown from '$lib/components/icons/crown.svelte'

	import { reveal } from 'svelte-reveal'

	const avatarData = {
		knirpz: {
			src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4fd0f679-952e-4ff4-a725-fbdb3bff574f-profile_image-70x70.png',
			alt: 'knirpz'
		},
		ronnyberger: {
			src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/029c4ead-9a5d-4c23-ad93-41e6b6326dbb-profile_image-70x70.png',
			alt: 'ronnyberger'
		},
		daefoxi: {
			src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/816f9be9-b34d-44d9-8d89-49b84b669201-profile_image-70x70.png',
			alt: 'daefoxi'
		},
		zeusspezial: {
			src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/39a738f3-ca86-4478-96ce-5a2e92ead87b-profile_image-70x70.png',
			alt: 'zeusspezial'
		},
		einsebastian: {
			src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1def2d40-4495-4f55-812c-04978231b6f2-profile_image-70x70.png',
			alt: 'einsebastian'
		},
		mysteryblue: {
			src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/93d0fa70-49e6-4bdd-b0ef-1a1d12a74116-profile_image-70x70.png',
			alt: 'mysteryblue'
		}
	}

	const scrollToClips = () => {
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
		use:reveal={{ duration: 700, threshold: 0.1, reset: true }}
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
						<Button on:click={scrollToClips}>Lets go!</Button>
					</div>
				</div>
			</div>
		</div>

		<Arrow class="animate-bounce self-center fill-purple-500" on:click={scrollToClips} />
	</div>

	<div class="flex h-screen flex-col items-center justify-center" id="clipsOfTheMonth">
		<div
			class="flex items-center justify-center"
			use:reveal={{ duration: 700, threshold: 0.1, reset: true }}
		>
			<h2
				class="bg-gradient-to-t from-cyan-600 to-blue-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent"
			>
				Clips of the Month
			</h2>
		</div>

		<div
			class="flex flex-col items-center justify-center pt-28"
			use:reveal={{ duration: 700, threshold: 0.1, reset: true }}
		>
			<div class="flex flex-wrap justify-center gap-8 p-4">
				<a href="/knirpz">
					<Card
						class="flex items-center gap-4 border-white/10 bg-blue-1000 p-4 px-12 transition-all duration-300 hover:border-white/30"
					>
						<Avatar.Root>
							<Avatar.Image src={avatarData.knirpz.src} alt={avatarData.knirpz.alt} />
						</Avatar.Root>
						<div class="flex flex-col">
							<div class="flex flex-row">
								<span class="text-white">EinSebastian</span>
								<svg
									class="ml-1 mt-1"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									aria-label="Verifizierter Partner"
								>
									<path
										fill-rule="evenodd"
										fill="#bf94ff"
										d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<span
								class="bg-gradient-to-t from-yellow-600 to-yellow-200 bg-clip-text text-xs text-transparent hover:no-underline"
							>
								Clips of the Month
							</span>
						</div>
					</Card>
				</a>

				<a href="/ronnyberger">
					<Card
						class="flex items-center gap-4 border-white/10 bg-blue-1000 p-4 px-12 transition-all duration-300 hover:border-white/30"
					>
						<Avatar.Root>
							<Avatar.Image src={avatarData.ronnyberger.src} alt={avatarData.ronnyberger.alt} />
						</Avatar.Root>
						<div class="flex flex-col">
							<div class="flex flex-row">
								<span class="text-white">EinSebastian</span>
								<svg
									class="ml-1 mt-1"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									aria-label="Verifizierter Partner"
								>
									<path
										fill-rule="evenodd"
										fill="#bf94ff"
										d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<span
								class="bg-gradient-to-t from-purple-600 to-purple-200 bg-clip-text text-xs text-transparent hover:no-underline"
							>
								Clips of the Month
							</span>
						</div>
					</Card>
				</a>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-center"
			use:reveal={{ duration: 700, threshold: 0.1, reset: true }}
		>
			<div class="flex flex-wrap justify-center gap-8 p-4">
				<a href="/daefoxi">
					<Card
						class="flex items-center gap-4 border-white/10 bg-blue-1000 p-4 px-12 transition-all duration-300 hover:border-white/30"
					>
						<Avatar.Root>
							<Avatar.Image src={avatarData.daefoxi.src} alt={avatarData.daefoxi.alt} />
						</Avatar.Root>
						<div class="flex flex-col">
							<div class="flex flex-row">
								<div class="flex flex-row">
									<span class="text-white">EinSebastian</span>
									<svg
										class="ml-1 mt-1"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										aria-label="Verifizierter Partner"
									>
										<path
											fill-rule="evenodd"
											fill="#bf94ff"
											d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
							</div>

							<span
								class="bg-gradient-to-t from-pink-600 to-pink-200 bg-clip-text text-xs text-transparent hover:no-underline"
							>
								Clips of the Month
							</span>
						</div>
					</Card>
				</a>

				<div class="absolute flex items-center justify-center align-middle pt-14 md:pt-1">
					<Heart class="h-[15%] w-[15%]" />
				</div>

				<a href="/zeusspezial">
					<Card
						class="flex items-center gap-4 border-white/10 bg-blue-1000 p-4 px-12 transition-all duration-300 hover:border-white/30"
					>
						<Avatar.Root>
							<Avatar.Image src={avatarData.zeusspezial.src} alt={avatarData.zeusspezial.alt} />
						</Avatar.Root>
						<div class="flex flex-col">
							<div class="flex flex-row">
								<span class="text-white">EinSebastian</span>
								<svg
									class="ml-1 mt-1"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									aria-label="Verifizierter Partner"
								>
									<path
										fill-rule="evenodd"
										fill="#bf94ff"
										d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<span
								class="bg-gradient-to-t from-blue-600 to-blue-200 bg-clip-text text-xs text-transparent hover:no-underline"
							>
								Clips of the Month
							</span>
						</div>
					</Card>
				</a>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-center"
			use:reveal={{ duration: 700, threshold: 0.1, reset: true }}
		>
			<div class="flex flex-wrap justify-center gap-8 p-4">
				<a href="/einsebastian">
					<Card
						class="flex items-center gap-4 border-white/10 bg-blue-1000 p-4 px-12 transition-all duration-300 hover:border-white/30"
					>
						<Avatar.Root>
							<Avatar.Image src={avatarData.einsebastian.src} alt={avatarData.einsebastian.alt} />
						</Avatar.Root>
						<div class="flex flex-col">
							<div class="flex flex-row">
								<span class="text-white">EinSebastian</span>
								<svg
									class="ml-1 mt-1"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									aria-label="Verifizierter Partner"
								>
									<path
										fill-rule="evenodd"
										fill="#bf94ff"
										d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>

							<span
								class="bg-gradient-to-t from-red-600 to-red-200 bg-clip-text text-xs text-transparent hover:no-underline"
							>
								Clips of the Month
							</span>
						</div>
					</Card>
				</a>

				<a href="/mysteryblue">
					<Card
						class="flex items-center gap-4 border-white/10 bg-blue-1000 p-4 px-12 transition-all duration-300 hover:border-white/30"
					>
						<Avatar.Root>
							<Avatar.Image src={avatarData.mysteryblue.src} alt={avatarData.mysteryblue.alt} />
						</Avatar.Root>
						<div class="flex flex-col">
							<div class="flex flex-row">
								<span class="text-white">EinSebastian</span>
								<svg
									class="ml-1 mt-1"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									aria-label="Verifizierter Partner"
								>
									<path
										fill-rule="evenodd"
										fill="#bf94ff"
										d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<span
								class="bg-gradient-to-t from-green-600 to-green-200 bg-clip-text text-xs text-transparent hover:no-underline"
							>
								Clips of the Month
							</span>
						</div>
					</Card>
				</a>
			</div>
		</div>
	</div>

	<div
		class="flex h-screen flex-col items-center justify-center"
		use:reveal={{ duration: 700, threshold: 0.1, reset: true }}
	>
		<div class="flex items-center justify-center">
			<h2
				class="bg-gradient-to-t from-yellow-700 to-yellow-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent"
			>
				Hall of Fame
			</h2>
		</div>
	</div>
</div>

<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
	<div
		class="mt-16 border-t border-primary/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between"
	>
		<div>
			<h3 class="text-sm font-semibold leading-6 text-primary">Subscribe to our newsletter</h3>
			<p class="mt-2 text-sm leading-6 text-primary">
				The latest news, articles, and resources, sent to your inbox weekly.
			</p>
		</div>
		<form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
			<label for="email-address" class="sr-only">Email address</label>

			<div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
				<Button
					type="submit"
					class="flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold "
					>Subscribe</Button
				>
			</div>
		</form>
	</div>
</div>

<footer aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-1 xl:gap-8">
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div class="hidden"></div>
					<div class="mt-10 hidden md:mt-0"></div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div class="hidden"></div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-primary">Legal</h3>
						<ul role="list" class="mt-6 space-y-4"></ul>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-8 border-t border-primary/10 pt-8 md:flex md:items-center md:justify-between">
			<div class="flex space-x-6 md:order-2"></div>
			<p class="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0"></p>
		</div>
	</div>
</footer>
