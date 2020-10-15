<template>

  <section aria-label="Our Sectors" class="sectors-panel">

    <div class="container">

      <h2>{{ blockData.title }}</h2>

        <div class="row">

          <AppSectorsItem v-for="item in blockData.data" :key="item.id" :itemData="item"  />

      </div>

    </div>

  </section>

</template>
 
<script>
  import axios from 'axios';
  import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
  import AppSectorsItem from '@/components/blocks/appSectors/AppSectorsItem';

  export default {
    name: 'AppSectors',
    data () {
      return {
        blockData: null
      }
    },
    components: { 
      AppSectorsItem
    },    
    watch: {
      blockData: function () {
        this.$nextTick(() => {
          new lazyloadPicturefillBackground(); 
        }) 
      }
    },  
    created() {
      axios
        .get('data/sectors-data.json')
        .then((response) => {
          this.blockData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });            
    },   
  }
</script> 

<styles scoped lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}

.sectors-block {
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

.sectors-block__image {
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

    .sectors-block__text {
      @include breakpoint(lg) {
        opacity: 1;
      }
    }
  }

  &:focus {
    .sectors-panel__block-title {
      display: none;
    }

    .sectors-block__text {
      bottom: 0;
    }
  }
}


.sectors-block__title {
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

.sectors-block__heading {
  margin: 0;

  @include breakpoint(md) {
    font-size: 2rem;
  }

  .sectors-block__inner & {
    margin-bottom: 2rem;
  }
}

.sectors-block__text {
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

.sectors-block__inner {
  width: 100%;
}

</styles>
