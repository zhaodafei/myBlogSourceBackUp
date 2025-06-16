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

### 超过行数显示省略号

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
  <!-- 过期时间 -->
  <meta http-equiv="Expires" content="0">
  <!-- 禁止浏览器从本地机的缓存中调阅页面内容,设定后一旦离开网页就无法从Cache中再调出 -->
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Cache-control" content="no-cache">
  <meta http-equiv="Cache" content="no-cache">
  <title>超过行数显示省略号</title>
</head>
<style>
  .header,.footer {
    height: 100px;
    background: #ff6b81;
  }
  .container {
    background: #c0c0c0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 显示行数, 超过后显示省略号 */
  }
</style>
<div class="fei">
  <div class="header"> 头部信息 </div>
  <div class="container">
    超文本标记语言（英语：HyperText Markup Language，简称：HTML） 是一种用于创建网页的标准标记语言。
    HTML是一种基础技术， 常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序以及移动应用程序的用户界面。
    网页浏览器可以读取HTML文件，并将其渲染成可视化网页。
    HTML描述了一个网站的结构语义随着线索的呈现，使之成为一种标记语言而非编程语言。
  </div>
  <div class="footer"> 底部信息 </div>
</div>

```

#### 标签中超过行数

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
  <title>超过行数显示省略号</title>
</head>
<style>
  .fei{
    display: grid;
    gap: 10px; /* 可以根据需要调整间距 */
    grid-template-columns: repeat(3, 1fr);
  }

  .tag-item{
    height: 60px;
    background-color: #969799;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    padding: 4px 8px;
    font-size: 14px;
    border-radius: 4px;
  }

  .name{
    color: red;
    white-space: normal;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>

<div>
  <div class="fei">
    <span class="tag-item">
      <span class="name">
        1-71HTML的全称为超文本标记语言，是一种标记语言。它包括一
        使分散的Internet资源连接为一个逻辑整体。
        HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字，
        图形、动画、声音、表格、链接等。 [1]
        超文本是一种组织信息的方式，它通过超级链接方法将文本中的文字、图表与其他信
        也可能是其他文件，或是地理位置相距遥远的某台计算机上的文件。这种组织信息方
        为人们查找，检索信息提供方便。超长了超长了超长了超长了超长了超长了超长了
        超长了超长了超长了超长了超长了超长了超长了超长了超长了超长了超长了超长了超长了超长了
        超长了超长了超长了超长了超长了超长了超长了超长了超长了超长了超长了超长了超长了超长了
      </span>
    </span>
    <span class="tag-item">
      <span class="name">afdfdfdsafsfasfafdfdfdsafsfasfafdfdfdsafsfasfafdfdfdsafsfasf超长了超长了</span>
    </span>
    <span class="tag-item">
      <span class="name">不超过</span>
    </span>
  </div>
</div>
```

### 中间文字带线

效果描述:  左右2条线,中间显示文字内容

```html
<div class="line-with-text">
  <span>使用 text-align 和背景渐变</span>
</div>
<style>
  .line-with-text {
    text-align: center;
    position: relative;
    color: #333;
  }

  .line-with-text::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #c7c7c7 50%, transparent 50%);
    background-size: 6px 100%;
    z-index: -1;
  }

  .line-with-text span {
    background: white;
    padding: 0 10px;
  }
</style>
```





