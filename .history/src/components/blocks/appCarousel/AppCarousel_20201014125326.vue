<template>
  <section class="section carousel-block">
    <VueSlickCarousel v-bind="settings" class="carousel" ref="carousel">


        <AppCarouselItem :pageData="pageData" />

        <!-- <article class="carousel__item">
          <div class="carousel__wrapper">  
            <div class="carousel__background picturefill-background is-lazy">
              <span class="picturefill-background-source"  :data-src="pageData.imgSrc1"></span>
              <span
                class="picturefill-background-source"
                :data-src="pageData.imgSrc2"
                data-media="(min-width: 576px)"
              ></span>
              <span
                class="picturefill-background-source"
                :data-src="pageData.imgSrc3"
                data-media="(min-width: 768px)"
              ></span>
              <span
                class="picturefill-background-source"
                :data-src="pageData.imgSrc4"
                data-media="(min-width: 992px)"
              ></span>
            </div>

            <div class="container">
              <div class="carousel__content">
                <h2 class="carousel__heading" v-if="pageData">{{ pageData.title }}</h2>
                <div class="carousel__body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Donec vehicula nisl augue, vel blandit
                    quam vestibulum eget. Phasellus posuere ipsum et velit consectetur, nec efficitur risus pulvinar.</p>
                </div>
                <BaseLink :text="pageData.btnText" to="/about" type="router-link" class="carousel__button" v-if="pageData" />
              </div>
            </div>
          </div>
        </article> -->

        <!-- <article class="carousel__item">
          <div class="carousel__wrapper">  

            <div class="carousel__background picturefill-background is-lazy">
              <span class="picturefill-background-source" data-src="https://picsum.photos/767/275?image=20"></span>
              <span
                class="picturefill-background-source"
                data-src="https://picsum.photos/991/260?image=30"
                data-media="(min-width: 576px)"
              ></span>
              <span
                class="picturefill-background-source"
                data-src="https://picsum.photos/1500/400?image=35"
                data-media="(min-width: 768px)"
              ></span>
              <span
                class="picturefill-background-source"
                data-src="https://picsum.photos/575/300?image=10"
                data-media="(min-width: 992px)"
              ></span>
            </div>

            <div class="container">
              <div class="carousel__content">
                <h2 class="carousel__heading">Slide 2 heading</h2>
                <div class="carousel__body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Donec vehicula nisl augue, vel blandit
                    quam vestibulum eget. Phasellus posuere ipsum et velit consectetur, nec efficitur risus pulvinar.</p>
                </div>
                <BaseLink text="Click me 2" to="/about" type="router-link" class="carousel__button" />
              </div>
            </div>
          </div>
        </article> -->

        <!-- <article class="carousel__item">
          <div class="carousel__wrapper">  

            <div class="carousel__background picturefill-background is-lazy">
              <span class="picturefill-background-source" data-src="https://picsum.photos/991/260?image=30"></span>
              <span
                class="picturefill-background-source"
                data-src="https://picsum.photos/1500/400?image=35"
                data-media="(min-width: 576px)"
              ></span>
              <span
                class="picturefill-background-source"
                data-src="https://picsum.photos/575/300?image=10"
                data-media="(min-width: 768px)"
              ></span>
              <span
                class="picturefill-background-source"
                data-src="https://picsum.photos/767/275?image=20"
                data-media="(min-width: 992px)"
              ></span>
            </div>

            <div class="container">
              <div class="carousel__content">
                <h2 class="carousel__heading">Slide 3 heading</h2>
                <div class="carousel__body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Donec vehicula nisl augue, vel blandit
                    quam vestibulum eget. Phasellus posuere ipsum et velit consectetur, nec efficitur risus pulvinar.</p>
                </div>
                <BaseLink text="Click me 3" to="/about" type="router-link" class="carousel__button" />
              </div>
            </div>
          </div>
        </article> -->

    </VueSlickCarousel>

    <button @click="togglePause()" :class="isPaused ? 'carousel-play-btn is-paused' : 'carousel-play-btn'" role="button" aria-label="Play carousel">{{ btnText }}</button>

  </section>
