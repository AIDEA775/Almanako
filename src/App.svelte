<script>
	import "./app.css";
	import Holidays from "./Holidays.svelte";
	import Month from "./Month.svelte";
	import Settings from "./Settings.svelte";
	import TestPage from "./TestPage.svelte";
	import { showTestPage, currentTheme } from "./shared.js";

	let months = [...Array(12).keys()];

	let now = new Date();

	let year = now.getFullYear();

	console.log(`Now is ${year} ${now.getMonth()}`);

	// after half the year, move on to the next year
	if (now.getMonth() > 6) {
		year += 1;
	}

</script>

<svelte:head>
	<title>Almanako {year}</title>
</svelte:head>

<main
	data-theme={$currentTheme}
	class="bg-stone-100 overflow-hidden text-center
	pt-12 print:p-0
	selection:bg-stone-200 selection:text-stone-900"
>
	<h1 class="font-sans font-black text-fluid text-stone-700 print:hidden">
		Almanako
	</h1>
	<p class="font-sans text-2xl text-stone-900 print:hidden">
		Press Ctrl+P to print
	</p>

	<div class="print:hidden my-4">
		<Settings />
		<Holidays />
	</div>

	{#if $showTestPage}
	<div class="hidden print:block">
		<TestPage />
	</div>
	{/if}

	<div
		class="grid gap-y-12 justify-items-center
			grid-cols-1
			sm:grid-cols-2
			md:grid-cols-3
			lg:grid-cols-4
			xl:grid-cols-6
			2xl:grid-cols-12
			mx-auto my-12 pl-50 pr-10
			print:grid-cols-1 print:gap-0 print:p-0 print:m-0
			will-change-transform select-none
			{$showTestPage ? 'print:hidden': ''}"
		>
		{#each months as month}
			<div class="shrink-0 aspect-[1/1.4142] w-80 -ml-40
					month-{month} z-{12-month}
					print:h-screen print:w-screen print:m-0
					transition-transform origin-center
					shadow-xl shadow-primary/10 print:shadow-none
					hover:scale-105 hover:translate-x-1/3 hover:-translate-y-6 hover:rotate-25"
			>
				<Month {month} {year} />
			</div>
		{/each}
	</div>

	<footer class="p-4 bg-stone-50 print:hidden">
		Made with 👑🦠 from Argentina,
		<a
			class="underline decoration-rose-500 text-rose-500"
			href="https://github.com/AIDEA775/almanako"
			rel="noopener noreferrer"
			target="_blank">fork me!</a
		>
	</footer>
</main>
