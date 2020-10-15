<template>

  <div class="home">

    <div class="container">
      <h1>Components</h1>
        <ul class="component-list">
          <li class="component-list__item"><router-link to="/" class="component-list__link">Home</router-link></li>
          <li class="component-list__item"><router-link to="/about" class="component-list__link">About</router-link></li>
        </ul>      
    </div>

    <div class="container">
      <h2>Hero banner</h2>
    </div>

    <!-- <AppHero 
      imgSrc1="https://picsum.photos/575/300?image=10"
      imgSrc2="https://picsum.photos/767/275?image=20"
      imgSrc3="https://picsum.photos/991/260?image=30"
      imgSrc4="https://picsum.photos/1500/400?image=35"
    />   -->
    <AppHero />   


    <div class="container">
      <h2>Carousel</h2>
    </div>      
    <AppCarousel />
    
  </div>

</template>

<script>
// @ is an alias to /src
import AppHero from "@/components/blocks/appHero/AppHero.vue";
import AppCarousel from "@/components/blocks/appCarousel/AppCarousel.vue";

export default {
  name: "Home",
  components: {
    AppHero,
    AppCarousel
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
  display: flex;
}

.component-list__item {
  margin: 0 10px;

  a {
    text-decoration: none;
    color: $white;    
  }
}


</style>
