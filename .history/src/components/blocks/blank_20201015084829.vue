<template>
  <article class="section banner-block">
    <div class="banner">
      <div class="banner__background picturefill-background is-lazy">
        <span class="picturefill-background-source" :data-src="pageData.imgSrc1"></span>
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
  name: 'AppBlock', 
  data () {
    return {
      pageData: null
    }
  },
  components: {
  },
  watch: {
  },  
  created() {
    axios
      .get('data/data.json')
      .then((response) => {
        this.pageData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });            
  },   
  mounted() {
  }
};
</script>

<style scoped lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

</style>
