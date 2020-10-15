<template>

  <div class="home">

    <div class="container">
      <h1>Components</h1>
        <ul class="component-list">
          <li class="component-list__item"><router-link to="/hero" class="component-list__link">Hero</router-link></li>
          <li class="component-list__item"><router-link to="/carousel" class="component-list__link">Carousel</router-link></li>
        </ul>      
    </div>
    
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
  }
};
</script>

<style scoped lang="scss">
@import '../assets/sass/utilities/_variables.scss';
@import '../assets/sass/utilities/_mixins.scss';

.component-list {
  list-style: none;
  padding: 0;
  margin: 0;

}

.component-list__item {

}

.component-list__link {
  margin: 0 10px;

  a {
    text-decoration: none;
    color: $white;    
  }
}


</style>
