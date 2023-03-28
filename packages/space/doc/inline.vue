<template>
    <div>
        <m-space :size="size" :inline="false">
            <m-button type="success">Space</m-button>
            <m-button type="success">Space</m-button>
            <m-button type="success">Space</m-button>
            <m-button type="success">Space</m-button>
        </m-space>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const size = reactive([10,10])//纵向  横向
</script>

<style lang="scss" scoped>

</style>