---
title: 色彩系统的设计与实现
---

# 了解色彩系统

首先,我们要知道作为一个组件库肯定是要有一套色彩系统,或者称为主题, `XinDesign` 的色彩系统主要参考了 `AndDesign` 与 `Element-Plus` .

## 系统级色彩体系(参考AntDesign官方文档)

Ant Design 系统级色彩体系同样源于「自然」的设计价值观.设计师通过对自然场景的抽象捕捉,结合蚂蚁的技术基因,形成了特有的 12 色.进一步又通过大量的观察,捕捉不同色彩在自然光下的变化规律,借助美术中素描的思路,对 12 个颜色进行了衍生.在中性色板的定义上,则是平衡了可读性、美感以及可用性得出的.

### 基础色板

Ant Design 的基础色板共计 120 个颜色,包含 12 个主色以及衍生色.这些颜色基本可以满足中后台设计中对于颜色的需求.

Ant Design 的色板还具备进一步拓展的能力.经过设计师和程序员的精心调制,结合了色彩自然变化的规律,我们得出了一套色彩生成工具,当有进一步色彩设计需求时,设计者只需按照一定规则定义完毕主色,便可以自动获得一系列完整的衍生色.

### 中性色板

中性色包含了黑、白、灰.在蚂蚁中后台的网页设计中被大量使用到,合理地选择中性色能够令页面信息具备良好的主次关系,助力阅读体验.Ant Design 的中性色板一共包含了从白到黑的 13 个颜色.

### 产品级色彩体系(参考AntDesign官方文档)

### 品牌色的应用

品牌色是体现产品特性和传播理念最直观的视觉元素之一.在色彩选取时,需要先明确品牌色在界面中的使用场景及范围.在基础色板中选择主色,我们建议选择色板从浅至深的第六个颜色作为主色. Ant Design 的品牌色取自基础色板的蓝色,Hex 值为 #1677ff,应用场景包括：关键行动点,操作状态、重要信息高亮,图形化等场景.
![品牌色](/assets/品牌色.png)

### 功能色

功能色代表了明确的信息以及状态,比如成功、出错、失败、提醒、链接等.功能色的选取需要遵守用户对色彩的基本认知.我们建议在一套产品体系下,功能色尽量保持一致,不要有过多的自定义干扰用户的认知体验.Ant Design 的功能色板如图：
![功能色](/assets/功能色.png)

### 中性色

Ant Design 的中性色主要被大量的应用在界面的文字部分,此外背景、边框、分割线等场景中也非常常见.产品中性色的定义需要考虑深色背景以及浅色背景的差异,同时结合 WCAG 2.0 标准.Ant Design 的中性色在落地的时候是按照透明度的方式实现的,具体色板如图：

![中性色](/assets/中性色.png)

# 实现色彩系统

## 添加系统级色彩变量

在`src/styles`文件夹下新建`vars.css`文件,内容如下

```css
:root {
  /* colors */
  --xin-color-white: #ffffff;
  --xin-color-black: #000000;
  --colors: (primary: #409eff, success: #67c23a, warning: #e6a23c, danger: #f56c6c, info: #909399);

  @each $val, $color in var(--colors) {
    --xin-color-$(val): $(color);
    @for $i from 3 to 9 by 2 {
      --xin-color-$(val)-light-$(i): mix(#fff, $(color), .$(i));
    }
    --xin-color-$(val)-light-8: mix(#fff, $(color), 0.8);
    --xin-color-$(val)-dark-2: mix(#000, $(color), 0.2);
  }

  --xin-bg-color: #ffffff;
  --xin-bg-color-page: #f2f3f5;
  --xin-bg-color-overlay: #ffffff;
  --xin-text-color-primary: #303133;
  --xin-text-color-regular: #606266;
  --xin-text-color-secondary: #909399;
  --xin-text-color-placeholder: #a8abb2;
  --xin-text-color-disabled: #c0c4cc;
  --xin-border-color: #dcdfe6;
  --xin-border-color-light: #e4e7ed;
  --xin-border-color-lighter: #ebeef5;
  --xin-border-color-extra-light: #f2f6fc;
  --xin-border-color-dark: #d4d7de;
  --xin-border-color-darker: #cdd0d6;
  --xin-fill-color: #f0f2f5;
  --xin-fill-color-light: #f5f7fa;
  --xin-fill-color-lighter: #fafafa;
  --xin-fill-color-extra-light: #fafcff;
  --xin-fill-color-dark: #ebedf0;
  --xin-fill-color-darker: #e6e8eb;
  --xin-fill-color-blank: #ffffff;

  /* border */
  --xin-border-width: 1px;
  --xin-border-style: solid;
  --xin-border-color-hover: var(--xin-text-color-disabled);
  --xin-border: var(--xin-border-width) var(--xin-border-style) var(--xin-border-color);
  --xin-border-radius-base: 4px;
  --xin-border-radius-small: 2px;
  --xin-border-radius-round: 20px;
  --xin-border-radius-circle: 100%;

  /*font*/
  --xin-font-size-extra-large: 20px;
  --xin-font-size-large: 18px;
  --xin-font-size-medium: 16px;
  --xin-font-size-base: 14px;
  --xin-font-size-small: 13px;
  --xin-font-size-extra-small: 12px;
  --xin-font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '\5fae\8f6f\96c5\9ed1', Arial, sans-serif;
  --xin-font-weight-primary: 500;

  /*disabled*/
  --xin-disabled-bg-color: var(--xin-fill-color-light);
  --xin-disabled-text-color: var(--xin-text-color-placeholder);
  --xin-disabled-border-color: var(--xin-border-color-light);

  /*animation*/
  --xin-transition-duration: 0.3s;
  --xin-transition-duration-fast: 0.2s;
}
```

