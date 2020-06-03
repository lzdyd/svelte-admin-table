<script>
  import Sidebar from './Sidebar/Sidebar.svelte';
  import DataGrid from './DataGrid/DataGrid.svelte';

  import search from 'assets/svg/search.svg';
  import graph from 'assets/svg/graph.svg';
</script>

<div class="wrapper">
  <Sidebar />
  <main>
    <header>
      <div class="title">
        DASHBOARD
      </div>
      <div class="controls">
        <button class="search">
          <img src="{search}" alt="Search" />
        </button>
        <button>
          <img src="{graph}" alt="Notifications">
        </button>
        <div>
          Profile
        </div>
      </div>
    </header>
    <DataGrid />
  </main>
</div>

<style type="text/scss">
  .wrapper {
    display: flex;
    flex-flow: row nowrap;
    padding: 24px;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-basis: 92.5%;

    header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 5px;

      img {
        width: 20px;
        height: 20px;
      }

      button {
        display: flex;
        align-items: flex-start;
        background: none;
        border: none;
      }

      .controls {
        display: flex;
        flex-direction: row;

        > *:not(:last-child) {
          margin-right: 40px;
        }
      }
    }
  }
</style>

