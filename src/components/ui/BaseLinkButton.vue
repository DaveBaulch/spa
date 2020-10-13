<template>
  <a
    class="button"
    :href="url"
  >{{ text }}</a>
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
    padding: 10px;
    display: inline-block;
    border: 1px solid $black;
  }
</style>
