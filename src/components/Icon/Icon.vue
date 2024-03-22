<template>
  <i
    class="xin-icon"
    :class="{
      [`xin-icon--${props.type}`]: props.type
    }"
    :style="customStyle"
  >
    <FontAwesomeIcon v-bind="props" />
  </i>
</template>

<script setup lang="ts">
// 引入fortawesome提供的组件,用于展示fortawesome中的图标
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { FontAwesomeIconProps } from './types'
import { computed } from 'vue'

defineOptions({
  name: 'XinIcon'
})

const props = defineProps<FontAwesomeIconProps>()

// 如果传入了color则此color权重最大,为方便使用者覆盖图标颜色
const customStyle = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

<style scoped></style>
