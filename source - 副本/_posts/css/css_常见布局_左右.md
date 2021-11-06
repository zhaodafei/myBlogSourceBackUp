---
title: -CSS 常见布局_左右
categories: 
- CSS
tags:
- CSS
---
CSS 常见布局`左右`
CSS 常见布局`左右`
CSS 常见布局`左右`
左边固定宽度,右边自适应

### 浮动和`margin-left`

```html
<style>
    /* 浮动 和 margin-left*/
    .container {
        height: 100px;
    }
    .left {
        width: 200px;
        height: 100px;
        background: #ff6b81;
        float: left;
    }
    .right {
        /*width: auto;*/
        height: 100px;
        background: #c0c0c0;
        margin-left: 200px;
    }
</style>
<div class="container">
    <div class="left">box-left</div>
    <div class="right">box-right</div>
</div>
```

### `flex`布局` 放大缩小flex: auto`

```html
<style>
    /* flex 布局 */
    .container {
        height: 100px;
        display: flex;
    }
    .left {
        background: #ff6b81;
        /*flex-shrink: 0;*/
        /*flex-grow: 0;*/
        flex-basis: 200px;
    }
    .right {
        background: #c0c0c0;
        flex: auto;
    }
</style>
<div class="container">
    <div class="left">box-left</div>
    <div class="right">box-right</div>
</div>
```

### 左边绝对定位`absolute` 和'margin-left'

```html
<style>
    /* 左边绝对定位 */
    .container {
        height: 100px;
        position: relative;
    }
    .left {
        width: 200px;
        height: 100px;
        background: #ff6b81;
        position: absolute;
    }
    .right {
        height: 100px;
        background: #c0c0c0;
        margin-left: 200px;
    }
</style>
<div class="container">
    <div class="left">box-left</div>
    <div class="right">box-right</div>
</div>
```

### 右边绝对定位`absolute` 和'left'

```html
<style>
    /* 右边绝对定位 */
    .container {
        height: 100px;
        position: relative;
    }
    .left {
        width: 200px;
        height: 100px;
        background: #ff6b81;
    }
    .right {
        height: 100px;
        background: #c0c0c0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 200px;
    }
</style>
<div class="container">
    <div class="left">box-left</div>
    <div class="right">box-right</div>
</div>
```











































