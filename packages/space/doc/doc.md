<script setup>
    import BaseVue from './base.vue';
    import InlineVue from './inline.vue';
    import SizeVue from './size.vue';
    import preview from '@/components/preview.vue'
</script>

## Space间距

### 基础用法

<preview compname='space' demoname='base'>
	<base-vue />
</preview>

### 垂直布局

使用 `inline` 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制.

**inline为true的时候是flex-direction:row**,否则是**flex-direction:column**

我们也提供垂直布局方式。

<preview compname='space' demoname='inline'>
	<inline-vue />
</preview>

### 控制间距的大小

通过 size 控制组件大小 size传入一个数组,**通过gap的css属性进行控制,size[0]代表纵向间距,size[1]代表横向间距** 

默认间距是[10,10]横向布局

<preview compname='space' demoname='size'>
	<size-vue />
</preview>