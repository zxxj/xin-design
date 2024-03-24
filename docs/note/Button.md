---
title: Button组件的设计与实现
---

## Button组件的需求分析

`Button`组件大部分关注于样式,没有交互

根据分析可以得到具体的属性列表(props):

- type: 不同的样式(Default, Primary, Danger, Info, Success, Warning)
- plain: 朴素按钮, 样式的不同展现形式
- round: 圆角按钮
- cricle: 圆形按钮
- size: 按钮尺寸(normal, samll, large)
- disabled: 禁用按钮
- icon: 图标按钮
- loading: 加载按钮

## Button组件的本质

```js
	// 就是class名称的组合
	class="xin-button-primary xin-button-large is-plain is-round is-disabled"
```

## 确定Button组件的文件结构

从简单入手,没有必要进行过度设计.

- `Button`文件夹
- `Button.vue` > 组件
- `style.css` > 样式
- `types.ts` > 一些辅助的ts类型

### types.ts

```ts
// 按钮类型
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

// 按钮大小
export type ButtonSize = 'large' | 'small'

// 原生button的类型
export type NativeType = 'button' | 'submit' | 'reset'

// 所有的按钮配置项
export interface ButtonProps {
  // 按钮类型
  type?: ButtonType

  // 按钮大小
  size?: ButtonSize

  // 是否为朴素按钮
  plain?: boolean

  // 是否为圆角按钮
  round?: boolean

  // 是否为圆形按钮
  circle?: boolean

  // 是否禁用按钮
  disabled?: boolean

  // 原生button的类型
  nativeType?: NativeType

  // 是否聚焦,原生Button
  autofocus?: boolean
}

// 原生按钮实例类型
export interface ButtonInstance {
  ref: HTMLButtonElement
}
```

### Button.vue

```vue
<template>
  <button
    ref="_ref"
    :disabled="disabled"
    class="xin-button"
    :class="{
      [`xin-button--${type}`]: props.type,
      [`xin-button--${size}`]: props.size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': props.disabled || props.loading,
      'is-loading': props.loading
    }"
    :autofocus="props.autofocus"
    :nativeType="props.nativeType"
  >
    <!-- 加载状态图标 -->
    <template v-if="props.loading">
      <Icon class="mr-10" icon="spinner" spin />
    </template>

    <!-- 按钮图标 -->
    <template v-if="props.icon">
      <Icon
        :class="{
          'mr-10': ButtonDefalutSlotIsEmpty
        }"
        :icon="props.icon"
      />
    </template>

    <!-- 按钮内容插槽 -->
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots } from 'vue'
import type { ButtonProps } from './types'
import Icon from '../Icon/Icon.vue'

// 判断是否传入了按钮文本内容,动态的给图表组件添加样式
const ButtonDefalutSlotIsEmpty = ref(false)
onMounted(() => {
  ButtonDefalutSlotIsEmpty.value = useSlots()?.default ? true : false
})

// 组件的配置
defineOptions({
  name: 'XINButton'
})

// 为原生的按钮type设置一个默认值: button
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

// 获取button实例
const _ref = ref<HTMLButtonElement>()

// 将button实例暴露出去
defineExpose({
  ref: _ref
})
</script>

<style scoped>
.mr-10 {
  margin-right: 10px;
}
</style>
```

### style.css

