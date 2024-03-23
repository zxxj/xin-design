<template>
  <button
    ref="_ref"
    :disabled="disabled"
    class="xin-button"
    :class="{
      [`xin-button--${type}`]: props.type,
      [`xin-button--${size}`]: props.size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': props.disabled || props.loading,
      'is-loading': props.loading
    }"
    :autofocus="props.autofocus"
    :nativeType="props.nativeType"
  >
    <!-- 加载状态图标 -->
    <template v-if="props.loading">
      <Icon class="mr-10" icon="spinner" spin />
    </template>

    <!-- 按钮图标 -->
    <template v-if="props.icon">
      <Icon
        :class="{
          'mr-10': ButtonDefalutSlotIsEmpty
        }"
        :icon="props.icon"
      />
    </template>

    <!-- 按钮内容插槽 -->
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots } from 'vue'
import type { ButtonProps } from './types'
import Icon from '../Icon/Icon.vue'

// 判断是否传入了按钮文本内容,动态的给图表组件添加样式
const ButtonDefalutSlotIsEmpty = ref(false)
onMounted(() => {
  ButtonDefalutSlotIsEmpty.value = useSlots()?.default ? true : false
})

// 组件的配置
defineOptions({
  name: 'XINButton'
})

// 为原生的按钮type设置一个默认值: button
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

// 获取button实例
const _ref = ref<HTMLButtonElement>()

// 将button实例暴露出去
defineExpose({
  ref: _ref
})
</script>

<style scoped>
.mr-10 {
  margin-right: 10px;
}
</style>
