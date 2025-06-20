---
title: -flex布局
date: 2015-03-04
categories: 
- Flex
tags:
- Flex
---
flex 布局
flex 布局

启用flex:   `diplay:flex | inline-flex  (块级 | 行内)`

容器属性6个

```css
flex-direction
justify-content, align-items, 
align-content, flex-wrap, flex-flow
```

项目属6个

```css
flex   
flex-grow, flex-shrink, flex-basis
order,  align-self
```

常用 一共4个属性`flex-direction`, `justify-content`, `align-items`, `flex`

<!-- more -->

### 容器属性6个

```css
diplay:flex | inline-flex  (块级 | 行内)

// 容器属性6个
flex-direction  (主轴方向)
justify-content (主轴对齐方式)
align-items     (交叉轴对齐方式)
align-content   (多根轴线在交叉轴上对齐方式)(属性类似align-items)
flex-wrap       (轴线上换行)
flex-flow       (是flex-direction 和 flex-wrap 的简写)

// 其他属性:间隙
gap: 20px 5px;
```

#### 1-01)`flex-direction` 属性决定主轴的方向

```css
/* flex-direction:决定主轴的方向 */
/* row 主轴从左到右(默认) */
/* row-reverse 主轴从右到左 */
/* column 交叉轴从上到下 */
/* column-reverse 交叉轴从下到上 */       
.container{
	 flex-direction: row;
}
```

#### 1-02) `justify-content`  属性决定主轴对齐方式

```css
/* justify-content 决定在主轴对齐方式 */
/* flex-start 左对齐(默认)*/
/* center 居中*/
/* flex-end 右对齐*/
/* space-between 两端对齐,item之间的间隔都相等 */
/* space-around 每个item两侧间隔相等,是 main start 和 main end 距离的2倍*/
/* space-evenly 每个item两侧间隔相等, 和 main start 和 main end 距离也相等 */
.container{ 
    justify-content: flex-start;
}
```

#### 1-03) `align-items`   属性决定在交叉轴对齐方式

```css
/* align-items 决定在交叉轴对齐方式*/
/* flex-start 左对齐 */
/* center 居中 */
/* flex-end 右对齐 */
/* baseline 基于item第一行文字的基线对齐 */
/* stretch 如果 item没有设置高度,会自动拉伸占满flex container (默认) */
.container{ 
	align-items: stretch ;
}
```

#### 1-04) `align-content` 多根轴线在交叉轴上对齐方式

```css
/* 可以消除 flex-wrap 换行后的间隙 */
/* 属性类似align-items */


/* align-items 决定在交叉轴对齐方式*/
/* flex-start 左对齐 */
/* center 居中 */
/* flex-end 右对齐 */
/* baseline 基于item第一行文字的基线对齐 */
/* stretch 如果 item没有设置高度,会自动拉伸占满flex container (默认) */
.container{ 
	align-content: stretch ;
}
```

#### 1-05) `flex-wrap`  一条轴线方不下,轴线上换行

```css
/* flex-wrap 一条轴线方不下,轴线上换行*/
/* nowrap 不换行(默认) */
/* wrap 主轴上换行,第一行在上方*/
/* wrap-reverse 主轴上换行,第一行在下方*/
.container{ 
	flex-wrap: nowrap;
}		
```

#### 1-06) `flex-flow` 是 flex-direction 和 flex-wrap 的简写

```css
/* flex-flow 是 flex-direction 和 flex-wrap 的简写*/
/* 默认值 row nowrap */
.container{ 
	flex-flow: row nowrap;
}
```



![flex](/img/css/flex/flex.png "flex")
![flexbox](/img/css/flex/flexbox.png "flexbox")

### 项目属性6个

```css
flex    (属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。)
flex-grow      (项目的放大比例)
flex-shrink    (项目的缩小比例)
flex-basis
order          (项目的排列顺序)
align-self
```



### flex的三个属性

```css
flex:0 1 auto;
flex: flex-grow flex-shrink flex-basic


flex: 0 1 auto; //默认值: 不放大,可收缩, 初始宽度
flex: 1 1 auto; //项目自动放大或收缩适应容器
flex: 0 0 100px; //按计算大小填充到容器中
```

[`flex`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 属性是 [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)、[`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink) 和 [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis) 属性的简写，描述弹性项目的整体的伸缩性zi

###  自动分配空间,不超长

`flex: 1;width: 0;`

```html
<style>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 300px;
        background: #eee8aa;
        padding: 4px;
        border-radius: 4px;
        border: 2px solid #808080;
    }

    .right {
        flex-shrink: 0;
        margin-left: 8px;
    }

    .left {
        display: flex;
        flex: 1;
        /*flex-basis: 0;*/
        /*flex-grow: 1;*/
        width: 0;
    }

    .start,.end {
        background: #ff6b81;
    }

    .center {
        margin: 0 8px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
<div class="wrapper">
    <div class="left">
        <div class="start">左侧</div>
        <div class="center">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        <div class="end">标题</div>
    </div>
    <div class="right">其他</div>
</div>
```

### 间隙gap

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<style>
  #flexbox {
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    gap: 20px 5px;
    outline: 1px solid #ff6b81;
  }

  #flexbox > div {
    border: 1px solid green;
    background-color: lime;
    flex: 1 1 auto;
    width: 100px;
    height: 50px;
  }
</style>

```



### 底部

1. [Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
2. [使用 CSS 弹性盒子](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/ "使用 CSS 弹性盒子")
3. [对齐弹性容器中的弹性项目](https://developer.mozilla.org/ca/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container "对齐弹性容器中的弹性项目")
4. [flex](https://philipwalton.github.io/solved-by-flexbox/ "flex")
5. [间隙 gap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap)



























