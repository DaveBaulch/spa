<template>
  <article class="section banner-block">
    <div class="banner">
      <div class="banner__background picturefill-background is-lazy">
        <span class="picturefill-background-source" v-if="pageData" :data-src="pageData.imgSrc1"></span>
        <span
          class="picturefill-background-source"
          v-if="pageData"
          :data-src="pageData.imgSrc2"
          data-media="(min-width: 576px)"
        ></span>
        <span
          class="picturefill-background-source"
          v-if="pageData"
          :data-src="pageData.imgSrc3"
          data-media="(min-width: 768px)"
        ></span>
        <span
          class="picturefill-background-source"
          v-if="pageData"
          :data-src="pageData.imgSrc4"
          data-media="(min-width: 992px)"
        ></span>
      </div>

      <div class="container">
        <div class="banner__content">
          <div class="banner__inner">
            <h1 class="banner__heading" v-if="pageData">{{ pageData.title }}</h1>

            <div class="banner__text" v-if="pageData" v-html="pageData.text">
            </div>
          </div>

          <BaseLink :text="pageData.btnText" to="/about" type="router-link" v-if="pageData" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import axios from 'axios';
import BaseLink from '@/components/ui/BaseLink';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';

export default {
  name: 'AppHero',
  props: {
    imgSrc1: {
      type: String,
      default: '',
      required: true
    },
    imgSrc2: {
      type: String,
      default: '',
      required: true
    },
    imgSrc3: {
      type: String,
      default: '',
      required: true
    },
    imgSrc4: {
      type: String,
      default: '',
      required: true
    }
  },  
  data () {
      return {
        pageData: null
      }
    },
  components: {
    BaseLink
  },
  created() {
    axios
      .get('data/hero-data.json')
      .then((response) => {
        this.pageData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });            
  },   
  mounted() {
    // this.$nextTick(() => {
    //   new lazyloadPicturefillBackground(); 
    // })
setTimeout(new lazyloadPicturefillBackground(), 5000)    
  }
};
</script>

<style scoped lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

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
  padding: 4rem 0;

  @include breakpoint(lg) {
    padding: 8rem 0;
  }
}

.banner__inner {
  margin-bottom: 3rem;
  background-color: $white;
  padding: 2rem;
  color: $black;
}
</style>
