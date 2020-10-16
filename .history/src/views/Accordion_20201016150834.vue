<template>

  <div class="home">

    <div class="container">
      <h1>Accordion</h1>
    </div>


    <dl class="accordion box" role="presentation">
      <accordion-item
        v-for="item in content"
        :multiple="multiple"
        :item="item"
        :groupId="groupId"
        :key="item.id">
      </accordion-item>
    </dl>

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
    },
    mounted() {
      this.groupId = 'theID'
    }
  },
};
</script>

<style scoped lang="scss">

</style>
