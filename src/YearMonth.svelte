<script>
    export let month = 1;
    export let year = 2022;

    let monthNames = [
        "ENE",
        "FEB",
        "MAR",
        "ABR",
        "MAY",
        "JUN",
        "JUL",
        "AGO",
        "SEP",
        "OCT",
        "NOV",
        "DIC",
    ];
</script>

<div
    class="relative leading-none
    overflow-hidden col-span-3
    text-primary bg-white"
>
    <div
        class="absolute
        inset-x-0 top-4 z-0
        text-[7rem] print:text-[24vh]
        text-primary/10 font-black"
    >
        {(month + 1).toLocaleString("es", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        })}
    </div>
    <div
        class="absolute grid content-center
        inset-0 z-10"
    >
        <div
            class="uppercase font-bold leading-none
            text-4xl print:text-[6vh]"
        >
            {monthNames[month]}
        </div>
        <div
            class="font-light leading-none
            text-3xl print:text-[5vh]"
        >
            {year}
        </div>
    </div>
</div>
