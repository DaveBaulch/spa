<template>

  <div class="home">

    <div class="container">
      <h1>Sectors</h1>
    </div>

    <AppSectors />   

  </div>

</template>

<script>
// @ is an alias to /src
import AppSectors from "@/components/blocks/appSectors/AppSectors.vue";

export default {
  name: "Sectors",
  components: {
    AppQuote
  }
};
</script>

<style scoped lang="scss">

</style>
