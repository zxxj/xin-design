<script setup lang="ts">
import Tooltip from '../../../src/components/Tooltip/Tooltip.vue'
import Button from '../../../src/components/Button/Button.vue'
</script>

<template>
  <div class="content">
    <div class="left flex">
      <Tooltip placement="left-start" content="Left Top prompts info">
        <Button>left-start</Button>
      </Tooltip>

      <Tooltip placement="left" class="mt-20" content="Left prompts info">
        <Button>left</Button>
      </Tooltip>

      <Tooltip placement="left-end" class="mt-20" content="Left End prompts info">
        <Button>left-end</Button>
      </Tooltip>
    </div>

    <div class="center">
      <div class="top">
        <Tooltip placement="top-start" content="Top Start prompts info">
          <Button>top-start</Button>
        </Tooltip>

        <Tooltip placement="top" style="margin: 0 20px" content="Top prompts info">
          <Button>top</Button>
        </Tooltip>

        <Tooltip placement="top-end" content="Top End prompts info">
          <Button>top-end</Button>
        </Tooltip>
      </div>
      <div class="bottom">
        <Tooltip placement="bottom-start" content="Bottom Top prompts info">
          <Button>bottom-start</Button>
        </Tooltip>

        <Tooltip placement="bottom" style="margin: 0 20px" content="Bottom prompts info">
          <Button>bottom</Button>
        </Tooltip>

        <Tooltip placement="bottom-end" content="Bottom End prompts info">
          <Button>bottom-end</Button>
        </Tooltip>
      </div>
    </div>

    <div class="right flex">
      <Tooltip placement="right-start" content="Right Top prompts info">
        <Button>right-start</Button>
      </Tooltip>

      <Tooltip placement="right" class="mt-20" content="Right prompts info">
        <Button>right</Button>
      </Tooltip>

      <Tooltip placement="right" class="mt-20" content="Right End prompts info<">
        <Button>right-end</Button>
      </Tooltip>
    </div>
  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mt-20 {
  margin-top: 20px;
}
.content {
  display: flex;
  justify-content: space-between;
  text-align: center;

  .center {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
