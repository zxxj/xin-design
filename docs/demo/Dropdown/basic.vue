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

// 监听dropdown的展开与收起
const visibleChange = (e: boolean) => {
  console.log(e)
}
</script>

<template>
  <Dropdown :menu-options="options" @visible-change="visibleChange">Dropdown List</Dropdown>
</template>

<style scoped></style>
