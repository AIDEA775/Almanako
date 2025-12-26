<script>
    import { icsList, parse } from "./shared";

    icsList.subscribe((value) => {
        console.group("icsFiles status");
        for (const item of value) {
            console.log(item);
        }
        console.groupEnd();
    });
</script>

<div
    class="flex flex-col gap-y-1 my-8
    items-center justify-center"
>
    <p class="text-stone-500">Add events to calendar with .ics files</p>

    <div class="flex flex-col gap-2">
        {#each $icsList as icsFile}
            <div class="flex flex-row items-center group">
                <input
                    type="file"
                    accept="text/calendar"
                    id={icsFile.label}
                    on:change={async (ev) => {
                        icsFile.file = ev.target.files;
                        icsFile.data = await parse(ev.target.files);
                    }}
                    title="Select a .ICS file with birthdays."
                />
                <div class="font-medium text-stone-700">{icsFile.label}</div>
            </div>
        {/each}
    </div>
</div>

<style lang="postcss">
    input[type="file"] {
        @apply text-sm text-stone-500
            file:mr-2 file:py-2 file:px-4
            file:rounded-full file:border file:border-solid file:border-stone-200
            file:text-sm
            file:bg-stone-100 file:text-stone-700
            group-hover:file:bg-stone-200;
    }
</style>
