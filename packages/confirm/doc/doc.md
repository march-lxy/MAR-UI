<script setup>
    import BaseVue from './base.vue';
    import InstanceVue from './instance.vue';
    import diyVue from './diy.vue'
    import preview from '@/components/preview.vue'
</script>

## Confirm消息确认 

### 基础用法

<preview compname='confirm' demoname='base'>
  <base-vue />
</preview>

### 通过组件实例调用

你也可以通过获取组件实例的方式来调用。

<preview compname='confirm' demoname='instance'>
  <instance-vue />
</preview>

### 拓展自定义配置

自定义配置整个消息确认框的元素

<preview compname='confirm' demoname='diy'>
  <diy-vue />
</preview>