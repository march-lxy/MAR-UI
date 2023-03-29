<!-- html -->
<template>
  <m-button @click="openLoading">开始加载</m-button>
</template>


<script setup>
import Loading from "../index"; //此处为本地示例，请使用import { mLoading } from "mar-v3-ui";
const openLoading = () => {
  Loading.show({
    img:''
  });
  setTimeout(() => {
    Loading.hide();
  }, 1000);
};
</script>