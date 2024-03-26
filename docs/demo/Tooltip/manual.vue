<script setup lang="ts">
import Tooltip from '../../../src/components/Tooltip/Tooltip.vue'
import Button from '../../../src/components/Button/Button.vue'
import { ref } from 'vue'
import type { TooltipInstance } from '../../../src/components/Tooltip/types'

const toggleState = ref<boolean>(false)
const tooltipRef = ref<TooltipInstance | null>(null)

const handleClick = () => {
  toggleState.value = !toggleState.value
  if (tooltipRef.value && toggleState.value) {
    tooltipRef.value?.showTooltip()
  } else {
    tooltipRef.value?.closeTooltip()
  }
}
</script>

<template>
  <div>
    <Tooltip ref="tooltipRef" placement="left" manual>
      <Button type="primary">xin</Button>

      <template #content>
        <div>xinxin OvO</div>
      </template>
    </Tooltip>

    <div class="controlTooltip">
      <Button round @click="handleClick">点我控制Tolltip显示与隐藏</Button>
    </div>
  </div>
</template>

<style scoped>
.controlTooltip {
  margin-top: 20px;
}
</style>
