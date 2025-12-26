<script>
	import { themes, getMonthName } from "./shared.js";
	const indices = [...Array(12).keys()];;
</script>

<div class="flex flex-col w-full h-screen bg-white overflow-hidden">
	{#each themes as theme}
		<div class="flex flex-col flex-1" data-theme={theme.id}>
			<h2 class="text-xs text-black">{theme.name} <span class="text-xs text-stone-500">({theme.id})</span>
			</h2>

			<div class="grid grid-cols-12 gap-1 h-full">
				{#each indices as i}
					<div class="flex flex-col p-1
						month-{i} font-primary text-primary
						border border-2 border-primary
						print:border-[0.5vh]">

						<span class="text-2xl uppercase font-bold leading-none">
							{ getMonthName(i) }
						</span>

						<div class="flex border-b-2 m-1" />

						<div class="flex flex-1 flex-col justify-center bg-primary/[.2]">
							<div class="leading-none py-2 text-xl print:text-[4.5vh] text-black">
							1
							</div>
							<div class="flex grow"/>
							<div class="flex border-b-2 m-1 border-primary" />
						</div>

						<div class="leading-none text-xl print:text-[4.5vh] text-primary font-black pt-2">
						1
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
