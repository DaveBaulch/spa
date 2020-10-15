<template>
<div class="section quote-block">
  <div class="container">
    <div class="row">
      <blockquote class="quote">
        <p class="quote__quote">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis varius dictum. Aliquam eu pulvinar
          enim. Maecenas condimentum aliquam vulputate.
        </p>
        <cite>
          <span class="quote__author">J{{ blockData.  author }}</span>
          <span class="quote__job-title">{{ blockData.jobTitle }}</span>
        </cite>
      </blockquote>
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
      .get('data/quote-data.json')
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
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.quote {
  text-align: center;
  margin: 0 auto;
  padding: 0;
  border: none;
}

.quote__quote {
  font-size: 2.3rem;
  font-weight: bold;

  &.quote__quote--marks {
    &::before {
      content: '"';
    }

    &::after {
      content: '"';
    }
  }
}

</style>
