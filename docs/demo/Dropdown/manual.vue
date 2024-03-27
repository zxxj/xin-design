<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '../../../src/components/Dropdown/Dropdown.vue'
import { MenuOption, DropdownInstance } from '../../../src/components/Dropdown/types'
import Button from '../../../src/components/Button/Button.vue'

const options: MenuOption[] = [
  { key: 1, label: 'Action1' },
  { key: 2, label: 'Action2' },
  { key: 3, label: 'Action3' },
  { key: 4, label: 'Action4' },
  { key: 5, label: 'Action5' }
]

const dropdownRef = ref<DropdownInstance | null>(null)

const handleDropdown = () => {
  dropdownRef.value?.showDropdown()
}

const closeDropdown = () => {
  dropdownRef.value?.closeDropdown()
}
</script>

<template>
  <Dropdown ref="dropdownRef" :menu-options="options" manual>Dropdown List</Dropdown>

  <div>
    <Button @click="handleDropdown">打开Dropdown</Button>
    <Button @click="closeDropdown">关闭Dropdown</Button>
  </div>
</template>

<style scoped></style>
