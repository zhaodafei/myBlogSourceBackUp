---
title: css 之 -margin 兼容文字方向
categories: 
- css
tags:
- css
- margin
---
 `css` 之 `margin-block-start`  和 `margin-top`
 `css` 之 `margin-inline-start` 和 `margin-left`

### 兼容文字阅读方向 `margin-inline-start`

```html
<style>
    .rtl-tb {
        direction: rtl;
        /*margin-block-start: 50px; */ /* 文本垂直从上到下的距离 */
        margin-top: 50px;
        unicode-bidi: bidi-override;
    }

    .ltr-tb {
        direction: ltr;
        margin-inline-start: 50px; /* 文本水平左右的距离*/
        /*margin-left: 50px;*/ /* 文本水平左右的距离 */
        unicode-bidi: bidi-override;
    }

    .fei_03 {
        direction: rtl;
        /** 
        可以兼容文件方向,这里在使用原来的 margin-left 就没有效果,
        要使用margin-right,才能回出现右边的距离
        */
        margin-inline-start: 50px; 
        /*margin-right: 50px;*/
        unicode-bidi: bidi-override;
    }
</style>

<div class="fei_01 rtl-tb">
    水平从右到左的。 hello world
</div>

<div class="fei_02 ltr-tb">
    水平从左到右的。 hello world
</div>

<div class="fei_03">
    水平从右到左的。 hello world
</div>

<ul>
    <li>fei</li>
    <li>fei</li>
    <li>fei</li>
</ul>
```

![margin](/img/css/margin.png "margin")































