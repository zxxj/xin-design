<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import type { ButtonInstance } from './components/Button/types'

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})
const buttonRef = ref<ButtonInstance | null>(null)
</script>

<template>
  <!-- Button -->
  <div>
    <div>
      <Button ref="buttonRef">Default</Button>

      <Button ref="buttonRef" type="primary">Primary</Button>

      <Button ref="buttonRef" type="success">Success</Button>

      <Button ref="buttonRef" type="info">Info</Button>

      <Button ref="buttonRef" type="warning">Warning</Button>

      <Button ref="buttonRef" type="danger">Danger</Button>
    </div>

    <div class="plain-button">
      <Button ref="buttonRef" plain>Default</Button>

      <Button ref="buttonRef" type="primary" plain>Primary</Button>

      <Button ref="buttonRef" type="success" plain>Success</Button>

      <Button ref="buttonRef" type="info" plain>Info</Button>

      <Button ref="buttonRef" type="warning" plain>Warning</Button>

      <Button ref="buttonRef" type="danger" plain>Danger</Button>
    </div>

    <div class="plain-button">
      <Button ref="buttonRef" round>Default</Button>

      <Button ref="buttonRef" type="primary" round>Primary</Button>

      <Button ref="buttonRef" type="success" round>Success</Button>

      <Button ref="buttonRef" type="info" round>Info</Button>

      <Button ref="buttonRef" type="warning" round>Warning</Button>

      <Button ref="buttonRef" type="danger" round>Danger</Button>
    </div>

    <div class="plain-button">
      <Button ref="buttonRef" disabled>Default</Button>

      <Button ref="buttonRef" type="primary" disabled>Primary</Button>

      <Button ref="buttonRef" type="success" disabled>Success</Button>

      <Button ref="buttonRef" type="info" disabled>Info</Button>

      <Button ref="buttonRef" type="warning" disabled>Warning</Button>

      <Button ref="buttonRef" type="danger" disabled>Danger</Button>
    </div>
  </div>

  <!-- Collapse -->
  <Collapse>
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
  </Collapse>
</template>

<style scoped>
.plain-button {
  margin-top: 20px;
}
</style>
