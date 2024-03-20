<script setup>
import Button from '../../../src/components/Button/Button.vue'
</script>

<template>
  <div>
    <Button disabled>Default</Button>
    <Button disabled type="primary">Primary</Button>
    <Button disabled type="success">Success</Button>
    <Button disabled type="info">Info</Button>
    <Button disabled type="warning">Warning</Button>
    <Button disabled type="danger">Danger</Button>
  </div>

  <div class="mt-20">
    <Button plain disabled>Plain</Button>
    <Button type="primary" plain disabled>Primary</Button>
    <Button type="success" plain disabled> Success</Button>
    <Button type="info" plain disabled>Info</Button>
    <Button type="warning" plain disabled>Warning</Button>
    <Button type="danger" plain disabled>Danger</Button>
  </div>

  <div class="mt-20">
    <Button round disabled>Round</Button>
    <Button type="primary" round disabled>Primary</Button>
    <Button type="success" round disabled> Success</Button>
    <Button type="info" round disabled>Info</Button>
    <Button type="warning" round disabled>Warning</Button>
    <Button type="danger" round disabled>Danger</Button>
  </div>

  <div class="mt-20">
    <Button circle disabled>☀️</Button>
    <Button type="primary" circle disabled>☀️</Button>
    <Button type="success" circle disabled> ☀️</Button>
    <Button type="info" circle disabled>☀️</Button>
    <Button type="warning" circle disabled>☀️</Button>
    <Button type="danger" circle disabled>☀️</Button>
  </div>
</template>

<style scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
