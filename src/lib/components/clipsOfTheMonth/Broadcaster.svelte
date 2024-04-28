<script lang="ts">
	import ClipsCard from '$lib/components/cards/clipsCard.svelte'
	import CalendarIcon from 'lucide-svelte/icons/calendar'
	import type { DateRange } from 'bits-ui'
	import { CalendarDate, DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date'
	import { cn } from '$lib/utils.js'
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js'
	import * as Popover from '$lib/components/ui/popover/index.js'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js'
	import { Button } from '$lib/components/ui/button/index.js'

	export let amount: string
	export let username: string
	export let id: string

	const df = new DateFormatter('de-De', {
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
		<h1
			class="bg-gradient-to-t from-yellow-700 to-yellow-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl"
		>
			{username}
		</h1>
		<h2
			class="bg-gradient-to-t from-yellow-700 to-yellow-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl"
		>
			Clips
		</h2>

		<div class="my-8 flex flex-col py-8">
			<div class="flex gap-2">
				<Popover.Root openFocus>
					<Popover.Trigger asChild let:builder>
						<Button
							variant="outline"
							class={cn('w-[300px] justify-start bg-white text-left font-normal', !value && 'text-muted-foreground')}
							builders={[builder]}
						>
							<CalendarIcon class="mr-2 h-4 w-4" />
							{#if value && value.start}
								{#if value.end}
									{df.format(value.start.toDate(getLocalTimeZone()))} - {df.format(
										value.end.toDate(getLocalTimeZone())
									)}
								{:else}
									{df.format(value.start.toDate(getLocalTimeZone()))}
								{/if}
							{:else if startValue}
								{df.format(startValue.toDate(getLocalTimeZone()))}
							{:else}
								Pick a date
							{/if}
						</Button>
					</Popover.Trigger>
					<Popover.Content class="mt-2 w-auto p-0" align="start">
						<RangeCalendar bind:value bind:startValue initialFocus numberOfMonths={2} placeholder={value?.start} />
					</Popover.Content>
				</Popover.Root>

				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button class="bg-white" variant="outline" builders={[builder]}>Anzahl der Clips</Button>
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

		<ClipsCard {id} dateRange={value} clipCount={amount} />
	</div>
</section>
