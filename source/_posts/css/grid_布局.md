---
title: 标题demo模板
date: 2015-07-04
categories: 
- Grid
tags:
- Grid
---
`Grid` 布局
`Grid` 布局
`Grid` 布局

容器属性

```css
display: grid;

#行列
grid-template-columns 属性定义每一列的列宽
grid-template-rows 属性定义每一行的行高

#行列间距
grid-row-gap 属性设置行与行的间隔（行间距）
grid-column-gap 属性属性设置列与列的间隔（列间距）
grid-gap 属性是grid-column-gap和grid-row-gap的合并简写形式

#区域
grid-template-areas 属性用于定义区域

#网格顺序
grid-auto-flow 属性决定:先行后列 还是 先列后行

#单元格顺序
justify-items 属性设置单元格内容的水平位置（左中右）
align-items 属性设置单元格内容的垂直位置（上中下）
place-items 属性是align-items属性和justify-items属性的合并简写形式。

#内容区域在容器顺序
justify-content 属性是整个内容区域在容器里面的水平位置（左中右）
align-content 属性是整个内容区域的垂直位置（上中下）
place-content 属性是align-content属性和justify-content属性的合并简写形式

#多余的网格
grid-auto-columns 属性用来设置，浏览器自动创建的多余网格的列宽
grid-auto-rows 属性用来设置，浏览器自动创建的多余网格的行高

#简写属性
grid-template 属性，
grid 属性
简写属性,不方便阅读,不在详细介绍

/**
    grid-template属性是
    grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。

    grid属性是
    grid-template-rows、grid-template-columns、grid-template-areas、
    grid-auto-rows、grid-auto-columns、grid-auto-flow
    这六个属性的合并简写形式。
    从易读易写的角度考虑，还是建议不要合并属性，所以这里就不详细介绍这两个属性了。
*/
```

项目属性

```css
#项目的位置(四个边框)
grid-column-start 属性：左边框所在的垂直网格线
grid-column-end 属性：右边框所在的垂直网格线
grid-row-start 属性：上边框所在的水平网格线
grid-row-end 属性：下边框所在的水平网格线

#xxx
grid-column 属性是grid-column-start和grid-column-end的合并简写形式
grid-row 属性是grid-row-start属性和grid-row-end的合并简写形式。

#项目放在哪一个区域
grid-area 属性指定项目放在哪一个区域

#单元格顺序
justify-self 属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。
align-self 属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。
place-self 属性是align-self属性和justify-self属性的合并简写形式。
```



<!-- more -->

Grid 布局与Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是**一维布局**。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是**二维布局**。Grid 布局远比 Flex 布局强大。

### 容器属性

#### 列行

```css
/* 三行三列的网格，列宽和行高都是100px;  参见demo1-1 */
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

```css
/* 使用百分比 */
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}

/* 使用 repeat() 函数,简化重复值 */
/* repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值 */
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```

```css
/** 有时，单元格的大小是固定的，但是容器的大小不确定。
如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。 */

/* 使用auto-fill关键字表示自动填充 */
/* 表示每列宽度100px，然后自动填充，直到容器不能放置更多的列; 参见demo1-2 */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}


/* auto-fit */
/* auto-fill会用空格子填满剩余宽度，auto-fit则会尽量扩大单元格的宽度 */
```

```css
/* 使用 fr 表示比例关系*/

/* 1fr和2fr，就表示后者是前者的两倍; 参见demo1-3 */
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}


/* fr可以与绝对长度的单位结合使用 */
/* 第一列的宽度为150像素，第二列的宽度是第三列的一半。 */
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```

```css

/* minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值 */
/* 上面代码中，minmax(100px, 1fr)表示列宽不小于100px，不大于1fr */
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```

```css

/* auto关键字表示由浏览器自己决定长度。 */
/* 上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，
除非单元格内容设置了min-width，且这个值大于最大宽度。*/
grid-template-columns: 100px auto 100px;
```

```css
/* 布局实例 */
grid-template-columns 属性对于网页布局非常有用。两栏式布局只需要一行代码。

/* 上面代码将左边栏设为70%，右边栏设为30%。 */
.wrapper {
  display: grid;
  grid-template-columns: 70% 30%;
}


/* 传统的十二网格布局，写起来也很容易。 */
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

