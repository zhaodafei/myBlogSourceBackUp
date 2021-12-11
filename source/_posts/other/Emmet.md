---
title: web-Emmet  快捷使用  -Emmet
date: 2015-03-04
categories: 
- WEB
- Emmet
tags:
- WEB
- Emmet
---
快捷使用  -Emmet
快捷使用  -Emmet
快捷使用  -Emmet

<!-- more -->

### `HTML` 布局_01  `子元素`

```html
ul>li*4>{tab$}  按下tab 后 

<ul>
    <li>tab1</li>
    <li>tab2</li>
    <li>tab3</li>
    <li>tab4</li>
</ul>
```

![e_01](/img/other/Emmet/e_01.gif "e_01")

### `HTML` 布局_02  `id 和 class`

```html
ul.da#fei>li*4>{tab$}  按下tab后

<ul class="da" id="fei">
    <li>tab1</li>
    <li>tab2</li>
    <li>tab3</li>
    <li>tab4</li>
</ul>
```

![e_02](/img/other/Emmet/e_02.gif "e_02")

### `HTML` 布局_03  `兄弟元素`

```html
div.item*3>div.title{标题$}+div.val{内容$}  按下tab后

<div class="item">
    <div class="title">标题1</div>
    <div class="val">内容1</div>
</div>
<div class="item">
    <div class="title">标题2</div>
    <div class="val">内容2</div>
</div>
<div class="item">
    <div class="title">标题3</div>
    <div class="val">内容3</div>
</div>		
```

![e_03](/img/other/Emmet/e_03.gif "e_03")

### `HTML` 布局_04 `自定义属性`

```html
div>p[data-fei=fei]  按下tab键
div>p[data-fei="fei"]  按下tab键

<div>
    <p data-fei="fei"></p>
</div>
```

### demo 复杂实例

```html
div#header>nav#container>ul.self-tabs>li.self-tabs-item*3>a[href="javascript:void(0)"]

按下tab键

<div id="header">
    <nav id="container">
        <ul class="self-tabs">
            <li class="self-tabs-item"><a href="javascript:void(0)"></a></li>
            <li class="self-tabs-item"><a href="javascript:void(0)"></a></li>
            <li class="self-tabs-item"><a href="javascript:void(0)"></a></li>
        </ul>
    </nav>
</div>
```

### CSS 布局

```css
w20  按下tab后
width: 20px;

w20+h30    按下tab后
width: 20px;
height: 30px;   
```

### 隐式标签

```html
.foo   按下tab后
<div class="foo"></div>

#bar   按下tab后
<div id="bar"></div>
```



 [Emmet 官网](https://docs.emmet.io/ceat-sheet "Emmet 官网")





























