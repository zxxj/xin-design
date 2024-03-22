---
title: Button
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮.

## 基础用法

使用 `type`, `plain`, `round` 和 `circle`来定义按钮的样式.

<preview path="../demo/Button/Basic.vue"></preview>

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用.

使用 `disabled` 属性来控制按钮是否为禁用状态,该属性接受一个 `Boolean` 类型的值.

<preview path='../demo/Button/Disabled.vue'></preview>

## 调整尺寸

除了默认的大小,按钮组件还提供了几种额外的尺寸可供选择,以便适配不同的场景.

使用 `size` 属性额外配置尺寸,可使用 `large` 和 `small` 两种值.

<preview path="../demo/Button/Size.vue"></preview>

## 加载状态

<preview path="../demo/Button/Loading.vue"></preview>

## Button API

## Button 属性

| Name        | Description           | Type                                                   | Default |
| ----------- | --------------------- | ------------------------------------------------------ | ------- |
| size        | 按钮尺寸              | `enum` - `large\| small`                               | —       |
| type        | 按钮类型              | `enum` - `primary\| success\| warning\| danger\| info` | —       |
| plain       | 是否为朴素按钮        | `boolean`                                              | false   |
| round       | 是否为圆角按钮        | `boolean`                                              | false   |
| circle      | 是否为圆形按钮        | `boolean`                                              | false   |
| loading     | 是否为加载中状态      | `boolean`                                              | false   |
| disabled    | 按钮是否为禁用状态    | `boolean`                                              | false   |
| icon        | 图标组件              | `string`                                               | —       |
| autofocus   | 原生 `autofocus` 属性 | `boolean`                                              | false   |
| native-type | 原生`type`属性        | `enum` - `button\| submit\| reset`                     | button  |
