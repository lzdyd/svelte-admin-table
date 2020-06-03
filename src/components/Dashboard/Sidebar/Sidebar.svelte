<script>
  import { UI } from 'store/store';

  const toggleSidebar = () => {
    UI.update(state => ({ ...state, isSidebarActive: !state.isSidebarActive }));
  };
</script>

<div class="sidebar" class:active="{$UI.isSidebarActive}">
  <button class="nav-toggler" on:click={toggleSidebar}>
    <i class="burger-donuts"></i>
    <i class="burger-bars"></i>
  </button>

  <nav class="sidebar-nav">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </nav>
</div>

<style type="text/scss">
  @import 'style/theme.scss';
  @import 'style/mixins';

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 7.5%;

    .nav-toggler {
      position: relative;
      display: flex;
      align-items: center;
      width: 25px;
      height: 25px;
      background: none;
      border: none;

      &:active, &:focus {
        background: none;
        border: none;
      }

      &:hover {
        cursor: pointer;
      }

      .burger-donuts {
        position: relative;
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: $main-white;

        &::before, &::after {
          content: '';
          position: absolute;
          left: 0;
          top: -7px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: $main-white;
        }

        &::after {
          top: 7px;
        }

        @include variant('.active') {
          background-color: transparent;

          &::before, &::after {
            top: -2px;
            left: 100%;
            width: 15px;
            height: 1px;
            border-radius: 0;
          }

          &::after {
            top: 5px;
          }
        }
      }

      .burger-bars {
        position: absolute;
        right: 0;
        display: block;
        width: 20px;
        height: 2px;
        background-color: $main-white;

        &::before, &::after {
          content: '';
          position: absolute;
          left: 0;
          top: -7px;
          width: 100%;
          height: 2px;
          background-color: $main-white;
        }

        &::after {
          top: 7px;
        }

        @include variant('.active') {
          width: 25px;

          &::before, &::after {
            width: 25px;
          }
        }
      }
    }

    .sidebar-nav {
      transition: all 1s;

      @include variant('.active') {
        transform: translate(20px);
      }
    }
  }
</style>
