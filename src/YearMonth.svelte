<script>
    export let month = 1;
    export let year = 2022;
    export let date = "large";

    let span = date == "large" ? "3" : "2";

    let now = new Date(Date.UTC(year, month + 1));
    let monthName = now.toLocaleDateString("es-US", {
        month: "short",
    }).substring(0, 3); // Only 3 characters
</script>

<div
    class="relative leading-none
    overflow-hidden col-span-{span}
    border border-white
    text-primary bg-white"
>
    <div class="absolute grid content-center inset-0 z-10">
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
