<template>
<div class="header-container">
  <div class="container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <router-link to="/">Home</router-link> |
      </div>
      <div class="navigation-items">
        <ul class="nav-list">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </ul>
      </div>
    </header>
  </div>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/global/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>

<style scoped>
@import '../../assets/sass/utilities/_mixins.scss';

.header-container {
  height: 60px;
  background-color: black;
}

.the-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  position: fixed;
}

@include breakpoint(md) {
  .the-header {
    position: relative;
  }
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
