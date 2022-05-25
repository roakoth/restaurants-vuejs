<template>
    <div v-editable="blok" class="py-2">
        <h1 class="text-lg text-center font-bold text-2xl"> {{ blok.name }}</h1>
    </div>
</template>

<script setup>
const props = defineProps({
    blok: Object
})
</script>