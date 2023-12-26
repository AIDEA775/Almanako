<script>
	import { birthdays, holidays } from "./stores.js";

	export let date;

	const sameYear = (d1, d2) => d1.getFullYear() === d2.getFullYear();

	const sameMonthAndDay = (d1, d2) =>
		d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

	$: holis = $holidays.filter(
		(it) =>
			sameMonthAndDay(it.startDate.toJSDate(), date) &&
			sameYear(it.startDate.toJSDate(), date),
	);

	// Ignore year in birthdays
	// TODO: Use `RRULE:FREQ=YEARLY`
	$: births = $birthdays.filter((it) =>
		sameMonthAndDay(it.startDate.toJSDate(), date),
	);
</script>

<div
	class="flex flex-col bg-white
	overflow-hidden
	border-x border-white
	{date.getDay() % 2 === 1 ? "bg-primary/[.2]" : ""}
	p-1 print:p-[1vh]"
>
	<div
		class="justify-center leading-none
		text-xl print:text-[4.5vh]
		{date.getDay() === 0 || date.getDay() === 6
			? 'text-primary font-black'
			: 'text-black'}"
	>
		{date.getDate()}
	</div>
	{#each holis as h}
		<div class="text-caption">
			• {h.summary}
		</div>
	{/each}
	<div class="flex-grow" />
	{#if births.length}
		<div class="text-[0.5rem] print:text-[2vh] leading-none py-1">🎂</div>
		{#each births as b}
			<div class="text-caption">
				• {b.summary}
			</div>
		{/each}
	{/if}
	<div class="border-b-2 m-1 border-primary" />
</div>

<style>
	.text-caption {
		@apply leading-none font-[Roboto] text-[0.25rem] print:text-[1vh];
	}
</style>
