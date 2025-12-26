<script>
	import { themes, currentTheme, showTestPage } from "./shared.js";
</script>

<div>
	<label for="theme-select" class="mr-2 text-stone-600">Theme 🖌️</label>
	<select
		id="theme-select"
		bind:value={$currentTheme}
		class="text-sm text-stone-600 cursor-pointer
		py-3 px-4
		rounded-full border border-solid border-stone-200
		bg-stone-50 hover:bg-stone-200"
	>
	{#each themes as theme}
		<option value={theme.id}>{theme.name}</option>
	{/each}
	</select>

	<label class="cursor-pointer px-2 py-3 mx-4 hover:bg-stone-200 rounded-full">
		<input type="checkbox" bind:checked={$showTestPage} />
		<span class="font-medium text-stone-700">
			Print test page 🧪
		</span>
	</label>
</div>