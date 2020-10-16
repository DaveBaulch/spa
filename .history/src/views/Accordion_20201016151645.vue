<template>

  <div class="home">

    <div class="container">
      <h1>Accordion</h1>
    </div>

    <dl class="accordion box" role="presentation">
      <!-- <accordion-item
        v-for="item in content"
        :multiple="multiple"
        :item="item"
        :groupId="groupId"
        :key="item.id">
      </accordion-item> -->

    <div 
      v-for="item in content"
      :id="groupId + '-' + item.id" 
      class="accordion-item" 
      :class="{'is-active': item.active}"
      :multiple="multiple"
      :key="item.id"
    >
      <dt class="accordion-item-title">
        <button @click="toggle" class="accordion-item-trigger">
          <h4 class="accordion-item-title-text">{{item.title}}</h4>
          <span class="accordion-item-trigger-icon"></span>
        </button>
      </dt>
      <transition
        name="accordion-item"
        @enter="startTransition"
        @after-enter="endTransition"
        @before-leave="startTransition"
        @after-leave="endTransition">
        <dd v-if="item.active" class="accordion-item-details">
          <div v-html="item.details" class="accordion-item-details-inner"></div>
        </dd>
      </transition>
    </div>


    </dl>

  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Accordion",
  data () {
    return {
      content: [
        {
          id: 1,
          active: true,
          title: 'Crushing Spirits',
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
          title: 'Soundtracks',
          details: `
            <p>Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff!</p>
          `
        },
        {
          id: 3,
          active: false,
          title: `The Letter Shaped Like a Man Wearing a Hat`,
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
  },
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach((item) => {
          if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
          else item.item.active = false
        }) 
      }
    },
    
    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    
    endTransition(el) {
      el.style.height = ''
    }
  },

  mounted() {
    this.groupId = 'theID'
  }
};
</script>

<style scoped lang="scss">

$browser-context: 16;
$blue: #1779ba;
$gray: #cacaca;
$red: #cc4b37;
$white: #ffffff;

@function em($pixels, $context: $browser-context) {
  @return #{$pixels/$context}em;
}

#app {
  margin: em(60) auto;
  padding: em(12);
  max-width: em(800);
}

.container {
  margin-bottom: em(24);
}

.btn-action-delete {
  color: $red;
  cursor: pointer;
}

.accordion {
  padding: 0;
  
  div:not(:last-child) {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }
  
  div:last-child .accordion-item-details {
    border-radius: 5px;
  }
  
  dd {
    margin-left: 0;
  }
}

.accordion-item-trigger,
.accordion-item-details-inner {
  padding: 0.75rem 1.25rem;
}

.accordion-item-title {
  position: relative;
  
  h4 {
    font-size: 1.25rem;
    margin-bottom: 0;
    padding-right: 1.25rem;
  }
}

.accordion-item-trigger {
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
}

.accordion-item-trigger-icon {
  $size: 8px;
  display: block;
  position: absolute;
  top: 0; right: 1.25rem; bottom: 0;
  margin: auto;
  width: $size;
  height: $size;
  border-right: 2px solid #363636;
  border-bottom: 2px solid #363636;
  transform: translateY(-$size / 4) rotate(45deg);
  transition: transform 0.2s ease;
  
  .is-active & {
    transform: translateY($size / 4) rotate(225deg);
  }
}

.accordion-item-details {
  overflow: hidden;
  background-color: whitesmoke;
}

.accordion-item-enter-active, .accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}
.accordion-item-enter, .accordion-item-leave-to {
  height: 0 !important;
}
</style>
