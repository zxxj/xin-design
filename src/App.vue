<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import type { ButtonInstance } from './components/Button/types'

// Button
const buttonRef = ref<ButtonInstance | null>(null)

// Collapse
const opendValue = ref(['one'])
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

    <div class="plain-button">
      朴素按钮
      <Button ref="buttonRef" plain>Default</Button>

      <Button ref="buttonRef" type="primary" plain>Primary</Button>

      <Button ref="buttonRef" type="success" plain>Success</Button>

      <Button ref="buttonRef" type="info" plain>Info</Button>

      <Button ref="buttonRef" type="warning" plain>Warning</Button>

      <Button ref="buttonRef" type="danger" plain>Danger</Button>
    </div>

    <div class="plain-button">
      圆形按钮
      <Button ref="buttonRef" round>Default</Button>

      <Button ref="buttonRef" type="primary" round>Primary</Button>

      <Button ref="buttonRef" type="success" round>Success</Button>

      <Button ref="buttonRef" type="info" round>Info</Button>

      <Button ref="buttonRef" type="warning" round>Warning</Button>

      <Button ref="buttonRef" type="danger" round>Danger</Button>
    </div>

    <div class="plain-button">
      禁用按钮
      <Button ref="buttonRef" disabled>Default</Button>

      <Button ref="buttonRef" type="primary" disabled>Primary</Button>

      <Button ref="buttonRef" type="success" disabled>Success</Button>

      <Button ref="buttonRef" type="info" disabled>Info</Button>

      <Button ref="buttonRef" type="warning" disabled>Warning</Button>

      <Button ref="buttonRef" type="danger" disabled>Danger</Button>
    </div>

    <div class="plain-button">
      按钮大小
      <Button ref="buttonRef" size="small">Default</Button>

      <Button ref="buttonRef" type="primary" size="small">Primary</Button>

      <Button ref="buttonRef" type="success" size="small">Success</Button>

      <Button ref="buttonRef" type="info" size="small">Info</Button>

      <Button ref="buttonRef" type="warning" size="small">Warning</Button>

      <Button ref="buttonRef" type="danger" size="small">Danger</Button>
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
</template>

<style scoped>
.plain-button {
  margin-top: 20px;
}
</style>
