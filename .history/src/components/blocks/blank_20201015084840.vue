<template>
  <article class="section banner-block">
  </article>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppBlock', 
  data () {
    return {
      pageData: null
    }
  },
  components: {
  },
  watch: {
  },  
  created() {
    axios
      .get('data/data.json')
      .then((response) => {
        this.pageData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });            
  },   
  mounted() {
  }
};
</script>

<style scoped lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

</style>
