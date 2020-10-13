<template>
  <a 
    href="#main" 
    id="skip-navigation" 
    class="skip-link" 
    ref="skip-navigation" 
    v-scroll-to="{el: '#main'}">
    <slot />
  </a>
</template>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';

.skip-link {
  padding: 0.5rem 1rem 1rem 1rem;
  background-color: $white;
  display: block;
  position: absolute;
  top: -100%;
  left: 2px;
  z-index: 200;
  text-decoration: none !important;

  &:focus {
    top: 2px;
    transition: $transition-speed-fast ease all;
    color: $black;
  }
}

.skip-link:visited {
  color: $black;
}
</style>