---
title: Collapse
description: Collapse 组件的文档
---

# Collapse 折叠面板

通过折叠面板收纳内容区域.

## 基础用法

可同时展开多个面板,面板之间互不影响.

<preview path="../demo/Collapse/Collapse.vue"></preview>

## 手风琴效果

每次只能展开一个面板.
通过 `accordion` 属性来设置是否以手风琴模式显示.

<preview path="../demo/Collapse/Accordion.vue"></preview>

## 禁用面板

通过`disabled`属性来设置是否禁用某个面板
<preview path="../demo/Collapse/Disabled.vue"></preview>

## Collapse API

### Collapse Attributes

| 属性名                | 说明           | 类型       | 默认值 |
| --------------------- | -------------- | ---------- | ------ |
| model-value / v-model | 当前活动面板   | `string[]` | []     |
| accordion             | 是否手风琴模式 | `boolean`  | false  |

### Collapse Events

| 事件名 | 说明             | 类型       |
| ------ | ---------------- | ---------- |
| click  | 切换当前活动面板 | `Function` |

### Collapse Slots

| 插槽名  | 说明           | 子标签          |
| ------- | -------------- | --------------- |
| default | 自定义默认内容 | `Collapse Item` |

## Collapse Item API

### Collapse Item Attributes

| 属性名   | 说明       | 类型            | 默认值 |
| -------- | ---------- | --------------- | ------ |
| name     | 唯一标志符 | `string/number` |        |
| title    | 面板标题   | `string`        | ""     |
| disabled | 是否禁用   | `boolean`       | false  |

### Collapse Item Slot

| 插槽名  | 说明                 |
| ------- | -------------------- |
| content | Collapse Item 的内容 |
| title   | Collapse Item 的标题 |
