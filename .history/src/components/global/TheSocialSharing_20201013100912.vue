<script>
export default {
  name: "TheSocialSharing",
};
</script>


<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.social-links {
  margin: 0 auto;
  list-style: none;
  display: flex;
}

.social-links__item {
  margin: 0 1rem 0 0;
}

.social-links__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;

  &:hover,
  &:focus {
    color: $color-link-hover;
    text-decoration: underline;
  }
}

</style>