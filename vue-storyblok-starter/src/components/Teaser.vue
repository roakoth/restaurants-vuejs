<template>
  <div v-editable="blok" class="text-lg text-center font-bold text-2xl">
    {{ blok.headline }}
  </div>
</template>
 
<script setup>
const props = defineProps({
  blok: Object
});
</script>