<script lang="ts">
	import { ChevronDown, Menu, X } from 'lucide-svelte'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { Button } from '$lib/components/ui/button'
	import Sidebar from '$lib/components/sidebar/sidebar.svelte'
	import type { PageData } from '../../../routes/$types'

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

<Sidebar bind:show={sidebarOpen} {data} on:linkClick={toggleSidebar} />

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
			<Button class="text-sm text-white" variant="link" href="/">Startseite</Button>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="flex items-center">
					<Button class="text-sm text-white" variant="link">
						Clips of the Month
						<ChevronDown class="ml-1 h-4 w-4" />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						{#each data.broadcasters as broadcaster}
							<DropdownMenu.Item class="cursor-pointer text-sm text-black" href={broadcaster.linkClips}>
								{broadcaster.userName}
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="flex items-center">
					<Button class="text-sm text-white" variant="link">
						Hall of Fame
						<ChevronDown class="ml-1 h-4 w-4" />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						{#each data.broadcasters as broadcaster}
							<DropdownMenu.Item class="cursor-pointer text-sm text-black" href={broadcaster.linkHall}>
								{broadcaster.userName}
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
