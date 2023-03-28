<template>
    <div>
        <m-radio :options="state.options" ></m-radio>
        <!-- <m-radio :options="state.options" ></m-radio> -->
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
    options:[
        {
            label:'备选项',
            value:'1'
        },
        {
            label:'备选项',
            value:'2'
        },
        {
            label:'备选项',
            value:'3',
            disabled:true
        }
    ]
})
</script>

<style lang="scss" scoped>

</style>