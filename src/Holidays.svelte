<script>
    import { birthdaysICS, holidaysICS } from "./stores";

    let holidaysFile;
    let birthdayFile;

    $: if (holidaysFile) {
        console.log("holidaysFile:", holidaysFile);
        holidaysICS.set(holidaysFile[0]);
    }

    $: if (birthdayFile) {
        console.log("birthdayFile:", birthdayFile);
        birthdaysICS.set(birthdayFile[0]);
    }
</script>

<div
    class="flex flex-col gap-y-4
    max-h-[14rem] landscape:max-h-[7rem] opacity-100 my-8
    items-center justify-center"
>
    <p class="text-stone-500">Add events to calendar in .ics format</p>

    <div class="flex flex-col landscape:flex-row gap-x-16 gap-y-8">
        <div
            class="flex flex-col group gap-y-2"
            title="Select an .ICS file with the holidays, you can download one from Google Calendar."
        >
            <label for="holidays" class="font-semibold">Holidays 📅</label>
            <input
                type="file"
                accept="text/calendar"
                id="holidays"
                bind:files={holidaysFile}
                multiple
                title="Select an .ICS file with the holidays, you can download one from Google Calendar."
            />
        </div>

        <div
            class="flex flex-col group gap-y-2"
            title="Select a .ICS file with birthdays."
        >
            <label for="birthdays" class="font-semibold">Birthdays 🎂 </label>
            <input
                type="file"
                accept="text/calendar"
                id="birthdays"
                bind:files={birthdayFile}
                title="Select a .ICS file with birthdays."
            />
        </div>
    </div>
</div>

<style>
    input[type="file"] {
        @apply text-sm text-stone-500
            file:mr-2 file:py-2 file:px-4
            file:rounded-full file:border file:border-solid file:border-stone-200
            file:text-sm
            file:bg-stone-100 file:text-stone-700
            group-hover:file:bg-stone-200;
    }
</style>