```

#### 列行间距

```css
/* grid-row-gap属性设置行与行的间隔（行间距），
   grid-column-gap属性设置列与列的间隔（列间距） 
  
   参见demo2-1
*/
.container {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
```

```css
/* grid-gap属性是grid-column-gap和grid-row-gap的合并简写形式，语法如下 */
grid-gap: <grid-row-gap> <grid-column-gap>;

.container {
  grid-gap: 20px 20px;
}

/* 如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值 */

/* 
    根据最新标准，上面三个属性名的grid-前缀已经删除，
    grid-column-gap 和 grid-row-gap 写成 column-gap 和 row-gap，
    grid-gap 写成 gap
*/
```

#### 区域

```css
/* 上面代码先划分出9个单元格，然后将其定名为a到i的九个区域，分别对应这九个单元格 */
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

```css
/* 如果某些区域不需要利用，则使用"点"（.）表示。 */
/* 上面代码中，中间一列为点，表示没有用到该单元格，或者该单元格不属于任何区域 */
grid-template-areas: 'a . c'
                     'd . f'
                     'g . i';
```

#### 网格顺序

```css
/* 划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。
默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行，即下图数字的顺序 */

/* 这个顺序由grid-auto-flow属性决定，
默认值是row，即"先行后列"。也可以将它设成column，变成"先列后行"。 */

grid-auto-flow: column;


/* grid-auto-flow属性除了设置成row和column，还可以设成row dense和column dense。
这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置 */
```

#### 单元格顺序

```css
 /* justify-items属性设置单元格内容的水平位置（左中右），
    align-items属性设置单元格内容的垂直位置（上中下）。 */

.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}

#取值如下:
start：对齐单元格的起始边缘。
end：对齐单元格的结束边缘。
center：单元格内部居中。
stretch：拉伸，占满单元格的整个宽度（默认值）。
```

```css
/* place-items属性是align-items属性和justify-items属性的合并简写形式。
place-items: <align-items> <justify-items>;  */


place-items: start end;
```

#### 内容区域在容器顺序

```css
/* justify-content属性是整个内容区域在容器里面的水平位置（左中右），
   align-content属性是整个内容区域的垂直位置（上中下）。*/
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}

#取值如下:
start - 对齐容器的起始边框。
end - 对齐容器的结束边框。
center - 容器内部居中。
stretch - 项目大小没有指定时，拉伸占据整个网格容器。
space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。
space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。
```

```css
/* place-content属性是align-content属性和justify-content属性的合并简写形式
place-content: <align-content> <justify-content> */

place-content: space-around space-evenly;
```

#### 多余的网格

```css
/* 有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。

grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。
*/

#参见demo3-1
```

### 项目属性

#### 项目的位置(四个边框)

```css
<style>
  /* 使用上面公用样式 */
  #container{
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
  }

  .item {
    font-size: 4em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }

  .item-1 {
    background-color: #ef342a;
    grid-column-start: 2;
    grid-column-end: 4;
  }

</style>

<h3>1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线</h3>

<div id="container">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
  <div class="item item-4">4</div>
  <div class="item item-5">5</div>
  <div class="item item-6">6</div>
  <div class="item item-7">7</div>
  <div class="item item-8">8</div>
  <div class="item item-9">9</div>
</div>
```

#### 项目放在哪一个区域

```css
/* grid-area属性指定项目放在哪一个区域。 */
.item-1 {
  grid-area: e; /* 1号项目位于e区域，效果如下图; 参见demo4-1 */
}
```



### 本章实例demo

公用样式

```css
<style>
  .item-1 {background-color: #ef342a;}  
  .item-2 {background-color: #f68f26;}  
  .item-3 {background-color: #4ba946;}  
  .item-4 {background-color: #0376c2;}  
  .item-5 {background-color: #c077af;}  
  .item-6 {background-color: #f8d29d;}  
  .item-7 {background-color: #b5a87f;}  
  .item-8 {background-color: #d0e4a9;}  
  .item-9 {background-color: #4dc7ec;}
</style>
```



#### demo1-1

```html
<style>
  /* 使用上面公用样式 */
  #container{
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
  }

  .item {
    font-size: 4em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }
</style>

<h3>三行三列的网格，列宽和行高都是100px</h3>

<div id="container">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
  <div class="item item-4">4</div>
  <div class="item item-5">5</div>
  <div class="item item-6">6</div>
  <div class="item item-7">7</div>
  <div class="item item-8">8</div>
  <div class="item item-9">9</div>
</div>

```

#### demo1-2

```html
<style>
  /* 使用上面公用样式 */
  #container{
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  .item {
    font-size: 4em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }
</style>

<h3>每列宽度100px，然后自动填充，直到容器不能放置更多的列</h3>

<div id="container">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
  <div class="item item-4">4</div>
  <div class="item item-5">5</div>
  <div class="item item-6">6</div>
  <div class="item item-7">7</div>
  <div class="item item-8">8</div>
  <div class="item item-9">9</div>
</div>

```

#### demo1-3

```html
<style>
  /* 使用上面公用样式 */
  #container{
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .item {
    font-size: 4em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }
</style>

<h3>就表示后者是前者的两倍</h3>

<div id="container">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
  <div class="item item-4">4</div>
  <div class="item item-5">5</div>
  <div class="item item-6">6</div>
  <div class="item item-7">7</div>
  <div class="item item-8">8</div>
  <div class="item item-9">9</div>
</div>
```

#### demo2-1

```html
<style>
  /* 使用上面公用样式 */
  #container{
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }

  .item {
    font-size: 4em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }
</style>

<h3>行间距 和 列间距</h3>

<div id="container">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
  <div class="item item-4">4</div>
  <div class="item item-5">5</div>
  <div class="item item-6">6</div>
  <div class="item item-7">7</div>
  <div class="item item-8">8</div>
  <div class="item item-9">9</div>
</div>
```

#### demo3-1

```html
<style>
  /* 使用上面公用样式 */
  #container{
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-auto-rows: 50px; /*指定新增的行高统一为50px(原始的行高为100px)*/
  }

  .item {
    font-size: 2em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }

  .item-8 {
    background-color: #d0e4a9;
    grid-row-start: 4;
    grid-column-start: 2;
  }

  .item-9 {
    background-color: #4dc7ec;
    grid-row-start: 5;
    grid-column-start: 3;
  }
</style>

<h3>划分好的网格是3行 x 3列，但是，8号项目指定在第4行，9号项目指定在第5行</h3>

<div id="container">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
  <div class="item item-4">4</div>
  <div class="item item-5">5</div>
  <div class="item item-6">6</div>
  <div class="item item-7">7</div>
  <div class="item item-8">8</div>
  <div class="item item-9">9</div>
</div>
```

#### demo4-1

```html
<style>
  /* 使用上面公用样式 */
  #container{
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-template-areas: 'a b c'
                     'd e f'
                     'g h i';
  }

  .item {
    font-size: 4em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }

  .item-1 {
    grid-area: e; /* 这里指定: 1号项目位于e区域 */
  }

</style>

<h3>项目放在哪一个区域</h3>

<div id="container">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
  <div class="item item-4">4</div>
  <div class="item item-5">5</div>
  <div class="item item-6">6</div>
  <div class="item item-7">7</div>
  <div class="item item-8">8</div>
  <div class="item item-9">9</div>
</div>

```

### 日历demo

日历: 显示的效果为: 四周12月份,中间显示信息内容

```html

<div id="container">
  <div class="item i-01">1</div>
  <div class="item i-02">2</div>
  <div class="item i-03">3</div>
  <div class="item i-04">4</div>
  <div class="item i-05">5</div>
  <div class="item i-06">6</div>
  <div class="item i-07">7</div>
  <div class="item i-08">8</div>
  <div class="item i-09">9</div>
  <div class="item i-10">10</div>
  <div class="item i-11">11</div>
  <div class="item i-12">12</div>

  <div class="item-body">
    <div class="center-title">日历:正月初一:春节</div>
  </div>
</div>

<style>
  #container{
    display: grid;
    /*grid-template-columns: repeat(4,1fr);*/
    /*grid-auto-rows: 1fr;*/
    grid-template-columns: repeat(4,100px);
    grid-auto-rows: 100px;
    /*grid-template-areas:
          "i-03 i-04 i-05 i-06"
          "i-02 ct-x ct-x i-07"
          "i-01 ct-x ct-x i-08"
          "i-00 i-11 i-10 i-09";*/
    grid-template-areas:
        "fei-03 fei-04 fei-05 fei-06"
        "fei-02 ct-x   ct-x   fei-07"
        "fei-01 ct-x   ct-x   fei-08"
        "fei-00 fei-11 fei-10 fei-09";
  }

  .item-body{
    font-size: 1em;
    text-align: center;
    border: 1px solid #e5e4e9;
    background-color: #ff6b81;
    grid-area: ct-x; /** 注意这个 */
  }
</style>
<style>
  .item {
    font-size: 2em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }

  .i-01 {background-color: #ef342a;}
  .i-02 {background-color: #f68f26;}
  .i-03 {background-color: #4ba946;}
  .i-04 {background-color: #0376c2;}
  .i-05 {background-color: #c077af;}  
  .i-06 {background-color: #f8d29d;}
  .i-07 {background-color: #b5a87f;}
  .i-08 {background-color: #d0e4a9;}
  .i-09 {background-color: #4dc7ec;}
  .i-10 {background-color: #00ffff;}
  .i-11 {background-color: #90ee90;}
  .i-12 {background-color: #dda0dd;}
</style>

```

![grid日历](/img/css/flex/grid_01 "grid 日历")



### 其他

[峰: Grid 网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)













