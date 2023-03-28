<!-- html -->
<template>
  <m-button @click="openConfirm">确认消息</m-button>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance } from "vue";
import Confirm from "../index";
import Message from "../../message/index";
// 以上为本地示例，请使用import { mConfirm, mMessage } from "mar-v3-ui";引入
const instance = getCurrentInstance();
const openConfirm = () => {
  instance.proxy
    .$Confirm({
      text: "您确认要删除这条数据吗？",
    })
    .then(() => {
      Message({ text: "点击了确定",  icon: "icon-success", });
    })
    .catch(() => {
      Message({ text: "点击了取消",icon: "icon-jinggao", });
    });
};
</script>