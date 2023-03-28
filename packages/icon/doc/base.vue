<template>
  <ul class="icons">
    <li v-for="icon in icons" :key="icon">
      <m-icon :type="icon"></m-icon>
      <div>{{ icon }}</div>
    </li>
    <li>
      <m-icon type="loader" animation="spin" animation-speed="slow"></m-icon>
      <div>loader</div>
    </li>
    <li>
      <m-icon type="settings" animation="spin" animation-speed="slow"></m-icon>
      <div>settings</div>
    </li>
    <li>
      <m-icon type="sun" animation="spin" animation-speed="slow"></m-icon>
      <div>sun</div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import feather from "feather-icons";
import { mIcon } from "../index";

const icons = ref(Object.keys(feather.icons));

</script>

<style scoped lang="scss">
.icons {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    text-align: center;
    padding: 0.5rem;
    transition: color 0.15s;
    &:hover {
      color: #0074d9;
      div {
        color: #0074d9;
      }
    }
    i {
      vertical-align: middle;
    }
    div {
      color: gray;
      margin-left: 0.5rem;
      transition: color 0.15s;
    }
  }
}
</style>
