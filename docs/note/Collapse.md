---
title: Collapse组件的设计与实现
---

## Collapse组件的需求分析

- 展示多个Item,每个Item中有标题和内容两部分
- 点击某个Item的标题可以实现展开与关闭内容的效果
- 支持手风琴模式(只能展开一个Item, 或者说点击了第一个Item其他已经展开的Item要被关闭)
- 每个Item要有展开与收起的动画效果

## 确定组件的展示方案

`Collapse`组件采用**方案2**来实现

```vue
<script setup lang="ts">
const items = [
  {
    name: '1',
    title: 'xin-design',
    content: 'hello! xin-design~'
  }
]
</script>

<template>
  <!-- 1.传入一个数组的方式, 这样的方式如果content中只是想展示一段文本还好, 如果content中想展示dom结构的话,可能就不太行 -->
  <Collapse :items="items"></Collapse>

  <!-- 2.语义化展示, 可以将content区域定义为插槽,父组件传入什么我就展示什么,使用插槽的方式甚至连title区域也可以同样的实现复杂的结构 -->
  <Collapse>
    <CollapseItem name="1">
      <slot name="title">默认title</slot>

      <slot name="content">默认content</slot>
    </CollapseItem>
  </Collapse>
</template>
```

## 确定属性props

1. 明确父组件Collapse需要的props

- 可以接收一个字符串类型的数组,来控制当前打开的Item,可以打开多个Item,例如: ref['1', '2'],那么就是1,2对应的Item会展开
- 是否支持手风琴模式, boolean

2. 明确子组件CollapseItem需要的props

- 唯一的key(name),string | number
- 标题, string
- 是否禁用,boolean

## 确定事件events

1. 修改事件: change
2. 更新事件: update

## 实现思路分析

- 维护一个可变化的响应式数组,代表打开的items(使用item的name)

```js
const array = ref(['1'])
```

- 点击某个item时,观察它是否存在于这个可变化的数组中,进行添加或删除操作

```js
const array = ref('1')
// 添加 => ['1', '2']

// 删除 => ['1']
```

- 在CollapseItem组件内部来判断当前被点击的item的name是否存在于数组中,实现item的展开与收起效果

- 利用Proive,Inject的方式将父组件Collapse中的属性传递给子组件CollapseItem,因为CollapseItem是用插槽实现的

## 确定Collapse组件的文件结构

- `Collapse`文件夹
- `Collapse.vue`父组件
- `CollapseItem.vue`子组件
- `style.css`样式
- `types.ts`ts类型

### types.ts

```ts
import type { Ref, InjectionKey } from 'vue'

// v-model数据类型
export type NameType = string | number

// 父组件中的配置项
export interface CollapseProps {
  modelValue: NameType[] // 传入v-model的数据类型

  // 是否开启手风琴模式
  accordion?: boolean
}

// Collapse组件暴露的方法
export interface CollapseEmits {
  // 点击任意Item的标题触发, 传入对应item的值
  (e: 'change', values: NameType[]): void

  // 更新v-model数组
  (e: 'update:modalValue', values: NameType[]): void
}

// Collapse组件的context
export interface CollapseContext {
  // 传入的v-model数组
  activeNames: Ref<NameType[]>

  // 控制展开与收起,与更新v-model数组
  handleItemClick: (name: NameType) => void
}

// 子组件的配置项
export interface CollapseItemProps {
  // 子项的名称
  name: string | number

  // 标题
  title?: string

  // 是否禁用
  disabled?: boolean
}

// 使用Symbol生成一个独一无二的key,用于inject获取collapseContent中的内容
export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
```

### Collapse.vue

```vue
<template>
  <div class="xin-collapse">
    <!-- 插槽 -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import type { NameType, CollapseEmits, CollapseProps } from './types'
import { collapseContextKey } from './types'

// 组件配置
defineOptions({
  // 组件名称
  name: 'XinCollapse'
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

// 传入的v-model数组
const activeNames = ref<NameType[]>(props.modelValue)

// 解决传入的数据被异步更新时组件内不更新的问题
watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  }
)

// 点击任意Item中的title触发
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    // 手风琴模式逻辑
    // 如果数组中包含当前点击的item则清空数组(收起),不包含则替换为新值(展开)
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    // 非手风琴模式处理逻辑
    // 如果数组中包含当前点击的item,则删除(收起), 不包含则添加(展开)
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
      // 存在，删除数组对应的一项
      activeNames.value.splice(index, 1)
    } else {
      // 不存在，插入对应的name
      activeNames.value.push(item)
    }
  }

  // 触发改变事件,更新v-model数组中的数据
  emits('change', activeNames.value)

  // 触发更新事件,更新v-model数组中的数据
  emits('update:modelValue', activeNames.value)
}

// 通过provide的方式将组件中的属性与方法供给子组件使用
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style scoped></style>
```

### CollapseItem.vue

```vue
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

// 组件配置
defineOptions({
  // 组件名称
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
```

### style.css

```css
.xin-collapse {
  --xin-collapse-border-color: var(--xin-border-color-light);
  --xin-collapse-header-height: 48px;
  --xin-collapse-header-bg-color: var(--xin-fill-color-blank);
  --xin-collapse-header-text-color: var(--xin-text-color-primary);
  --xin-collapse-header-font-size: 13px;
  --xin-collapse-content-bg-color: var(--xin-fill-color-blank);
  --xin-collapse-content-font-size: 13px;
  --xin-collapse-content-text-color: var(--xin-text-color-primary);
  --xin-collapse-disabled-text-color: var(--xin-disabled-text-color);
  --xin-collapse-disabled-border-color: var(--xin-border-color-lighter);
  border-top: 1px solid var(--xin-collapse-border-color);
  border-bottom: 1px solid var(--xin-collapse-border-color);
}
.xin-collapse-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--xin-collapse-header-height);
  line-height: var(--xin-collapse-header-height);
  background-color: var(--xin-collapse-header-bg-color);
  color: var(--xin-collapse-header-text-color);
  cursor: pointer;
  font-size: var(--xin-collapse-header-font-size);
  font-weight: 500;
  transition: border-bottom-color var(--xin-transition-duration);
  outline: none;
  border-bottom: 1px solid var(--xin-collapse-border-color);
  &.is-disabled {
    color: var(--xin-collapse-disabled-text-color);
    cursor: not-allowed;
    background-image: none;
  }
  &.is-active {
    border-bottom-color: transparent;
    .header-angle {
      transform: rotate(90deg);
    }
  }
  .header-angle {
    transition: transform var(--xin-transition-duration);
  }
}
.xin-collapse-item__content {
  will-change: height;
  background-color: var(--xin-collapse-content-bg-color);
  overflow: hidden;
  box-sizing: border-box;
  font-size: var(--xin-collapse-content-font-size);
  color: var(--xin-collapse-content-text-color);
  border-bottom: 1px solid var(--xin-collapse-border-color);
  padding-bottom: 25px;
}
/* .slide-enter-active,
.slide-leave-active {
  transition: height var(--xin-transition-duration);
} */

/* Transition组件动画配置 */
/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

.fade-enter-active,
.fade-leave-active {
  transition: height 0.3s ease-in-out;
}

/* .fade-enter-to,
.fade-leave-from {
  opacity: 1;
} */
```
