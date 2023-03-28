<template>
    <m-space>
        <m-button @click="openMsg">消息提示</m-button>
        <m-button @click="openVNodeMsg">消息提示(VNode)</m-button>
    </m-space>
</template>

<script setup>
import mMessage from '../index' 
import { h } from 'vue'
const openMsg = () => {
  mMessage({
    text: '默认消息提示'
  })
}
const openVNodeMsg = () => {
  mMessage({
    text: h('p', null, '默认消息提示(VNode)')
  })
}
</script>

<style lang="scss" scoped>

</style>