<script>
    export let month = 1;
    export let year = 2022;

    let date = new Date(Date.UTC(year, month + 1));

    let monthName = date.toLocaleDateString("default", {
        month: "short",
    });
</script>

<div
    class="relative leading-none
    overflow-hidden col-span-3
    outline outline-1
    text-primary bg-white"
>
    <div
        class="absolute grid content-center
        inset-0 z-10"
    >
        <div
            class="uppercase font-bold leading-none
            text-4xl print:text-[6vh]"
        >
            {monthName.replaceAll(".", "")}
        </div>
        <div
            class="font-light leading-none
            text-3xl print:text-[5vh]"
        >
            {year}
        </div>
    </div>
</div>
