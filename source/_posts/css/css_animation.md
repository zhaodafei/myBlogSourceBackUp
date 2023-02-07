---
title: -CSS -animation 动画
date: 2013-07-04
categories: 
- CSS
tags:
- CSS
- animation
---
`CSS`  `animation` 动画
`CSS`  `animation` 动画
`CSS`  `animation` 动画

<!-- more -->

deg( degree )  / dɪˈɡriː / 度数,度

### 语法

```css
animation: name duration timing-function delay iteration-count direction;
```

| 值                                                           | 描述                                     |
| :----------------------------------------------------------- | :--------------------------------------- |
| *[animation-name](https://www.w3school.com.cn/cssref/pr_animation-name.asp)* | 规定需要绑定到选择器的 `keyframe` 名称。 |
| *[animation-duration](https://www.w3school.com.cn/cssref/pr_animation-duration.asp)* | 规定完成动画所花费的时间，以秒或毫秒计。 |
| *[animation-timing-function](https://www.w3school.com.cn/cssref/pr_animation-timing-function.asp)* | 规定动画的速度曲线。                     |
| *[animation-delay](https://www.w3school.com.cn/cssref/pr_animation-delay.asp)* | 规定在动画开始之前的延迟。               |
| *[animation-iteration-count](https://www.w3school.com.cn/cssref/pr_animation-iteration-count.asp)* | 规定动画应该播放的次数。                 |
| *[animation-direction](https://www.w3school.com.cn/cssref/pr_animation-direction.asp)* | 规定是否应该轮流反向播放动画。           |

animation 属性是一个简写属性，用于设置六个动画属性,

- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count
- animation-direction

**注释：**请始终规定 animation-duration 属性，否则时长为 0，就不会播放动画了。

### 关键帧 `keyframes`

`keyframes` 规则: 0％(from)是开头动画，100％(to)是当动画完成。

> 合法值：
> 0-100%
> from (和0%相同)
> to (和100%相同)
>
>   @keyframes: 设置动画帧
>     -1) from to
>       -- 使用于简单的动画，只有起始帧和结束帧
>       -- 北京 - 上海  直达
>     -2) 百分比
>       -- 多用于复杂的动画，动画不止两帧
>       -- 北京 - 上海 ---> 北京 -- 天津 --- 深圳 --- 上海
>       -- 0% - 100%, 可以任意拆分
>
> ```html
> @keyframes: 设置动画帧
>   -1) from to
>     -- 使用于简单的动画，只有起始帧和结束帧
>     -- 北京 - 上海  直达
>   -2) 百分比
>     -- 多用于复杂的动画，动画不止两帧
>     -- 北京 - 上海 ---> 北京 -- 天津 --- 深圳 --- 上海
>     -- 0% - 100%, 可以任意拆分
> ```
>
> 

### demo1



```html
<div class="foo">我从上往下移动</div>
<style>
    @keyframes fei
    {
        from {top:0;} /* 开始位置 */
        to {top:200px;} /* 结束位置 */
    }

    @-webkit-keyframes fei /* Safari and Chrome */
    {
        from {top:0;}
        to {top:200px;}
    }

    .foo {
        width: 100px;
        height: 100px;
        background: #ff6b81;
        position: relative;
        animation: fei 5s infinite; /* 动画名称,  周期时间,  循环播放 */
        -webkit-animation: fei 5s infinite; /* Safari and Chrome */
    }
</style>
```

### demo2

```html
<!-- 制作一个简单的loading -->
<div>
   <div class="fei spinner-border"></div>
</div>

<style>
@keyframes spinner-border {
    to { transform: rotate(360deg) }
}
.fei{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    border: .25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: spinner-border .75s linear infinite;
    animation: spinner-border .75s linear infinite;
}
</style>
```

### demo3

```html
<!-- 制作一个简单的loading -->
<!-- svg 和 circle 都设置动画 -->
<div class="fei-2" style="width: 100px;height: 100px;background-color:#ff6b81;">
    <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none"></circle>
    </svg>
</div>
<style>
    @keyframes loading-dash {
        0% {
            stroke-dasharray: 1,200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -40px;
        }
        100% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -120px;
        }
    }
    .fei-2 .path {
        animation: loading-dash 1.75s linear infinite;
        stroke-dasharray: 90,150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #409eff;
        stroke-linecap: round;
    }

    @keyframes loading-rotate{
        100% {
            transform: rotate(360deg);
        }
    }
    .circular{
        display: inline;
        height: 42px;
        width: 42px;
        animation: loading-rotate 2s linear infinite;
    }
</style>
```

### 2个动画属性

```html
<style> 
    div {
        width:100px;
        height:100px;
        background:#ff6b81;
        position:relative;
        animation: mymove 5s infinite,message-tip-rotating 5s infinite;
    }

    @keyframes mymove
    {
        from {left:0px;}
        to {left:200px;}
    }

    @keyframes message-tip-rotating {
        0% { transform: rotate(0) }
        to { transform: rotate(360deg) }
    } 
	
</style>
<p>定义2个动画属性</p>
<div>动画_fei</div>

```





### 其他

[animation 属性](https://www.w3school.com.cn/cssref/pr_animation.asp)
[关键帧 `keyframes`](https://www.runoob.com/cssref/css3-pr-animation-keyframes.html) 01
[关键帧 `keyframes`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes) 02
[动画`CSS`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)











