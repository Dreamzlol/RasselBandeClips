<script lang="ts">
	let isOpen = false

	const toggleDropdown = () => {
		isOpen = !isOpen
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleDropdown()
		}
	}
</script>

<div class="relative inline-block text-left">
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
