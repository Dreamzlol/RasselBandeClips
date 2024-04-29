<script lang="ts">
	import '../app.css'
	import Navigation from '../lib/components/navigation/navigation.svelte'
	import Footer from '$lib/components/footer/footer.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<Navigation {data} />
<slot />
<Footer />
