<script>
    import DayOfMonth from "./DayOfMonth.svelte";
    import DayOfWeek from "./DayOfWeek.svelte";
    import YearMonth from "./YearMonth.svelte";

    export let month = 0;
    export let year = 2022;

    let dayNames = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];

    let dayNumbers = getMatrix(year, month);
    console.log(dayNumbers);

    let lastRow = emptyDaysInWeek(dayNumbers[4]);
    if (lastRow >= 3) {
        // three empty space in the last column
        dayNumbers[4][4] = "bottom";
        dayNumbers[4][5] = null;
        dayNumbers[4][6] = null;
    } else {
        // empty space in the first column
        dayNumbers[0][0] = "top";
        dayNumbers[0][1] = null;
        dayNumbers[0][2] = null;
    }

    function getMatrix(year, month) {
        let currentDate = new Date(year, month);
        let firstDay = currentDate.getDay();
        let totalDays = daysInMonth(year, month);
        let fillPreviousMonth = weekCount(year, month - 1) == 6;
        console.log(`firstDay: ${firstDay}`);
        console.log(`totalDays: ${totalDays}`);
        console.log(`fillPreviousMonth: ${fillPreviousMonth}`);

        let array = Array(5)
            .fill(0)
            .map((_, i) => Array(7).fill(0));
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 7; j++) {
                let d = i * 7 + j;
                if (
                    (fillPreviousMonth || d >= firstDay) &&
                    d < firstDay + totalDays
                ) {
                    array[i][j] = new Date(year, month, d - firstDay + 1);
                }
            }
        }
        return array;
    }

    function daysInMonth(year, month) {
        return 32 - new Date(year, month, 32).getDate();
    }

    function weekCount(year, month) {
        var firstOfMonth = new Date(year, month, 1);
        var lastOfMonth = new Date(year, month + 1, 0);
        var used = firstOfMonth.getDay() + lastOfMonth.getDate();
        return Math.ceil(used / 7);
    }

    function emptyDaysInWeek(week) {
        return week.reduce((acc, b) => acc + (b === 0 ? 1 : 0), 0);
    }
</script>

<div
    class="grid grid-cols-7 grid-rows-[1.5rem]
    border pt-2 border-primary 
    justify-items-stretch h-full
    gap-x-px drop-shadow-xl print:drop-shadow-none
    font-primary bg-primary"
>
    {#each dayNames as day}
        <DayOfWeek {day} />
    {/each}

    {#each dayNumbers as weeks}
        {#each weeks as date}
            {#if typeof date === "string"}
                <YearMonth {year} {month} />
            {:else}
                <DayOfMonth {date} />
            {/if}
        {/each}
    {/each}
</div>
