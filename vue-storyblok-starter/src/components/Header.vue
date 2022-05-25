<template>
    <div v-editable="blok">
        <h1> {{ blok.headline }}</h1>
        <p> {{ blok.description }} </p>
    </div>
</template>

<script setup>
const props = defineProps({
    blok: Object
})
</script>