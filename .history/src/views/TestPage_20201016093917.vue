<template>

  <div class="home">

    <div class="container">
      <h1>Card List</h1>
    </div>

    <AppHero />
    <AppText />
    <CardList />   

  </div>

</template>

<script>
// @ is an alias to /src
import AppHero from "@/components/blocks/appHero/AppHero.vue";
import AppText from "@/components/blocks/AppText.vue";
import CardList from "@/components/blocks/CardList.vue";

export default {
  name: "Cards",
  components: {
    AppHero,
    AppText,
    CardList
  }
};
</script>

<style scoped lang="scss">

</style>
