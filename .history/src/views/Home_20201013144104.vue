<template>

  <div>
    <AppHero 
      imgSrc1="https://picsum.photos/575/300?image=10"
      imgSrc1="https://picsum.photos/575/300?image=10"
      imgSrc1="https://picsum.photos/575/300?image=10"
      imgSrc1="https://picsum.photos/575/300?image=10"
      btnText="Click me"
    />
    <div class="container home">
      
      <h1>Home page</h1>
      <h2>Components</h2>
    </div>]

  </div>

</template>

<script>
// @ is an alias to /src
import AppHero from "@/components/blocks/AppHero.vue";

export default {
  name: "Home",
  components: {
    AppHero
  }
};
</script>
