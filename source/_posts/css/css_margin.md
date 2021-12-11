---
title: CSS 之 -margin 兼容文字方向
date: 2015-03-04
categories: 
- CSS
tags:
- CSS
- margin
---
 `css` 之 `margin-block-start`  和 `margin-top`
 `css` 之 `margin-inline-start` 和 `margin-left`

<!-- more -->

### 兼容文字阅读方向 `margin-inline-start`

```html
<style>
    .rtl-tb {
        direction: rtl;
        /*margin-block-start: 50px; */ /* 文本垂直从上到下的距离 */
        margin-top: 50px;
        unicode-bidi: bidi-override;
    }

    .ltr-tb {
        direction: ltr;
        margin-inline-start: 50px; /* 文本水平左右的距离*/
        /*margin-left: 50px;*/ /* 文本水平左右的距离 */
        unicode-bidi: bidi-override;
    }

    .fei_03 {
        direction: rtl;
        /** 
        可以兼容文件方向,这里在使用原来的 margin-left 就没有效果,
        要使用margin-right,才能回出现右边的距离
        */
        margin-inline-start: 50px; 
        /*margin-right: 50px;*/
        unicode-bidi: bidi-override;
    }
</style>

<div class="fei_01 rtl-tb">
    水平从右到左的。 hello world
</div>

<div class="fei_02 ltr-tb">
    水平从左到右的。 hello world
</div>

<div class="fei_03">
    水平从右到左的。 hello world
</div>

<ul>
    <li>fei</li>
    <li>fei</li>
    <li>fei</li>
</ul>
```

![margin](/img/css/margin.png "margin")

### `margin` 和 `padding` 参数

##### A) margin 和 padding 参数顺时针方向顺序[ 上右下左]
​    两个 值时，第一个值被匹配给 上和下, 第二个值被匹配给 左和右. 
​    三个 值时，第一个值被匹配给 上, 第二个值被匹配给 左和右, 第三个值被匹配给 下

​    两个值的时候,上和右,没有下和左,下跟随上,左跟随右
​    三个值的时候,上右下,没有左,左边的值跟随右边的值

##### B) 折叠(发生在垂直方向),垂直方向上margin折叠计算规则: 2个值进行比较,取较大的值
​      demo: div1 和 div2 页面上实际效果是20px

```html
<style>
    .div1 {
        background: #add8e6;
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }

    .div2 {
        background: #cd5c5c;
        width: 100px;
        height: 100px;
        margin-top: 10px;
    }
</style>
<div class="div1"></div>
<div class="div2"></div>
```
####  C) 传递(子元素和父元素基线对齐的时候,子元素传给父元素)
​               margin-top 传递 demo1: div2_01 中的  margin-top: 30px; 发生了传递

```html
<style>
    .div1 {
        background: #add8e6;
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }
    
    .div2 {
        background: #cd5c5c;
        width: 100px;
        height: 100px;
        margin-top: 10px;
    }

    .div2_01 {
        background: red;
        width: 50px;
        height: 50px;
        margin-top: 30px;
    }
</style>

<div class="div1"></div>
<div class="div2">
    <div class="div2_01"></div>
</div>
```

margin-bottom 传递 demo2

```html
<style>
    .div1 {
        background: #add8e6;
        width: 100px;
        /*height: 100px;*/
        height: auto;
    }
    
    .div2 {
        background: #cd5c5c;
        width: 100px;
        height: 100px;
    }

    .div1_01 {
        background: red;
        width: 50px;
        height: 100px;
        margin-bottom: 20px;
    }
</style>
<h3> margin-bottom 传递</h3>
<div class="div1">
    <div class="div1_01"></div>
</div>
<div class="div2"></div>
```

#### C-02) 防止传递方法3种

 01) 给父元素设置padding-top 或者 padding-bottom
 02) 给父元素设置border
 03) 触发BFC: 设置overflow为auto 或者 hidden

####  D) margin 和 padding 总结

margin一般是用来设置兄弟元素之间的间距
padding一般是用来设置父子元素之间的间距
一个padding的demo:   子元素向下移动20px, 父元素总高度为120px

```html
<style>
    .div1 {
        background: #add8e6;
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }
    
    .div2 {
        background: #cd5c5c;
        width: 100px;
        height: 100px;
        padding-top: 20px;/*  子元素移动20px, 父元素总高度为120px */
    }

    .div2_01 {
        background: red;
        width: 50px;
        height: 50px;
    }
</style>

<div class="div1"></div>
<div class="div2">
    <div class="div2_01"></div>
</div>
```



### 水平居中

```html
<style>
    div {
        width: 200px;
        height: 200px;  
        background-color: #ff6b81;
        margin: 0 auto;
    }
</style>
<div class="div1"></div>
```

### 折叠详细介绍

折叠,传递,重叠 三个词一个意思

产生折叠的必备条件: `margin` 必须是邻接的,  两个 `margin` 是邻接的必须满足以下条件:

1. 必须是处于常规文档流(非 `float` 和绝对定位)的块级盒子,并且处于同一个 `BFC` 当中

2. 没有线盒,没有空隙,没有 `padding` 和` border` 将他们分隔开
3. 都属于垂直方向上相邻的外边距,可以是下面任意一种情况
4. 元素的` margin-top` 与其第一个常规文档流的子元素的 `margin-top`
5. 元素的 `margin-bottom` 与其下一个常规文档流的兄弟元素的 `margin-top`
6. `height` 为 `auto` 的元素的 `margin-bottom` 与其最后一个常规文档流的子元素的 `margin-bottom`
7. 高度为 0 并且最小高度也为 0,不包含常规文档流的子元素,并且自身没有建立新的 BFC 的元素的 `margin-top` 和 `margin-bottom`

有三种情况会形成外边距重叠

1. 同一层相邻元素之间
2. 没有内容将父元素和后代元素分开
3. 空的块级元素



### 其他

[MDN外边距重叠](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)



























