<script setup>
    import BaseVue from './base.vue'
    import InstanceVue from './instance.vue';
    import DiffVue from './diff.vue';
    import DiyVue from './diy.vue';
    import preview from '@/components/preview.vue'

</script>

## Message消息提示 

### 基本用法

message 消息提示基本使用示例。

<preview  compname='message' demoname='base'>
  <base-vue />
</preview>

你也可以通过获取组件实例的方式来调用。

<preview  compname='message' demoname='instance'>
  <instance-vue />
</preview>

### 不同状态

可根据 Message 参数的 type 来定义显示不同的状态。

<preview  compname='message' demoname='diff'>
  <diff-vue />
</preview>

### 拓展自定义配置

可根据不同场景自定义 icon 图标及 timeout 消失时间。

<preview  compname='message' demoname='diy'>
  <diff-vue />
</preview>