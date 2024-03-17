<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})
const buttonRef = ref<ButtonInstance | null>(null)
</script>

<template>
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
</template>

<style scoped>
.plain-button {
  margin-top: 20px;
}
</style>
