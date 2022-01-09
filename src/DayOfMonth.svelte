<script>
	export let date;
</script>

{#if date !== null}
	<div class="p-2 bg-white">
		{#if date === 0}
			<div />
		{:else}
			<div
				class="h-full justify-center 
				{date.getDay() === 0 || date.getDay() === 6
					? 'text-rose-500'
					: 'text-black'} border-b-2 border-current"
			>
				{date.getDate()}
			</div>
		{/if}
	</div>
{/if}
