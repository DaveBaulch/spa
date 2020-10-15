<template>

  <div class="home">

    <div class="container">
      <h1>Card List</h1>
    </div>

    <AppQuote />   

  </div>

</template>

<script>
// @ is an alias to /src
import CardList from "@/components/blocks/CardList.vue";

export default {
  name: "Quote",
  components: {
    CardList
  }
};
</script>

<style scoped lang="scss">

</style>
