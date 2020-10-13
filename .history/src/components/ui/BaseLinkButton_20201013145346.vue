<template>
  <component
      :is="type"
      v-bind="typeProps"
      class="button"
      :href="url"
    >{{ text }}
  </component>
</template>

<script>
export default {
  name: 'BaseLinkButton',
  props: {
    text: {
      type: String,
      default: null
    },    
    text: {
      type: String,
      default: '',
      required: true
    },
    url: {
      type: String,
      default: '',
      required: true
    },

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

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';

.button {
  display: inline-block;
  vertical-align: middle;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  border: 1px solid $grey-dark;
  margin: 0;
  padding: 1.3rem 1.5rem;
  background-color: $white;
  color: $grey-dark;
  font-weight: 700;
  text-align: center;

  &,
  &:hover {
    text-decoration: none;
  }

  /* only remove default outline if alternative focus styling is provided
  *  2.4.7 Focus Visible: Any keyboard operable user interface has a mode of operation where
  *  the keyboard focus indicator is visible. (Level AA)
  */

  &:active,
  &:focus {
    outline: 0;
    border: $focus-outline;
  }
}  
</style>
