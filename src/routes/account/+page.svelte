
<script lang="ts">
      export let data: any
</script>
<div>

{#each data.users as dat}
<a href={`/account/${dat.id}`}>{dat.title}</a>
{/each}
</div>