<template>

</template>
 
<script>
  import axios from 'axios';

  export default {
    name: 'AppSector',
    components: { 
      AppSectorsItem
    },
    data: function () {
        blockData: null
      }
    },
    computed: {
    },
    watch: {
    },
    created() {
      axios
        .get('data/sectors-data.json')
        .then((response) => {
          this.blockData = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });            
    }   
  }
</script> 

<styles scoped lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

</styles>
