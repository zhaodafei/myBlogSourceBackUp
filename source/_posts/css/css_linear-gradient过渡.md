---
title: CSS 之 linear-gradient
date: 2025-04-01
categories: 
- CSS
tags:
- CSS
- linear-gradient
---
 css 之 `linear-gradient`
 css 之` linear-gradient`
 css 之 `linear-gradient`

使用者属性可以做`背景色`和`边框颜色`

<!-- more -->

### ` linear-gradient`  行线性过渡

```css
.dashed-line {
  height: 2px; /* 虚线高度 */
  background: linear-gradient(to right, #000 50%, transparent 50%);
  background-size: 10px 100%; /* 10px为一个虚线单元(5px实线+5px透明) */
  background-repeat: repeat-x;
}
```

> ### 参数说明
>
> - `to right`：控制方向（可改为 `to left`, `to bottom`, `to top`）
> - `#000 50%`：前50%为黑色实线
> - `transparent 50%`：后50%为透明
> - `background-size: 10px 100%`：每个虚线单元宽10px，高度100%

### 理解属性值

```css
/* 从渐变线 60% 处开始的渐变 */
body {
  background: linear-gradient(135deg, orange 60%, cyan);
}


/* 有多位置色标的渐变 */
body {
  background: linear-gradient(
    to right,
    red 20%,
    orange 20% 40%,
    yellow 40% 60%,
    green 60% 80%,
    blue 80%
  );
}

/** 
允许有多个位置的色标。一个颜色可以声明为多个相邻的色标，方法就是在 CSS 声明中包括这两个位置。以下的三个渐变是等价的：
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
**/
css
```

<div style="width: 300px;height: 100px; background: linear-gradient(to right, red 20%, orange 20% 40%, yellow 40% 60%, green 60% 80%, blue 80%);">有多位置色标的渐变</div>

### demo1

```html
<div class="fei-box"></div>
<style>
  .fei-box {
    width: 300px;
    height: 100px;
    /** 右下角ff6b81 到 左上角90ee90 */
    background: linear-gradient(45deg, #ff6b81, #90ee90);
  }
</style>
```

<div style="width: 300px;height: 100px;background: linear-gradient(45deg, #ff6b81, #90ee90);"></div>

### demo2

```html
<div class="fei-box"></div>
<style>
  .fei-box {
    width: 100px;height: 100px;
    /** 从左侧ff6b81 到 右侧90ee90 */
    background: linear-gradient(to right, #ff6b81, #90ee90);
  }
</style>
```

<div style="width: 300px;height: 100px;background: linear-gradient(to right, #ff6b81, #90ee90);"></div>

### 自定义虚线样式

使用 `linear-gradient` 创建虚线的优势在于可以精确控制虚线的长度、间距、颜色和方向，实现各种创意效果。

```html
<div class="fei-box"></div>
<style>
  .fei-box {
    height: 3px;
    background:
        linear-gradient(
            to right,
            #f00 0%, #f00 30%,  /* 红色部分占30% */
            transparent 30%, transparent 100% /* 透明部分占70% */
        );
    background-size: 20px 100%; /* 每个单元20px */
  }
</style>
```

<div style="width: 300px;height: 3px;background: linear-gradient(to right, #f00 0%, #f00 30%, transparent 30%, transparent 100%);background-size: 20px 100%;"></div>

### 多段虚线

```html
<div class="fei-box"></div>
<style>
  .fei-box {
    height: 4px;
    background: linear-gradient(
        to right,
        red 0%, red 20%,
        transparent 20%, transparent 40%,
        red 40%, red 60%,
        transparent 60%, transparent 80%,
        red 80%, red 100%
    );
    background-size: 40px 100%;
  }
</style>
```

<div style="width: 300px;height: 4px;background: linear-gradient(to right, red 0%, red 20%, transparent 20%, transparent 40%, red 40%, red 60%, transparent 60%, transparent 80%, red 80%, red 100%);background-size: 40px 100%;"></div>

### 精美的标题下划线

