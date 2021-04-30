---
title: BFC
categories: 
- CSS
tags:
- CSS
- BFC
---
**块格式化上下文（Block Formatting Context，BFC）**
**块格式化上下文（Block Formatting Context，BFC）**
**块格式化上下文（Block Formatting Context，BFC）**



### 什么是`BFC`
> 浮动元素和绝对定位元素,非块级盒子的块级容器(例如 `inline-blocks`, `table-cells`, 和 `table-captions`),以及`overflow`值不为`visiable`的块级盒子,都会为他们的内容创建新的BFC(块级格式上下文),

> 在`BFC`中,盒子从顶端开始垂直地一个接一个地排列,两个盒子之间的垂直的间隙是由他们的`margin`值所决定的,在一个`BFC`中,两个相邻的块级盒子的垂直外边距会产生折叠,

> 在`BFC`中,每一个盒子的左外边缘,会触碰到容器的左边缘(对于从右到左的格式来说,则触碰到右边缘),

### 通俗理解
> 浮动元素会创建 `BFC`,则浮动元素内部子元素主要受该浮动元素影响,所以两个浮动元素之间是互不影响的

> `BFC` 是一个独立的布局环境,可以理解为一个容器,在这个容器中按照一定规则进行物品摆放,并且不会影响其它环境中的物品

> 如果一个元素符合触发 `BFC` 的条件,则 `BFC` 中的元素布局不受外部影响

### `BFC`特性
1. `BFC` 是一个独立的容器,容器内子元素不会影响容器外的元素反之亦如此
2. 盒子从顶端开始垂直地一个接一个地排列,盒子之间垂直的间距是由 `margin` 决定的
3. 在同一个 `BFC` 中,两个相邻的块级盒子的垂直外边距会发生重叠
4. `BFC` 区域不会和 `float box` 发生重叠
5. `BFC` 能够识别并包含浮动元素,当计算其区域的高度时,浮动元素也可以参与计算了


### 创建`BFC`
1. ** 根元素（<html>）
2. ** 浮动元素（元素的 float 不是 none）
3. ** 绝对定位元素（元素的 position 为 absolute 或 fixed）
4. ** `overflow` 计算值(Computed)不为 visible 的块元素
5. ** 行内块元素（元素的 display 为 inline-block）
6. ** 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
7. 表格单元格（元素的 display 为 table-cell，HTML表格单元格默认为该值）
8. 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）


[MDN BFC ](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)  这里介绍比较详细



### 了解创建新`BFC`的效果

**让浮动内容和周围的内容等高**

```html
<style>
    section {
        height:150px;
    }
    .box {
        border: 5px solid steelblue;
        background-color: aliceblue;
        overflow: auto; /* 创建一个BFC */
    }
    .float {
        width: 200px;
        height: 100px;
        border:1px solid black;
        padding: 10px;
        background-color: rgba(255, 255, 255, .5);
        float: left;  /* 创建一个BFC */
    }

</style>

<section>
    <div class="box">
        <div class="float">I am a floated box! 让浮动内容和周围的内容等高</div>
        <p>I am content inside the <code>overflow:auto</code> container.</p>
    </div>
</section>
```

**效果展示**
<section style="height:150px;"><div class="box" style="overflow:auto;background-color: aliceblue;border: 5px solid steelblue;"><div class="float" style=" float: left;width: 200px;height: 100px;background-color: rgba(255, 255, 255, .5);border:1px solid black;padding: 10px;">I am a floated box! 让浮动内容和周围的内容等高</div><p>I am content inside the <code>overflow:auto</code> container.</p></div></section>

<div style="clear: both;"></div>

**创建新的`BFC`避免两个相邻`<div>`之间的外边距`margin`合并问题**

```html
<style>
    .blue, .red-inner {
        height: 50px;
        background-color: #c0c0c0;
        margin: 10px 0;
    }

    .red-outer {
        overflow: hidden; /* 创建一个新的BFC */
        background-color: #ff6b81;
    }

</style>

<div class="blue"></div>
<div class="red-outer">
    <div class="red-inner">red inner</div>
</div>
```
**展示效果**

<div class="blue" style="height: 50px;background-color: #c0c0c0;margin: 10px 0;"></div><div class="red-outer" style="overflow: hidden;background-color: #ff6b81;"><div class="red-inner" style="height: 50px;background-color: #c0c0c0;margin: 10px 0;">red inner</div></div>

<br/>
### 其他

[W3 BFC](https://www.w3.org/TR/CSS2/visuren.html#block-formatting)
[MDN BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)




























