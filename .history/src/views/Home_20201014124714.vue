<template>

  <div class="home">

    <div class="container">
      <h1>Home page</h1>
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
    <AppHero />>    


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
