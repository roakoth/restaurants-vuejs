<script setup>
import { onMounted, ref } from 'vue';
import { useStoryblokApi, useStoryblokBridge } from '@storyblok/vue';


 
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/home', {
  version: 'draft',
 resolve_relations: "myArticles.articles"
});
 
const story = ref(null);
story.value = data.story;


onMounted(() => {
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory), {
    resolveRelations: ["myArticles.articles"]
  }
   
  );
})

</script>
 
<template>
  <Page
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>

