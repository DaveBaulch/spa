<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    : {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>

</style>
