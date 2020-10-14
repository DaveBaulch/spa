<template>
  <article class="carousel__item">
    <div class="carousel__wrapper">  
      <div class="carousel__background picturefill-background is-lazy">
        <span class="picturefill-background-source" :data-src="itemData.imgSrc1"></span>
        <span
          class="picturefill-background-source"
          :data-src="itemData.imgSrc2"
          data-media="(min-width: 576px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="pagitemDataeData.imgSrc3"
          data-media="(min-width: 768px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="itemData.imgSrc4"
          data-media="(min-width: 992px)"
        ></span>
      </div>

      <div class="container">
        <div class="carousel__content">
          <h2 class="carousel__heading" v-if="pageData">{{ itemData.title }}</h2>
          <div class="carousel__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Donec vehicula nisl augue, vel blandit
              quam vestibulum eget. Phasellus posuere ipsum et velit consectetur, nec efficitur risus pulvinar.</p>
          </div>
          <BaseLink :text="itemData.btnText" to="/about" type="router-link" class="carousel__button" v-if="pageData" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import BaseLink from '@/components/ui/BaseLink';

export default {
  name: 'AppCarouselItem',
  props: {
    itemData: null
  },
    components: { 
      BaseLink
    },
}
</script>


<style scoped>

</style>
