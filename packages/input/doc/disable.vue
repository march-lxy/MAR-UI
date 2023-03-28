<template>
    <div>
        <m-input v-model="val" placeholder="请输入" disabled></m-input>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const val = ref('');
</script>

<style lang="scss" scoped>

</style>