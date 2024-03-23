---
title: Icon
description: Icon 组件的文档
---

# Icon 图标

Xin Design的图标组件是基于Fontawesome图标库结合实现的.

如若需要查看所有可用的 SVG 图标请查阅Fontawesome官网和有关Fontawesome的文档.

## 基础用法

<preview path="../demo/Icon/Icon.vue"></preview>

## 图标类型

使用 `type`属性来定义图标的样式.

<preview path="../demo/Icon/Type.vue"></preview>

## 图标尺寸

使用 `size`属性可以来定义图标尺寸的大小.
<preview path="../demo/Icon/Size.vue"></preview>

## 图标颜色

使用 `color`属性可以来改变图标颜色,接收一个string类型的颜色值.
<preview path="../demo/Icon/Color.vue"></preview>

## 旋转图标

使用 `spin`属性可以控制图标是否旋转,默认值为false.
<preview path="../demo/Icon/Spin.vue"></preview>

## 图标名称

使用 `title`属性可以定义图标的名称,鼠标放到图标上后有反馈效果.
<preview path="../demo/Icon/Title.vue"></preview>

## Icon API

## Icon 属性

| Name  | Description | Type                                                                                        | Default |
| ----- | ----------- | ------------------------------------------------------------------------------------------- | ------- |
| icon  | 图标        | `string`                                                                                    | -       |
| size  | 图标尺寸    | `enum` - `2xs` `xs` `sm` `lg` `xl` `2xl` `1x` `2x` `3x` `4x` `5x` `6x` `7x` `8x` `9x` `10x` | `lg`    |
| type  | 图标类型    | `enum` - `primary` `success` `warning` `danger` `info`                                      | —       |
| color | 图标颜色    | `string`                                                                                    | -       |
| spin  | 旋转图标    | `boolean`                                                                                   | false   |
| title | 图标标题    | `string`                                                                                    | -       |
