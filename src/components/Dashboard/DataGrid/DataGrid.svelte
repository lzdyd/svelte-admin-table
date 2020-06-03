<script>
  import { onMount } from 'svelte';

  import http from 'services/api/Http';

  let gridData = [];

  onMount(async () => {
    try {
      gridData = await http.get('/grid');
    } catch (error) {
      console.log(error)
    }
  });
</script>

{#if !gridData.length}
  <p>loading...</p>
{:else}
  <table>
    <tr>
      <th>Name</th>
      <th>Country</th>
      <th>City</th>
      <th>Salary</th>
    </tr>
  {#each gridData as val}
    <tr>
      <td>{val.name}</td>
      <td>{val.country}</td>
      <td>{val.city}</td>
      <td>{val.salary}</td>
    </tr>
  {/each}
  </table>
{/if}

<style type="text/scss">
  table {
    margin-top: 32px;
  }
</style>
