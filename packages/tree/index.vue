<template>
    <li v-for="(item,index) in newOptions" :key="index" @click.stop="handleClick(item)">
        {{item.label}}
        <transition name="fade">
            <ul v-show="item.isOpen" v-if="item.children && item.children.length">
                <m-tree :options="item.children"></m-tree>
            </ul>
        </transition>
        
    </li>
</template>
<script>
export default {
    name:'mTree'
}
</script>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    options:{
        type:Array,
        default:[]
    }
})
const newOptions = ref(props.options)
const handleClick = (item) =>{
     item.isOpen = !item.isOpen
}
console.log(props.options);
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>