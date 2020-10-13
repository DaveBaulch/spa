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
