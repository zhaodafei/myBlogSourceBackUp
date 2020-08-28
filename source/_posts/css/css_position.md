---
title: CSS 属性 -position
categories: 
- CSS
- position
tags:
- static
- relative
- absolute
- fixed
---
`CSS` 定位属性 `position`,四个定位类型 `static/relative/absolute/fixed`,
`top,right,bottom,left `属性则决定了该元素的最终位置
`position`默认值`static`,此时`top,right,bottom,left `和`z-index`无效

`static`  静态定位[ 默认值 ]
`relative`  相对定位[ 相对于元素自己原来的位置 ]
`absolute`  绝对定位[ 找到自己的父元素非position:static开始定位 ]
`fixed`  固定定位[ 直接相对于浏览器左上角(视口)开始定位]

`absolute` 总则
a)定位参照对象的`宽度`=left+right+margin-left+margin-right+绝对定位元素的实际占用宽度
b)定位参照对象的`高度`=top+bottom+margin-top+margin-bottom+绝对定位元素的实际占用高度
c)让绝对定位元素的`宽高`和定位参照对象一样,可以给绝对定位元素设置以下属性
d)让绝对定位元素在定位对象中`居中`显示,可以给绝对定位元素这是以下属性



### 相对定位 `relative`

不会脱离文档流,还会占用原来位置,Two这个div原来位置还在

```html
<style>
    .box {
        display: inline-block;
        width: 100px;
        height: 100px;
        background: #c0c0c0;
        color: white;
    }

    #two {
        position: relative;
        top: 20px;
        left: 20px;
        background: #eee8aa;
    }
</style>

<div class="box" id="one">One</div>
<div class="box" id="two">Two</div>
<div class="box" id="three">Three</div>
<div class="box" id="four">Four</div>
```

![relative 相对定位](/img/css/position/relative.png "relative 相对定位")

### 绝对定位`absolute`

常使用方法:<font style="color:red">[ 子绝父相 ] </font>: 父元素用相对定位`relative`,子元素用绝对定位`absolute`

#### 01) 脱离文档流
不会占用原来位置,Three这个div不再占用原来位置

```html
<style>
    .box {
        display: inline-block;
        width: 100px;
        height: 100px;
        background: #c0c0c0;
        color: white;
    }

    #three {
        position: absolute;
        top: 20px;
        left: 20px;
        background: #eee8aa;
    }
</style>

<div class="box" id="one">One</div>
<div class="box" id="two">Two</div>
<div class="box" id="three">Three</div>
<div class="box" id="four">Four</div>
```

![absolute 绝对定位](/img/css/position/absolute.png "absolute 绝对定位")

#### 02) 脱离文档流

定位参照对象是最近相邻的祖先元素
如果找不到这样的祖先元素,参照对象是视口
定位元素`position`值不为`static`的元素,也就是position值为`relative/absolute/fixed`

demo: 注意观察 position: relative; 这个值所在的父元素

```html
<style>
    #one {
        /*position: relative;*/
        width: 400px;
        height: 400px;
        background: #c0c0c0;
    }

    #two {
        position: relative;
        width: 300px;
        height: 300px;
        background: #eee8aa;
    }

    #three {
        /*position: relative;*/
        width: 200px;
        height: 200px;
        background: #dda0dd;
    }

    #four {
        position: absolute;
        right: 50px;
        width: 100px;
        height: 100px;
        background: #ff6b81;
    }
</style>


<div class="box" id="one">
    <div class="box" id="two">
        <div class="box" id="three">
            <div class="box" id="four">我要找祖元素,position值为relative/absolute/fixed</div>
        </div>
    </div>
</div>
```

![absolute 绝对定位](/img/css/position/absolute_02.png "absolute 绝对定位")

#### 04) 定位参照对象的`宽度`和`高度`和`居中`

a)定位参照对象的`宽度`=left+right+margin-left+margin-right+绝对定位元素的实际占用宽度

```css
left: 0;right: 0;height: 50px;
```

![width 绝对定位](/img/css/position/width.png "width 绝对定位")

b)定位参照对象的`高度`=top+bottom+margin-top+margin-bottom+绝对定位元素的实际占用高度

```css
top: 0;bottom: 0;width: 50px;
```

![height 绝对定位](/img/css/position/height.png "height 绝对定位")

c)让绝对定位元素的`宽高`和定位参照对象一样,可以给绝对定位元素设置以下属性

```css
left:0;right:0;top:0;bottom:0;margin:0;
```

![width和height 绝对定位](/img/css/position/width_height.png "width和height 绝对定位")

d)让绝对定位元素在定位对象中`居中`显示,可以给绝对定位元素这是以下属性

```css
top: 0;bottom: 0;left: 0;right: 0;margin: auto auto;
```

![center 绝对定位](/img/css/position/center.png "center 绝对定位")

##### a)宽度

```html
<style>
    #two {
        position: relative;
        width: 150px;
        height: 150px;
        background: #eee8aa;
    }

    #four {
        position: absolute;
        /*width: 50px;*/ /*注意这里*/
        height: 50px;left: 0;right: 0;
        background: #ff6b81;
    }
</style>

<div class="box" id="two">
    <div class="box" id="four"></div>
</div>
```

##### b)高度

```html
<style>
    #two {
        position: relative;
        width: 150px;
        height: 150px;
        background: #eee8aa;
    }

    #four {
        position: absolute;
        /*height: 50px;*/ /*注意这里*/
        width: 50px;top: 0;bottom: 0;
        background: #ff6b81;
    }
</style>

<div class="box" id="two">
    <div class="box" id="four"></div>
</div>
```



##### c)宽高,注意这里`four`中,并没有设置`width`和`height`

````html
<style>
    #two {
        position: relative;
        width: 150px;
        height: 150px;
        background: #eee8aa;
    }

    #four {
        position: absolute;
        /*width: 50px;*/ /*注意这里*/
        /*height: 50px;*/ /*注意这里*/
        top: 0;bottom: 0;left: 0;right: 0;margin: 0;
        background: #ff6b81;
    }
</style>

<div class="box" id="two">
    <div class="box" id="four"></div>
</div>
````



##### d) 居中

````html
<style>
    #two {
        position: relative;
        width: 150px;
        height: 150px;
        background: #eee8aa;
    }

    #four {
        position: absolute;
        width: 50px;
        height: 50px;
        top: 0;bottom: 0;left: 0;right: 0;margin: auto auto;
        background: #ff6b81;
    }
</style>

<div class="box" id="two">
    <div class="box" id="four"></div>
</div>
````

### 固定定位 `fixed`

定位参照对象是视口(浏览器我左上角)

### 其他

`绝对定位`常用在层叠样式的布局和小功能调整

### 经典demo

#### 一张大图实现居中`相对定位 relative`

比较大的一张图片,实现垂直居中和水平居中,浏览器窗口随意怎么变换,一直显示图片中间位置

```html
<style>
    .box {
        background-color: #c0c0c0;
        height: 600px;
        overflow: hidden;
    }

    img {
        position: relative;
        /* 垂直居中*/
        /*top: 50%;*/
        /*transform: translate(0, -50%);*/
        
        /* 水平居中*/
        /*left: 50%;*/
        /*transform: translate(-50%,0);*/
        
        /* 水平居中+垂直居中*/
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
<h3>比较大的一张图片,实现垂直居中和水平居中</h3>
<div class="box">
    <!--<img src="./images/img_center_01.png" alt="这是一张大图">-->
    <img src="./images/star.png" alt="这是一张小图">
</div>
```



参考地址: 
[position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position "position")





























