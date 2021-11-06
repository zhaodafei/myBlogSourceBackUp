---
title: -CSS 常见布局_左中右
categories: 
- CSS
tags:
- CSS
---
CSS 常见布局`左中右`
CSS 常见布局`左中右`
CSS 常见布局`左中右`
左右两栏宽度固定，中间自适应的布局, 经典的`圣杯布局`

### 方案1---绝对定位

```html
<style>
    /* 
        利用绝对定位的方式,左右两栏设置为绝对定位(absolute),
        中间设置对应方向大小的 margin的值
    */
    .container {
        height: 100px;
        position: relative;
    }
    .left {
        width: 100px;
        height: 100px;
        background: #ff6b81;
        position: absolute;
    }
    .center {
        margin-left: 100px;
        margin-right: 200px;
        height: 100px;
        background: #c0c0c0;
    }
    .right {
        width: 200px;
        height: 100px;
        background: #ff6b81;
        position: absolute;
        top: 0;
        right: 0;
    }
</style>
<div class="container">
    <div class="left">box-left</div>
    <div class="center">box-center</div>
    <div class="right">box-right</div>
</div>
```

### 方案2---flex

```html
<style>
    /* 
        利用 flex 布局的方式,
        左右两栏的放大和缩小比例都设置为 0,
        基础大小设置为固定的大小,
        中间一栏设置为 auto 
    */
    .container {
        height: 100px;
        display: flex;
    }
    .left {
        background: #ff6b81;
        flex: 0 0 100px;
    }
    .center {
        background: #c0c0c0;
        flex: auto;
    }
    .right {
        background: #ff6b81;
        flex: 0 0 200px;
    }
</style>
<div class="container">
    <div class="left">box-left</div>
    <div class="center">box-center</div>
    <div class="right">box-right</div>
</div>
```

### 方案3---浮动

```html
<style>
    /*
      利用浮动的方式,
      左右两栏设置固定大小,并设置对应方向的浮动。
      中间一栏设置左右两个方向的 margin 值,
      --- 注意这种方式,中间一栏必须放到最后  ---
    */
    .container {
        height: 100px;
    }
    .left {
        width: 100px;
        height: 100px;
        background: #ff6b81;
        float: left;
    }
    .center {
        height: 100px;
        background: #c0c0c0;
        margin-left: 100px;
        margin-right: 200px;
    }
    .right {
        width: 200px;
        height: 100px;
        background: #ff6b81;
        float: right;
    }
</style>
<div class="container">
    <div class="left">box-left</div>
    <div class="right">box-right</div>
    <div class="center">box-center</div>
</div>
```

### 方案4---浮动和负边距(圣杯布局)

```html
<style>
    /*
      圣杯布局，利用浮动和负边距来实现。
      父级元素设置左右的 padding，
      三列均设置向左浮动，
      中间一列放在最前面，宽度设置为父级元素的宽度，
      因此后面两列都被挤到了下一行，通过设置 margin 负值将其移动到上一行，
      再利用相对定位，定位到两边
    */
    .container {
        padding-left: 100px;
        padding-right: 200px;
    }
    .left {
        width: 100px;
        height: 100px;
        background: #ff6b81;
        float: left;
        position: relative;
        left: -100px;
        margin-left: -100%;
    }
    .center {
        width: 100%;
        height: 100px;
        background: #c0c0c0;
        float: left;
    }
    .right {
        width: 200px;
        height: 100px;
        background: #ff6b81;
        position: relative;
        left: 200px;
        float: left;
        margin-left: -200px;
    }
</style>
<div class="container">
    <div class="center">box-center</div>
    <div class="left">box-left</div>
    <div class="right">box-right</div>
</div>
```

### 方案5---浮动和负边距(双飞翼布局)

```html
<style>
    /*
        双飞翼布局，双飞翼布局相对于圣杯布局来说,
        左右位置的保留是通过中间列的 margin 值来实现的,
        而不是通过父元素的 padding 来实现的。
        本质上来说,也是通过浮动和外边距负值来实现的
    */
    .container {
        height: 100px;
    }
    .left {
        width: 100px;
        height: 100px;
        background: #ff6b81;
        float: left;
        margin-left: -100%;
    }
    .right {
        width: 200px;
        height: 100px;
        background: #ff6b81;
        float: left;
        margin-left: -200px;
    }

    .wrapper{
        float: left;
        width: 100%;
    }
    .center {
        height: 100px;
        background: #c0c0c0;
        margin-left: 100px;
        margin-right: 200px;
    }
</style>
<div class="container">
    <div class="wrapper">
        <div class="center">box-center</div>
    </div>
    <div class="left">box-left</div>
    <div class="right">box-right</div>
</div>
```



