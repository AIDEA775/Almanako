<script>
    import DayOfMonth from "./DayOfMonth.svelte";
    import DayOfWeek from "./DayOfWeek.svelte";
    import YearMonth from "./YearMonth.svelte";

    export let month = 0;
    export let year = 2022;

    console.groupCollapsed(`Process: ${year} ${month}`);

    let dayNames = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];

    let dayNumbers = getMatrix(year, month);

    let lastRow = emptyDaysInWeek(dayNumbers[4]);
    if (lastRow >= 3) {
        // three empty space in the last column
        dayNumbers[4][5] = "mini";
        dayNumbers[4][6] = null;
    } else {
        // empty space in the first column
        dayNumbers[0][0] = "mini";
        dayNumbers[0][1] = null;
    }
    setEmptyDays(dayNumbers, 0);
    setEmptyDays(dayNumbers, 4);

    console.table(dayNumbers);

    console.groupEnd();

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
            .map((_) => Array(7).fill(0));

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

    function indexEmptyDaysInWeek(week) {
        return week.reduce(
            (acc, w, i) => (w === 0 ? (acc.push(i), acc) : acc),
            [],
        );
    }

    function setEmptyDays(dayNumbers, week) {
        let emptyDays = indexEmptyDaysInWeek(dayNumbers[week]);
        if (emptyDays.length >= 2) {
            for (const i of emptyDays) {
                dayNumbers[week][i] = null;
            }
            let first = emptyDays[0];
            dayNumbers[week][first] = emptyDays.length;
        }
    }
</script>

<div
    class="grid grid-cols-7
    grid-rows-[1.5rem,repeat(5,1fr)] print:grid-rows-[4.5vh,repeat(5,1fr)]
    pt-2 print:pt-[1.5vh]
    border border-2 print:border-[0.5vh] border-primary
    justify-items-stretch h-full
    shadow-xl shadow-[color:rgb(var(--color-primary)/0.1)] print:shadow-none
    font-primary bg-white"
>
    {#each dayNames as day}
        <DayOfWeek {day} />
    {/each}

    {#each dayNumbers as weeks}
        {#each weeks as date}
            {#if typeof date === "string"}
                <YearMonth {year} {month} {date} />
            {:else if typeof date === "number"}
                {#if date > 0}
                    <div class="bg-white z-10 border border-white col-span-{date}" />
                {:else}
                    <div class="bg-white" />
                {/if}
            {:else if date !== null}
                <DayOfMonth {date} />
            {/if}
        {/each}
    {/each}
</div>
