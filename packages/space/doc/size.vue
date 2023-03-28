<template>
    <div>
        <m-space :size="size" >
            <m-button>Space</m-button>
            <m-button>Space</m-button>
            <m-button>Space</m-button>
            <m-button>Space</m-button>
            <m-button>Space</m-button>
            <m-button>Space</m-button>
            <m-button>Space</m-button>
            <m-button>Space</m-button>
            <m-button>Space</m-button>
        </m-space>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const size = reactive([40,20])//纵向  横向
</script>

<style lang="scss" scoped>

</style>