</template>
 
<script>
import axios from 'axios';
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  import AppCarouselItem from '@/components/blocks/appCarousel/AppCarouselItem';

  export default {
    name: 'AppCarousel',
    components: { 
      VueSlickCarousel,
      AppCarouselItem
    },
    data: function () {
      return {
        settings: {
          "dots": true,
          "dotsClass": "slick-dots custom-dot-class",
          "edgeFriction": 0.35,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "pauseOnHover": false,
          "pauseOnDotsHover": false,
          "pauseOnFocus": false,
          "autoplay": true,
          "adaptiveHeight": true
        },
        isPaused: false,
        pageData: null
      }
    },
    methods: {
      togglePause() {
        if (this.isPaused) {
          this.$refs.carousel.play();
        } else {
          this.$refs.carousel.pause();
        }
        this.isPaused = !this.isPaused;
      },
    },
    computed: {
      btnText () {
        return this.isPaused ? 'Play' : 'Pause'
      }
    },
    created() {
      axios
        .get('data/carousel-data.json')
        .then((response) => {
          this.pageData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });            
    },       
    watch: {
      pageData: function () {
        this.$nextTick(() => {
          new lazyloadPicturefillBackground(); 
        }) 
      }
    }
  }
</script> 

<styles scoped lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

.carousel-block {
  position: relative;
}

.carousel {
  position: relative;
  padding: 0;
  margin: 0 auto;

  .slick-arrow {
    position: absolute;
    top: 50%;
    width: 30px;
    height: 20px;
    z-index: 100;
    outline: none;
    border: none;
    text-indent: -9999em;
    transform: translateY(-50%);

    &:focus {
      border-color: $red;
    }
  }

  .slick-next {
    background: url('~@/assets/images/svg/icon-carousel-next.svg') no-repeat transparent center center;
    right: 0;
  }

  .slick-prev {
    background: url('~@/assets/images/svg/icon-carousel-prev.svg') no-repeat transparent center center;
    left: 0;
  }
}

.carousel__item {
  width: auto;
  position: relative;
  padding: 0;

  @include breakpoint(sm) {
    padding: 0 2rem 0 2rem;
  }
}

.carousel__wrapper {
  height: 400px;

  .container {
    width: auto;
    height: 100%;
    padding: 0;
    z-index: 100;
  }
}

.carousel__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-size: cover;
}

.carousel__content {
  position: relative;
  max-width: 580px;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  background-color: $white;
  padding: 2rem;
  margin-left: 20px;
}

.carousel .carousel__button {
  margin-top: 2rem;
}

.carousel .slick-dots {
  position: absolute;
  bottom: 18px;
  left: 0;
  right: 0;
  text-align: center;

  li {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    cursor: pointer;
    text-indent: -9999px;
    border-radius: 50%;
    margin: 0 1rem; 

    &.slick-active {
      cursor: default;
    }
  }

  li button {
    border: 0;
    background: transparent;
    display: block;
    outline: none;
    line-height: 0;
    font-size: 0;
    color: transparent;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: '\2022';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: darken($grey-light, 20);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    &:hover,
    &:focus {
      outline: none;

      &:before {
        background-color: $red;
      }
    }
  }

  li.slick-active button:before {
    background-color: $white;
  }

  li.slick-active button:focus {
    &:before {
      border: 1px solid $red;
    }
  }
}

.carousel__prev,
.carousel__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  z-index: 100;
  background: transparent;
  outline: none;
  color: transparent;
  font-size: 0;
  border: 1px solid $grey-light;

  &:focus {
    border: 1px solid $red;
  }
}

.carousel-play-btn {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 15px;
  border: none;
  outline: none;
  text-indent: -9999em;
  overflow: hidden;
  background-color: $white;
  background-image: url('~@/assets/images/svg/icon-pause.svg');
  background-repeat: no-repeat;
  background-position: center center;
  right: 15px;
  border: 2px solid $black;

  &:focus {
    border: 1px solid $red;
  }
}

.carousel-play-btn.is-paused {
  background-image: url('~@/assets/images/svg/icon-play.svg');
}

</styles>
