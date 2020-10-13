<template>
  <a class="btn-scroll-top" id="scroll-top" href="#skip-navigation">
    <slot />
  </a>
</template>

<script>
export default {
  name: "TheScrollTopButton",
};
</script>


<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.btn-scroll-top {
  position: fixed;
  z-index: 100;
  bottom: 20px;
  width: 44px;
  height: 44px;
  overflow: hidden;
  text-indent: -1999em;
  color: $white;
  background-color: $grey-dark;
  border: 0;
  // opacity: 0;
  transition: 300ms ease all;

  @include breakpoint(md) {
    bottom: 85px;
  }

  &.is-active {
    opacity: 0.9;
  }

  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    fill: white;
  }  
}

</style>