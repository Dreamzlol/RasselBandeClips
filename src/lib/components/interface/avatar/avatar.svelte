<script lang="ts">
	export let src: string
	export let alt: string
</script>

<div class="h-14 w-14 rounded-full border-2 border-black ">
	<img class="rounded-full" {alt} {src} />
</div>
