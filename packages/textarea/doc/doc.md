<script setup>
    import BaseVue from './base.vue';
    import DisabledVue from './disabled.vue';
    import ReadonlyVue from './readonly.vue';
    import MaxlengthVue from './maxlength.vue';
    import ResizeVue from "./resize.vue";
    import preview from '@/components/preview.vue'
</script>
## Textarea文本域

用于输入多行文本信息，通过将 **type** 属性的值指定为 textarea。

 ### 基本用法

<preview compname='textarea' demoname='base'>
  <base-vue />
</preview>

### 禁用状态


<preview compname='textarea' demoname='disabled'>
  <disabled-vue />
</preview>

### 只读状态

<preview compname='textarea' demoname='readonly'>
  <readonly-vue />
</preview>

### 输入长度限制

<preview compname='textarea' demoname='maxlength'>
  <maxlength-vue />
</preview>

### 伸缩状态

<preview compname='textarea' demoname='resize'>
  <resize-vue />
</preview>