---
title: css 之 text-align
categories: 
- css
tags:
- css
- text-align
---
 css 之 text-align
 css 之 text-align
 css 之 text-align

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

### 

![root passwd](/img/css/text_align.png "text-align")































