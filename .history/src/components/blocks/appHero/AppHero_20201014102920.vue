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
            <h1 class="banner__heading">{{ pageData.title }}</h1>

            <div class="banner__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate tenetur officiis excepturi porro ducimus ab provident,
                quas temporibus ratione illo quae neque cupiditate totam facere
                nulla ad exercitationem itaque incidunt.
              </p>
            </div>
          </div>

          <BaseLink :text="pageData.btnText" to="/about" type="router-link" />
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
  data () {
      return {
        pageData: {
          "title": "Hero title",
          "imgSrc1": "https://picsum.photos/575/300?image=10",
          "imgSrc2": "https://picsum.photos/767/275?image=20",
          "imgSrc3": "https://picsum.photos/991/260?image=30",
          "imgSrc4": "https://picsum.photos/1500/400?image=35",
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate tenetur officiis excepturi porro ducimus ab provident, quas temporibus ratione illo quae neque cupiditate totam facere nulla ad exercitationem itaque incidunt.</p>",
          "btnText": "Click the button"
        }
      }
    },
  props: {
    // imgSrc1: {
    //   type: String,
    //   default: '',
    //   required: true
    // },
    // imgSrc2: {
    //   type: String,
    //   default: '',
    //   required: true
    // },
    // imgSrc3: {
    //   type: String,
    //   default: '',
    //   required: true
    // },
    // imgSrc4: {
    //   type: String,
    //   default: '',
    //   required: true
    // },
    // btnText: {
    //   type: String,
    //   default: '',
    //   required: true
    // }
  },
  components: {
    BaseLink
  },
  created() {
    axios
      .get('data/data.json')
      .then((response) => {
        this.pageData = JSON.parse(response.data);
        //console.log(this.pageData)
        console.log(response.data);
        console.log(this.pageData);
      })
      .catch((error) => {
        // console.log(error);
      });
  },   
  mounted() {
    new lazyloadPicturefillBackground();
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
