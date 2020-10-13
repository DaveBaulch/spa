<template>
  <div id="app">
    <TheSkipLink>
      <p>
    </TheSkipLink>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false" />
    <nuxt/>

    <router-view />

    <TheFooter />

  </div>
</template>

<script>
import TheHeader from './components/global/TheHeader.vue';
import TheSidenav from '@/components/global/TheSidenav'
import TheFooter from '@/components/global/TheFooter'
import TheSkipLink from '@/components/global/TheFooter'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
    TheSkipLink
  },
  data() {
    return {
      displaySidenav: false
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
