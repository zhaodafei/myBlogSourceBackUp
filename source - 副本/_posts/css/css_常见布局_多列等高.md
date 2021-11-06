---
title: -CSS 常见布局_多列等高
categories: 
- CSS
tags:
- CSS
---
CSS 常见布局`多列等高`
CSS 常见布局`多列等高`
CSS 常见布局`多列等高`

###  对冲
使用负`margin-bottom`和正`padding-bottom`对冲实现
核心代码: ` padding-bottom: 9999px;` 和 `margin-bottom: -9999px;`

```html
<style>
    .container {
        width: 600px;
        overflow: hidden;
        margin: 10px auto;
        border: 1px solid #c0c0c0;
    }
    .box {
        float: left;
        width: 30%;
        margin-right: 3%;
        border: 1px solid #ff6b81;
        padding-bottom: 9999px;
        margin-bottom: -9999px;
    }
</style>
<div class="container">
    <div class="box">
        <p>dafei</p>
    </div>
    <div class="box">
        <p>论语</p>
        <p>史记</p>
    </div>
    <div class="box">
        <p>战国策</p>
        <p>汉书</p>
        <p>左传</p>
    </div>
</div>
```

### flex 布局

核心代码: `display: flex;`

```html
<style>
    .container {
        width: 600px;
        display: flex;
    }
    .box {
        width: 30%;
        border: 1px solid #ff6b81;
    }
</style>

<div class="container">
    <div class="box">
        fei fei  fei fei  fei fei  fei fei  fei fei  fei fei  fei fei
        fei fei  fei fei  fei fei  fei fei  fei fei  fei fei  fei fei
        fei fei  fei fei  fei fei  fei fei  fei fei  fei fei  fei fei
    </div>
    <div class="box">
        CSS CSS        CSS CSS        CSS CSS        CSS CSS        CSS CSS
        CSS CSS        CSS CSS        CSS CSS        CSS CSS        CSS CSS
    </div>
    <div class="box">
       foo bar foo bar foo bar foo bar foo bar foo bar foo bar foo bar foo bar
       foo bar foo bar foo bar foo bar foo bar foo bar foo bar foo bar foo bar
    </div>
</div>
```

### 模仿table布局 

核心代码: `display: table-cell;` 属性使用

```html
<style>
    .box {
        width: 600px;
        margin: 40px auto;
        font-size: 12px;
    }
    .cell {
        display: table-cell;
        width: 30%;
        padding: 20px;
        border: 2px solid #ff6b81;
    }
</style>

<div class="box">
    <div class="cell">
        fei fei fei fei fei fei fei fei fei fei fei
        fei fei fei fei fei fei fei fei fei fei fei
    </div>
    <div class="cell">
        CSS CSS CSS CSS CSS CSS CSS CSS CSS CSS CSS
        CSS CSS CSS CSS CSS CSS CSS CSS CSS CSS CSS
    </div>
    <div class="cell">
        foo bar foo bar foo bar foo bar foo bar foo bar
    </div>
</div>
```



























