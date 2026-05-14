---
title: CSS 之 text-align
date: 2015-03-04
categories: 
- CSS
tags:
- CSS
- text-align
---
 css 之 `text-align`
 css 之` text-align`
 css 之 `text-align`

<!-- more -->

### ` text-align`  文本对齐

```html
<style>
.box{
    background-color: #00ff00;
    text-align: center;  /** 让inner中内容居中对齐,不是对inner的div居中*/
}
.inner{
    background-color: #9b5384;
    width: 200px;  /*这行*/
    display: inline-block;  /*这行*/
    /* text-align-last: justify; */
}
</style>
<div class="box">
    <div class="inner">我是div元素</div>
</div>
```

### 垂直对齐

```html
<div class="company-name">
  <span class="info-value">
    姓名
    <van-icon name="arrow" color="rgba(0,0,0,0.45)" />
  </span>
</div>

<style>
  .company-name {
    width: 100%;
    height: 42px;
    line-height: 42px;
    box-sizing: border-box;
    /** 只通过 height 和  line-height 是实现不了垂直对齐
      文字和 <van-icon> 的基线对齐方式不同，导致整体视觉上不在正中间
     */
    display: flex;
  }
</style>
```



![root passwd](/img/css/text_align.png "text-align")































