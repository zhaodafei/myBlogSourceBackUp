---
title: -CSS 常见布局_上下
date: 2015-03-04
categories: 
- CSS
tags:
- CSS
---
CSS 常见布局`上下`
CSS 常见布局`上下`
CSS 常见布局`上下`

<!-- more -->

情景描述: 有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度

### 方案1---padding 和 margin 对冲

```html
<style>
    html, body { height: 100%; padding: 0; margin: 0;}
    /*方法01, padding 和 margin 对冲*/ 
    .container {height: 100%;padding: 100px 0 0;box-sizing: border-box;}
    .box-A {background: #c0c0c0;height: 100px;margin: -100px 0 0;}
    .box-B {background: #ff6b81;height: 100%;}
</style>

<div class="container">
    <div class="box-A"></div>
    <div class="box-B"></div>
</div>
```

### 方案2---padding 和 absolute 中top 对冲

```html
<style>
    html, body { height: 100%; padding: 0; margin: 0;}
    /*方法02, padding 和 absolute 中top 对冲*/
    .container { height: 100%; padding: 100px 0 0; box-sizing: border-box ; position: relative; }
    .box-A { background: #c0c0c0; height: 100px; position: absolute; top: 0 ; left: 0 ; width: 100%; }
    .box-B { background: #ff6b81; height: 100%; }
</style>

<div class="container">
    <div class="box-A"></div>
    <div class="box-B"></div>
</div>
```

### 方案3--- absolute 中top

```html
<style>
    html, body { height: 100%; padding: 0; margin: 0;}
    /*方法03, absolute 中top */
    .container { height: 100%; position: relative; }
    .box-A { background: #c0c0c0; height: 100px; }
    .box-B { background: #ff6b81; width: 100%; position: absolute; top: 100px ; left: 0 ; bottom: 0; }
</style>

<div class="container">
    <div class="box-A"></div>
    <div class="box-B"></div>
</div>
```

### 方案4---flex 和 flex-grow

```html
<style>
    html, body { height: 100%; padding: 0; margin: 0;}
    /*方法04, flex 和 flex-grow  */
    .container{height: 100%;display: flex;flex-direction: column;}
    .box-A{height: 100px;background: #c0c0c0;}
    .box-B{flex-grow: 1;background: #ff6b81;}
</style>

<div class="container">
    <div class="box-A">xx</div>
    <div class="box-B">xxxx</div>
</div>
```



