<script>
	import "./app.css";
	import Holidays from "./Holidays.svelte";
	import Month from "./Month.svelte";

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
	class="bg-stone-100 text-center pt-12 print:p-0 selection:bg-stone-200 selection:text-stone-900"
>
	<h1 class="font-sans font-black text-fluid text-stone-700 print:hidden">
		Almanako
	</h1>
	<p class="font-sans text-2xl text-stone-900 print:hidden">
		Press Ctrl+P to print
	</p>

	<div class="print:hidden my-4">
		<Holidays />
	</div>

	<div
		class="flex flex-wrap justify-center
		gap-16 print:gap-0
		px-12 mx-auto my-12 print:m-0
		will-change-transform"
	>
		{#each months as month}
			<div
				class="shrink-0 aspect-[1/1.4142]
				month-{month}
				w-80 print:h-screen print:w-screen"
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
