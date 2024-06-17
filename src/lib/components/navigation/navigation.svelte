<script lang="ts">
	import type { PageData } from '../../../routes/$types'
	import Dropdown from '$lib/components/interface/dropdown/dropdown.svelte'
	import Link from '$lib/components/link/link.svelte'
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
		<a class="fixed left-0 z-50 flex w-full items-center justify-start bg-[#FFF59F] p-4" href="/">
			<img class="w-3/12" alt={logo.alt} src={logo.src} />
		</a>
		<button
			class="fixed right-0 z-50 flex items-center justify-center p-4 text-black"
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
	<div class="fixed z-50 flex w-full items-center justify-center space-x-10 bg-[#FFF59F] py-4">
		<a class="flex items-center" href="/">
			<img class="ml-4 w-3/12" alt={logo.alt} src={logo.src} />
		</a>
		<div class="flex items-center">
			<Link className="text-sm font-normal text-black" href="/">Startseite</Link>
			<Dropdown>
				<svelte:fragment slot="trigger">
					<span class="flex items-center text-sm font-normal text-black">
						Clips of the Month<ChevronDown class="ml-1 h-4 w-4 text-black" />
					</span>
				</svelte:fragment>
				<svelte:fragment slot="items">
					<ul class="border-2 border-black bg-[#FFF59F] p-2 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
						{#each data.broadcasters as broadcaster (broadcaster.broadcasterId)}
							<li>
								<Link className="text-sm font-normal text-black" href={broadcaster.linkClips}>
									{broadcaster.userName}
								</Link>
							</li>
						{/each}
					</ul>
				</svelte:fragment>
			</Dropdown>
			<Dropdown>
				<svelte:fragment slot="trigger">
					<span class="flex items-center text-sm font-normal text-black">
						Hall of Fame<ChevronDown class="ml-1 h-4 w-4 text-black" />
					</span>
				</svelte:fragment>
				<svelte:fragment slot="items">
					<ul class="list-none border-2 border-black bg-[#FFF59F] p-2 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
						{#each data.broadcasters as broadcaster (broadcaster.broadcasterId)}
							<li>
								<Link className="text-sm font-normal text-black" href={broadcaster.linkClips}>
									{broadcaster.userName}
								</Link>
							</li>
						{/each}
					</ul>
				</svelte:fragment>
			</Dropdown>
		</div>
	</div>
</header>
