<template>
  <article class="section cta-block">
    <div class="cta">
      <div class="cta picturefill-background is-lazy">
        <span class="picturefill-background-source" :data-src="blockData.imgSrc1"></span>
        <span
          class="picturefill-background-source"
          :data-src="blockData.imgSrc2"
          data-media="(min-width: 576px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="blockData.imgSrc3"
          data-media="(min-width: 768px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="blockData.imgSrc4"
          data-media="(min-width: 992px)"
        ></span>
      </div>

      <div class="container">
        <div class="cta">
          <div class="cta">
            <h1 class="cta" v-if="blockData">{{ blockData.title }}</h1>

            <div class="cta" v-if="blockData" v-html="blockData.text">
            </div>
          </div>

          <BaseLink :text="blockData.btnText" to="/about" type="router-link" v-if="blockData" />
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
  name: 'AppCTA',
  data () {
    return {
      blockData: null
    }
  },
  components: {
    BaseLink
  },
  watch: {
    pageData: function () {
      this.$nextTick(() => {
        new lazyloadPicturefillBackground(); 
      }) 
    }
  },  
  created() {
    axios
      .get('data/hero-data.json')
      .then((response) => {
        this.blockData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });            
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.cta {
  position: relative;
  background-color: $grey-light;

  .container {
    width: auto;
    position: relative;
  }
}

.cta__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.cta__content {
  text-align: center;
  padding: 4rem 0;

  @include breakpoint(lg) {
    padding: 8rem 0;
  }
}

.cta__inner {
  margin-bottom: 3rem;
  background-color: $white;
  padding: 2rem;
  color: $black;
}
</style>
