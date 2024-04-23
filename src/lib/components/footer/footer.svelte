<script lang="ts">
	import Heart from '$lib/components/icons/heart.svelte'
	import Coffee from '$lib/components/icons/coffee.svelte'
</script>

<footer>
	<div class="flex flex-col items-center justify-center space-y-4 pt-64 pb-14">
		<div class="flex items-center space-x-2">
			<p class="text-white">Made with</p>
			<Heart class="h-6 w-6" />
			<span class="text-white">and</span>
			<Coffee class="h-6 w-6" />
		</div>
		<div class="flex items-center">
			<a
				href="https://www.twitch.tv/dreams___________"
				class="bg-gradient-to-t from-blue-600 to-blue-400 bg-clip-text font-bold text-transparent"
			>
				Dreams___________
			</a>
		</div>
	</div>
</footer>
