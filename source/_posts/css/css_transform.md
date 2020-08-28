---
title:  -CSS -transform特效
categories: 
- CSS
tags:
- CSS
- transform
---
`css` `transform` 抽奖特效 实现2D和3D
`css` `transform` 抽奖特效 实现2D和3D

### `transform` 抽奖特效 

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>daFei_transform</title>
    <script src="jquery.min.js"></script>
</head>
<style>
    .con {
        width: 200px;
        height: 50px;
        background: #138ce0;
        overflow: hidden;
    }

    .item {
        display: inline-block;
        width: 20px;
        height: 100px;
        margin-left: 30px;
        margin-top: 5px;
        transform: translate3d(0px, 0px, 0px);
    }

    .item:nth-child(1) {

    }

    .item:nth-child(2) {

    }

    .item:nth-child(3) {

    }

    img {
        width: 100%;
        height: auto;
        margin-bottom: 40px;
    }

</style>
<body>
<div class="con">
    <div class="item">
        <img src="duihao.png" alt="">
        <img src="duihao.png" alt="">
        <img src="duihao.png" alt="">
        <img src="duihao.png" alt="">
    </div>
    <div class="item">
        <img src="duihao.png" alt="">
        <img src="duihao.png" alt="">
        <img src="duihao.png" alt="">
        <img src="duihao.png" alt="">
    </div>
    <div class="item">
        <img src="duihao.png" alt="">
        <img src="duihao.png" alt="">
        <img src="duihao.png" alt="">
        <img src="duihao.png" alt="">
    </div>
</div>
dafei
<button id="btn">走起来</button>
<button id="btn2">初始化</button>

</body>
<script>
    $(function () {
        let cliItem = $('.item');
        $('#btn').click(function () {
            cliItem.css('transition', 'all 1s');
            cliItem.eq(0).css('transform', 'translate3d(0px,-128px,0px)');
            setTimeout(function () {
                cliItem.eq(1).css('transform', 'translate3d(0px,-128px,0px)')
            }, 100);
            setTimeout(function () {
                cliItem.eq(2).css('transform', 'translate3d(0px,-128px,0px)')
            }, 200)
        });

        $('#btn2').click(function () {
            cliItem.css('transition', '');
            cliItem.css('transform', '');
        })

    })
</script>
</html>
```



![transform](/img/css/transform_01.gif "transform")

![transform](/img/css/transform_02.png "transform")





























