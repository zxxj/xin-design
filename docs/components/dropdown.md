---
title: Dropdown
description: Dropdown 组件的文档
---

# Dropdown 下拉菜单

## 基础用法

悬停在下拉菜单上以展开更多操作.

通过组件 `slot` 来设置下拉触发的元素以及传入正确的JavaScript数据结构为 `dropdown` 来设置下拉菜单. 默认情况下,只需要悬停在触发菜单的元素上即可,无需点击也会显示下拉菜单.

<preview path="../demo/Dropdown/basic.vue"></preview>

## 触发方式

可以配置点击激活或者悬停激活.

将 `trigger` 属性设置为 `click` 即可, 默认为 `hover`.

<preview path="../demo/Dropdown/trigger.vue"></preview>

## 指令事件

点击菜单项后会触发事件,用户可以通过相应的菜单项 `key` 进行不同的操作.

> Message组件正在构思中,还暂未开发,请先使用浏览器控制台查看已选中的值!!

<preview path="../demo/Dropdown/eventAfterClick.vue"></preview>

## 手动控制

您可以手动使用 `手动打开` 或 `手动关闭下拉菜单以打开或关闭`.

<preview path="../demo/Dropdown/manual.vue"></preview>

## Dropdown API

## Dropdown 属性

| 属性名         | 说明           | 类型与可选值                                                                | 默认值 |
| -------------- | -------------- | --------------------------------------------------------------------------- | ------ |
| disabled       | 是否禁用       | `boolean`                                                                   | false  |
| trigger        | 触发下拉的行为 | `enum` `hover` `click`                                                      | hover  |
| placement      | 菜单弹出位置   | `string` - `top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` | bottom |
| popper-options | popper.js 参数 | `	Object` - 请参考 popper.js 文档                                            | -      |

## Dropdown Events

| 事件名         | 说明                     | 参数                          |
| -------------- | ------------------------ | ----------------------------- |
| selectd        | 点击菜单项触发的事件回调 | dropdown-item 的指令          |
| visible-change | 下拉框出现/隐藏时触发    | 出现则为 true，隐藏则为 false |

## Dropdown 插槽

| 插槽名 | 说明                                                                                                          | 子标签 |
| ------ | ------------------------------------------------------------------------------------------------------------- | ------ |
| —      | 下拉菜单的内容.注意:`必须是有效的 html DOM 元素（例如 <span>、<button> 等）`或 xin-component,以附加监听触发器 | -      |

# Dropdown Methods

| 方法名        | 说明         | 参数 |
| ------------- | ------------ | ---- |
| showDropdown  | 打开下拉菜单 | -    |
| closeDropdown | 关闭下拉菜单 | -    |

## Dropdown-Item Attributes

| 属性名   | 说明                             | 类型与可选值           | 默认值 |
| -------- | -------------------------------- | ---------------------- | ------ |
| select   | 派发到`select`回调函数的指令参数 | `string/number/object` | -      |
| disabled | 是否禁用                         | `boolean`              | false  |
|          |
| divided  | 是否显示分隔符                   | `boolean`              | false  |
