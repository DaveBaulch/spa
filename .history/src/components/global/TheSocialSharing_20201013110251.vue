<template>
  <div class="social-links-wrapper">
    <h2 class="social-links-title">Follow Us</h2>
    <ul class="social-links">
      <li class="social-links__item">
        <TheSocialSharingItem>
          <img src="@/assets/images/svg/icon-twitter.svg" />
          <span class="sr-only">Twitter</span>
        </TheSocialSharingItem>
      </li>
      <li class="social-links__item">
        <TheSocialSharingItem>
          <img src="@/assets/images/svg/icon-linkedin.svg" />
          <span class="sr-only">LinkedIn</span>
        </TheSocialSharingItem>
      </li>
      <li class="social-links__item">
        <TheSocialSharingItem>
          <img src="@/assets/images/svg/icon-instagram.svg" />
          <span class="sr-only">Instagram</span>
        </TheSocialSharingItem>
      </li>
      <li class="social-links__item">
        <TheSocialSharingItem href="https://www.youtube.com/">
          <img src="@/assets/images/svg/icon-youtube.svg" width="30" height="30" />
          <span class="sr-only">You Tube</span>
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
    TheSocialSharingItem,
  },
  data() {
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