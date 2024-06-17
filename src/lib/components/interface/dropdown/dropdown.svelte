<script lang="ts">
	import { browser } from '$app/environment'
	import { onDestroy, onMount } from 'svelte'

	let isOpen = false

	const toggleDropdown = () => {
		isOpen = !isOpen
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleDropdown()
		}
	}

	const handleClickOutside = (event: MouseEvent) => {
		const dropdownElement = document.querySelector('.dropdown-container')
		if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
			isOpen = false
		}
	}

	if (browser) {
		onMount(() => {
			document.addEventListener('click', handleClickOutside)
		})

		onDestroy(() => {
			document.removeEventListener('click', handleClickOutside)
		})
	}
</script>

<div class="dropdown-container relative inline-block text-left">
	<div>
		<button class="w-full px-4 py-2" type="button" on:click={toggleDropdown} on:keydown={handleKeyDown}>
			<slot name="trigger" />
		</button>
	</div>

	{#if isOpen}
		<div class="absolute left-0 mt-2 w-56" role="menu">
			<div class="py-1" role="none">
				<slot name="items" />
			</div>
		</div>
	{/if}
</div>
