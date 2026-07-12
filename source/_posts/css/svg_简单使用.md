---
title: -svg简单使用
date: 2022-01-04
categories: 
- svg
tags:
- svg
---
`svg`简单使用
`svg`简单使用
`svg`简单使用

<!-- more -->

### 文本

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg width="121px" height="32px" viewBox="0 0 121 32" version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">  
    <text x="55" y="20" fill="#ff6b81">飞</text>
</svg>

```

### 直线

利用直线画一个长方形

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg width="121px" height="32px" viewBox="0 0 121 32" version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M0,0  0,0  0,32  121,32  121,0  0,0" style="stroke: #000000; fill:#c0c0c0;"/>

    <path d="M30,5  30,5 90,5 90,25 30,25 30,5" style="stroke: #afeeee; fill:none;"/>
</svg>

```

### 图片

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg width="121px" height="32px" viewBox="0 0 121 32" version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <image id="image0" width="32" height="32" x="0" y="0"
           href="data:image/png;base64,iVB 这里是base64图片字符串"></image>
</svg>
```

### 颜色控制

```wiki
一般情况有 svg 里面的 fill 控制颜色, 有时候页面html中使用需要其他颜色,需要通过css的 mask-image 来实现
```

```vue
<template>
  <div>
    <span class="locate marker"></span>
  </div>
</template>

<style scoped lang="scss">
.locate {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
}

.marker {
  /**
   这段 CSS 是使用 SVG 文件作为蒙版（mask），而不是直接显示 SVG 本身
   这种情况下，填充色由元素的 background-color 决定，而不是 SVG 文件里的颜色。
   */
  background-color: #90ee90;
  //background-color: #ff6b81;
  //mask-image: url(/images/fei/marker01.svg);
  //-webkit-mask-image: url(/images/fei/marker01.svg);
  mask-image: url(/images/fei/marker02.svg);
  -webkit-mask-image: url(/images/fei/marker02.svg);
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
}
</style>

```













