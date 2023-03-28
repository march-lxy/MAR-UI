<template>
  <div>
    <span>横向</span>
    <m-radio :options="state.options"></m-radio>
    <span>纵向</span>
    <m-radio :options="state.options" :inline="false"></m-radio>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  options: [
    {
      label: "备选项",
      value: "1",
    },
    {
      label: "备选项",
      value: "2",
    },
    {
      label: "备选项",
      value: "3",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
