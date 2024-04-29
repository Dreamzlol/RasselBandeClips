<script lang="ts">
	import '../app.css'
	import type { PageData } from './$types'
	import Footer from '$lib/components/footer/footer.svelte'
	import Navigation from '../lib/components/navigation/navigation.svelte'

	export let data: PageData
</script>

<Navigation {data} />
<slot />
<Footer />
