---
title: 选择器 -css
categories: 
- css
tags:
- css
- css选择器
---
选择器 -css  
选择器 -css  
项目和实际中使用频率高的`后代选择器` 和  `子代选择器` 和 `伪元素`

### 后代选择器

```html
<!--
    后代选择器(以空格分隔)
    选择div 元素内的所有p 元素 中的 所有span 元素
-->
<style>
    div p span{
        color: #ff0000;
    }
</style>
<span>dafei01</span>
<div>
    <span>dafei02</span>
</div>
<div>
    <p>
        <span>dafei03 红色 </span>
        <strong>
            <span>dafei04 红色</span>
        </strong>
    </p>
</div>
<p>
    <span>dafei05</span>
</p>
```

### 子代选择器

```html
<!--
    子元素选择器(以大于号分隔）
    选择div 元素内的子代p 元素 中的子代span 元素 
    [ 必须是div p span 层级模式,中间不能有其他元素 ]
-->
<style>
    div > p > span {
        color: #ff0000;
    }
</style>
<span>dafei01</span>
<div>
    <span>dafei02</span>
</div>
<div>
    <p>
        <span>dafei03 红色 </span>
        <strong>
            <span>dafei04</span>
        </strong>
        <span>dafei06 红色 </span>
    </p>
</div>
<p>
    <span>dafei05</span>
</p>
```

### 伪元素 `::before` 和  `::after`

```html
其他不常用的伪元素 
::first-letter	选择指定元素的第一个单词	
::first-line	选择指定元素的第一行
::selection	选择指定元素中被用户选中的内容

01) --------------------------------------------------------------------------

<style>
    /* 
    所有的span标签前面添加foo_
    也可以是图片 content: url('./img.png')
    */
    /*这2种等效,习惯选择第一种,使用2个冒号, 
    其实就是为了  把伪元素和伪类区分开*/
    /*
      这里的content 属性不能省略      
    */
    span::before {  /* 习惯写2个冒号 */
        content: 'foo_';
    }
    /*span:before {*/
        /*content: 'foo_';*/
    /*}*/
</style>


<span>dafei01</span>
<div>
    <span>dafei02 红色</span>
</div>
<div>
    <p>
        <span>dafei03</span>
        <strong>
            <span>dafei04</span>
        </strong>
        <span>dafei06</span>
    </p>
</div>
<p>
    <span>dafei05</span>
</p>

02) ----------------------------------------------------------------------------
<style>
    /* 为元素可以看做行内元素 */
    span::before { 
        content: 'foo_';
        background-color: #ff0000;
        display: inline-block;
        width: 50px;
        height: 50px;
        margin-right: 30px;
    }
</style>
<span>dafei01</span>
<div>
    <span>dafei02 红色</span>
</div>
<p>
    <span>dafei05</span>
</p>
```

![css_before](/img/css/css_before.png "css_before")

### 相邻兄弟选择器

```html
<!--
    相邻兄弟选择器（以加号分隔）
    div p span 三个元素是相邻的兄弟[ 必须是第一个 ]
-->
<style>
    div + p +span{
        color: #ff0000;
    }
</style>

<span>dafei01</span>
<div>
    <span>dafei02</span>
</div>
<div>
    <p>
        <span>dafei03 </span>
        <strong>
            <span>dafei04</span>
        </strong>
        <span>dafei06 </span>
    </p>
</div>
<p>
    <span>dafei05</span>
</p>
<span>dafei07 红色</span>
<span>dafei08</span>
```

###  并集选择器

```html
<!--
    并集选择器(以逗号分隔)
-->
<style>
    div, p, span {
        color: #ff0000;
    }
</style>
<span>dafei01 红色</span>
<div>
    <span>dafei02 红色</span>
</div>
<div>
    <p>
        <span>dafei03 红色</span>
        <strong>
            <span>dafei04 红色</span>
        </strong>
        <span>dafei06 红色</span>
    </p>
</div>
<p>
    <span>dafei05 红色</span>
</p>
<h5>dafei07</h5>
```

### 交集选择器

```html
<!--
    交集选择器(标签和class构成)
-->
<style>
    /* 标签是div且class为class_foo */
    div.class_foo {
        color: #ff0000;
    }
</style>
<span class="class_foo">dafei01</span>
<div class="class_foo">
    <span>dafei02 红色</span>
</div>
<div>
    <p class="class_foo">
        <span class="class_foo">dafei03</span>
        <strong>
            <span class="class_foo">dafei04</span>
        </strong>
        <span>dafei06</span>
    </p>
</div>
<p class="class_foo">
    <span>dafei05</span>
</p>
```

### 伪类选择器 `nth-child`

```css
ul>li:nth-child(2) { /* 第二行 */
    background-color: yellowgreen;
}
ul>li:nth-child(even) {  /* 偶数 */
    background-color: yellowgreen;
}
ul>li:nth-child(odd) { /* 奇数 */
    background-color: yellowgreen;
}
ul>li:nth-child(2n+1) { /* 奇数 */
    background-color: yellowgreen;
}

<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
```

### 伪类选择器 `:not`

```css
h2:not([data-fei]){  /* 不含data-fei 属性 */
    color: yellowgreen;
}

<h2 data-fei="da">1111111</h2>
<h2>2222222222</h2>
<h2>333333333333</h2>
```































