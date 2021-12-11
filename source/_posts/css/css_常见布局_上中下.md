---
title: -CSS 常见布局_上中下
date: 2015-03-04
categories: 
- CSS
tags:
- CSS
---
CSS 常见布局`上中下`
CSS 常见布局`上中下`
CSS 常见布局`上中下`

<!-- more -->

情景描述: 上下固定中间自适应布局

>2中方法主要逻辑
>
>1. 利用`absolute`绝对定位
>2. 利用`flex`

### 方案1---利用`absolute`绝对定位

```html
<style>
    body {
        padding: 0;
        margin: 0;
    }
    .header {
        width: 100%;
        height: 150px;
        background-color: #ff6b81;
        position: absolute;
        top: 0;
    }
    .container {
        width: 100%;
        background-color: #C0C0C0;
        position: absolute;
        top: 150px;
        bottom: 50px;
    }
    .footer {
        width: 100%;
        height: 50px;
        background-color: #ff6b81;
        position: absolute;
        bottom: 0;
    }
</style>
<div>
    <div class="header"></div>
    <div class="container">利用 absolute 绝对定位</div>
    <div class="footer"></div>
</div>
```

### 方案2---利用`flex`

```html
<style>
    html, body {
        padding: 0;
        margin: 0;
        height: 100%; /* 定义高度 */
    }
    .fei {
        width: 100%;
        height: 100%; /* 定义高度 */
        display: flex;
        flex-direction: column;
    }
    .header {
        height: 100px;
        background: #ff6b81;
    }
    .container {
        flex-grow: 1;
        background: #c0c0c0;
    }
    .footer {
        height: 100px;
        background: #ff6b81;
    }
</style>
<div class="fei">
    <div class="header"></div>
    <div class="container">利用 flex</div>
    <div class="footer"></div>
</div>
```

