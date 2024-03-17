<template>
  <div
    class="xin-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div
      class="xin-collapse-item__header"
      :id="`xin-collapse-item__header__${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <div
      class="xin-collapse-item__content"
      :id="`xin-collapse-item__content__${name}`"
      v-show="isActive"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { collapseContextKey } from './types'
import type { CollapseItemProps } from './types'

// 组件配置
defineOptions({
  name: 'XinCollapseItem'
})

// 接收父组件传递过来的数据
const props = defineProps<CollapseItemProps>()

// 接收父辈组件传递过来的数据
const collapseContext = inject(collapseContextKey)

// 发生点击事件后,判断当前数组中是否存在点击项的name,如果存在则收起,不存在则展开
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))

// 调用父辈组件中的函数,将当前点击的数据项传递给祖辈组件,在父辈组件的函数中(handleItemClick)进行最终展开或收起的判断操作
const handleClick = () => {
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}
</script>

<style scoped></style>