```html
<div class="fei-box">sssssssssssss</div>
<style>
  /* 精美的标题下划线 */
  .fei-box {
    position: relative;
    display: inline-block;
    padding-bottom: 8px;
  }

  .fei-box::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #3498db 50%, transparent 50%);
    background-size: 16px 100%;
  }
</style>
```

<div style="position: relative; display: inline-block; padding-bottom: 8px;">文本内容文本内容文本内容文本内容<span style="content:''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(to right, #3498db 50%, transparent 50%); background-size: 16px 100%;"></span></div>

### 精美的标题下划线2

```html
<div class="fei-box">sssssssssssss</div>
<style>
  /* 精美的标题下划线 */
  .fei-box {
      width: 300px;height: 3px;
    background: linear-gradient(
        to left,
        transparent 0%, transparent 50%,
        red 50%, red 100%
    );
    background-size: 5px 1px;
    background-repeat: repeat-x;
  }
</style>
```

<div style="width: 300px;height: 3px;background: linear-gradient(to left, transparent 0%, transparent 50%, red 50%, red 100%);background-size: 5px 1px;background-repeat: repeat-x;"></div>

### 其他gradient渐变

```html
<div class="linear-repeat">重复的线性渐变</div>
<br />
<div class="radial-repeat">重复的径向渐变</div>

<style>
  div {
    width: 240px;
    height: 80px;
  }

  .linear-repeat {
    background: repeating-linear-gradient(
        to top left,
        lightpink,
        lightpink 5px,
        white 5px,
        white 10px
    );
  }

  .radial-repeat {
    background: repeating-radial-gradient(
        powderblue,
        powderblue 8px,
        white 8px,
        white 16px
    );
  }
</style>


<div style="width: 240px;height: 80px;background: repeating-linear-gradient(to top left, lightpink, lightpink 5px, white 5px, white 10px);"></div>

<div style="width: 240px;height: 80px;background: repeating-radial-gradient(powderblue, powderblue 8px, white 8px, white 16px);"></div>
```

<div style="width: 240px;height: 80px;background: repeating-linear-gradient(to top left, lightpink, lightpink 5px, white 5px, white 10px);"></div>

<div style="width: 240px;height: 80px;background: repeating-radial-gradient(powderblue, powderblue 8px, white 8px, white 16px);"></div>



### 中间文字带线

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

## 边角

### 基本直角

```html
<div class="rectangle">
  <div style="color: red">四个基本直角边框</div>
</div>
<style>
  .rectangle {
    width: 200px;
    height: 150px;
    background:
        /* 上边框 */
        linear-gradient(to right, #000 0%, #000 100%) 0 0,
          /* 右边框 */
        linear-gradient(to bottom, #000 0%, #000 100%) 100% 0,
          /* 下边框 */
        linear-gradient(to right, #000 0%, #000 100%) 0 100%,
          /* 左边框 */
        linear-gradient(to bottom, #000 0%, #000 100%) 0 0;
    background-size:
        100% 2px,  /* 上/下边框高度 */
        2px 100%;  /* 左/右边框宽度 */
    background-repeat: no-repeat;
  }
</style>
```

<div class="rectangle" style=" width: 200px;height: 150px;background: linear-gradient(to right, #dda0dd 0%, #dda0dd 100%) 0 0, linear-gradient(to bottom, #dda0dd 0%, #dda0dd 100%) 100% 0, linear-gradient(to right, #dda0dd 0%, #dda0dd 100%) 0 100%, linear-gradient(to bottom, #dda0dd 0%, #dda0dd 100%) 0 0;background-size: 100% 2px, 2px 100%;background-repeat: no-repeat;"><div style="color: red">四个基本直角边框</div></div>

### 基本虚线框

