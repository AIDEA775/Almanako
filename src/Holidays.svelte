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
    class="flex flex-col gap-y-1 my-8 justify-center"
>
    <p class="text-stone-500">Add events to calendar with .ics files</p>

    <div class="flex flex-wrap justify-center gap-2">
        {#each $icsList as icsFile}
            <div class="flex flex-col items-center">
                <label class="font-medium text-stone-700 cursor-pointer py-1"
                    for={icsFile.label}>{icsFile.label}</label>
                <input
                    type="file"
                    accept="text/calendar"
                    id={icsFile.label}
                    on:change={async (ev) => {
                        icsFile.file = ev.target.files;
                        icsFile.data = await parse(ev.target.files);
                    }}
                    title="Select a .ICS file with birthdays."
                    class="text-sm text-stone-600 cursor-pointer
                        file:mr-2 file:py-3 file:px-4
                        file:text-sm
                        file:bg-stone-100 file:text-stone-700
                        rounded-full border border-solid border-stone-200
                        bg-stone-50 hover:file:bg-stone-200"
                />
            </div>
        {/each}
    </div>
</div>
