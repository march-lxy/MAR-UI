<template>
  <div class="pre-code-box">
    <div class="slot-content-box">
      <slot />
    </div>
    <div class="copyCode-box">
      <span class="m-copy" v-if="showCode" @click="copyCode">
        复制代码
      </span>
      <transition name="slide-fade">
        <pre
          class="language-html"
          v-if="showCode"
          v-highlight
        ><code class="language-html">{{ sourceCode }}</code></pre>
      </transition>
      <div class="showCode" @click="showOrhideCode">
        <m-icon type="code" class="m-icon" />
        <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
      </div>
      <textarea id="inputCopy" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import Message from "../../packages/message/index";
import { mIcon } from '../../packages/icon/index'
const props = defineProps({
  compname: {
    type: String,
    default: "",
    require: true,
  },
  demoname: {
    type: String,
    default: "",
    require: true,
  },
});
const showCode = ref(false);
const border = ref("1px solid rgba(0,0,0,.06)");
const showOrhideCode = () => {
  showCode.value = !showCode.value;
  if (showCode.value) {
    border.value = "0";
  } else {
    border.value = "1px solid rgba(0,0,0,.06)";
  }
};
const sourceCode = ref("");
async function getSourceCode() {
  const isDev = import.meta.env.MODE === "development";
  if (isDev) {
    sourceCode.value = (
      await import(
        /* @vite-ignore */ `/packages/${props.compname}/doc/${props.demoname}.vue?raw`
      )
    ).default;
  } else {
    sourceCode.value = await fetch(
      `/packages/${props.compName}/doc/${props.demoName}.vue`
    ).then((res) => res.text());
  }
}
const copyCode = () => {
  const input = document.getElementById("inputCopy");
  input.value = sourceCode.value;
  input.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
    Message({
      type: "success",
      text: "代码复制成功",
    });
  } else {
    Message({
      type: "error",
      text: "代码复制成功",
    });
  }
};
onMounted(() => {
  getSourceCode();
});
</script>

<style scoped lang="scss">
.m-icon {
  width: 20px;
  margin-right: 4px;
}
#inputCopy {
  opacity: 0;
  border: 0;
  outline: none;
  height: 0;
  position: fixed;
  z-index: -99999999;
}
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}
.pre-code-box {
  width: 95%;
  height: auto;
  overflow: hidden;
  border-top: 0;
  margin: 0px 0 15px 0;
  position: relative;
  transition: all 0.15s ease-out;
  border: 1px solid $border-color-1;
  border-radius: 10px;
  .slot-content-box {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 2px dashed $border-color-1;
  }
  .copyCode-box {
    min-height: 30px;
    position: relative;
    .m-copy {
      position: absolute;
      top: 10px;
      right: 10px;
      color: $text-light;
      font-size: 12px;
      cursor: pointer;
      i {
        font-size: 22px;
        color: #b7b3b3;
        &:hover {
          color: #000;
        }
      }
    }
    .showCode {
      width: 100%;
      min-height: 30px;
      font-size: 14px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #505050;
      cursor: pointer;
      i {
        margin-left: 10px;
      }
      i.rotate {
        transform: rotate(180deg);
      }
      &:hover {
        background: #f9f9f9;
        color: #0e80eb;
      }
    }
    &:hover {
      box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
    }
  }
}
</style>
