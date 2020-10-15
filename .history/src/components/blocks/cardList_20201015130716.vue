<template>

  <article class="section card-list-block">

    <div class="card-list">

      <div class="card-list__heading">
        <h2>{{ blockData.title }}</h2>
      </div>

      <ol class="card-list__list">

        <li class="card-list__item">

          <article aria-label="Example showing an article title over two lines here" class="card js-card">
            <p class="card__badge tag-1">Tag 1</p>
            <div class="card__img-holder">
              <picture>
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=276&h=155" media="(min-width: 1280px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=381&h=214" media="(min-width: 1024px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=301&h=169" media="(min-width: 768px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" media="(min-width: 576px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=535&h=301" media="(min-width: 0px)">
                <img src="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" alt="" class="card__img img-responsive">
              </picture>
            </div>
            <div class="card__content">
              <div class="card__inner">
                <h3 class="card__title"><a href="">Example showing an article title over two lines here</a></h3>
                <div class="card__description"><p>Description here with a character limit of 100, stretching over a long line before being trimmed&hellip;</p></div>
                <div class="card__tag"><p>20 Sep 2019</p></div>
              </div>
              <span class="card__btn">
                <svg width="8px" height="12px" role="presentation" aria-hidden="true" focusable="false">
                  <use xlink:href="/Static/images/sprites/symbols.svg#icon-next-arrow"></use>
                </svg>
              </span>
            </div>
          </article>

        </li>

        <!-- <li class="card-list__item">

          <article aria-label="Example showing a very long article title over several lines here 2" class="card js-card">
            <p class="card__badge tag-2">Tag 2</p>
            <div class="card__img-holder">
              <picture>
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=276&h=155" media="(min-width: 1280px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=381&h=214" media="(min-width: 1024px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=301&h=169" media="(min-width: 768px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" media="(min-width: 576px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=535&h=301" media="(min-width: 0px)">
                <img src="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" alt="" class="card__img img-responsive">
              </picture>
            </div>
            <div class="card__content">
              <div class="card__inner">
                <h3 class="card__title"><a href="">Example showing a very long article title over several lines here 2</a></h3>
                <div class="card__tag"><p>20 Sep 2019</p></div>
              </div>
              <span class="card__btn">
                <svg width="8px" height="12px" role="presentation" aria-hidden="true" focusable="false">
                  <use xlink:href="/Static/images/sprites/symbols.svg#icon-next-arrow"></use>
                </svg>
              </span>
            </div>
          </article>

        </li>

        <li class="card-list__item">

          <article aria-label="Example showing an article title over two lines here 3" class="card js-card">
            <p class="card__badge tag-3">Tag 3</p>
            <div class="card__img-holder">
              <picture>
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=276&h=155" media="(min-width: 1280px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=381&h=214" media="(min-width: 1024px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=301&h=169" media="(min-width: 768px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" media="(min-width: 576px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=535&h=301" media="(min-width: 0px)">
                <img src="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" alt="" class="card__img img-responsive">
              </picture>
            </div>
            <div class="card__content">
              <div class="card__inner">
                <h3 class="card__title"><a href="">Example showing an article title over two lines here 3</a></h3>
                <div class="card__description"><p>Description here with a character limit of 100, stretching over a long line before being trimmed&hellip;</p></div>
                <div class="card__tag"><p>20 Sep 2019</p></div>
              </div>
              <span class="card__btn">
                <svg width="8px" height="12px" role="presentation" aria-hidden="true" focusable="false">
                  <use xlink:href="/Static/images/sprites/symbols.svg#icon-next-arrow"></use>
                </svg>
              </span>
            </div>
          </article>

        </li>

        <li class="card-list__item">

          <article aria-label="Example showing a very long article title over several lines here 4" class="card js-card">
            <div class="card__img-holder">
              <picture>
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=276&h=155" media="(min-width: 1280px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=381&h=214" media="(min-width: 1024px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=301&h=169" media="(min-width: 768px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" media="(min-width: 576px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=535&h=301" media="(min-width: 0px)">
                <img src="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" alt="" class="card__img img-responsive">
              </picture>
            </div>
            <div class="card__content">
              <div class="card__inner">
                <h3 class="card__title"><a href="">Example showing a very long article title over several lines here 4</a></h3>
                <div class="card__tag"><p>20 Sep 2019</p></div>
              </div>
              <span class="card__btn">
                <svg width="8px" height="12px" role="presentation" aria-hidden="true" focusable="false">
                  <use xlink:href="/Static/images/sprites/symbols.svg#icon-next-arrow"></use>
                </svg>
              </span>
            </div>
          </article>

        </li>

        <li class="card-list__item">

          <article aria-label="Example showing an article title over two lines here 5" class="card js-card">
            <div class="card__img-holder">
              <picture>
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=276&h=155" media="(min-width: 1280px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=381&h=214" media="(min-width: 1024px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=301&h=169" media="(min-width: 768px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" media="(min-width: 576px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=535&h=301" media="(min-width: 0px)">
                <img src="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" alt="" class="card__img img-responsive">
              </picture>
            </div>
            <div class="card__content">
              <div class="card__inner">
                <h3 class="card__title"><a href="">Example showing an article title over two lines here 5</a></h3>
                <div class="card__description"><p>Description here with a character limit of 100, stretching over a long line before being trimmed&hellip;</p></div>
              </div>
              <span class="card__btn">
                <svg width="8px" height="12px" role="presentation" aria-hidden="true" focusable="false">
                  <use xlink:href="/Static/images/sprites/symbols.svg#icon-next-arrow"></use>
                </svg>
              </span>
            </div>
          </article>

        </li>

        <li class="card-list__item">

          <article aria-label="Example showing a very long article title over several lines here 6" class="card js-card">
            <div class="card__img-holder">
              <picture>
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=276&h=155" media="(min-width: 1280px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=381&h=214" media="(min-width: 1024px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=301&h=169" media="(min-width: 768px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" media="(min-width: 576px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=535&h=301" media="(min-width: 0px)">
                <img src="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" alt="" class="card__img img-responsive">
              </picture>
            </div>
            <div class="card__content">
              <div class="card__inner">
                <h3 class="card__title"><a href="">Example showing a very long article title over several lines here 6</a></h3>
                <div class="card__description"><p>Description here with a character limit of 100, stretching over a long line before being trimmed&hellip;</p></div>
              </div>
              <span class="card__btn">
                <svg width="8px" height="12px" role="presentation" aria-hidden="true" focusable="false">
                  <use xlink:href="/Static/images/sprites/symbols.svg#icon-next-arrow"></use>
                </svg>
              </span>
            </div>
          </article>

        </li>

        <li class="card-list__item">

          <article aria-label="Example showing an article title over two lines here 7" class="card js-card">
            <div class="card__img-holder">
              <picture>
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=276&h=155" media="(min-width: 1280px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=381&h=214" media="(min-width: 1024px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=301&h=169" media="(min-width: 768px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" media="(min-width: 576px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=535&h=301" media="(min-width: 0px)">
                <img src="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" alt="" class="card__img img-responsive">
              </picture>
            </div>
            <div class="card__content">
              <div class="card__inner">
                <h3 class="card__title"><a href="">Example showing an article title over two lines here 7</a></h3>
                <div class="card__description"><p>Description here with a character limit of 100, stretching over a long line before being trimmed&hellip;</p></div>
              </div>
              <span class="card__btn">
                <svg width="8px" height="12px" role="presentation" aria-hidden="true" focusable="false">
                  <use xlink:href="/Static/images/sprites/symbols.svg#icon-next-arrow"></use>
                </svg>
              </span>
            </div>
          </article>

        </li>

        <li class="card-list__item">

          <article aria-label="Example showing a very long article title over several lines here 8" class="card js-card">
            <div class="card__img-holder">
              <picture>
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=276&h=155" media="(min-width: 1280px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=381&h=214" media="(min-width: 1024px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=301&h=169" media="(min-width: 768px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" media="(min-width: 576px)">
                <source srcset="/Static/images/aspect_ratio_16_9_example.jpg?w=535&h=301" media="(min-width: 0px)">
                <img src="/Static/images/aspect_ratio_16_9_example.jpg?w=727&h=409" alt="" class="card__img img-responsive">
              </picture>
            </div>
            <div class="card__content">
              <div class="card__inner">
                <h3 class="card__title"><a href="">Example showing a very long article title over several lines here 8</a></h3>
                <div class="card__description"><p>Description here with a character limit of 100, stretching over a long line before being trimmed&hellip;</p></div>
              </div>
              <span class="card__btn">
                <svg width="8px" height="12px" role="presentation" aria-hidden="true" focusable="false">
                  <use xlink:href="/Static/images/sprites/symbols.svg#icon-next-arrow"></use>
                </svg>
              </span>
            </div>
          </article>

        </li> -->

      </ol>

      <!-- <a href="#" class="btn card-list__btn card-list__btn--mobile btn-ghost">View all products</a> -->

    </div>

  </article>

</template>

<script>
import axios from 'axios';

export default {
  name: 'CardList', 
  data () {
    return {
      blockData: null
    }
  },
  components: {
  },
  watch: {
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
  },   
  mounted() {
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

// .card-list {
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 2rem;

//   @include breakpoint(md) {
//     padding-bottom: 0;
//   }
//   @include breakpoint(lg) {
//     padding-bottom: 2rem;
//   }
// }

// .card-list--search {
//   padding-bottom: 0;
// }

// .card-list--value {
//   display: block;
//   padding-bottom: 0;

//   @include breakpoint(lg) {
//     padding: 0 10rem;
//   }
// }

// .card-list__search {
//   @include breakpoint(lg) {
//     // @include make-row();
//   }
// }

// .card-list__sidebar {
//   @include breakpoint(lg) {
//     // @include make-col-ready();
//     // @include make-col(3);
//     margin-top: 2px;
//     overflow: hidden;
//   }

//   &.filter-open {
//     display: block;
//   }
// }

// .card-list__sidebar-inner {
//   background-color: $white;
//   height: 100%;
// }

// .card-list__results {
//   width: 100%;

//   @include breakpoint(lg) {
//     // @include make-col-ready();
//     // @include make-col(9);
//   }
// }

// .card-list__search-results {
//   width: 100%;

//   @include breakpoint(lg) {
//     margin: 0 12px;
//   }
// }

// .card-list__intro {
//   margin-top: 3.5rem;

//   @include breakpoint(md) {
//     // @include make-col(10);
//     margin-top: 7.3rem;
//   }

//   *:last-child {
//     margin-bottom: 0;
//   }

//   h2 {
//     &:after {
//       content: '' ;
//       display: block;
//       position: absolute;
//       margin-top: 1.1rem;
//       top: 0;
//       width: 6rem;
//     }
//   }
// }

// .card-list__list {
//   list-style-type: none;
//   margin-top: 2rem;

//   @include breakpoint(md) {
//     margin-bottom: 1.6rem;
//     margin-top: 4.3rem;
//     order: 3;
//   }

//   .card-list__results & {
//     margin-bottom: 0;
//     margin-top: 2rem;
//   }
// }

// .card-list__heading {
//   align-items: center;
//   display: flex;
//   padding: 2rem 0 0;

//   @include breakpoint(md) {
//     justify-content: space-between;
//     order: 1;
//     padding: 4.5rem 0 0;
//   }

//   h2 {
//     margin: 0;


//     // value proposition panel
//     .value-proposition-panel & {
//       // color: map-get($colour, 'primary');
//     }

//     &:after {
//       content: '' ;
//       display: block;
//       position: relative;
//       // border-bottom: 0.2rem solid map-get($colour, 'secondary');
//       margin-top: 1.1rem;
//       top: 0;
//       width: 6rem;
//     }
//   }
// }

// .card-list__btn {
//   margin-bottom: 2rem;
//   margin-right: 0;

//   @include breakpoint(md) {
//     align-self: flex-start;
//     margin-bottom: 0;
//     order: 2;
//     position: absolute;
//     right: 1.2rem;
//     top: 5rem;
//   }
// }

// .card-list__btn--mobile {
//   display: block;

//   @include breakpoint(md) {
//     display: none;
//   }
// }

// .card-list__btn--desktop {
//   display: none;

//   @include breakpoint(md) {
//     display: block;
//   }
// }

// .card-list__item {
//   // @include make-col-ready();
//   display: flex;
//   flex-direction: column;
//   margin: 0;

//   @include breakpoint(md) {
//     // @include make-col(4);
//   }
//   @include breakpoint(lg) {
//     // @include make-col(4);
//   }
//   @include breakpoint(xl) {
//     // @include make-col(3);
//   }

// }


// // card
// .card {
//   background-color: $white;
//   display: flex;
//   flex: 1 0 auto;
//   flex-direction: column;
//   margin-bottom: 2rem;
//   min-height: 1px;
//   padding: 0;
//   position: relative;
//   width: 100%;
//   border: 1px solid #f0f;

//   @include breakpoint(md) {
//     margin-bottom: 2.4rem;
//   }

//   &:hover,
//   + .on-focus {
//     .card__btn {
//       @include breakpoint(lg) {
//         right: 2rem;
//       }
//     }
//   }
// }

</style>
