<script lang="ts">
	import type { PageData } from '../../../routes/$types'
	import Sidebar from '$lib/components/sidebar/sidebar.svelte'
	import { Button } from '$lib/components/ui/button'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { ChevronDown, Menu, X } from 'lucide-svelte'

	export let data: PageData
	let sidebarOpen = false

	const toggleSidebar = () => {
		sidebarOpen = !sidebarOpen
	}

	const logo = {
		src: '/logo.svg',
		alt: 'Logo'
	}
</script>

<Sidebar {data} bind:show={sidebarOpen} on:linkClick={toggleSidebar} />

<header class="block md:hidden">
	<div class="flex flex-col">
		<a
			class="fixed left-0 z-50 flex w-full items-center justify-start border-b border-white/10 p-4 backdrop-blur"
			href="/"
		>
			<img class="w-3/12" alt={logo.alt} src={logo.src} />
		</a>
		<button
			class="fixed right-0 z-50 flex items-center justify-center p-4 text-white"
			aria-label="Toggle sidebar"
			type="button"
			on:click={toggleSidebar}
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
		<a class="flex items-center" href="/">
			<img class="ml-4 w-3/12" alt={logo.alt} src={logo.src} />
		</a>
		<div class="flex items-center">
			<Button class="text-sm font-normal text-white" href="/" variant="link">Startseite</Button>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="flex items-center">
					<Button class="text-sm font-normal text-white" variant="link">
						Clips of the Month
						<ChevronDown class="ml-1 h-4 w-4" />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						{#each data.broadcasters as broadcaster (broadcaster.broadcasterId)}
							<DropdownMenu.Item class="cursor-pointer text-sm font-normal text-black" href={broadcaster.linkClips}>
								{broadcaster.userName}
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="flex items-center">
					<Button class="text-sm font-normal text-white" variant="link">
						Hall of Fame
						<ChevronDown class="ml-1 h-4 w-4" />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						{#each data.broadcasters as broadcaster (broadcaster.broadcasterId)}
							<DropdownMenu.Item class="cursor-pointer text-sm font-normal text-black" href={broadcaster.linkHall}>
								{broadcaster.userName}
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
