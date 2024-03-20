<script setup>
import Button from '../../../src/components/Button/Button.vue'
</script>

<template>
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </div>

  <div class="mt-20">
    <Button plain>Plain</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain> Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
  </div>

  <div class="mt-20">
    <Button round>Round</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round> Success</Button>
    <Button type="info" round>Info</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
  </div>

  <div class="mt-20">
    <Button circle>☀️</Button>
    <Button type="primary" circle>☀️</Button>
    <Button type="success" circle> ☀️</Button>
    <Button type="info" circle>☀️</Button>
    <Button type="warning" circle>☀️</Button>
    <Button type="danger" circle>☀️</Button>
  </div>
</template>
<style scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
