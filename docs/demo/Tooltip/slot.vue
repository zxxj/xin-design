<script setup lang="ts">
import Tooltip from '../../../src/components/Tooltip/Tooltip.vue'
import Button from '../../../src/components/Button/Button.vue'
</script>

<template>
  <div>
    <Tooltip placement="top">
      <Button type="primary">xin-design</Button>

      <template #content>
        <div>hello</div>
        <h5>xin-design</h5>
      </template>
    </Tooltip>
  </div>
</template>
