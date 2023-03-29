<template>
  <m-button @click="openConfirm">自定义配置</m-button>
</template>

<script setup>
import Confirm from "../index";
import Message from "../../message/index";
// 以上为本地示例，请使用import { mConfirm, mMessage } from "mzl-ui";引入
const openConfirm = () => {
  Confirm({
    title: "提示信息",
    text: "确认2022-07-02是您的生日吗？",
    icon: "calendar",
    confirmText: "是的",
    cancelText: "不是",
    closeShow: false,
  })
    .then(() => {
      Message({ text: "是的" });
    })
    .catch(() => {
      Message({ text: "不是" });
    });
};
</script>