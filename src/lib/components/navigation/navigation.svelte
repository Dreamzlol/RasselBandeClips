<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte'
	import { ChevronDown } from 'lucide-svelte'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { Button } from '$lib/components/ui/button'

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
		<div class="flex items-center">
			<Link class="flex items-center px-4 py-2 text-sm text-white" href="/startpage">
				<span
					class="border-b border-transparent transition duration-200 ease-in-out hover:border-white"
				>
					Startseite
				</span>
			</Link>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="flex items-center text-sm text-white">
					<Button variant="link">
						Rasselbande
						<ChevronDown class="ml-1 h-4 w-4" />
					</Button>
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
				<DropdownMenu.Trigger class="flex items-center text-sm text-white">
					<Button variant="link">
						Hall of Fame
						<ChevronDown class="ml-1 h-4 w-4" />
					</Button>
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
	</div>
</header>
