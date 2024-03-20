<template>
  <div class="xin-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import type { NameType, CollapseEmits, CollapseProps } from './types'
import { collapseContextKey } from './types'

// 组件配置
defineOptions({
  name: 'XinCollapse'
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref<NameType[]>(props.modelValue)

// 解决传入的数据被异步更新时组件内不更新的问题
watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  }
)

const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    // 手风琴模式逻辑
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
      // 存在，删除数组对应的一项
      activeNames.value.splice(index, 1)
    } else {
      // 不存在，插入对应的name
      activeNames.value.push(item)
    }
  }
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style scoped></style>
