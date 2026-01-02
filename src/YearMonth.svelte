<script>
	import { getMonthName } from "./shared.js";

    export let month = 1;
    export let year = 2022;
    export let date = "large";

    let span = date == "large" ? "3" : "2";

    let monthName = getMonthName(month)
    let monthNum = (month + 1).toLocaleString("es", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
</script>

<div
    class="flex flex-col justify-center px-3 print:px-[2.5vh]
    {date === "first" ? "items-start" : "items-end"}
    overflow-hidden col-span-{span}
    border border-white leading-none
    text-primary bg-white"
>
    <div
        class="font-light
        text-[1.3em] print:text-[4.5vh]"
    >
        {monthNum}
    </div>
    <div
        class="uppercase font-light
        text-[1.3em] print:text-[4.5vh]"
    >
        {monthName}
    </div>
    <div
        class="font-light
        text-[1.2em] print:text-[4vh]"
    >
        {year}
    </div>
</div>