## 重置默认CSS样式

作为一个前端开发者无论是做一个实际的项目还是搭建一个组件库,我们首先第一步要做的就是重置CSS的默认样式.

> 为什么要重置CSS的默认样式?

1. 保护有用的浏览器默认样式
2. 一般化的样式
3. 修复浏览器自身的bug
4. 优化CSS的可用性
5. 总结: 为了保证各个浏览器对样式支持的一致性,换句话来说就是兼容各个浏览器

> 重置CSS样式的方案有哪些?

1. Normalize.css, 这是我在工作中非常喜欢的一个工具,使用也很简单,并且开发它的人(尼古拉斯)很厉害!!

2. PostCSS插件-PostCSS Nested, 使用postcss插件来完成CSS样式的重置

### PostCSS nested实现样式重置

1. vscode中安装postcss插件,解决不认识postcss语法问题,避免报错
2. 安装postcss插件: pnpm i postcss-nested
3. 根目录新建一个 `postcss.config.cjs` 文件,内容为:

```js
/* eslint-env node */ // 这行注释是为了告诉eslint我当前处于node环境下,不要报错!
module.exports = {
  plugins: [
    // 支持样式嵌套的插件
    require('postcss-nested'),

    // 支持css变量的插件
    require('postcss-each-variables'),

    // 支持循环的插件
    require('postcss-each')({
      plugins: {
        beforeEach: [require('postcss-for'), require('postcss-color-mix')]
      }
    })
  ]
}
```

4.`src/styles`文件夹下创建 `reset.css` 文件,内容如下

```css
body {
  font-family: var(--xin-font-family);
  font-weight: 400;
  font-size: var(--xin-font-size-base);
  color: var(--xin-text-color-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}

a {
  color: var(--xin-color-primary);
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(--xin-color-primary-light-3);
  }

  &:active {
    color: var(--xin-color-primary-dark-2);
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--xin-text-color-regular);
  font-weight: inherit;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

h1 {
  font-size: calc(var(--xin-font-size-base) + 6px);
}

h2 {
  font-size: calc(var(--xin-font-size-base) + 4px);
}

h3 {
  font-size: calc(var(--xin-font-size-base) + 2px);
}

h4,
h5,
h6,
p {
  font-size: inherit;
}

p {
  line-height: 1.8;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

sup,
sub {
  font-size: calc(var(--xin-font-size-base) - 1px);
}

small {
  font-size: calc(var(--xin-font-size-base) - 2px);
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid var(--xin-border-color-lighter);
}
```

## 让色彩系统生效

1. 首先在`src/styles`文件夹下新建`index.css`,内容如下

```css
/* 引入css变量文件 */
@import './vars.css';

/* 引入css重置样式文件 */
@import './reset.css';
```

2. 然后在`main.ts`中引入`index.css`

```ts
import { createApp } from 'vue'
import App from './App.vue'

// 引入样式文件
import './styles/index.css'

createApp(App).mount('#app')
```
