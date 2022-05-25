
<template>
  <div v-editable="blok" class="flex flex-col mb-6">
      <h2 class="py-8 text-center text-xl font-bold"> {{ blok.title }}</h2>
      <ul class="flex">
        
    <li
      v-for="blok in blok.articles"
      :key="blok._uid"
      class="flex-auto px-6"
      >
     <Article
       :blok="blok.content"
       />
    </li>
    </ul>
  </div>
 
</template>
 
<script setup>
import Article from './Article.vue'

const props = defineProps({
  blok: Object
});

</script>