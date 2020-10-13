<template>
  <div class="social-links-wrapper">
    <h2 class="social-links-title">Follow Us</h2>
    <ul class="social-links">
      <li class="social-links__item">
        <a href="" class="social-links__link">
          <!-- <svg width="30" height="30" role="img" aria-hidden="true" focusable="false">
            <use href="/Static/images/sprites/symbols.svg#icon-twitter"></use>
          </svg> -->
          <span class="sr-only">Twitter</span>
        </a>
      </li>
      <li class="social-links__item">
        <a href="" class="social-links__link">
          <!-- <svg width="30" height="30" role="img" aria-hidden="true" focusable="false">
            <use href="/Static/images/sprites/symbols.svg#icon-linkedin"></use>
          </svg> -->
          <span class="sr-only">LinkedIn</span>
        </a>
      </li>
      <li class="social-links__item">
        <a href="" class="social-links__link">
          <!-- <svg width="30" height="30" role="img" aria-hidden="true" focusable="false">
            <use href="/Static/images/sprites/symbols.svg#icon-instagram"></use>
          </svg> -->
          <span class="sr-only">Instagram</span>
        </a>
      </li>
      <li class="social-links__item">
        <TheSocialSharingItem></TheSocialSharingItem>
          <!-- <svg width="30" height="30" role="img" aria-hidden="true" focusable="false">
            <use href="/Static/images/sprites/symbols.svg#icon-youtube"></use>
          </svg> -->
          <span class="sr-only">YouTube</span>
        </TheSocialSharingItem>
      </li>
    </ul>
  </div>  
</template>

<script>
import TheSocialSharingItem from "@/components/global/TheSocialSharingItem";

export default {
  name: "TheSocialSharing",
  components: {
    TheSocialSharingItem
  }  
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';

.social-links {
  margin: 0 auto;
  list-style: none;
  display: flex;
}

.social-links__item {
  margin: 0 1rem 0 0;
}

</style>