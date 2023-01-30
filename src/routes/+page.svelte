
<script>
	

    let title = ""
    const changeValue = () =>{
        title = "Dirk"
    }
</script>
{title}
<button on:click={changeValue}>Change value</button>
<input type="text" bind:value={title}/>
