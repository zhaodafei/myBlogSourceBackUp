---
title: -ant-design-vue 随笔01
date: 2024-01-04
categories: 
- ant-design-vue
tags:
- ant-design-vue
---
vue 随笔01
vue 随笔01
vue 随笔01

<!-- more -->

技术背景:

- 前端框架：vue2 + Vue Cli
- 前端UI框架：Ant Design of Vue（v1.6.4）

### 自定义图标使用

#### 方法一

```shell
#安装依赖
npm i -D vue-svg-loader vue-template-compiler

vue-svg-loader@0.16.0
vue-template-compiler@2.6.14
```

配置vue.config.js

```js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
};
```

图标使用

```vue
<template>
  <div>
     <a-icon :component="feiBtn" />
  </div>
</template>

<script>
// 引入svg代码文件
import feiBtn from '@/assets/icons/fei-btn.svg';

export default {
 data() {
    return {
      feiBtn,
    };
  },
}
</script>

<style></style>

```

#### 方法二

```shell
npm install --save-dev vue-svg-icon-loader
npm install vue-svg-component-runtime


"vue-svg-icon-loader": "^2.1.1",
"vue-svg-component-runtime": "^1.0.1",
```

配置vue.config.js

```js
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
   },
}

```

图svg文件

在 `assets` 目录下新建 `icons` 文件夹，用于存放 `svg` 文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg width="121px" height="32px" viewBox="0 0 121 32" version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M0,0  0,0  0,32  121,32  121,0  0,0" style="stroke: #000000; fill:#c0c0c0;"/>

    <text x="55" y="20" fill="#ff6b81">飞</text>

    <path d="M30,5  30,5 90,5 90,25 30,25 30,5" style="stroke: #afeeee; fill:none;"/>
</svg>
```

新建 `icons.js`，统一加载所有自定义图标，方便管理

```js
// icons.js
/**
 * 自定义图标加载表
 * 所有图标均从这里加载，方便管理
 * @see https://vue.ant.design/components/icon/#Custom-Font-Icon
 *
 */
// https://www.webpackjs.com/configuration/module#ruleresourcequery
// ?inline 与webpack的resourceQuery 有关，删除会报错
import feiBtn from '@/assets/icons/fei-btn.svg?inline'

export { feiBtn }

```

使用

```vue
<template>
  <div>
     <a-icon :component="feiBtn" />
     <a-button type="primary" >
       <a-icon :component="feiBtn" />我是按钮
     </a-button>
      
      
     <feiBtn class="icon"> 第二种使用 </feiBtn>
  </div>
</template>

<script>
import { feiBtn } from '@/core/icons.js'

export default {
 data() {
    return {
      feiBtn,
    };
  },
}
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
}
</style>


```





[官方icon地址](https://1x.antdv.com/components/icon-cn/)



























