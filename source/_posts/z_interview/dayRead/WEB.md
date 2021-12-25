---
title: WEB日读01
date: 2021-12-04
categories: 
- 日读
tags:
- 日读
---
WEB日读01
WEB日读01
WEB日读01

<!-- more -->

```wiki
#参考
https://github.com/orgs/i-want-offer/repositories
https://github.com/lgwebdream/FE-Interview
```



## xxx1

### 盒模型

标准盒子模型：宽度=内容的宽度（content）+ border + padding
低版本IE盒子模型：宽度=内容宽度（content+border+padding)

### 清除浮动

### 左中右布局

### CSS优先级

不同级别：!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性
同一级别：后写的会覆盖先写的

css选择器的解析原则：选择器定位DOM元素是从右往左的方向，这样可以尽早的过滤掉一些不必要的样式规则和元素

### 使元素消失的方法

```wiki
visibility:hidden、display:none、z-index=-1、opacity：0
1.opacity：0,该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定了一些事件，如click事件也能触发
2.visibility:hidden,该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
3.display:node, 把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删掉
```

### 深克隆和浅克隆 ?

单独处理 正则,时间,引用

### call bind apply 的区别

### js继承方式 ?

1. 原型链继承
2. 构造继承
3. 实例继承
4. 拷贝继承
5. 组合继承 
6. 寄生组合继承

### 原型和原型链

### 闭包

### session、cookie、localStorage、 sessionStorage

### 前端有页面优化方法

> 减少 HTTP请求数
> 从设计实现层面简化页面
> 合理设置 HTTP缓存
> 资源合并与压缩
> 合并 CSS图片，减少请求数的又一个好办法。
> 将外部脚本置底（将脚本内容在页面信息内容加载后再加载）
> 多图片网页使用图片懒加载。
> 在js中尽量减少闭包的使用
> 尽量合并css和js文件
> 尽量使用字体图标或者SVG图标，来代替传统的PNG等格式的图片
> 减少对DOM的操作
> 在JS中避免“嵌套循环”和 “死循环”
> 尽可能使用事件委托（事件代理）来处理事件绑定的操作

### get和post请求的区别

### HTTP 状态码

### 同步和异步 事件机制

### map和forEach ?

### toString ?? 类型

### .setTimeout 和 setInterval

### splice和slice、map和forEach、 filter()、reduce()  ??

那个返回新数组

### V-model的原理

### vuex

### vue路由的两种模式

### `$route`和`$router`

### vue-router守卫

全局前置守卫, 路由独享的守卫,  组件内的守卫

### webpack打包文件体积过大

### 优化webpack构建的性能

### Vue的SPA 如何优化

```text
nuxt.js
```

## xxx2

### js 基础

- 原型链
- 继承的实现
- 数据类型
- var、const、let 对比
- es next 最新规范
- new 的过程
- this 指向问题
- bind 实现方式
- 闭包
- **事件循环** 【超高频】
- 类型判断
- **手写 Promise**

??? 开启下一个

















