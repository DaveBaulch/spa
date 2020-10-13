<template>
    <a class="btn-scroll-top" id="scroll-top" href="#skip-navigation">
      <img src="@/assets/images/svg/chevron-up-white.svg"/>
      <span class="sr-only">Back to top</span>
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
  opacity: 0;
  transition: 300ms ease all;

  @include if-ltr {
    right: 20px;
  }

  @include if-rtl {
    left: 20px;
  }

  @include breakpoint(md) {
    bottom: 85px;

    @include if-ltr {
      right: 65px;
    }

    @include if-rtl {
      left: 65px;
    }
  }

  &.is-active {
    opacity: 0.9;
  }
}

.btn-scroll-top__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  fill: white;
}
</style>