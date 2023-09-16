<script setup>
const props = defineProps({
    img: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    ingred: {
       type: String,
        default: '' 
    }
})
</script>
<template>
    <div class="flex flex-col border border-white/[.1]">
        <img :src="img" class="w-full h-[300px]" />
        <div class="flex items-center w-[300px] py-2 px-4 border-t border-b border-white/[.1] grow text-lg">
            {{ title }}
        </div>
        <div class="flex">
            <div class="grow border-e border-white/[.1] p-4 text-white/[.3] text-sm">{{ date }}</div>
            <button class="px-2 text-green">More</button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
