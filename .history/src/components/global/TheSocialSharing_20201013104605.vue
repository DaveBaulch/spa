<template>
  <div class="social-links-wrapper">
    <h2 class="social-links-title">Follow Us</h2>
    <ul class="social-links">
      <li class="social-links__item">
        <TheSocialSharingItem>
          <!-- <svg width="30" height="30" role="img" aria-hidden="true" focusable="false">
            <use href="/Static/images/sprites/symbols.svg#icon-twitter"></use>
          </svg> -->
          <span class="_sr-only">Twitter</span>
        </TheSocialSharingItem>
      </li>
      <li class="social-links__item">
        <TheSocialSharingItem>
          <!-- <svg width="30" height="30" role="img" aria-hidden="true" focusable="false">
            <use href="/Static/images/sprites/symbols.svg#icon-linkedin"></use>
          </svg> -->
          <span class="_sr-only">LinkedIn</span>
        </TheSocialSharingItem>
      </li>
      <li class="social-links__item">
        <TheSocialSharingItem>
          <!-- <svg width="30" height="30" role="img" aria-hidden="true" focusable="false">
            <use href="/Static/images/sprites/symbols.svg#icon-instagram"></use>
          </svg> -->
          <span class="_sr-only">Instagram</span>
        </TheSocialSharingItem>
      </li>
      <li class="social-links__item">
        <TheSocialSharingItem>
          <!-- <svg width="30" height="30" role="img" aria-hidden="true" focusable="false">
            <use href="/Static/images/sprites/symbols.svg#icon-youtube"></use>
          </svg> -->
          <span class="_sr-only">YouTube</span>
        </TheSocialSharingItem>
      </li>
    </ul>
  </div>  
</template>

<script>
import TheSocialSharingItem from "@/components/global/TheSocialSharingItem";
import BaseIcon from "@/components/ui/BaseIcon";
import Icon from '@/images/svg/icon-twitter.svg';

export default {
  name: "TheSocialSharing",
  components: {
    TheSocialSharingItem,
    BaseIcon
  },
  data() {
    return { 
      Icon
    };
  },
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