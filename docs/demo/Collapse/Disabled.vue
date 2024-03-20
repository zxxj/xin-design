<script setup lang="ts">
import { ref } from 'vue'
import Collapse from '../../../src/components/Collapse/Collapse.vue'
import CollapseItem from '../../../src/components/Collapse/CollapseItem.vue'

const opendValue = ref(['1'])
</script>

<template>
  <Collapse v-model="opendValue" accordion>
    <CollapseItem name="1">
      <template #title>
        <span>周杰伦</span>
      </template>

      <template #content>
        <div>最美的不是下雨天,而是和你一起躲过雨的屋檐</div>
      </template>
    </CollapseItem>

    <CollapseItem name="2" disabled>
      <template #title>赵雷</template>

      <template #content>
        <div>理想永远都年轻</div>
        <div>你让我倔强地反抗着命运</div>
        <div>你让我变得苍白</div>
        <div>却依然天真的相信花儿会再次的盛开</div>
      </template>
    </CollapseItem>

    <CollapseItem name="3">
      <template #title>
        <span>Beyond</span>
      </template>

      <template #content>
        <div>无法可修饰的一双手</div>
        <div>带出温暖永远在背后</div>
        <div>总是啰嗦始终关注</div>
        <div>不懂珍惜太内疚</div>
        <div>沉醉于音阶她不赞赏</div>
        <div>母亲的爱却从未退让</div>
        <div>决心冲开心中挣扎</div>
        <div>亲恩终可报答</div>
      </template>
    </CollapseItem>
  </Collapse>
</template>

<style lang="scss" scoped></style>
