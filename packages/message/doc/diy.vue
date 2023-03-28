<!-- html -->
<template>
  <m-space>
    <m-button @click="openMsg1">消息提示</m-button>
    <m-button @click="openMsg2">5秒后消失</m-button>
  </m-space>
</template>

<!-- js -->
<script setup>
import Message from "../index"; //此处为本地示例，请使用import {mMessage} from "mar-v3-ui;引入
const openMsg1 = () => {
  Message({
    text: "自定义Icon！",
    icon: "icon-icon-test",
  });
};
const openMsg2 = () => {
  Message({
    text: "5秒后消失！",
    icon: "icon-check-item",
    timeout: 5000,
  });
};
</script>