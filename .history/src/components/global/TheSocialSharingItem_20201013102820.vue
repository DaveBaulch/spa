<template>
  <a :href="href"
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

