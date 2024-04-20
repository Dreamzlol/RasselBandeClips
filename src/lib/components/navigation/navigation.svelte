<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte'

	const logo = {
		src: '/logo.svg',
		alt: 'logo'
	}
</script>

<header>
	<div
		class="fixed z-50 flex w-full justify-center items-center align-middle space-x-10 border-b border-white/10 bg-transparent py-4 backdrop-blur"
	>
		<a href="/" class="flex items-center">
			<img src={logo.src} alt={logo.alt} class="w-3/12" />
		</a>
		<Link class="flex items-center" href="/home">Startseite</Link>
		<Link class="flex items-center" href="/features">Rasselbande</Link>
		<Link class="flex items-center" href="/method">Hall of Fame</Link>
		<Link class="flex items-center" href="/contact">Kontakt</Link>
	</div>
</header>
