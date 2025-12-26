<script>
	import { icsList } from "./shared.js";

	export let date;

	const isBetween = (start, d, end) =>
		start.getTime() <= d.getTime() && d.getTime() < end.getTime();

	const resetYear = (d) => {
		const result = new Date(d);
		result.setFullYear(date.getFullYear());
		return result;
	};

	const todayEvents = (it) =>
		isBetween(it.start, date, it.end) ||
		(it.isRecurring &&
			isBetween(resetYear(it.start), date, resetYear(it.end)));

	// TODO? generalize
	$: birthdays = $icsList[0].data.filter(todayEvents);
	$: holidays = $icsList[1].data.filter(todayEvents);
	$: dayof = $icsList[2].data.filter(todayEvents);
</script>

<div
	class="flex flex-col
	overflow-hidden
	border-x border-white
	{date.getDay() % 2 === 1 ? 'bg-primary/[.2]' : 'bg-white'}
	py-1 print:py-[1vh]"
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
	{#each holidays as h}
		<div class="leading-none font-caption text-[0.35rem] print:text-[1.25vh]">
			• {h.summary}
		</div>
	{/each}
	{#each dayof as d}
		<div class="leading-none font-caption text-[0.35rem] print:text-[1.25vh]">
			⭐ {d.summary}
		</div>
	{/each}
	<div class="grow" />
	{#if birthdays.length}
		<div class="text-[0.5rem] print:text-[2vh] leading-none py-1">🎂</div>
		{#each birthdays as b}
			<div class="leading-none font-caption text-[0.35rem] print:text-[1.25vh]">
				• {b.summary}
			</div>
		{/each}
	{/if}
	<div class="border-b-2 m-1 border-primary" />
</div>
