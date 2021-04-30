---
title: div 居中
categories: 
- CSS
tags:
- CSS
---
## 水平居中

### *margin

```html
<style>
    .box {
        width: 200px;
        height: 200px;
        background-color: #ff6b81;
        margin: 0 auto;  /*水平居中*/
    }
</style>
<div class="box"></div>
```

### *flex

```html
<style>
    .container {
        display: flex;
        justify-content: center; /*水平居中*/
    }
    .box {
        width: 200px;
        height: 200px;
        background-color: #ff6b81;
    }
</style>
<div class="container">
    <div class="box"></div>
</div>
```

### 内联块元素  inline-block

```html
<style>
    .container {
        height: 600px;
        width: 400px;
        background-color: #c0c0c0;
        text-align: center; /* 水平居中 */
    }
    .box {
        width: 200px;
        height: 200px;
        background-color: #ff6b81;
        display: inline-block; /* 内联块元素 */
    }
</style>
<div class="container">
    <div class="box"></div>
</div>
```



## 水平+垂直居中

### 内联块元素 inline-block

这种方法,需要有2个内联元素,其中一个作为参照

demo-01:  `text-align:center` 和 `vertical-align:middle`  `:after`

```html
<style>
    .container{
        width: 600px;
        height: 600px;
        background-color: #c0c0c0;
        text-align: center;  /* 水平居中 */
    }
    .container:after{
        content: '';
        height: 100%;
        width: 0;
        display: inline-block;  /* 内联元素 */
        vertical-align: middle;
    }
    .box{
        width: 200px;
        height: 200px;
        background-color: #ff6b81;
        display: inline-block;  /* 内联元素 */
        vertical-align: middle;
    }
</style>
<div class="container">
    <div class="box"></div>
</div>
```

demo-01-a:  证明一下(vertical-align)垂直居中,需要参考对象, 实际开中,正常会写一个元素

```html
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



demo-02:  绝对定位 `absolute`, `text-align:center` 和 `vertical-align:middle`  `:after`

```html
<style>
    .container {
        background: #c0c0c0;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }
    .container::after {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
    .box {
        width: 200px;
        height: 200px;
        background-color: #ff6b81;
        display: inline-block;
        vertical-align: middle;
    }
</style>
<div class="container">
    <div class="box"></div>
</div>
```

### *flex

`flex`属性 `justify-content: center;` 和 ` align-items: center;`

```html
<style>
    .container {
        width: 600px;
        height: 600px;
        background-color: #c0c0c0;
        display: flex;
        justify-content: center; /*水平居中*/
        align-items: center;  /*垂直居中*/
    }
    .box {
        width: 200px;
        height: 200px;
        background-color: #ff6b81;
    }
</style>
<div class="container">
    <div class="box"></div>
</div>
```

### *flex + margin

`flex` 和 `margin: auto;`

```html
<style>
    .container {
        background: #c0c0c0;
        height: 400px;
        display: flex;
    }

    .box {
        width: 100px;
        height: 100px;
        background: #ff6b81;
        margin: auto;
    }

</style>
<div class="container">
    <div class="box"></div>
</div>
```

### *绝对定位 + margin

绝对定位 `absolute`, 加  `margin: auto;`

```html
<style>
    .box {
        width: 200px;
        height: 200px;
        background-color: #ff6b81;
        position: absolute; /*绝对定位*/
        margin: auto; /*自动*/
        top: 0;  /* 四个值保持一致 */
        left: 0;
        bottom: 0;
        right: 0;    
    }
</style>
<div class="box"></div>
```



### *绝对定位 + transform 一半

`transform`  和 绝对定位   ( 和下面margin一半同理 )

```html
<style>
    .container {     
        width: 200px;
        height: 200px;
        background-color: #c0c0c0;
        position: absolute;  /*绝对定位 */
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%); /*移动 一半*/ 
        /*transform: translate(-100px,-100px); !*移动 一半*!*/
    }
   
</style>
<div class="container"></div>
```

### *绝对定位 + margin  一半

`margin` 一半 和 绝对定位 ( 和上面transform 同理)

```html
<style>
   .container {
       width: 200px;
       height: 200px;
       background-color: #ff6b81;
       position: absolute; /*绝对定位 */
       top: 50%;
       left: 50%;
       margin: -100px -100px;  /*外边距为自身宽高的 一半*/  
   }
</style>
<div class="container"></div>
```

### *绝对定位 + calc 一半

```html
<style>
    .container {
        width: 200px;
        height: 200px;
        background-color: #ff6b81;
        position: absolute;
        top: calc(50% - 100px);
        left: calc(50% - 100px);
    }

</style>
<div class="container"></div>
```

## 总结

1. 可以利用 `margin:0 auto` 来实现元素的水平居中
2. 利用绝对定位，设置四个方向的值都为 `0`，并将 `margin` 设置为 `auto`，由于宽高固定， 因此对应方向实现平分，可以实现水 平和垂直方向上的居中。
3. 利用绝对定位，先将元素的左上角通过 `top:50%`和 `left:50%`定位到页面的中心，然后再 通过 `margin`负值来调整元素 的中心点到页面的中心。
4. 利用绝对定位，先将元素的左上角通过 `top:50%`和 `left:50%`定位到页面的中心，然后再 通过 `translate` 来调整元素 的中心点到页面的中心。
5. 使用 `flex` 布局，通过 `align-items:center` 和 `justify-content:center` 设置容器的垂直和水平 方向上为居中对 齐，然后它的子元素也可以实现垂直和水平的居中

**对于宽高不定的元素，上面的后面两种方法，可以实现元素的垂直和水平的居中。**

























