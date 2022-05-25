<template>
    <div v-editable="blok" class="flex-col">
        <img :src= blok.image.filename class="object-fill h-30 w-30">
        <p> {{ blok.name }}</p>
        <p> {{ blok.description }}</p>
        <p> {{ blok.location }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    blok: Object
})
</script>