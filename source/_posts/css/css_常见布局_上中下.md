---
title: -CSS 常见布局_上中下
date: 2015-03-04
categories: 
- CSS
tags:
- CSS
---
CSS 常见布局`上中下`
CSS 常见布局`上中下`
CSS 常见布局`上中下`

<!-- more -->

情景描述: 上下固定中间自适应布局

>2中方法主要逻辑
>
>1. 利用`absolute`绝对定位
>2. 利用`flex`

### 方案1---利用`absolute`绝对定位

```html
<style>
    body {
        padding: 0;
        margin: 0;
    }
    .header {
        width: 100%;
        height: 150px;
        background-color: #ff6b81;
        position: absolute;
        top: 0;
    }
    .container {
        width: 100%;
        background-color: #C0C0C0;
        position: absolute;
        top: 150px;
        bottom: 50px;
    }
    .footer {
        width: 100%;
        height: 50px;
        background-color: #ff6b81;
        position: absolute;
        bottom: 0;
    }
</style>
<div>
    <div class="header"></div>
    <div class="container">利用 absolute 绝对定位</div>
    <div class="footer"></div>
</div>
```

### 方案2---利用`flex`

```html
<style>
    html, body {
        padding: 0;
        margin: 0;
        height: 100%; /* 定义高度 */
    }
    .fei {
        width: 100%;
        height: 100%; /* 定义高度 */
        display: flex;
        flex-direction: column;
    }
    .header {
        height: 100px;
        background: #ff6b81;
    }
    .container {
        flex-grow: 1;
        background: #c0c0c0;
    }
    .footer {
        height: 100px;
        background: #ff6b81;
    }
</style>
<div class="fei">
    <div class="header"></div>
    <div class="container">利用 flex</div>
    <div class="footer"></div>
</div>
```

#### 中间自适应并滚动

```html
<style>
  html, body {
    padding: 0;
    margin: 0;
    height: 100%; /* 定义高度 */
  }
  .fei {
    width: 100%;
    height: 100%; /* 定义高度 */
    display: flex;
    flex-direction: column;
  }
  .header {
    height: 400px;
    background: #ff6b81;
  }
  .container {
    flex-grow: 1;
    background: #c0c0c0;
  }
  .footer {
    height: 400px;
    background: #ff6b81;
  }

  /** 中间可以滚动这里是关键 **/
  .container { display: flex;height: 0; }
  .container .body-scroll { overflow-y: auto;width: 100%; }
</style>
<div class="fei">
  <div class="header"></div>
  <div class="container">
    <div class="body-scroll">
      ddddddddddddddddddddddddddddddddd
      HTML的全称为超文本标记语言，是一种标记语言。它包括一系列标签，通过这些标签可以将网络上的文档格式统一，
      使分散的Internet资源连接为一个逻辑整体。 HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字， 图形、动画、声音、表格、链接等。
      [1] 超文本是一种组织信息的方式，它通过超级链接方法将文本中的文字、图表与其他信息媒体相关联。这些相互关联的信息媒体可能在同一文本中，
      也可能是其他文件，或是地理位置相距遥远的某台计算机上的文件。这种组织信息方式将分布在不同位置的信息资源用随机方式进行连接，
      为人们查找，检索信息提供方便。 [11] HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、
      网页应用程序以及移动应用程序的用户界面 [12]。网页浏览器可以读取HTML文件，并将其渲染成可视化网页。
      HTML描述了一个网站的结构语义随着线索的呈现，使之成为一种标记语言而非编程语言。 HTML元素是构建网站的基石。
      HTML允许嵌入图像与对象，并且可以用于创建交互式表单，它被用来结构化信息——例如标题、段落和列表等等，
      也可用来在一定程度上描述文档的外观和语义。HTML的语言形式为尖括号包围的HTML元素（如html），
      浏览器使用HTML标签和脚本来诠释网页内容，但不会将它们显示在页面上。

      HTML的全称为超文本标记语言，是一种标记语言。它包括一系列标签，通过这些标签可以将网络上的文档格式统一，
      使分散的Internet资源连接为一个逻辑整体。 HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字， 图形、动画、声音、表格、链接等。
      [1] 超文本是一种组织信息的方式，它通过超级链接方法将文本中的文字、图表与其他信息媒体相关联。这些相互关联的信息媒体可能在同一文本中，
      也可能是其他文件，或是地理位置相距遥远的某台计算机上的文件。这种组织信息方式将分布在不同位置的信息资源用随机方式进行连接，
      为人们查找，检索信息提供方便。 [11] HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、
      网页应用程序以及移动应用程序的用户界面 [12]。网页浏览器可以读取HTML文件，并将其渲染成可视化网页。
      HTML描述了一个网站的结构语义随着线索的呈现，使之成为一种标记语言而非编程语言。 HTML元素是构建网站的基石。
      HTML允许嵌入图像与对象，并且可以用于创建交互式表单，它被用来结构化信息——例如标题、段落和列表等等，
      也可用来在一定程度上描述文档的外观和语义。HTML的语言形式为尖括号包围的HTML元素（如html），
      浏览器使用HTML标签和脚本来诠释网页内容，但不会将它们显示在页面上。
    </div>
  </div>
  <div class="footer"></div>
</div>

```

