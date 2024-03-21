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
```
