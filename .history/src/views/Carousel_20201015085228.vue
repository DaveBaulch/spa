<template>

  <div class="home">

    <div class="container">
      <h1>Carousel</h1>
    </div>      
    <AppCarousel />
    
  </div>

</template>

<script>
// @ is an alias to /src
import AppCarousel from "@/components/blocks/appCarousel/AppCarousel.vue";

export default {
  name: "Home",
  components: {
    AppCarousel
  }
};
</script>

<style scoped lang="scss">
</style>
