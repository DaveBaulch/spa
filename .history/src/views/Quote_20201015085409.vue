<template>

  <div class="home">

    <div class="container">
      <h1>Quote</h1>
    </div>

    <AppQuote />   

  </div>

</template>

<script>
// @ is an alias to /src
import AppQuote from "@/components/blocks/appQuote.vue";

export default {
  name: "Home",
  components: {
    AppQuote
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';


</style>
