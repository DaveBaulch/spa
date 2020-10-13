<template>
  <a
    class="button"
    :href="url"
  ><slot /></a>
</template>

<script>
export default {
  name: 'BaseLinkButton',
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


<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';
  .button {
    border: 1px solid $black;
  }
</style>
