<template>
  <section class="section carousel-block">
    <VueSlickCarousel v-bind="settings">
      <!-- <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div> -->

<ol class="carousel">
    <li class="carousel__item">

        <div class="carousel__background picturefill-background is-lazy">
          <span class="picturefill-background-source" data-src="https://picsum.photos/575/520?image=10"></span>
          <span
            class="picturefill-background-source"
            data-src="https://picsum.photos/767/400?image=10"
            data-media="(min-width: 576px)"
          ></span>
          <span
            class="picturefill-background-source"
            data-src="https://picsum.photos/991/400?image=10"
            data-media="(min-width: 768px)"
          ></span>
          <span
            class="picturefill-background-source"
            data-src="https://picsum.photos/1600/400?image=10"
            data-media="(min-width: 992px)"
          ></span>
        </div>

        <div class="container-fluid container-fluid--contained">
          <div class="carousel__content">
            <h2 class="carousel__heading"><span class="text-background">1 Lorem ipsum dolor sit amet</span></h2>
            <p class="carousel__body">
              <span class="text-background"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Donec vehicula nisl augue, vel blandit
                quam vestibulum eget. Phasellus posuere ipsum et velit consectetur, nec efficitur risus pulvinar.</span
              >
            </p>
            <a href="" title="" class="btn carousel__button">Read more button</a>
            <a href="" title="" class="carousel__link"><span class="text-background">Link button text</span></a>
          </div>
        </div>
      </article>
    </li>

    <li class="carousel__item">
      <article class="carousel__wrapper">

        <div class="carousel__background picturefill-background is-lazy">
          <span class="picturefill-background-source" data-src="https://picsum.photos/575/520?image=35"></span>
          <span
            class="picturefill-background-source"
            data-src="https://picsum.photos/767/400?image=35"
            data-media="(min-width: 576px)"
          ></span>
          <span
            class="picturefill-background-source"
            data-src="https://picsum.photos/991/400?image=35"
            data-media="(min-width: 768px)"
          ></span>
          <span
            class="picturefill-background-source"
            data-src="https://picsum.photos/1600/400?image=35"
            data-media="(min-width: 992px)"
          ></span>
        </div>

        <div class="container-fluid container-fluid--contained">
          <div class="carousel__content">
            <h2 class="carousel__heading"><span class="text-background">2 Lorem ipsum dolor sit amet</span></h2>
            <p class="carousel__body">
              <span class="text-background"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula nisl augue, vel blandit quam
                vestibulum eget. Phasellus posuere ipsum et velit consectetur, nec efficitur risus pulvinar.</span
              >
            </p>
            <a href="" class="btn carousel__button">Read more button</a>
            <a href="" title="" class="carousel__link"><span class="text-background">Link button text</span></a>
          </div>
        </div>
      </article>
    </li>

    <li class="carousel__item">
      <article class="carousel__wrapper">
        <!-- no js fallback image -->

        <div class="carousel__background picturefill-background is-lazy">
          <span class="picturefill-background-source" data-src="https://picsum.photos/575/520?image=40"></span>
          <span
            class="picturefill-background-source"
            data-src="https://picsum.photos/767/400?image=40"
            data-media="(min-width: 576px)"
          ></span>
          <span
            class="picturefill-background-source"
            data-src="https://picsum.photos/991/400?image=40"
            data-media="(min-width: 768px)"
          ></span>
          <span
            class="picturefill-background-source"
            data-src="https://picsum.photos/1600/400?image=40"
            data-media="(min-width: 992px)"
          ></span>
        </div>

        <div class="container-fluid container-fluid--contained">
          <div class="carousel__content">
            <h2 class="carousel__heading"><span class="text-background">3 Lorem ipsum dolor sit amet</span></h2>
            <p class="carousel__body">
              <span class="text-background"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula nisl augue, vel blandit quam
                vestibulum eget. Phasellus posuere ipsum et velit consectetur, nec efficitur risus pulvinar.</span
              >
            </p>
            <a href="" class="btn carousel__button">Read more button</a>
            <a href="" title="" class="carousel__link"><span class="text-background">Link button text</span></a>
          </div>
        </div>
      </article>
    </li>
  </ol>

    </VueSlickCarousel>
  </section>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'AppCarousel',
    components: { VueSlickCarousel },
    data: function () {
      return {
        settings: {
          "dots": true,
          "dotsClass": "slick-dots custom-dot-class",
          "edgeFriction": 0.35,
          "infinite": false,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    },  
  }
</script> 