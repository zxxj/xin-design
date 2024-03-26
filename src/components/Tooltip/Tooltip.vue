<template>
  <div ref="containerNode" class="xin-tooltip" v-on="outEvent">
    <div ref="triggerNode" class="xin-tooltip__trigger" v-on="events">
      <slot />
    </div>

    <Transition :name="props.transition">
      <div v-if="isOpen" ref="popperNode" class="xin-tooltip__popper">
        <slot name="content">
          {{ props.content }}
        </slot>

        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import { useClickOutside } from '../../hooks/useClicOutside'

const props = withDefaults(defineProps<TooltipProps>(), {
  // tooltip默认显示在下方
  placement: 'bottom',

  // 默认为hover触发
  trigger: 'hover',

  // 默认动画
  transition: 'fade'
})

const emits = defineEmits<TooltipEmits>()

const popperOptions = computed(() => {
  return {
    placement: props.placement,
    ...props.popperOptions
  }
})

// 支持hover与click两种方式操作tooltip
const events: Record<string, any> = ref({})

// 将鼠标移出事件绑定到父元素上, 为了解决bug: 鼠标移动到tooltip内容上时,tooltip会消失的问题
const outEvent: Record<string, any> = ref({})

// 控制tooltip提示内容的显示与隐藏
const isOpen = ref(false)

// tooltip内容节点
const popperNode = ref<HTMLElement>()

// 触发tooltip展示的节点
const triggerNode = ref<HTMLElement>()

// 点击其他区域自动关闭tooltip
const containerNode = ref<HTMLElement>()

// popper实例
let popperInstance = ref<Instance | null>(null)

// 控制tooltip提示内容的显示与隐藏
const toggerPopper = () => {
  isOpen.value = !isOpen.value
  emits('visible-change', isOpen.value)
}

// 显示tooltip
const open = () => {
  isOpen.value = true
  emits('visible-change', true)
}

// 隐藏tooltip
const close = () => {
  isOpen.value = false
  emits('visible-change', false)
}

// v-on对象形式
const attachEvents = () => {
  if (props.trigger === 'hover') {
    // 鼠标移入触发
    events.value.mouseenter = open

    // 解决bug,鼠标移动到tooltip内容上时,tooltip会消失的问题(将鼠标移出事件绑定到父元素就好了)
    outEvent.value.mouseleave = close
  } else if (props.trigger === 'click') {
    // 鼠标点击触发
    events.value.click = toggerPopper
  }
}

// 如果是用户控制,则不注册事件
if (!props.manual) {
  attachEvents()
}

// 监听父组件trigger状态的变化
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      // 清除所有已绑定的事件
      events.value = {}
      outEvent.value = {}

      // 重新执行
      attachEvents()
    }
  }
)

// 监听isOpen的变化,创建与销毁tooltip实例
watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      // 创建
      if (popperNode.value && triggerNode.value) {
        popperInstance.value = createPopper(
          triggerNode.value,
          popperNode.value,
          popperOptions.value
        )
      } else {
        // 销毁
        popperInstance.value?.destroy()
      }
    }
  },
  {
    // 如果想在侦听器回调中能访问被Vue更新之后的DOM,你需要指明 flush: 'post'
    flush: 'post'
  }
)

// 监听manual的变化,如果添加了manual表示用户要自己手动控制tooltip的显示与隐藏,这里需要绑定事件的条件做出判断
watch(
  () => props.manual,
  (isManual) => {
    // true: 用户自己控制显示与隐藏,则清空事件对象
    if (isManual) {
      events.value = {}
      outEvent.value = {}
    } else {
      // false: 用户不控制,则正常注册事件
      attachEvents()
    }
  }
)

useClickOutside(containerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    close()
  }
})

// 将tooltip的显示与隐藏方法暴露出去
defineExpose<TooltipInstance>({
  showTooltip: open,
  closeTooltip: close
})
</script>
