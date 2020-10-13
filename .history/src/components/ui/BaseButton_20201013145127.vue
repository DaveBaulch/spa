<template>
  <component
    :is="type"
    class="button"
  ><slot />
</component>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    url: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>


<style scoped>

</style>
