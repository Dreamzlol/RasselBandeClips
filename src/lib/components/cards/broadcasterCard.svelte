<script lang="ts">
	import Avatar from '$lib/components/interface/avatar/avatar.svelte'
	import Card from '$lib/components/ui/card/card.svelte'

	export let userName: string
	export let link: string
	export let avatarSrc: string
	export let avatarAlt: string
	export let colorScheme: string
</script>

<a href={link}>
	<Card
		class="flex w-full min-w-72 items-center gap-4 border-2 border-black p-4 px-12 shadow-[6px_6px_0px_rgba(0,0,0,1)] {colorScheme}"
	>
		<Avatar alt={avatarAlt} src={avatarSrc} />
		<div class="flex flex-col">
			<div class="flex flex-row items-center">
				<span class="font-bold text-black">{userName}</span>
				
			</div>
			<div class="text-xs font-normal text-black">
				Clips of the Month
			</div>
		</div>
	</Card>
</a>
