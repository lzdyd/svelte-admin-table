<script>
  import Dashboard from './components/Dashboard/Dashboard.svelte';
</script>

<Dashboard />

<style type="text/scss" global>
  @import 'style/global.scss';
  @import 'style/theme.scss';

  html {
    font-size: 16px;
  }

  body {
    line-height: 1;
    background-color: $main-blue;
    color: $main-white;
  }
</style>
