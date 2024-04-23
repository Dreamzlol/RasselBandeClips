<script lang="ts">
    import Link from '$lib/components/ui/link/link.svelte';
    import * as Accordion from '$lib/components/ui/accordion/index.js';

    export let show: boolean;

    const sections = [
        {
            title: 'Rasselbande',
            links: [
                { href: '/knirpz', label: 'Knirpz' },
                { href: '/ronnyberger', label: 'RonnyBerger' },
                { href: '/daefoxi', label: 'daefoxi' },
                { href: '/zeusspezial', label: 'ZeusSpezial' },
                { href: '/einsebastian', label: 'EinSebastian' },
                { href: '/mysteryblue', label: 'MysteryBlue' }
            ]
        },
        {
            title: 'Hall of Fame',
            links: [
                { href: '/knirpz', label: 'Knirpz' },
                { href: '/ronnyberger', label: 'RonnyBerger' },
                { href: '/daefoxi', label: 'daefoxi' },
                { href: '/zeusspezial', label: 'ZeusSpezial' },
                { href: '/einsebastian', label: 'EinSebastian' },
                { href: '/mysteryblue', label: 'MysteryBlue' }
            ]
        }
    ];
</script>

<div
    class:translate-x-0={show}
    class:translate-x-full={!show}
    class="fixed inset-y-0 right-0 z-50 w-full border-l border-white/20 bg-[#070b12] backdrop-blur transition-transform duration-300 ease-in-out"
>
    <div class="flex h-full flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-4">
            <Link
                class="flex h-12 w-full items-center justify-center pr-4 text-2xl font-medium text-white"
                href="/startpage"
            >
                Startseite
            </Link>
            {#each sections as section}
                <Accordion.Root class="w-full text-white">
                    <Accordion.Item value="item-1" class="border-none">
                        <Accordion.Trigger class="flex h-12 w-full items-center justify-center text-2xl">
                            {section.title}
                        </Accordion.Trigger>
                        <Accordion.Content class="w-full">
                            {#each section.links as link}
                                <a href={link.href} class="block py-2 text-white">{link.label}</a>
                            {/each}
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            {/each}
        </div>
    </div>
</div>