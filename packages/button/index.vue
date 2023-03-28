<template>
  <button :class="xClass" :disabled="disabled">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "mButton",
};
</script>
<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
});
const xClass = computed(() => {
  return [
    "m-button",
    `m-button-${props.type}`,
    props.disabled ? "m-button-disabled" : "",
    props.round ? "m-button-round" : "",
    props.plain ? "m-button-plain" : "",
    props.size ? `m-button-${props.size}` : "",
  ];
});
</script>

<style lang="scss" scoped>
.m-button {
  border: 0;
  padding: 12px 24px;
  outline: none;
  background: none;
  line-height: 1;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.m-button-default {
  color: #333;
  border: 1px solid #dcdfe6;
  // &:hover,&:focus{
  //     color: #409eff;
  //     border-color: #c6e2ff;
  //     background-color: #ecf5ff;
  // }
  &.m-button-plain {
    color: #333;
    background: $white;
    border: 1px solid #dcdfe6;
    &:hover,
    &:focus {
      color: $primary;
      background: $white;
      border-color: $primary;
    }
  }
}
.m-button-primary {
  color: #fff;
  background: $primary;
  border-color: $primary;
  &.m-button-plain {
    color: $primary;
    background: $primary-light;
    border-color: $primary-light;
    &:hover,
    &:focus {
      color: #fff;
      background: $primary;
      border-color: $primary;
    }
  }
}
.m-button-success {
  color: #fff;
  background: $success;
  border-color: $success;
  &.m-button-plain {
    color: $success;
    background: $success-light;
    border-color: $success-light;
    &:hover,
    &:focus {
      color: #fff;
      background: $success;
      border-color: $success;
    }
  }
}
.m-button-warning {
  color: #fff;
  background: $warning;
  border-color: $warning;
  &.m-button-plain {
    color: $warning;
    background: $warning-light;
    border-color: $warning-light;
    &:hover,
    &:focus {
      color: #fff;
      background: $warning;
      border-color: $warning;
    }
  }
}
.m-button-info {
  color: #fff;
  background: $info;
  border-color: $info;
  &.m-button-plain {
    color: $info;
    background: $info-light;
    border-color: $info-light;
    &:hover,
    &:focus {
      color: #fff;
      background: $info;
      border-color: $info;
    }
  }
}
.m-button-danger {
  color: #fff;
  background: $danger;
  border-color: $danger;
  &.m-button-plain {
    color: $danger;
    background: $danger-light;
    border-color: $danger-light;
    &:hover,
    &:focus {
      color: #fff;
      background: $danger;
      border-color: $danger;
    }
  }
}
.m-button-text {
  color: #fff;
  background: $text;
  border-color: $text;
  &.m-button-plain {
    color: $text;
    background: $text-light;
    border-color: $text-light;
    &:hover,
    &:focus {
      color: #fff;
      background: $text;
      border-color: $text;
    }
  }
}
.m-button-disabled {
  opacity: 0.4;
  cursor: no-drop;
  &:hover,
  &:focus {
    opacity: 0.4;
  }
}
.m-button-round {
  border-radius: 20px;
}
.m-button-large {
  padding: 16px 40px;
}
.m-button-small {
  padding: 8px 16px;
}
</style>
