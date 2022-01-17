<script>
    export let month = 1;
    export let year = 2022;
    export let color = "stone";

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
    class="relative font-black text-primary bg-white col-span-3 overflow-hidden"
>
    <div
        class="absolute inset-x-0 top-4 leading-none text-[8rem] text-primary/10 z-0"
    >
        {(month + 1).toLocaleString("es", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        })}
    </div>
    <div class="absolute grid inset-0 z-10 content-center">
        <div class="text-4xl font-bold leading-none">
            {monthNames[month]}
        </div>
        <div class="text-3xl font-light">{year}</div>
    </div>
</div>
