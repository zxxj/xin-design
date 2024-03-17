<template>
  <div class="xin-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import type { NameType } from './types'
import { collapseContextKey } from './types'

// 组件配置
defineOptions({
  name: 'XinCollapse'
})

const activeNames = ref<NameType[]>([])

const handleItemClick = (name: NameType) => {
  const index = activeNames.value.indexOf(name)
  if (index > -1) {
    activeNames.value.splice(index, 1)
  } else {
    activeNames.value.push(name)
  }
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style scoped></style>
