<template>
  <button
    ref="_ref"
    :disabled="disabled"
    class="xin-button"
    :class="{
      [`xin-button--${type}`]: type,
      [`xin-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }"
    :autofocus="autofocus"
    :nativeType="nativeType"
  >
    <!-- 按钮内容插槽 -->
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'

// 组件的配置
defineOptions({
  name: 'XINButton'
})

// 为原生的按钮type设置一个默认值: button
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})
console.log(props)

// 获取button实例
const _ref = ref<HTMLButtonElement>()

// 将button实例暴露出去
defineExpose({
  ref: _ref
})
</script>

<style></style>
