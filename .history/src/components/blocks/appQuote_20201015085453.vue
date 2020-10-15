<template>
<div class="section quote-block">
  <div class="container">
    <div class="row">
      <div class="quote-block__col">
        <blockquote class="quote">
          <p class="quote__quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis varius dictum. Aliquam eu pulvinar
            enim. Maecenas condimentum aliquam vulputate.
          </p>
          <cite>
            <span class="quote__author">John Smith,</span>
            <span class="quote__job-title">Managing Director</span>
          </cite>
        </blockquote>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppBlock', 
  data () {
    return {
      blockData: null
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
        this.blockData = response.data;
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


</style>
