<script>
    import { slide } from "svelte/transition";
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

    let showing = !false;

    function toggle() {
        showing = !showing;
    }
</script>

<button
    class="my-4 py-2 px-4 rounded-full bg-stone-50 font-semibold hover:bg-stone-200"
    on:click={toggle}
>
    Más opciones
</button>

{#if showing}
    <div
        transition:slide
        class="flex flex-col items-center justify-center landscape:flex-row gap-x-16 gap-y-8 pt-4"
    >
        <div
            class="flex flex-col group"
            title="Selecciona un archivo .ICS con los feriados, podes descargar uno desde Google Calendar."
        >
            <label for="holidays" class="font-semibold">Feriados 📅</label>
            <input
                type="file"
                id="holidays"
                bind:files={holidaysFile}
                title="Selecciona un archivo .ICS con los feriados, podes descargar uno desde Google Calendar."
                class="text-sm text-stone-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border file:border-solid
                file:text-sm file:font-semibold
                file:bg-stone-100 file:text-stone-700
                group-hover:file:bg-stone-200"
            />
        </div>

        <div
            class="flex flex-col group"
            title="Selecciona un archivo .ICS con los cumpleaños."
        >
            <label for="birthdays" class="font-semibold"> Cumpleaños 🎂 </label>
            <input
                type="file"
                id="birthdays"
                bind:files={birthdayFile}
                title="Selecciona un archivo .ICS con los cumpleaños."
                class="text-sm text-stone-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border file:border-solid
            file:text-sm file:font-semibold
            file:bg-stone-100 file:text-stone-700
            group-hover:file:bg-stone-200"
            />
        </div>
    </div>
{/if}
