<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar'
	import Card from '$lib/components/ui/card/card.svelte'

	export let userName: string
	export let link: string
	export let avatarSrc: string
	export let avatarAlt: string
	export let gradientClass: string
</script>

<a href={link}>
	<Card
		class="bg-blue-1000 flex w-full min-w-72 items-center gap-4 border-white/10 p-4 px-12 transition-all duration-300 hover:border-white/30"
	>
		<Avatar.Root>
			<Avatar.Image alt={avatarAlt} src={avatarSrc} />
		</Avatar.Root>
		<div class="flex flex-col">
			<div class="flex flex-row items-center">
				<span class="font-normal text-white">{userName}</span>
				<svg class="ml-1" aria-label="Verified Partner" height="16" viewBox="0 0 16 16" width="16">
					<path
						clip-rule="evenodd"
						d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
						fill="#bf94ff"
						fill-rule="evenodd"
					></path>
				</svg>
			</div>
			<div class="bg-gradient-to-t bg-clip-text text-xs font-normal text-transparent {gradientClass}">
				Clips of the Month
			</div>
		</div>
	</Card>
</a>
