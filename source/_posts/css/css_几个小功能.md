---
title: -CSS 几个小功能
date: 2015-03-04
categories: 
- CSS
tags:
- CSS
---
CSS 几个小功能
CSS 几个小功能
CSS 几个小功能

<!-- more -->

### 三角形

利用 `border` 制作三角图形

```html
<style>
    .div1 {
        border-top: 50px solid #85194B;
        border-right: 50px solid #add8e6;
        border-bottom: 50px solid #f0e68c;
        border-left: 50px solid #cd5c5c;
        width: 0;
        height: 0;
    }
    .div2 {
        border-top: 50px solid #add8e6;
        border-left: 50px solid rgba(0,0,0,0);
        width: 0;
        height: 0;
        transform: rotate(45deg);
    }
</style>

<div class="div1"></div>
<div class="div2"></div>
```

 ![border](/img/css/css_01/border.png "border")

### 宽高自适应的正方形

#### 方案1---利用 vw 来实现

```html
<style>
    .square {
        width: 30%;
        height: 30vw;
        background: #ff6b81;
    }
</style>
<div class="square"></div>
```

#### 方案2

利用元素的`padding` 百分比是相对父元素 `width` 的性质来实现

```html
<style>
    .square {
        width: 30%;
        height: 0;
        padding-top: 30%;
        background: #ff6b81;
    }
</style>
<div class="square"></div>
```

#### 方案3---利用伪元素

利用元素的 `margin` 百分比是相对父元素 `width` 的性质来实现
利用子元素的 `margin-top` 的值来实现的

```html
<style>
    .square {
        width: 30%;
        overflow: hidden;
        background: #ff6b81;
    }
    .square::after {
        content: "";
        display: block;
        margin-top: 100%;
    }
</style>
<div class="square"></div>
```

### 阴影效果

四周阴影的正方形

```html
<style type="text/css">
  .fei {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    /** 主要属性box-shadow */
    box-shadow: 0 0 15px #ff6b81;
  }
</style>
<div class="fei"></div>


属性可设置的值包括阴影的 X 轴偏移量、Y 轴偏移量、模糊半径、扩散半径和颜色

/* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影颜色 */
box-shadow: 0px 0px 15px black;

```

