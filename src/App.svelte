<script>
	import Holidays from "./Holidays.svelte";
	import Month from "./Month.svelte";

	let months = [...Array(12).keys()];
	let year = new Date().getFullYear();
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
	<p class="font-sans text-lg text-stone-900 print:hidden">
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

	<footer class="p-4 bg-stone-50">
		Made with 👑🦠 from Argentina,
		<a
			class="underline decoration-rose-500 text-rose-500"
			href="https://github.com/AIDEA775/almanako"
			rel="noopener noreferrer"
			target="_blank">fork me!</a
		>
	</footer>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	html,
	body {
		margin: 0;
		padding: 0;
		-webkit-print-color-adjust: exact !important;
	}

	* {
		box-sizing: border-box;
	}

	.text-fluid {
		font-size: clamp(2rem, 4vw, 4rem);
	}

	.month-0 {
		--color-primary: 48 188 102;
		--font-primary: Roboto;
	}
	.month-1 {
		--color-primary: 235 87 220;
		--font-primary: Fraunces;
	}
	.month-2 {
		--color-primary: 220 131 116;
		--font-primary: Dosis;
	}
	.month-3 {
		--color-primary: 157 201 91;
		--font-primary: Bodoni Moda;
	}
	.month-4 {
		--color-primary: 55 179 247;
		--font-primary: Josefin Sans;
	}
	.month-5 {
		--color-primary: 93 107 237;
		--font-primary: Montserrat;
	}
	.month-6 {
		--color-primary: 161 161 161;
		--font-primary: Open Sans;
	}
	.month-7 {
		--color-primary: 169 121 250;
		--font-primary: Oswald;
	}
	.month-8 {
		--color-primary: 250 204 116;
		--font-primary: Ubuntu;
	}
	.month-9 {
		--color-primary: 88 216 218;
		--font-primary: Stick No Bills;
	}
	.month-10 {
		--color-primary: 36 202 168;
		--font-primary: Tourney;
	}
	.month-11 {
		--color-primary: 220 68 93;
		--font-primary: Sansita Swashed;
	}
</style>
