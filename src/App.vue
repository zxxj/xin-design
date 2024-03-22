<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import type { ButtonInstance } from './components/Button/types'

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
      <Button ref="buttonRef">Default</Button>

      <Button ref="buttonRef" type="primary">Primary</Button>

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
</template>

<style scoped>
.plain-button {
  margin-top: 20px;
}
</style>
