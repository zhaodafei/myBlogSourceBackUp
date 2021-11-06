---
title: -CSS 常见属性使用_02
categories: 
- CSS
tags:
- CSS
---
CSS 常见属性使用2
CSS 常见属性使用2
CSS 常见属性使用2

### `vertical-align` 垂直居中

用来指定行内元素`(inline)`或表格单元格`(table-cell)`元素的垂直对齐方式

针对 `inline-block` 内联块元素的时候,需要一个参考对象(最少2个元素)

```css
<style>
    .container{
        width: 600px;
        height: 600px;
        background-color: #c0c0c0;
        text-align: center;
    }
    .box{
        width: 200px;
        height: 200px;
        background-color: #ff6b81;
        display: inline-block; /* 内联元素 */
        vertical-align: middle;
    }
    .box2{
        height: 100%;
        width: 40px;
    }
</style>
<div class="container">
    <div class="box"></div>
    <!-- box2 主要是测试说明一下(vertical-align)垂直居中,需要参考对象-->
    <div class="box box2">让box1 垂直居中</div>
</div>
```

### `li`之间的空白间隙

```html
<style>
    ul {
        letter-spacing: -8px
    }

    ul li {
        list-style:none;
        display: inline-block;
        letter-spacing: normal;
    }
</style>

<ul>
    <li>001</li><li>002</li><!-- 解决 003 004 005 之间空白字符 -->
    <li>003</li>
    <li>004</li>
    <li>005</li>
</ul> 
```

1. 为`li`设置浮动
2. 将`li`写在同一行
3. 将`ul`内的字符尺寸直接设为 0，即` font-size:0`不足：`ul`中的其他字符尺寸也被设 为 0，需要额外重新设定其他 字符尺寸，且在 Safari 浏览器依然会出现空白间隔
4. 消除`ul`的字符间隔`letter-spacing: -8px`,同时设置li的字符间隔` letter-spacing: normal`

### `width:auto` 和 `width:100%`

一般而言
width:100%会使元素 box 的宽度等于父元素的 content box 的宽度。
width:auto 会使元素撑满整个父元素，margin、border、padding、content 区域会自动分配水平空间。

>width:100%: 是子元素的 content 撑满父元素的content,如果子元素还有 padding、border 等属性，可能会造成子元素区域溢出显示;
>
>width:auto: 是子元素的 content + padding + border + margin 等撑满父元素的 content 区域

绝对定位元素与非绝对定位元素的百分比计算的区别
绝对定位元素的宽高百分比是相对于临近的 position 不为 static 的祖先元素的 padding box 来计算的。
非绝对定位元素的宽高百分比则是相对于父元素的 content box 来计算的。

### 元素竖向百分比
如果是 `height` 的话，是相对于包含块的`高度`
如果是 `padding` 或者 `margin` 竖直方向的属性则是相对于包含块的`宽度`
[W3-CSS属性查询___padding-properties](https://www.w3.org/TR/CSS2/box.html#padding-properties)

><percentage>
>The percentage is calculated with respect to the width of the generated box's containing block, even for 'padding-top' and 'padding-bottom'. If the containing block's width depends on this element, then the resulting layout is undefined in CSS 2.1

>译文:
><百分比>
>即使对于 'padding-top'和'padding-bottom'而言，百分比也是相对于所生成的盒子的包含块的**宽度**来计算的。如果包含块的宽度取决于此元素，则CSS 2.1中未定义结果布局。与边距属性不同，填充值的值不能为负。与边距属性一样，填充属性的百分比值是指生成的框的包含块的宽度

demo:

```html
<style>
    .fei {
        width: 200px;
        height: 50px;/* warning: 这个高度没有作用 */
    }

    .fei div {
        background: #ff6b81;
        padding-left: 50%;
        padding-right: 50%;
        padding-top: 50%; /* 基于 [ 父元素的宽度 ]的百分比的内边距 */
        padding-bottom: 50%; /* 基于 [ 父元素的宽度 ]的百分比的内边距 */
    }
</style>
<div class="fei">
    <div>xxx</div>
</div>
```

### overflow 文本溢出省略号

1. 单行文本溢出后省略

   ```html
   <style>
        div {
            width: 400px;
            height: 60px;
            border: 2px solid #ff6b81;
        }
        p { /* 核心代码 */
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
   </style>
   <div>
        <p>
            fei:WEB前端开发三剑客就是HTML、CSS、JavaScript
            fei:WEB前端开发三剑客就是HTML、CSS、JavaScript
            fei:WEB前端开发三剑客就是HTML、CSS、JavaScript
        </p>
   </div>
   ```

2. 多行文本溢出后省略

   ```html
   <style>
       div {
         width: 400px;
         height: 60px;
         border: 2px solid #ff6b81;
       }
       p { /* 核心代码 */
         max-height: 40px;
         overflow: hidden;
         line-height: 20px;
       }
   </style>
   <div>
       <p>
         fei:WEB前端开发三剑客就是HTML、CSS、JavaScript
         fei:WEB前端开发三剑客就是HTML、CSS、JavaScript
         fei:WEB前端开发三剑客就是HTML、CSS、JavaScript
       </p>
   </div>
   ```

3. 多行文本溢出后省略(出现省略号)

   ```html
   <style>
       div {
         width: 400px;
         height: 60px;
         border: 2px solid #ff6b81;
       }
       p { /* 核心代码 */
         max-height: 40px;
         overflow: hidden;
         line-height: 20px;
         position: relative;
       }
       p::after {  /* 核心代码 */
         position: absolute;
         content: '...';
         right: 0;
         bottom: 0;
         background-color: #fff;/* 白色背景 */
         padding: 0 20px 0 10px;
       }
   </style>
   <div>
       <p>
         fei:WEB前端开发三剑客就是HTML、CSS、JavaScript
         fei:WEB前端开发三剑客就是HTML、CSS、JavaScript
         fei:WEB前端开发三剑客就是HTML、CSS、JavaScript
       </p>
   </div>
   ```

   ### 特效属性
   
   ```css
   linear-gradient #线性渐变
   
   ```
   
   


















[W3-CSS属性查询](https://www.w3.org/TR/CSS2/indexlist.html)