```css
// 按钮的默认样式
.xin-button {
  --xin-button-font-weight: var(--xin-font-weight-primary);
  --xin-button-border-color: var(--xin-border-color);
  --xin-button-bg-color: var(--xin-fill-color-blank);
  --xin-button-text-color: var(--xin-text-color-regular);
  --xin-button-disabled-text-color: var(--xin-disabled-text-color);
  --xin-button-disabled-bg-color: var(--xin-fill-color-blank);
  --xin-button-disabled-border-color: var(--xin-border-color-light);
  --xin-button-hover-text-color: var(--xin-color-primary);
  --xin-button-hover-bg-color: var(--xin-color-primary-light-9);
  --xin-button-hover-border-color: var(--xin-color-primary-light-7);
  --xin-button-active-text-color: var(--xin-button-hover-text-color);
  --xin-button-active-border-color: var(--xin-color-primary);
  --xin-button-active-bg-color: var(--xin-button-hover-bg-color);
  --xin-button-outline-color: var(--xin-color-primary-light-5);
  --xin-button-active-color: var(--xin-text-color-primary);
}
.xin-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: var(--xin-button-text-color);
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: var(--xin-button-font-weight);
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: var(--xin-button-bg-color);
  border: var(--xin-border);
  border-color: var(--xin-button-border-color);
  padding: 8px 15px;
  font-size: var(--xin-font-size-base);
  border-radius: var(--xin-border-radius-base);
  & + & {
    margin-left: 12px;
  }

  /* 按钮hover与聚焦样式 */
  &:hover,
  &:focus {
    color: var(--xin-button-hover-text-color);
    border-color: var(--xin-button-hover-border-color);
    background-color: var(--xin-button-hover-bg-color);
    outline: none;
  }

  /* 按钮按下的样式 */
  &:active {
    color: var(--xin-button-active-text-color);
    border-color: var(--xin-button-active-border-color);
    background-color: var(--xin-button-active-bg-color);
    outline: none;
  }

  /* 朴素按钮样式 */
  &.is-plain {
    --xin-button-hover-text-color: var(--xin-color-primary);
    --xin-button-hover-bg-color: var(--xin-fill-color-blank);
    --xin-button-hover-border-color: var(--xin-color-primary);
  }

  /* 圆角按钮样式 */
  &.is-round {
    border-radius: var(--xin-border-radius-round);
  }
  /* 圆形按钮样式 */
  &.is-circle {
    border-radius: 50%;
    padding: 8px;
  }
  /* 禁用按钮样式 */
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus,
  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus {
    color: var(--xin-button-disabled-text-color);
    cursor: not-allowed;
    background-image: none;
    background-color: var(--xin-button-disabled-bg-color);
    border-color: var(--xin-button-disabled-border-color);
  }
  [class*='vk-icon'] + span {
    margin-left: 6px;
  }
}

/* 使用postcss循环生成样式 */
@each $val in primary, success, warning, info, danger {
  /* 按钮类型样式 */
  .xin-button--$(val) {
    --xin-button-text-color: var(--xin-color-white);
    --xin-button-bg-color: var(--xin-color-$(val));
    --xin-button-border-color: var(--xin-color-$(val));
    --xin-button-outline-color: var(--xin-color-$(val)-light-5);
    --xin-button-active-color: var(--xin-color-$(val)-dark-2);
    --xin-button-hover-text-color: var(--xin-color-white);
    --xin-button-hover-bg-color: var(--xin-color-$(val)-light-3);
    --xin-button-hover-border-color: var(--xin-color-$(val)-light-3);
    --xin-button-active-bg-color: var(--xin-color-$(val)-dark-2);
    --xin-button-active-border-color: var(--xin-color-$(val)-dark-2);
    --xin-button-disabled-text-color: var(--xin-color-white);
    --xin-button-disabled-bg-color: var(--xin-color-$(val)-light-5);
    --xin-button-disabled-border-color: var(--xin-color-$(val)-light-5);
  }

  /* 朴素按钮样式 */
  .xin-button--$(val).is-plain {
    --xin-button-text-color: var(--xin-color-$(val));
    --xin-button-bg-color: var(--xin-color-$(val)-light-9);
    --xin-button-border-color: var(--xin-color-$(val)-light-5);
    --xin-button-hover-text-color: var(--xin-color-white);
    --xin-button-hover-bg-color: var(--xin-color-$(val));
    --xin-button-hover-border-color: var(--xin-color-$(val));
    --xin-button-active-text-color: var(--xin-color-white);
  }
}

/* 按钮尺寸样式 */
.xin-button--large {
  --xin-button-size: 40px;
  height: var(--xin-button-size);
  padding: 12px 19px;
  font-size: var(--xin-font-size-base);
  border-radius: var(--xin-border-radius-base);
}
.xin-button--small {
  --xin-button-size: 24px;
  height: var(--xin-button-size);
  padding: 5px 11px;
  font-size: 12px;
  border-radius: calc(var(--xin-border-radius-base) - 1px);
}
```

### 使用组件

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'

const buttonRef = ref<ButtonInstance | null>(null)
</script>

<template>
  <div>
    <Button ref="buttonRef">Default</Button>
    <Button type="primary" circle disabled>Primary</Button>
    <Button type="success" plain round>Success</Button>
  </div>
</template>
```

## 总结

1. 首先要明确Button组件所需要的props
2. 进行ts类型参数的定义
3. 对原生button进行操作,例如通过传入的props的值来实现动态绑定`class类名`的形式实现按钮样式的切换
4. 对原生button自带的属性进行支持并暴露出原生button的dom实例,以便组件被使用时可以获得更好的支持
