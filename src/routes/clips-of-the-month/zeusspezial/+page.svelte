<script lang="ts">
	import type { PageData } from './$types'
	import Broadcaster from '$lib/components/broadcaster/broadcaster.svelte'

	export let data: PageData

	$: broadcasterData = data.broadcasters.find((b) => b.userName === 'ZeusSpezial')
</script>

{#if broadcasterData}
	<Broadcaster
		id={broadcasterData.broadcasterId}
		colorScheme={broadcasterData.colorScheme}
		username={broadcasterData.userName}
	/>
{:else}
	<p class="md:text-md px-8 pt-4 text-center text-sm font-normal text-gray-400">Loading broadcaster data...</p>
{/if}
