
<script>
    let first, second
    let sum  = 0
    function handleSum() {
        sum = parseInt(first) + parseInt(second)
    }
</script>


<div>
    <input type="text" bind:value={first}>
    <p>+</p>
    <input type="text" bind:value={second}>
    <p>{sum}</p>
    <button on:click={handleSum}>sum</button>
</div>