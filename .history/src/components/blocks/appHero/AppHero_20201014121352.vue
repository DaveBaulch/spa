<template>
  <article class="section banner-block">
    <div class="banner">
      <div class="banner__background picturefill-background is-lazy">
        <span class="picturefill-background-source" :data-src="imgSrc1"></span>
        <span
          class="picturefill-background-source"
          :data-src="imgSrc2"
          data-media="(min-width: 576px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="imgSrc3"
          data-media="(min-width: 768px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="imgSrc4"
          data-media="(min-width: 992px)"
        ></span>
      </div>

      <div class="container">
        <div class="banner__content">
          <div class="banner__inner">
            <h1 class="banner__heading">{{ pageData.title }}</h1>

            <!-- <div class="banner__text" v-html="pageData.text">
            </div> -->
          </div>

          <!-- <BaseLink :text="pageData.btnText" to="/about" type="router-link" /> -->
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import axios from 'axios';
// import BaseLink from '@/components/ui/BaseLink';
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
  // components: {
  //   BaseLink
  // },
  created() {

    // this.$nextTick(() => {
    new lazyloadPicturefillBackground(); 
    // })    
//      this.$nextTick(() => {
//     axios
//       .get('data/data.json')
//       .then((response) => {
//         this.pageData = response.data;
//         console.log(response.data);
//         console.log(this.pageData);
//       })
//       .catch((error) => {
//         console.log(error);
//       });  
// })          
  },   
  mounted() {
    // this.$nextTick(() => {
    //   new lazyloadPicturefillBackground(); 
    // })
    axios
      .get('data/data.json')
      .then((response) => {
        this.pageData = response.data;
        console.log(response.data);
        console.log(this.pageData);
      })
      .catch((error) => {
        console.log(error);
      });  
       
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
