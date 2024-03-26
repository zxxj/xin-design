---
title: Tootip
description: Tootip 组件的文档
---

# Tootip

常用于展示鼠标 `hover` 时的提示信息.

## 基础用法

在这里我们提供 9 种不同方向的展示方式,可以通过以下完整示例来理解,选择你要的效果.

使用 `content` 属性来决定 `hover` 时的提示信息. 由 `placement` 属性决定展示效果: placement属性值为：[方向]-[对齐位置]；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为`bottom`.如 `placement="left-end"`,则提示信息出现在目标元素的左侧,且提示信息的底部与目标元素的底部对齐.

<preview path="../demo/Tooltip/basic.vue"></preview>

## 手动控制

xin-tooltip支持手动控制Tooltip组件的显示和隐藏.

首先,确保您已经将Tooltip设置为`manual`模式,否则无法实现手动控制.

确保开启`manual`模式后,通过`Ref`获取Tooltip组件实例,实例中存有`showTooltip`与`closeTooltip`,分别是显示与隐藏方法.

<preview path="../demo/Tooltip/manual.vue"></preview>

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式.

用具名 `slot content`,替代tooltip中的`content属性`.

<preview path="../demo/Tooltip/slot.vue"></preview>

## 自定义动画

Tooltip 支持自定义动画,你可以根据需要自行设置所需的动画方法.
<preview path="../demo/Tooltip/transition.vue"></preview>

## Tooltip API

## Tooltip 属性

| 名称           | 说明                                  | 类型                                                                                                                                       | 默认值   |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| content        | 显示的内容,也可被 `slot#content` 覆盖 | `string`                                                                                                                                   | ''       |
| transition     | 动画名称                              | `string`                                                                                                                                   | `fade`   |
| placement      | Tooltip 组件出现的位置                | `enum` - `top-start` `top` `top-end` `left-start` `left` `left-end` `right-start` `right` `right-end` `bottom-start` `bottom` `bottom-end` | `bottom` |
| popper-options | popper.js 参数                        | `Object`请参考 popper.js 文档                                                                                                              | {}       |
| trigger        | 如何触发 Tooltip                      | `enum` - `hover` `click`                                                                                                                   | `hover`  |
| title          | 图标标题                              | `string`                                                                                                                                   | -        |

## Slots

| 插槽名  | 说明                      |
| ------- | ------------------------- |
| default | Tooltip 触发 & 引用的元素 |
| content | 自定义内容                |

## Exposes

| 名称         | 详情                                     | 类型     |
| ------------ | ---------------------------------------- | -------- |
| popperRef    | xin-popper 组件实例                      | Object   |
| showTooltip  | showTooltip方法控制 xin-tooltip 显示状态 | Function |
| closeTooltip | showTooltip方法控制 xin-tooltip 显示状态 | Function |
