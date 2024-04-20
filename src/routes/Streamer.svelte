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

