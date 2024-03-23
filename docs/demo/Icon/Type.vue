<script setup lang="ts">
import Icon from '../../../src/components/Icon/Icon.vue'
</script>

<template>
  <Icon icon="user" class="mr-20" />
  <Icon icon="lock" class="mr-20" type="primary" />
  <Icon icon="heart" class="mr-20" type="success" />
  <Icon icon="download" class="mr-20" type="info" />
  <Icon icon="star" class="mr-20" type="warning" />
  <Icon icon="comment" class="mr-20" type="danger" />
</template>

<style scoped>
.mr-20 {
  margin-right: 20px;
}
</style>
