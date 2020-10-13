<template>
  <button
    class="button"
    :class="btnStyle"
  ><slot /></button>
</template>

<script>
export default {
  name: 'TheSocialSharingItem',
  props: {
    text: {
      type: String,
      default: '',
      required: true
    }
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
