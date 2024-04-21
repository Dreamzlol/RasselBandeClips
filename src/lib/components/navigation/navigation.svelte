<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'

	const logo = {
		src: '/logo.svg',
		alt: 'logo'
	}
</script>

<header>
	<div
		class="fixed z-50 flex w-full items-center justify-center space-x-10 border-b border-white/10 bg-transparent py-4 align-middle backdrop-blur"
	>
		<a href="/" class="flex items-center">
			<img src={logo.src} alt={logo.alt} class="w-3/12" />
		</a>
		<Link class="flex h-[21px] items-center" href="/home">Startseite</Link>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="flex h-[21px] items-center text-sm text-white">
				Rasselbande
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<DropdownMenu.Label>Clips of the Month</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Knirpz</DropdownMenu.Item>
					<DropdownMenu.Item>RonnyBerger</DropdownMenu.Item>
					<DropdownMenu.Item>daefoxi</DropdownMenu.Item>
					<DropdownMenu.Item>ZeusSpezial</DropdownMenu.Item>
					<DropdownMenu.Item>EinSebastian</DropdownMenu.Item>
					<DropdownMenu.Item>MysteryBlue</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="flex h-[21px] items-center text-sm text-white">
				Hall of Fame
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<DropdownMenu.Label>Hall of Fame</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Knirpz</DropdownMenu.Item>
					<DropdownMenu.Item>RonnyBerger</DropdownMenu.Item>
					<DropdownMenu.Item>daefoxi</DropdownMenu.Item>
					<DropdownMenu.Item>ZeusSpezial</DropdownMenu.Item>
					<DropdownMenu.Item>EinSebastian</DropdownMenu.Item>
					<DropdownMenu.Item>MysteryBlue</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</header>
