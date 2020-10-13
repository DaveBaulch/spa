<template>
  <a :href=""
    class="social-sharing-item"
    v-bind="$attrs"
    ><slot /></a>
</template>

<script>
export default {
  name: 'TheSocialSharingItem',
  props: {
    href: {
      type: String,
      default: ''
    }
}
</script>


<style scoped>
.social-sharing-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;

  &:hover,
  &:focus {
    color: $color-link-hover;
    text-decoration: underline;
  }

</style>
