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













