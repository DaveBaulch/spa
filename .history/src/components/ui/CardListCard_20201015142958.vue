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

<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>