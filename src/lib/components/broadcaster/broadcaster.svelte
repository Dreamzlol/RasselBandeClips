<script lang="ts">
	import type { DateValue } from '@internationalized/date'
	import type { DateRange } from 'bits-ui'
	import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
	import ClipsCard from '$lib/components/cards/clipsCard.svelte'
	import { Button } from '$lib/components/ui/button/index.js'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js'
	import * as Popover from '$lib/components/ui/popover/index.js'
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js'
	import { cn } from '$lib/utils.js'
	import CalendarIcon from 'lucide-svelte/icons/calendar'

	export let amount: string = '5'
	export let username: string
	export let id: string
	export let colorScheme: string

	const dateFormatter = new DateFormatter('de-DE', {
		dateStyle: 'medium'
	})

	const today = new CalendarDate(
		getLocalTimeZone(),
		new Date().getFullYear(),
		new Date().getMonth() + 1,
		new Date().getDate()
	)

	let value: DateRange | undefined = {
		start: today.add({ days: -30 }),
		end: today
	}

	let startValue: DateValue | undefined = undefined
</script>

<section class="container flex flex-col py-32 sm:py-48 lg:py-56">
	<div class="flex flex-col items-center justify-center gap-4">
		<h1 class="bg-gradient-to-t {colorScheme} bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
			{username}'s
		</h1>
		<h2 class="bg-gradient-to-t {colorScheme} bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
			Clips of the Month
		</h2>

		<div class="my-8 flex flex-col py-8">
			<div class="flex flex-wrap items-center justify-center gap-2 md:flex-nowrap">
				<Popover.Root openFocus>
					<Popover.Trigger asChild let:builder>
						<Button
							variant="outline"
							class={cn('w-full justify-center bg-white font-normal', !value && 'text-muted-foreground')}
							builders={[builder]}
						>
							<CalendarIcon class="mr-2 h-4 w-4" />
							{#if value && value.start}
								{#if value.end}
									{dateFormatter.format(value.start.toDate(getLocalTimeZone()))} - {dateFormatter.format(
										value.end.toDate(getLocalTimeZone())
									)}
									({Math.round(
										(value.end.toDate(getLocalTimeZone()).getTime() -
											value.start.toDate(getLocalTimeZone()).getTime()) /
											(1000 * 60 * 60 * 24)
									)} Tage)
								{:else}
									{dateFormatter.format(value.start.toDate(getLocalTimeZone()))}
								{/if}
							{:else if startValue}
								{dateFormatter.format(startValue.toDate(getLocalTimeZone()))}
							{:else}
								Wähle ein Datum
							{/if}
						</Button>
					</Popover.Trigger>
					<Popover.Content class="mt-2 w-auto p-0" align="start">
						<RangeCalendar bind:value bind:startValue initialFocus numberOfMonths={2} placeholder={value?.start} />
					</Popover.Content>
				</Popover.Root>

				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button class="w-full bg-white" variant="outline" builders={[builder]}>Zeige Clips: {amount}</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-1/4">
						<DropdownMenu.Label>Anzahl der Clips</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.RadioGroup bind:value={amount}>
							<DropdownMenu.RadioItem value="5">5 Clips</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="10">10 Clips</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="25">25 Clips</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="50">50 Clips</DropdownMenu.RadioItem>
						</DropdownMenu.RadioGroup>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>

		<ClipsCard {id} bind:dateRange={value} clipCount={amount} />
	</div>
</section>