```html
<div class="dashed-border">
  <div>四个边框都是虚线</div>
</div>
<style>
  .dashed-border {
    width: 200px;
    height: 150px;

    /* 清除默认边框 */
    border: none;

    /* 使用背景渐变创建虚线效果 */
    background-image:
        linear-gradient(to right, red 50%, transparent 50%), /* 上边框 */
        linear-gradient(to bottom, red 50%, transparent 50%), /* 右边框 */
        linear-gradient(to right, red 50%, transparent 50%), /* 下边框 */
        linear-gradient(to bottom, red 50%, transparent 50%);  /* 左边框 */

    background-size:
        10px 1px,  /* 上边框 - 10px长，1px高 */
        1px 10px,  /* 右边框 - 1px宽，10px高 */
        10px 1px,  /* 下边框 - 10px长，1px高 */
        1px 10px;  /* 左边框 - 1px宽，10px高 */

    background-position:
        0 0,        /* 上边框 - 顶部 */
        right 0,    /* 右边框 - 右侧 */
        0 bottom,   /* 下边框 - 底部 */
        0 0;        /* 左边框 - 左侧 */

    background-repeat:
        repeat-x,  /* 上边框水平重复 */
        repeat-y,  /* 右边框垂直重复 */
        repeat-x,  /* 下边框水平重复 */
        repeat-y;  /* 左边框垂直重复 */
  }
</style>

```

<div class="dashed-border" style="  width: 200px;height: 150px;border: none;background-image: linear-gradient(to right, red 50%, transparent 50%), linear-gradient(to bottom, red 50%, transparent 50%), linear-gradient(to right, red 50%, transparent 50%), linear-gradient(to bottom, red 50%, transparent 50%);background-size: 10px 1px, 1px 10px, 10px 1px, 1px 10px;background-position: 0 0, right 0, 0 bottom, 0 0;background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;"><div>四个边框都是虚线</div></div>

### 四个边角直角

```html
<div class="cross-corners"><span>四个角都是直角</span></div>
<style>
  .cross-corners {
    position: relative;
    width: 200px;
    height: 150px;
    background: #f5f5f5;
  }

  /* 创建四个角 */
  .cross-corners::before,
  .cross-corners::after,
  .cross-corners span::before,
  .cross-corners span::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
  }

  /* 左上角 */
  .cross-corners::before {
    top: 0;
    left: 0;

    /* background-image: 垂直部分,      水平部分; */
    /* background-size:  垂直部分(宽高), 水平部分(宽,高); */
    /* background-position: 垂直部分(x,y), 水平部分(x,y); */
    /*background: linear-gradient(#333, #333), linear-gradient(#333, #333);
    background-size: 2px 100%, 100% 2px;
    background-position: 0 top, right 0;
    background-repeat: no-repeat;*/

    /* background-image: 水平部分, 垂直部分; */
    /* background-size:  水平部分高度(宽高), 垂直部分宽度(宽高); */
    /* background-position: 水平部分在顶部(x,y), 垂直部分在右侧(x,y); */
    background-image:
        linear-gradient(to right, #000 0%, #000 80%),
        linear-gradient(to bottom, #000 0%, #000 100%);
    background-size:
        100% 2px,
        2px 100%;
    background-position:
        0 0,
        left 0;
    background-repeat: no-repeat;
  }

  /* 右上角 */
  .cross-corners::after {
    top: 0;
    right: 0;

    /* background-image: 水平部分, 垂直部分;*/
    /* background-size: 水平部分高度, 垂直部分宽度;*/
    /* background-position: 水平部分在顶部, 垂直部分在右侧;*/
    background-image:
        linear-gradient(to right, #000 0%, #000 100%),
        linear-gradient(to bottom, #000 0%, #000 80%);
    background-size:
        100% 2px,
        2px 100%;
    background-position:
        0 top,
        right 0;
    background-repeat: no-repeat;
  }

  /* 左下角: 向上的 "L" 形 */
  .cross-corners span::before {
    bottom: 0;
    left: 0;

    /* background-image: 水平部分, 垂直部分;*/
    /* background-size: 水平部分高度, 垂直部分宽度;*/
    /* background-position: 水平部分在底部, 垂直部分在左侧;*/
    background-image:
        linear-gradient(to right, #000 0%, #000 100%),
        linear-gradient(to bottom, #000 20%, #000 100%);
    background-size:
        100% 2px,
        2px 100%;
    background-position:
        0 bottom,
        left 0;
    background-repeat: no-repeat;
  }

  /* 右下角 */
  .cross-corners span::after {
    bottom: 0;
    right: 0;

    /* background-image: 水平部分, 垂直部分;*/
    /* background-size: 水平部分高度, 垂直部分宽度;*/
    /* background-position: 水平部分在底部, 垂直部分在左侧;*/
    background-image:
        linear-gradient(to right, #000 20%, #000 100%),
        linear-gradient(to bottom, #000 0%, #000 100%);
    background-size:
        100% 2px,
        2px 100%;
    background-position:
        0 bottom,
        right 0;
    background-repeat: no-repeat;
  }
</style>
```

