<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import type { ButtonInstance } from './components/Button/types'
import Tooltip from './components/Tooltip/Tooltip.vue'
import type { TooltipInstance } from './components/Tooltip/types'
import type { Options } from '@popperjs/core'

const trigger = ref<any>('click')
const triggerRef = ref<TooltipInstance | null>(null)
const tooltipOptions: Partial<Options> = { placement: 'right', strategy: 'fixed' }
const open = () => {
  console.log(triggerRef.value)
  triggerRef.value?.showTooltip()
}

const closeTooltip = () => {
  triggerRef.value?.closeTooltip()
}

onMounted(() => {
  setTimeout(() => {
    // trigger.value = 'hover'
  }, 2000)
})
// Icon
import Icon from './components/Icon/Icon.vue'

// Button
const buttonRef = ref<ButtonInstance | null>(null)

// Collapse
const opendValue = ref([])
</script>

<template>
  <!-- Button -->
  <div>
    <div>
      普通按钮
      <Button ref="buttonRef" @click="open">Default</Button>

      <Button ref="buttonRef" @click="closeTooltip" type="primary">Primary</Button>

      <Button ref="buttonRef" type="success">Success</Button>

      <Button ref="buttonRef" type="info">Info</Button>

      <Button ref="buttonRef" type="warning">Warning</Button>

      <Button ref="buttonRef" type="danger">Danger</Button>
    </div>
  </div>

  <!-- Collapse -->
  <Collapse v-model="opendValue" accordion>
    <CollapseItem :name="'one'" :title="'one title'">
      <template #title>
        <div>one title</div>
      </template>

      <template #content>
        <div>one content</div>
        <div>this is one content!!!</div>
      </template>
    </CollapseItem>

    <CollapseItem :name="'two'" :title="'two title'" disabled>
      <template #content>
        <div>tow content</div>
        <div>this is two content!!!</div>
      </template>
    </CollapseItem>

    <CollapseItem :name="'three'" :title="'three title'">
      <template #content>
        <div>three content</div>
        <div>this is three content!!!</div>
      </template>
    </CollapseItem>

    {{ opendValue }}
  </Collapse>

  <!-- Icon -->
  <Icon icon="user-secret" type="primary" color="#f00" />

  <div>
    <Button loading>测试按钮加载状态</Button>
  </div>

  <div>
    <Button icon="user-secret">测试图标按钮</Button>
  </div>

  <Tooltip ref="triggerRef" :trigger="trigger" :popper-options="tooltipOptions" manual>
    <img src="/public/favicon.ico" style="width: 200px; height: 200px" alt="" />

    <template #content> hello tooltip </template>
  </Tooltip>
</template>

<style scoped>
.plain-button {
  margin-top: 20px;
}
</style>
