<template>
  <router-link to="/" >
    <article div class="sectors-block">
      <div class="sectors-block__image picturefill-background is-lazy">
        <span class="picturefill-background-source" data-src="https://picsum.photos/575/300?image=10" data-media="(min-width: 0px)"></span>        
        <div class="sectors-block__title">
          <h3 class="sectors-block__heading">Sector title 1</h3>
        </div>
        <div class="sectors-block__text">
          <div class="sectors-block__inner">
            <h2 class="sectors-block__heading" role="presentation">Sector title 1</h2>
            <p>Vivamus accumsan, lacus vitae luctus molestie, enim massa semper est, at tincidunt est odio non eros.</p>
          </div>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>

export default {
  name: 'AppSectorsItem',
  props: {
    itemData: {}
  }
}
</script>


<style scoped>

</style>
