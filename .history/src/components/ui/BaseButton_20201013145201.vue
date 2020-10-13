<template>
  <component
    :is="type"
    v-bind="typeProps"
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
  },

  computed: {
      type() {
        return this.to ? 'nuxt-link' : 'button';
      },

      typeProps() {
        return this.to
          ? {
              to: this.to,
              tag: 'button',
              replace: true
            }
          : null;
      }
    }  
  }
</script>


<style scoped>

</style>
