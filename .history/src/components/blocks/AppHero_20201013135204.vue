<template>
<article class="section banner-block">
  <div class="banner">
    <!-- no js fallback image -->
    <div class="fallback-image">
      <div class="banner__background" style="background-image: url('https://picsum.photos/991/260?image=45');"></div>
    </div>

    <!-- js enabled -->
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

    <div class="container-fluid container-fluid--contained">
      <div class="banner__content">
        <div class="banner__inner">
          <h2 class="banner__heading"><span class="text-background">General image promo title</span></h2>

          <p class="banner__text">
            <span class="text-background"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate tenetur officiis excepturi porro
              ducimus ab provident, quas temporibus ratione illo quae neque cupiditate totam facere nulla ad
              exercitationem itaque incidunt.</span
            >
          </p>
        </div>

        <a href="" class="btn banner__btn">View more</a>
      </div>
    </div>
  </div>
</article>
</template>

<script>
export default {
};
</script>

<style scoped>

</style>