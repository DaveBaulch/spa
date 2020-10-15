<template>

  <div class="home">

    <div class="container">
      <h1>Hero</h1>
    </div>

    <AppHero />   

  </div>

</template>

<script>
// @ is an alias to /src
import AppHero from "@/components/blocks/appHero/AppHero.vue";

export default {
  name: "Home",
  components: {
    AppHero
  }
};
</script>

<style scoped lang="scss">
@import '../assets/sass/utilities/_variables.scss';
@import '../assets/sass/utilities/_mixins.scss';

</style>
