<script setup lang="ts">
import Dropdown from '../../../src/components/Dropdown/Dropdown.vue'
import { MenuOption } from '../../../src/components/Dropdown/types'

const options: MenuOption[] = [
  { key: 1, label: 'Action1' },
  { key: 2, label: 'Action2' },
  { key: 3, label: 'Action3' },
  { key: 4, label: 'Action4' },
  { key: 5, label: 'Action5' }
]

const handleSelect = (e: MenuOption) => {
  console.log(e)
}
</script>

<template>
  <Dropdown :menu-options="options" trigger="click" @select="handleSelect">Dropdown List</Dropdown>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-evenly;
}

.title {
  color: #505154;
  font-size: 14px;
}
</style>
