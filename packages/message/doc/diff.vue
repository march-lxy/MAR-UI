<!-- html -->
<template>
  <m-space>
    <m-button @click="openInfo">文本状态</m-button>
    <m-button @click="openSuccess" type="success">成功状态</m-button>
    <m-button @click="openWarn" type="warning">警告状态</m-button>
    <m-button @click="openError" type="danger">错误状态</m-button>
    <m-button @click="openCustom">自定义</m-button>
  </m-space>
</template>


<script setup>
import Message from "../index";
const openInfo = () => {
  Message({
    type: "info",
    text: "文本消息提示!",
  });
};
const openSuccess = () => {
  Message({
    type: "success",
    text: "成功状态消息提示!",
  });
};
const openWarn = () => {
  Message({
    type: "warn",
    text: "警告状态消息提示!",
  });
};
const openError = () => {
  Message({
    type: "error",
    text: "错误状态消息提示!",
  });
};
const openCustom = () => {
  Message({
    type: "custom",
    text: "自定义消息弹窗样式",
    icon: "calendar",
    textColor: "#000",
    bgColor: "#f40",
  });
};
</script>