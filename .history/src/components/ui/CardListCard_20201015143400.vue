<template>
  <article aria-label="Example showing an article title over two lines here" class="card js-card">
    <p class="card__badge tag-1">Tag 1</p>
    <div class="card__img-holder">
      <picture>
        <source srcset="https://picsum.photos/575/300?image=10" media="(min-width: 1024px)">
        <source srcset="https://picsum.photos/575/300?image=10" media="(min-width: 768px)">
        <source srcset="https://picsum.photos/575/300?image=10" media="(min-width: 576px)">
        <source srcset="https://picsum.photos/575/300?image=10" media="(min-width: 0px)">
        <img src="https://picsum.photos/575/300?image=10" alt="" class="card__img img-responsive">
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
</template>


<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.card {
  background-color: $white;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-height: 1px;
  position: relative;
  width: auto;
  padding: 0;
  margin: 0 1rem;
  border: 1px solid $grey-light;
}

.card__title {
  margin: 1rem 0 0 0;
  font-size: 2rem;

  a {
    text-decoration: none;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.card__content {
  padding: 1rem 1.5rem 0 1.5rem;
}

.card__badge {
  left: 0;
  padding: 0.6rem 1rem;
  position: absolute;
  top: 0;
  background-color: $grey-light;
  margin: 0;
}

</style>