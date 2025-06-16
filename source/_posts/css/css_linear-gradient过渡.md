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



### 底部

1. [mdn:  linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient)
1. [mdn: gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient)





























