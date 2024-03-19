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

const handleItemClick = (name: NameType) => {
  // 开启手风琴模式时的处理逻辑
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === name ? '' : name]
  } else {
    const index = activeNames.value.indexOf(name)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(name)
    }

    emits('update:modalValue', activeNames.value)
    emits('change', activeNames.value)
  }
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style scoped></style>
