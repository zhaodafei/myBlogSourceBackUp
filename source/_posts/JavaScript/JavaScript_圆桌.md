---
title: -JavaScript_圆桌效果
date: 2022-11-14
categories: 
- JavaScript
tags:
- JavaScript
---
JavaScript 圆桌效果

<!-- more -->

### JavaScript 圆桌效果

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>圆桌效果</title>
  <script type="text/javascript" src="./jquery-1.5.2.min.js"></script>
  <style type="text/css">
    .table_box {
      position: relative;
      width: 200px;
      height: 200px;
      display: inline-block;
      text-align: center;
      margin: 20px;
    }

    .round_dot {
      position: absolute;
      width: 82px;
      height: 82px;
      line-height: 82px;
      text-align: center;
      font-size: 18px;
      color: #ccc;
      background-color: #ff6b81;
      background-repeat: no-repeat;
      background-size: contain;
      border-radius: 20px;
    }

    .seat {
      cursor: pointer;
      position: absolute;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      background-color: #c0c0c0;
      background-repeat: no-repeat;
      background-size: contain;
      border-radius: 20px;
    }
  </style>
</head>
<body>
<div id="table-demo">
  <div class="table_box">
    <div class="round_dot">A号桌</div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <!-- 这里依次增加即可 -->
  </div>
</div>

<script type="text/javascript">
  function setRound(obj) {
    //中心点横坐标
    let dotLeft = ($(obj).width() - $(obj).find(".round_dot").width()) / 2;
    //中心点纵坐标
    let dotTop = ($(obj).height() - $(obj).find(".round_dot").height()) / 2;
    //起始角度
    let stard = 0;
    //半径
    let radius = 90;
    //每一个BOX对应的角度;
    let avd = -360 / $(obj).find(".seat").length;
    //每一个BOX对应的弧度;
    let ahd = avd * Math.PI / (180);
    //设置圆的中心点的位置
    $(obj).find(".round_dot").css({"left": dotLeft, "top": dotTop});
    $(obj).find(".seat").each(function (index, element) {
      $(this).css({
        "left": Math.sin((ahd * index)) * radius + dotLeft + 20,
        "top": Math.cos((ahd * index)) * radius + dotTop + 20
      });
    });
  }

  (() => {
    $("div .table_box").each(function () {
      setRound($(this));
    });
  })()

</script>
</body>
</html>

```

### 底部

没有了



















