<template>
<div class="section quote-block">
  <div class="container">
    <div class="row">
      <blockquote class="quote">
        <span v-html="blockData.text" class="quote__text"></span>
        <cite>
          <span class="quote__author">{{ blockData.author }}</span>
          <span>,</span>
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
  computed: {
    authorName () {
      return this.blockData.author
    },
    authorTitle () {
      return this.blockData.jobTitle
    },    
    hasComma () {
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
  grid-column: 1 / 13;  

  @include breakpoint(md) {
    grid-column: 3 / 10;
  }

  @include breakpoint(lg) {
    grid-column: 3 / 10;
  }  
}

.quote__text {
  font-size: 2.3rem;
  font-weight: bold;
}

</style>
