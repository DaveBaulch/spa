<template>
  <div id="app">
    <TheSkipLink>
      Skip navigation
    </TheSkipLink>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false">
    </TheSidenav>

    <main class="main" id="main">
      <router-view />
    </main>

    <TheFooter />

    <TheScrollTopButton>
      <img src="@/assets/images/svg/chevron-up-white.svg" />
      <span class="sr-only">Back to top</span>
    </TheScrollTopButton>

  </div>
</template>

<script>
import axios from 'axios';
import TheHeader from './components/global/TheHeader.vue';
import TheSidenav from '@/components/global/TheSidenav'
import TheFooter from '@/components/global/TheFooter'
import TheSkipLink from '@/components/global/TheSkipLink'
import TheScrollTopButton from '@/components/global/TheScrollTopButton'


export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
    TheSkipLink,
    TheScrollTopButton
  },
  data() {
    return {
      displaySidenav: false,
      footerData: null
    }
  },
  created() {
    axios
      .get('data/footer-data.json')
      .then((response) => {
        this.blockData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });            
    }
};
</script>

<style lang="scss">

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
