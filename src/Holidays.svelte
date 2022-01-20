<script>
    import { birthdaysICS, holidaysICS } from "./stores";

    let holidaysFile;
    let birthdayFile;

    $: if (holidaysFile) {
        console.log(holidaysFile);
        holidaysICS.set(holidaysFile[0]);
    }

    $: if (birthdayFile) {
        console.log(birthdayFile);
        birthdaysICS.set(birthdayFile[0]);
    }

    let showing = false;

    function toggle() {
        showing = !showing;
    }
</script>

<button
    class="py-2 px-4 rounded-full bg-stone-50 font-semibold hover:bg-stone-200"
    on:click={toggle}
>
    OPTIONS
</button>

<div
    class="flex flex-col gap-y-4
    transition-scroll overflow-hidden duration-700
    {showing
        ? 'max-h-[14rem] landscape:max-h-[7rem] opacity-100 my-8'
        : 'max-h-0 opacity-0 my-0'}
    items-center justify-center "
>
    <p class="text-stone-500">Add events to calendar in .ics format</p>

    <div class="flex flex-col landscape:flex-row gap-x-16 gap-y-8">
        <div
            class="flex flex-col group gap-y-2"
            title="Selecciona un archivo .ICS con los feriados, podes descargar uno desde Google Calendar."
        >
            <label for="holidays" class="font-semibold">Holidays 📅</label>
            <input
                type="file"
                id="holidays"
                bind:files={holidaysFile}
                title="Selecciona un archivo .ICS con los feriados, podes descargar uno desde Google Calendar."
            />
        </div>

        <div
            class="flex flex-col group gap-y-2"
            title="Selecciona un archivo .ICS con los cumpleaños."
        >
            <label for="birthdays" class="font-semibold">Birthdays 🎂 </label>
            <input
                type="file"
                id="birthdays"
                bind:files={birthdayFile}
                title="Selecciona un archivo .ICS con los cumpleaños."
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
