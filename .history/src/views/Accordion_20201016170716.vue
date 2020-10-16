<template>

  <div class="home">

    <div class="container">
      <h1>Accordion</h1>
    </div>

    <div class="row">
      <div class="accordion-wrapper">
        <dl class="accordion" role="presentation">
          <accordion-item
            v-for="item in content"
            :multiple="multiple"
            :item="item"
            :groupId="groupId"
            :key="item.id">
          </accordion-item>
        </dl>
      </div>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src
import AccordionItem from '@/views/AccordionItem';

export default {
  name: "Accordion",
  components: { 
    AccordionItem
  },  
  data () {
    return {
      groupId: 'theID',
      content: [
        {
          id: 1,
          active: true,
          title: 'Accordion 1',
          details: `
            <p>You can crush me but you can't crush my spirit! Are you crazy? I can't swallow that. Who's brave enough to fly into something we all keep calling a death sphere? It doesn't look so shiny to me.</p>
            <ul>
              <li>I just want to talk.</li>
              <li>It has nothing to do with mating.</li>
              <li>Fry, that doesn't make sense.</li>
            </ul>
          `
        },
        {
          id: 2,
          active: false,
          title: 'Accordion 2',
          details: `
            <p>Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff!</p>
          `
        },
        {
          id: 3,
          active: false,
          title: `Accordion 3`,
          details: `
            <p>And then the battle's not so bad? You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! Say it in Russian!</p>
            <p>Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.</p>
          `
        }
      ]
    }
  },  
  props: {
    multiple: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.accordion {
  padding: 0;
}

.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;  
}

.accordion-wrapper {
  text-align: center;
  margin: 0 auto;
  padding: 3rem 0;
  border: none;
  grid-column: 1 / 13;  

  @include breakpoint(md) {
    grid-column: 2 / 11;
  }

  @include breakpoint(lg) {
    grid-column: 3 / 10;
  }  
}
</style>
