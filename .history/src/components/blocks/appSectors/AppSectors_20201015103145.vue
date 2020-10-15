<template>

  <section aria-label="Our Sectors" class="sectors-panel">

    <div class="container">

      <div class="row">

        <router-link to="/" >
          <article div class="sectors-panel__block">
            <div class="sectors-panel__block-image picturefill-background is-lazy">
              <span class="picturefill-background-source" data-src="https://picsum.photos/575/300?image=10" data-media="(min-width: 0px)"></span>        
              <div class="sectors-panel__block-title">
                <h3 class="sectors-panel__block-heading">Sector title 1</h3>
              </div>
              <div class="sectors-panel__block-text">
                <div class="sectors-panel__block-inner">
                  <h3 class="sectors-panel__block-heading" role="presentation">Sector title 1</h3>
                  <p>Vivamus accumsan, lacus vitae luctus molestie, enim massa semper est, at tincidunt est odio non eros.</p>
                </div>
              </div>
            </div>
          </article>
        </router-link>

      </div>

    </div>

  </section>
</template>
 
<script>
  // import axios from 'axios';
  import lazyloadPicturefillBackground from 'lazyload-picturefill-background';

  export default {
    name: 'AppSectors',
    components: { 
    },
    mounted() {
      this.$nextTick(() => {
        new lazyloadPicturefillBackground(); 
      })            
    }
    // data: function () {
    //   blockData: null
    // },
    // created() {
    //   axios
    //     .get('data/sectors-data.json')
    //     .then((response) => {
    //       this.blockData = response.data.data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });            
    // }   
  }
</script> 

<styles scoped lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

.row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}

.sectors-panel__list {
  display: flex;
  flex-direction: column;
}

.sectors-panel__heading {
  padding: 3.5rem 0 0;

  @include breakpoint(md) {
    padding: 5rem 0 0;
  }

  h2 {
    margin: 0;


    &:after {
      margin-top: 1.1rem;
      top: 0;
      width: 6rem;
      position: absolute;
      display: block;
      content: '';
    }
  }
}

.sectors-panel__list-list {
  margin-bottom: 1.6rem;
  margin-top: 2rem;

  @include breakpoint(md) {
    margin-bottom: 4.2rem;
  }
}

.sectors-panel__block {
  display: flex;
  flex-direction: column;
  margin: 0 0 2.4rem;
  overflow: hidden;

  .sectors-panel__block-image {
    padding-top: 56%;

    @include breakpoint(lg) {
      padding-top: 86%;
    }
  }
}

.sectors-panel__block-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 100%;
  overflow: hidden;
  padding-top: 74%;
  position: relative;
  width: 100%;

  @include breakpoint(md) {
    padding-top: 100%;
  }

  &:hover {
    .sectors-panel__block-title {
      @include breakpoint(lg) {
        opacity: 0;
      }
    }

    .sectors-panel__block-text {
      @include breakpoint(lg) {
        opacity: 1;
      }
    }
  }

  &:focus {
    .sectors-panel__block-title {
      display: none;
    }

    .sectors-panel__block-text {
      bottom: 0;
    }
  }
}


.sectors-panel__block-title {
  background-color: rgba( $white, 0.9 );
  opacity: 0.9;
  bottom: 0;
  left: 0;
  padding: 1.6rem 2rem;
  position: absolute;
  right: 0;

  @include breakpoint(md) {
    padding: 2.5rem 0;
    text-align: center;
    opacity: 1;
    transition: $transition-opacity-slower;
  }
}

.sectors-panel__block-heading {
  margin: 0;

  @include breakpoint(md) {
    font-size: 2rem;
  }

  .sectors-panel__block-inner & {
    margin-bottom: 2rem;
  }
}

.sectors-panel__block-text {
  align-items: center;
  background-color: rgba( $white, 0.9 );
  bottom: 0;
  display: flex;
  font-size: 1.4rem;
  height: 100%;
  left: 0;
  padding: 4rem;
  position: absolute;
  right: 0;
  text-align: center;
  opacity: 0;
  transition: $transition-opacity-slower;

  a {
    font-weight: 700;
    padding-top: 2rem;
    text-decoration: none;

    &:hover,
    &:focus {
      outline: 0;
      text-decoration: underline;
    }
  }
}

.sectors-panel__block-inner {
  width: 100%;
}

</styles>
