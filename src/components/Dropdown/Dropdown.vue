<template>
  <div class="xin-dropdown">
    <Tooltip
      ref="tooltipRef"
      :trigger="props.trigger"
      :placement="props.placement"
      :popper-options="props.popperOptions"
      @visible-change="visibleChange"
    >
      <slot />

      <template #content>
        <ul class="xin-dropdown__menu">
          <!-- 循环展示父组件传递进来的数组 -->
          <template v-for="item in props.menuOptions" :key="item.key">
            <!-- 判断是否显示分隔符 -->
            <li v-if="item.divided" class="divided-placeholder" role="separator"></li>

            <li
              class="xin-dropdown__item"
              :class="{
                'is-disabled': item.disabled,
                'is-divided': item.divided
              }"
              @click="itemClick(item)"
            >
              <!-- 通过RenderVnode组件来渲染html元素与普通文本 -->
              <RenderVnode :vNode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { TooltipInstance } from '../Tooltip/types'
import type { DropdownInstance, DropdownProps, DropdownEmits, MenuOption } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import RenderVnode from '../../hooks/RenderVnode'

defineOptions({
  name: 'XinDropdown'
})
const props = defineProps<DropdownProps>()
const emits = defineEmits<DropdownEmits>()

// tooltip组件的实例
const tooltipRef = ref() as Ref<TooltipInstance>

// 监听tooltip的显示与隐藏事件
const visibleChange = (e: boolean) => {
  // console.log('tooltip显示与隐藏状态', e)

  emits('visible-change', e)
}

// 选中dropdown其中某一项时触发
const itemClick = (item: MenuOption) => {
  // 如果是禁用状态,则点击之后无反应
  if (item.disabled) return

  // 如果不是禁用状态,点击之后则关闭tooltip
  tooltipRef.value.closeTooltip()

  // console.log(item)
  emits('select', item)
}

// 显示与隐藏dropdown
defineExpose<DropdownInstance>({
  showDropdown: () => tooltipRef.value?.showTooltip(),
  closeDropdown: () => tooltipRef.value?.closeTooltip()
})
</script>

<style lang="scss" scoped></style>
