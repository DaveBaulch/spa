<template>

  <div class="home">

    <div class="container">
      <h1>Accordion</h1>
    </div>




  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Accordion",
  props: {
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped lang="scss">

</style>
