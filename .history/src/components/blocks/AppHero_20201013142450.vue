<template>
<article class="section banner-block">
  <div class="banner">

    <div class="banner__background picturefill-background is-lazy">
      <span class="picturefill-background-source" data-src="https://picsum.photos/575/300?image=10"></span>
      <span
        class="picturefill-background-source"
        data-src="https://picsum.photos/767/275?image=20"
        data-media="(min-width: 576px)"
      ></span>
      <span
        class="picturefill-background-source"
        data-src="https://picsum.photos/991/260?image=30"
        data-media="(min-width: 768px)"
      ></span>
      <span
        class="picturefill-background-source"
        data-src="https://picsum.photos/1500/400?image=35"
        data-media="(min-width: 992px)"
      ></span>
    </div>

    <div class="container">
      <div class="banner__content">
        <div class="banner__inner">
          <h1 class="banner__heading">Hero title</h1>

          <p class="banner__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate tenetur officiis excepturi porro
            ducimus ab provident, quas temporibus ratione illo quae neque cupiditate totam facere nulla ad
            exercitationem itaque incidunt.
          </p>
        </div>

       <BaseLinkButton
        text="Link text"
        url="http:www.davebaulch.co.uk"
       />

      </div>

    </div>

  </div>

</article>

</template>

<script>
import BaseLinkButton from "@/components/ui/BaseLinkButton";
import lazyloadPicturefillBackground from "lazyload-picturefill-background";

export default {
  name: "AppHero",
  components: {
    BaseLinkButton
  },
  mounted: function () {
    new lazyloadPicturefillBackground();
  }
};
</script>


<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.banner {
  position: relative;
  background-color: $grey-light;

  .container {
    width: auto;
    position: relative;
  }
}

.banner__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.banner__content {
  text-align: center;
  padding: 4rem 1rem;

  @include breakpoint(lg) {
    padding: 8rem 1rem;
  }
}

.banner__inner {
  margin-bottom: 3rem;
  background-color: $white;
  padding: 2rem;
  color: $black;
}

</style>