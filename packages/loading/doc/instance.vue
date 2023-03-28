<!-- html -->
<template>
  <m-button @click="openLoading">开始加载</m-button>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance } from "vue";
import Loading from "../index"; //此处为本地示例，请使用import { mLoading } from "mar-v3-ui";
const instance = getCurrentInstance();
const openLoading = () => {
  instance.proxy.$Loading.show({
    img:''
  });
  setTimeout(() => {
    instance.proxy.$Loading.hide();
  }, 1000);
};
</script>