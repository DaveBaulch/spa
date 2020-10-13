<template>

  <div>
    <AppHero 
      imgSrc1="https://picsum.photos/575/300?image=10"
      imgSrc2="https://picsum.photos/767/275?image=20"
      imgSrc3="https://picsum.photos/991/260?image=30"
      imgSrc4="https://picsum.photos/1500/400?image=35"
      btnText="Click me"
    />

    <AppCarousel />


    <div class="container home">
      <h1>Home page</h1>
      <h2>Components</h2>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src
import AppHero from "@/components/blocks/AppHero.vue";
import AppCarousel from "@/components/blocks/AppCarousel.vue";

export default {
  name: "Home",
  components: {
    AppHero,
    AppCarousel
  }
};
</script>
