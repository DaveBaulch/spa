<template>

  <article class="section card-list-block">

    <div class="container">

      <div class="card-list">

        <div class="card-list__heading">
          <h2 v-if="blockData">{{ blockData.title }}</h2>
        </div>

        <ol class="card-list__list" v-if="blockData">

          <transition-group
            name="staggered-fade"
            tag="ul"
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
          >

          <li class="card-list__item" v-for="item in blockData.data" :key="item.id">
            <CardListCard :itemData="item" />
          </li>

          </transition-group>

        </ol>

      </div>

    </div>

  </article>

</template>

<script>
import axios from 'axios';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import CardListCard from '@/components/ui/CardListCard.vue';

export default {
  name: 'CardList', 
  data () {
    return {
      blockData: null
    }
  },
  components: {
    CardListCard
  },
  watch: {
    pageData: function () {
      this.$nextTick(() => {
        new lazyloadPicturefillBackground(); 
      }) 
    }
  },

  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    // enter: function (el, done) {
    //   var delay = el.dataset.index * 150
    //   setTimeout(function () {
    //     Velocity(
    //       el,
    //       { opacity: 1, height: '1.6em' },
    //       { complete: done }
    //     )
    //   }, delay)
    // },
    // leave: function (el, done) {
    //   var delay = el.dataset.index * 150
    //   setTimeout(function () {
    //     Velocity(
    //       el,
    //       { opacity: 0, height: 0 },
    //       { complete: done }
    //     )
    //   }, delay)
    // }  
  },
  
  created() {
    axios
      .get('data/cards-data.json')
      .then((response) => {
        this.blockData = response.data;
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
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.staggered-transition {
    transition: all .5s ease;
    opacity: 1;
}
.staggered-enter, .staggered-leave {
    opacity: 0;
}

.card-list {
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

  @include breakpoint(md) {
    padding-bottom: 0;
  }
  @include breakpoint(lg) {
    padding-bottom: 2rem;
  }
}

.card-list__heading {
  text-align: center;
}

.card-list__list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  list-style-type: none;
}

.card-list__btn {
  margin-bottom: 2rem;
  margin-right: 0;

  @include breakpoint(md) {
    align-self: flex-start;
    margin-bottom: 0;
    position: absolute;
    right: 1.2rem;
    top: 5rem;
  }
}


.card-list__item {
  position: relative;
  width: 100%;
  min-height: 1px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
  padding: 0;

  @include breakpoint(md) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @include breakpoint(lg) {
    flex: 0 0 25%;
    max-width: 25%;
  }
}

</style>
