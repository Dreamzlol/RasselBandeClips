<script lang="ts">
	import Coffee from '$lib/components/icons/coffee.svelte'
	import Heart from '$lib/components/icons/heart.svelte'
</script>

<footer>
	<div class="flex flex-col items-center justify-center space-y-4 pb-14 pt-64">
		<div class="flex items-center space-x-2">
			<p class="font-normal text-black">Made with</p>
			<Heart class="h-6 w-6" />
			<span class="font-normal text-black">and</span>
			<Coffee class="h-6 w-6" />
		</div>
		<div class="flex items-center">
			<a class="font-bold text-black" href="https://www.twitch.tv/dreams___________"> Dreams___________ </a>
		</div>
	</div>
</footer>
