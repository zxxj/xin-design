<template>
  <div
    class="xin-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div
      class="xin-collapse-item__header"
      :id="`xin-collapse-item__header__${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      @click="handleClick"
    >
      <!-- 标题区域 -->
      <slot name="title">{{ title }}</slot>
      <div>
        <Icon icon="angle-right" class="header-angle" />
      </div>
    </div>

    <!-- 内容区域 -->
    <Transition name="fade" v-on="transitionEvents">
      <div class="xin-collapse-item__wrapper" v-show="isActive">
        <div class="xin-collapse-item__content" :id="`xin-collapse-item__content__${name}`">
          <slot name="content"></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { collapseContextKey } from './types'
import type { CollapseItemProps } from './types'
import Icon from '../Icon/Icon.vue'

// 组件配置
defineOptions({
  name: 'XinCollapseItem'
})

// 接收父组件传递过来的数据
const props = defineProps<CollapseItemProps>()

// 接收父辈组件传递过来的数据
const collapseContext = inject(collapseContextKey)

// 发生点击事件后,判断当前数组中是否存在点击项的name,如果存在则展开
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))

// 调用父辈组件中的函数,将当前点击的数据项传递给父辈组件,在父辈组件的函数中(handleItemClick)进行最终展开或收起的判断操作
const handleClick = () => {
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}

// transition动画
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  // 展开动画
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },

  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },

  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },

  // 收起动画
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },

  leave(el) {
    el.style.height = '0px'
  },

  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>

<style scoped></style>
