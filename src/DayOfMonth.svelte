<script>
	import { birthdays, holidays } from "./stores.js";

	export let date;

	const sameYear = (d1, d2) => d1.getFullYear() === d2.getFullYear();

	const sameMonthAndDay = (d1, d2) =>
		d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

	$: holis = $holidays.filter(
		(it) =>
			sameMonthAndDay(it.startDate.toJSDate(), date) &&
			sameYear(it.startDate.toJSDate(), date)
	);

	// Ignore year in birthdays
	// TODO: Use `RRULE:FREQ=YEARLY`
	$: births = $birthdays.filter((it) =>
		sameMonthAndDay(it.startDate.toJSDate(), date)
	);
</script>

<div
	class="flex flex-col bg-white
	leading-none overflow-hidden
	border-y border-white
	px-1
	print:p-[1vh]
	text-xl print:text-[4vh]"
>
	<div
		class="justify-center pt-2
			{date.getDay() === 0 || date.getDay() === 6
			? 'text-rose-500 border-rose-500'
			: 'text-black border-black'}"
	>
		{date.getDate()}
	</div>
	<ul class="list-disc">
		{#each holis as h}
			<li class="text-caption">
				{h.summary}
			</li>
		{/each}
	</ul>
	<div class="flex-grow" />
	{#if births.length}
		<div class="text-[0.5rem] leading-none py-1">🎂</div>
		<ul class="list-disc">
			{#each births as b}
				<li class="text-caption">
					{b.summary}
				</li>
			{/each}
		</ul>
	{/if}
	<div
		class="border-b-2 m-1
			{date.getDay() === 0 || date.getDay() === 6
			? 'border-rose-500'
			: 'border-black'}"
	/>
</div>

<style>
	.text-caption {
		@apply leading-none font-[Roboto] text-[0.25rem] print:text-[1vh];
	}
</style>
