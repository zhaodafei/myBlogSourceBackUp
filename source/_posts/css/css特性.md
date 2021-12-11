---
title: -CSS 特性
date: 2015-03-04
categories: 
- CSS
tags:
- CSS特性
---
css特性
css特性
css特性

<!-- more -->

### 继承

```html
<style>
    div.foo{
        color: #ff0000;
    }
</style>
<h3>我是标题</h3>
<div class="foo">
    <span>dafei</span>
</div>

官网看是否可以继承:
https://developer.mozilla.org/zh-CN/docs/Web
https://developer.mozilla.org/zh-CN/docs/Web
demo:
搜索: 
font-size  然后找有 The font-size CSS property 的文章进去看:是否是继承属性	yes

color 然后找有  The color CSS property 的文章进去进去看: 是否是继承属性	yes 
```

![css 继承](/img/css/css_inherit.png "css继承")

![css 继承](/img/css/css_inherit_02.png "css继承")

 [MDN](https://developer.mozilla.org/zh-CN/docs/Web "MDN")

#### 继承02

```html
    <style>
        div.foo{
            color: #ff0000;
            background-color: #00c3ff;
            width: 40px;
        }
        
        /* 
        width  本身不支持继承
        想让width继承方法2中
        */
        img{            
            /* width: inherit; */  /* 第一种方案 */
            width: 100%; /* 第二种方案 */  /* 相对于包含块的百分百*/
        }
    </style>
    <h3>我是标题</h3>
    <div class="foo">
        <span>dafei</span>
        <img src="./avatar.png" alt="">
    </div>

参见文档:
https://developer.mozilla.org/zh-CN/docs/Web/CSS/width
中 
Percentages	refer to the width of the containing block
```

 [MDN width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width "MDN width")





### 其他_浏览器代理样式

有些HTML元素本身有样式比如 h1,h3,strong,i 

```html
    <h3>我是标题</h3>
    <strong>foo</strong>
    <i>dafei</i>
```

![chrome代理样式](/img/css/css_chrome.png "chrome代理样式")

![火狐代理样式](/img/css/css_firefox.png "火狐代理样式")



### `CSS` 权重

```html
权重从高到低
!important
内联样式[ 行内样式 ]
id选择器
类选择器,属性选择器,伪类
元素选择器,伪元素

```

### 行内替换元素无效属性

以下属性对行内非替换元素不起作用

`width` `height` `margin-top` `margin-bottom`

一下属性对行内非替换元素的效果比较特殊

`padding-top`  `padding-bottom` 上下方向的`border`

