#### demo2

不使用伪元素

```html
<div class="cross-corners">
  <span class="outer-a" data-tip="左上角"></span>
  <span>
    <span class="in-a" data-tip="左下角"></span>
     四个角都是直角ss
    <span class="in-b" data-tip="右下角"></span>
  </span>
  <span class="outer-b" data-tip="右上角"></span>
</div>
<style>
  .cross-corners {
    position: relative;
    width: 200px;
    height: 150px;
    background: #f5f5f5;
  }

  .outer-a,
  .outer-b,
  .in-a,
  .in-b {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
  }


  .outer-a {
    top: 0;
    left: 0;

    background-image:
        linear-gradient(to right, red 0%, red 80%),
        linear-gradient(to bottom, red 0%, red 100%);
    background-size:
        100% 2px,
        2px 100%;
    background-position:
        0 0,
        left 0;
    background-repeat: no-repeat;
  }

  .outer-b {
    top: 0;
    right: 0;

    background-image:
        linear-gradient(to right, red 0%, red 100%),
        linear-gradient(to bottom, red 0%, red 80%);
    background-size:
        100% 2px,
        2px 100%;
    background-position:
        0 top,
        right 0;
    background-repeat: no-repeat;
  }

  .in-a {
    bottom: 0;
    left: 0;

    background-image:
        linear-gradient(to right, red 0%, red 100%),
        linear-gradient(to bottom, red 20%, red 100%);
    background-size:
        100% 2px,
        2px 100%;
    background-position:
        0 bottom,
        left 0;
    background-repeat: no-repeat;
  }

  .in-b {
    bottom: 0;
    right: 0;
    background-image:
        linear-gradient(to right, red 20%, red 100%),
        linear-gradient(to bottom, red 0%, red 100%);
    background-size:
        100% 2px,
        2px 100%;
    background-position:
        0 bottom,
        right 0;
    background-repeat: no-repeat;
  }
</style>


```

<div class="cross-corners" style="position: relative;width: 200px;height: 150px;background: #f5f5f5;"><span class="outer-a" data-tip="左上角" style="content: '';position: absolute;width: 15px;height: 15px;top: 0;left: 0;background-image: linear-gradient(to right, red 0%, red 80%), linear-gradient(to bottom, red 0%, red 100%);background-size: 100% 2px, 2px 100%;background-position: 0 0, left 0;background-repeat: no-repeat;"></span><span><span class="in-a" data-tip="左下角" style="content: '';position: absolute;width: 15px;height: 15px;bottom: 0;left: 0;background-image: linear-gradient(to right, red 0%, red 100%), linear-gradient(to bottom, red 20%, red 100%);background-size: 100% 2px, 2px 100%;background-position: 0 bottom, left 0;background-repeat: no-repeat;"></span>四个角都是直角ss<span class="in-b" data-tip="右下角" style=" content: '';position: absolute;width: 15px;height: 15px;bottom: 0;right: 0;background-image: linear-gradient(to right, red 20%, red 100%), linear-gradient(to bottom, red 0%, red 100%);background-size: 100% 2px, 2px 100%;background-position: 0 bottom, right 0;background-repeat: no-repeat;"></span></span><span class="outer-b" data-tip="右上角" style="content: '';position: absolute;width: 15px;height: 15px;top: 0;right: 0;background-image: linear-gradient(to right, red 0%, red 100%), linear-gradient(to bottom, red 0%, red 80%);background-size: 100% 2px, 2px 100%;background-position: 0 top, right 0;background-repeat: no-repeat;"></span></div>



### 底部

1. [mdn:  linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient)
1. [mdn: gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient)





























