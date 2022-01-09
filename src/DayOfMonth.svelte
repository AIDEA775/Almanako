<script>
	export let date;
</script>

{#if date !== null}
	<div class="p-2 bg-white">
		{#if date === 0}
			<div />
		{:else}
			<div class="h-full border-b-2 border-green-600 justify-center">
				{date.getDate()}
			</div>
		{/if}
	</div>
{/if}
