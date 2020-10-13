<template>

  <div>
    <AppHero />
    <div class="container home">
      
      <h1>Home page</h1>
      <h2>Components</h2>
    </div>]

  </div>

</template>

<script>
// @ is an alias to /src
import AppHero from "@/components/blocks/AppHero.vue";

export default {
  name: "Home",
  components: {
    AppHero
  }
};
</script>
