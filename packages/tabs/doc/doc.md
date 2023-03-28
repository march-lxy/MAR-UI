<script setup>
    import BaseVue from './base.vue';
    import DiyStyleVue from './diyStyle.vue';
    import CloseVue from './close.vue'
    import preview from '@/components/preview.vue'
</script>

## Tabs切换
用于多个视图、数据切换展示操作

### 基础用法

<preview compname='tabs' demoname='base'>
  <base-vue />
</preview>

### 选项卡样式

<preview compname='tabs' demoname='diyStyle'>
  <diy-style-vue />
</preview>

### 动态增减标签页

<preview compname='tabs' demoname='close'>
  <close-vue />
</preview>