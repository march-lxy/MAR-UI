<script setup>
import BaseVue from './base.vue';
import DiffVue from './diff.vue';
import DisabledVue from './disabled.vue';
import InlineVue from './inline.vue';
import ColorVue from './color.vue';
import preview from '@/components/preview.vue'
</script>

## Radio单选框

### 基本用法

<preview  compname='radio' demoname='base'>
  <base-vue />
</preview>

### 禁用选项状态

<preview  compname='radio' demoname='disabled'>
  <disabled-vue />
</preview>

### 排列方式

`排列方式为横向和纵向,inline字段进行控制,true:display:inline-flex,false:flex`
**默认为true**

<preview  compname='radio' demoname='inline'>
  <inline-vue />
</preview>

### 自定义颜色

`自定义颜色customColor字段控制,传入颜色的16进制代码`

<preview  compname='radio' demoname='color'>
  <color-vue />
</preview>

### 自定义模板

可以自定义备选项
`filedLabel:key属性`  `filedValue:value属性`

<preview  compname='radio' demoname='diff'>
  <diff-vue />
</preview>