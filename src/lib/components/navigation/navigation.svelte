<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte'
	import { ChevronDown, Menu, X } from 'lucide-svelte'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { Button } from '$lib/components/ui/button'
	import Sidebar from '$lib/components/sidebar/sidebar.svelte'

	let sidebarOpen = false

	const logo = {
		src: '/logo.svg',
		alt: 'Logo'
	}

	const toggleSidebar = () => {
		sidebarOpen = !sidebarOpen
	}
</script>

<Sidebar bind:show={sidebarOpen} />

<header class="block md:hidden">
	<div class="flex flex-col">
		<a href="/" class="fixed left-0 z-50 flex items-center justify-start border-b border-white/10 p-4 backdrop-blur">
			<img src={logo.src} alt={logo.alt} class="w-3/12" />
		</a>
		<button
			class="fixed right-0 z-50 flex items-center justify-center p-4 text-white"
			on:click={toggleSidebar}
			aria-label="Toggle sidebar"
		>
			{#if sidebarOpen}
				<X class="h-8 w-8" />
			{:else}
				<Menu class="h-8 w-8" />
			{/if}
		</button>
	</div>
</header>

<header class="hidden md:block">
	<div
		class="fixed z-50 flex w-full items-center justify-center space-x-10 border-b border-white/10 bg-transparent py-2 backdrop-blur"
	>
		<a href="/" class="flex items-center">
			<img src={logo.src} alt={logo.alt} class="ml-4 w-3/12" />
		</a>
		<div class="flex items-center">
			<Link class="flex items-center px-4 py-2 text-sm text-white" href="/startpage">
				<span class="border-b border-transparent transition duration-200 ease-in-out hover:border-white">
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
