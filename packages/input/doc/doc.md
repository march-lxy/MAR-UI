<script setup>
    import BaseVue from './base.vue'
    import DisableVue from './disable.vue';
    import clearVue from './clear.vue';
    import passwordVue from './password.vue'
    import preview from '@/components/preview.vue'

</script>

## Input输入框 

### 基本用法

<preview  compname='input' demoname='base'>
  <base-vue />
</preview>

### 禁用状态

<preview  compname='input' demoname='disable'>
  <disable-vue />
</preview>

### 可清空状态

<preview  compname='input' demoname='clear'>
  <clear-vue />
</preview>

### 密码框

<preview  compname='input' demoname='password'>
  <password-vue />
</preview>