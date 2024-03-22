---
title: Icon 组件的设计与实现
---

## 使用现成的图标库

- Bootstrap Icons
- Fontawesome
- Ionicon

这里就采用star最高的Fontawesome图标库来实现

## Fontawesome结合Vue3

```js
	// 1.安装svg core
	pnpm i --save @fortawesome/fontawesome-svg-core

	// 2.安装fontawesome图标库
	pnpm i --save @fortawesome/free-solid-svg-icons

	// 3.安装基于vue3的包装
	pnpm i --save @fortawesome/vue-fontawesome@latest-3

	// mian.ts
	// 4. svg的核心库
	import { library } from '@fortawesome/fontawesome-svg-core'

	// 5.引入所有的图标
	import { fas } from '@fortawesome/free-solid-svg-icons'

	// 6. 引入fortawesome提供的组件,用于展示fortawesome中的图标
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

	// 7.添加到svg库中
	library.add(fas)

	// 8.将fortawesome提供的组件注册为全局组件
	app.component('font-awesome-icon', FontAwesomeIcon)

	https://www.aliyundrive.com/s/9qsSXm1Wdvn/folder/6400e57257ada6fbc6864a588f82a8307e8f935f
```

## 实现Icon组件

## 确定Collapse组件的文件结构

- `Icon`文件夹
- `Icon.vue`组件
- `style.css`样式
- `types.ts`ts类型
- `icon.test.tsx`测试文件

### types.ts

```ts
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface FontAwesomeIconProps {
  border?: boolean
  fixedWidth?: boolean
  flip?: 'horizontal' | 'vertical' | 'both'

  // 图标格式
  icon: object | Array<string> | string | IconDefinition
  mask?: object | Array<string> | string
  maskId?: object | Array<string> | string
  listItem?: boolean
  pull?: 'right' | 'left'
  pulse?: boolean
  rotation?: 90 | 180 | 270 | '90' | '180' | '270'
  swapOpacity?: boolean
  // 图标大小
  size?:
    | '2xs'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'

  // 旋转
  spin?: boolean
  transform?: object | string
  symbol?: boolean | string
  title?: string
  titleId?: string
  inverse?: boolean
  bounce?: boolean
  shake?: boolean
  beat?: boolean
  fade?: boolean
  beatFade?: boolean
  spinPulse?: boolean
  spinReverse?: boolean

  // 图标颜色
  color?: string

  // 图表类型
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
}
```

### Icon.vue

```vue
<template>
  <i
    class="xin-icon"
    :class="{
      [`xin-icon--${props.type}`]: props.type
    }"
    :style="customStyle"
  >
    <!-- v-bind="props": 将父组件中传入的属性传入到FontAwesomeIcon,父组件未传值的属性默认为false,例如:spin -->
    <FontAwesomeIcon v-bind="props" />
  </i>
</template>

<script setup lang="ts">
// 引入fortawesome提供的组件,用于展示fortawesome中的图标
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { FontAwesomeIconProps } from './types'
import { computed } from 'vue'

defineOptions({
  // 组件名称
  name: 'XinIcon'
})

const props = defineProps<FontAwesomeIconProps>()

// 如果传入了color则此color权重最大,为方便使用者覆盖图标颜色
const customStyle = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>
```

### style.css

```css
/* 图标样式 */
.xin-icon {
  --xin-icon-color: inherit;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--xin-icon-color);
  font-size: inherit;
}

/* 图表类型(type)样式 */
@each $val in primary, info, success, warning, danger {
  .xin-icon--$(val) {
    --xin-icon-color: var(--xin-color-$(val));
  }
}
```
