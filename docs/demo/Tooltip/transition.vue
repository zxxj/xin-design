<script setup lang="ts">
import Tooltip from '../../../src/components/Tooltip/Tooltip.vue'
import Button from '../../../src/components/Button/Button.vue'
</script>

<template>
  <!-- 修改动画请自行查看Tooltip组件中style.css与Tooltip.vue -->
  <div>
    <Tooltip placement="top">
      <Button plain type="danger">transition</Button>

      <template #content>
        <div>transition</div>
        <h5>xin-design</h5>
      </template>
    </Tooltip>
  </div>
</template>
