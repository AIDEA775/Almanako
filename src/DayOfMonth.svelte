<script>
	export let date;
</script>

{#if date !== null}
	<div
		class="bg-white leading-none border-y border-white
		p-2 print:p-[1vh]
		text-xl print:text-[4vh]"
	>
		{#if date === 0}
			<div />
		{:else}
			<div
				class="h-full justify-center border-b-2
				{date.getDay() === 0 || date.getDay() === 6
					? 'text-rose-500 border-rose-500'
					: 'text-black border-black'}"
			>
				{date.getDate()}
			</div>
		{/if}
	</div>
{/if}
