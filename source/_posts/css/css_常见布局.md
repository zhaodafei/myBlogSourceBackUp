---
title: -CSS 常见布局
date: 2015-03-04
categories: 
- CSS
tags:
- CSS
---
CSS 常见布局
CSS 常见布局
CSS 常见布局
布局的传统解决方案，基于[盒状模型](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)，依赖 [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 属性 + [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)属性 + [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)属性,
新方案使用 `flex`布局

<!-- more -->

### 下面的待写..........

品字布局

```
上面的 div 宽 100%，
下面的两个 div 分别宽 50%，
然后用 float 或者 inline 使其不换行即可
```

### 一行多列

```html
<!--<div class="body-main">-->
    <div class="body-menu">
        <div class="menu-item">
            <div class="menu-content">
                <div class="menu-title">图文消息</div>
                <div class="menu-num">100</div>
            </div>
        </div>

        <div class="menu-item">
            <div class="menu-content">
                <div class="menu-title">图文消息</div>
                <div class="menu-num">100</div>
            </div>
        </div>
        <!-- 重复 -->
    </div>
<!--</div>-->

<style>
.body-menu{
    display: flex;
}
.menu-item{
    flex: 1; /* body-menu 的项目属性 */
    height: 180px;
    margin-right: 10px;
    border: 1px dashed #e7e7eb;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.menu-content{
    text-align: center;
    /*position: relative;*/
    /*width: 100%;*/
}

</style>
```



[CSS 布局](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout)



























