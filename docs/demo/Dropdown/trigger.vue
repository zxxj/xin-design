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
</script>

<template>
  <div class="content">
    <div>
      <p class="title">hover to trigger</p>
      <Dropdown :menu-options="options" trigger="hover">Dropdown List</Dropdown>
    </div>

    <div>
      <p class="title">click to trigger</p>
      <Dropdown :menu-options="options" trigger="click">Dropdown List</Dropdown>
    </div>
  </div>
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
