---
title: -CSS 常见属性使用
categories: 
- CSS
tags:
- CSS
---
CSS 常见属性使用
CSS 常见属性使用
CSS 常见属性使用

### `border` 和 `outline` 区别

`outline`轮廓不占据空间，绘制于元素内容周围。
根据规范，轮廓通常是矩形，但也可以是非矩形的

```css
div {
    outline:3px solid red;  /* 查看网页布局的时候很方便 */
}
```

![outline 和 border](/img/css/css_01/outline.png "outline 和 border")

###  `display`属性值 

```css
/* display: block; */   /* 浏览器默认样式 */
/* display: inline; */  /* 设置为行内元素 */
/* display: none; */   /* 隐藏元素不占空间 */
/* display: inline-block; */  /* 可以和行内元素在同一行, 可以设置宽度和高度*/
```

![display](/img/css/css_01/display.png "display")

###  `min-width` 和` max-width` 属性值 

```css
/* width: 100px;*/
/* min-width: 800px; */  /* 内容宽度小于盒子宽度800的时候出现滚动条 */
/* max-width: 100px; */  /*  内容在宽度大于盒子宽度100的时候换行 */
```

![min-width 和 max-width](/img/css/css_01/width.png "min-width 和 max-width")

### `border`属性

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

###  `box-sizing` 属性

```
属性值: box-sizing: border-box  /  content-box [默认值 不盒子是否包括边框 ]

content-box
元素实际占用宽度= 内容的宽度wdith
元素实际占用高度= 内容的宽度height

border-box
元素实际占用宽度= border + padding + 内容的宽度width
元素实际占用高度= border + padding + 内容的高度height

```

### 水平居中

[ text-align:center | marigin: 0,auto ] 2个属性使用
垂直方向的时候 margin 不能实现居中

```html
text-align:center 可以居中的元素
01) 普通文本
02) 行内元素
03) 图片:行内替换元素
04) 行内块级元素

marigin: 0,auto  可以居中的元素
05) 块级元素  [ marigin: 0,auto ]

demo:
<style>
    .box{
        height: 200px;
        background: #c0c0c0;
    }
    .inner{
        width: 200px;
        height: 100px;
        background: #eee8aa;
        margin: 0 auto; /*盒子水平居中了*/
        text-align: center; /*内容水平居中了*/
    }
</style>

<div class="box">
    <div class="inner">盒子水平居中了</div>
</div>
```

![text-align和margin](/img/css/css_01/text_align.png "text-align和margin")

### `background-image` 属性

01)  图片先后顺序,先写谁,谁在上面; 
02)  前面图片错误,会显示后面图片

```css
        background-image: url("./images/lizard.png"),  /*lizard 图片在上面*/
        url("./images/star.png");

        background-image: url("./images/star.png"),  /* star 图片在上面 */
        url("./images/lizard.png");
```

![background-image](/img/css/css_01/background_image.png "background-image")



























