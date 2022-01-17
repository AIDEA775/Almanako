<script>
	import Month from "./Month.svelte";

	let months = [...Array(12).keys()];
</script>

<main class="bg-stone-100 text-center p-12" style="font-size: 24px">
	<h1 class="font-sans font-black text-3xl text-stone-700">Almanako</h1>
	<p class="font-sans text-lg text-stone-900">
		Presiona Ctrl+P para imprimir el calendario
	</p>

	<div class="grid grid-cols-3 gap-16 mt-12 mx-auto max-w-screen-xl">
		{#each months as month}
			<div class="aspect-[1/1.4142] month-{month} bg-primary">
				<Month {month} />
			</div>
		{/each}
	</div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

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
		--font-primary: Grenze Gotisch;
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
