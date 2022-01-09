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
			<div class="aspect-[1/1.4142] text-sky-600">
				<Month {month} />
			</div>
		{/each}
	</div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
