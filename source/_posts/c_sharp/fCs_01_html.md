---
title: C# 中html
date: 2022-12-30
categories: 
- C#
tags:
- C#
---
`C#`开发工具推荐`JetBrains Rider`

 C# 中html
 C# 中html
 C# 中html

<!-- more -->

### 基本常见

在前端asp中有种特殊的js写法获取页面数据

```asp
<head>
    <script type="text/javascript">
        function onFei() {
            // 页面所有html
            console.log("大飞_获取数据",document.Form1);
            // input 的html
            console.log("大飞_获取数据",document.Form1.feiVal);
            // input 的 value 值
            console.log("大飞_获取数据",document.Form1.feiVal.value);
        }
    </script>
</head>
<body onload="onFei();">
<!-- 使用这里的id ====== -->
<form id="Form1" method="post" runat="server">
    <input id="feiVal" value="我是value值" />
</form>
</body>
```

![001](/img/c_sharp/ofCs_01.png "001")



### 底部

没有了























