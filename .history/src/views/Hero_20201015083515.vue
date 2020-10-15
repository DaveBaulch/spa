<template>

  <div class="home">

    <div class="container">
      <h2>Hero</h2>
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

.component-list {
  list-style: none;
  padding: 0;
  margin: 0;

}

.component-list__item {

}

.component-list__link {
  margin: 0 10px;

  a {
    text-decoration: none;
    color: $white;    
  }
}


</style>
