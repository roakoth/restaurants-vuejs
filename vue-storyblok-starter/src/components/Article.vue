<template>
    <div v-editable="blok">
        <img :src= blok.hero_image.filename class="py-4">
        <h2 class="py-2 font-bold text-xl"> {{ blok.title }}</h2>
        <p class="py-2"> {{ blok.experience }}</p>
        <p class="py-2 font-bold"> {{ blok.author }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    blok: Object
})

</script>