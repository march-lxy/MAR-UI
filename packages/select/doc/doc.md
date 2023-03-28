<script setup>
import BaseVue from './base.vue';
import SizeVue from './size.vue'
import DiffVue from './diff.vue';
import DisabledVue from './disable.vue';
import DisableVue from './disabled.vue'
import preview from '@/components/preview.vue'
</script>  

## Select选择器

### 基本用法

适用广泛的基础单选

<preview compname='select' demoname='base'>
  <base-vue />
</preview>


### 禁用选项

<preview compname='select' demoname='disable'>
  <disabled-vue />
</preview>

### 尺寸大小

<preview compname='select' demoname='size'>
  <size-vue />
</preview>

### 自定义模板

可以自定义备选项
`filedLabel:key属性`  `filedValue:value属性`

<preview compname='select' demoname='diff'>
  <diff-vue />
</preview>