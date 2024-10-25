---
title: Lodop打印
date: 2023-02-11
categories: 
- Lodop
tags:
- Lodop
---
WEB 打印控件 Lodop
WEB 打印控件 Lodop
WEB 打印控件 Lodop
下面more是分隔符

<!-- more -->

### 计量单位

`Lodop` 中计量单位如下:  1in(英寸)=2.54cm(厘米)=25.4mm(毫米)=72pt(磅)=96px

```javascript
//  1in(英寸)=2.54cm(厘米)=25.4mm(毫米)=72pt(磅)=96px
const conversion_getDPI = () => {
  let arrDPI = []
  if (window.screen.deviceXDPI) {
    arrDPI[0] = window.screen.deviceXDPI
    arrDPI[1] = window.screen.deviceYDPI
  } else {
    let tmpNode = document.createElement('DIV')
    tmpNode.style.cssText = 'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden'
    document.body.appendChild(tmpNode);
    arrDPI[0] = parseInt(tmpNode.offsetWidth); // 不会有小数
    arrDPI[1] = parseInt(tmpNode.offsetHeight); // 不会有小数
    tmpNode.parentNode.removeChild(tmpNode);
  }
  return arrDPI
}

/**
 * 单位转换: mm转换为px
 * @param value
 * @returns {number}
 */
export const mmConversionPx = value => {
  let val = (value / 25.4) * conversion_getDPI()[0]
  return Math.round(val)
}

/**
 * 单位转换: px转为mm
 * @param value
 * @returns {number}
 */
export const pxConversionMm = value => {
  let val = (value / conversion_getDPI()[0]) * 25.4
  return Math.round(val)
}

// 用法:
console.log(mmConversionPx(25.4));
console.log(pxConversionMm(96));
```



### 打印图片

```html
!!! === 注意这里图片地址不能使用https,只能是http, 或者用base64
#直接使用图片URL,可以打印内网图片
#这种打印出来的图也无白边
LODOP.ADD_PRINT_IMAGE(10,10,300,160,"http://www.c-lodop.com/demolist/PrintSample8.jpg");

#使用img标签
LODOP.ADD_PRINT_IMAGE(10,10,300,160,"<img src=’http://www.c-lodop.com/demolist/PrintSample8.jpg’/>");

#https的图片地址处理(具体没试过)
http://www.c-lodop.com/faq/pp32.html
http://www.c-lodop.com/faq/pp32.html
```

[官网:打印图片](http://www.c-lodop.com/demolist/PrintSample8.html)

### 基本常见

```javascript
LODOP = getLodop();
LODOP.PRINT_INIT("打印任务名称fei"); // 初始化打印任务

// 设置模式和名称
LODOP.SET_PRINT_MODE('打印机名称', true);
LODOP.SET_PRINTER_INDEX('打印机名称'); // 指定打印设备
// LODOP.SET_PRINT_PAGESIZE(2); // 纵向
// LODOP.SET_PRINT_PAGESIZE(1); // 横向

// 参数说明:  ADD_PRINT_TEXT(Top,Left,Width,Height,'内容xxx')
// 单位: 所增打印项在纸张内的上边距，整数或字符型，整数时缺省长度单位为 px。
//      字符型时可 包含单位名：in(英寸)、cm(厘米) 、mm(毫米) 、pt(磅)、px(1/96 英寸) 、%(百分比)，
//      如“10mm”表示 10 毫米
//      2.54cm(厘米)=25.4mm(毫米)=72pt(磅)=96px

// demo01: 普通打印
LODOP.ADD_PRINT_TEXT('20mm', '30mm', 100, 20, "01无样式文本");
// LODOP.ADD_PRINT_TEXT('25mm', '30mm', 120, 20, "02无样式文本aaaaa");
// LODOP.ADD_PRINT_TEXT('30mm', '30mm', 100, 20, "03无样式文本_换行了aaaa");

// 最后:打印预览
LODOP.PREVIEW(); // 打印预览
```

### 缩放文本

```javascript
// demo02: 缩放文本
LODOP.ADD_PRINT_TEXT('40mm', '30mm', 200, 20, "04垂直缩放1.5倍样式的纯文本");
LODOP.SET_PRINT_STYLEA(0, "ScalY", 1.5);//纯文本垂直缩放x
```

### 图片

```javascript
LODOP.ADD_PRINT_IMAGE('50mm', '30mm', 50, 50, "imgUrl图片地址");
LODOP.SET_PRINT_STYLEA(0, "Stretch", 2); // Stretch 的值:2--按原图长和宽比例(不变形)缩放


// demo4: 图片旋转(注意调整位置)
LODOP.ADD_PRINT_IMAGE('60mm', '30mm', 50, 50, "imgUrl图片地址");
LODOP.SET_PRINT_STYLEA(0, "Stretch", 2);
LODOP.SET_PRINT_STYLEA(0, "Angle", 10);//图片旋转:逆时针旋转角度数,单位是度,0度表示不旋转,旋转时以对象的左上角为原点

// 图片打印不了https解决方法
//  把路径用img标签包裹起来
let w1 = mmConversionPx(88);
let h1 = mmConversionPx(120);
let srcImg = 'https://pic.cnblogs.com/avatar/1551357/20200522184107.png'
    
LODOP.ADD_PRINT_IMAGE('0mm', '0mm', '88mm', '120mm', `<img border='0' src=${src} width=${w1} height=${h1} />`);

```

### 样式调整

```javascript
// demo5: 其他样式调整
LODOP.ADD_PRINT_TEXT('80mm', '30mm', 100, 41, "大飞");
LODOP.SET_PRINT_STYLEA(0, "FontSize", 25);
LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
// LODOP.SET_PRINT_STYLEA(0,"Alpha",155);//纯文本透明度
```

### 二维码

```javascript
let value = '2938011211138863104' // 测试值
LODOP.ADD_PRINT_BARCODE('30mm', '30mm', '100mm', '100mm', 'QRCode', value)

```

### 其他常用参数

#### 01)只在首页输出内容

> ```javascript
> // === 01) 设置刚加入的这个内容只在首页输出(不在首页的内容在其他页面都是空白)
> // 打印初始化后、增加打印项之后调用本函数
> LODOP.SET_PRINT_STYLEA(0,"PageIndex","first");
> // demo1
> LODOP.ADD_PRINT_TEXT('30mm', '30mm', 100, 20, "03无样式文本_换行了aaaa");
> LODOP.SET_PRINT_STYLEA(0,"PageIndex","first");
> LODOP.PREVIEW(); // 打印预览
> ```

#### 02)打印的截止页

> ```javascript
> // === 02) PRINT_END_PAGE 指定要打印的截止页
> LODOP.SET_PRINT_MODE ("PRINT_END_PAGE",1); // 从第1页结束打印(可以防止内容溢出后打印多余的)
> // demo2
> LODOP.PRINT_INIT("打印任务名称fei"); // 初始化打印任务
> LODOP.SET_PRINT_MODE ("PRINT_END_PAGE",2); // 从第二页结束打印
> LODOP.ADD_PRINT_TEXT('30mm', '30mm', 100, 20, "03无样式文本_换行了aaaa");
> LODOP.PREVIEW(); // 打印预览
> ```

#### 03)打印的起始页

> ```javascript
> // === 03) PRINT_START_PAGE 指定要打印的起始页
> LODOP.SET_PRINT_MODE ("PRINT_START_PAGE",5); // 从第5页开始打印
> ```

#### 04)打印方向

> ```javascript
> // === 03)打印方向
> LODOP.SET_PRINT_PAGESIZE(1) // 横向
> LODOP.SET_PRINT_PAGESIZE(2) // 纵向
> 
> LODOP.SET_SHOW_MODE('LANDSCAPE_DEFROTATED', true)  // 横向打印的预览默认旋转90度(正向显示)
> ```

1. xx
2. xx



### demo1

```javascript
LODOP = getLodop();
LODOP.PRINT_INIT("打印任务名称fei"); // 初始化打印任务

// 设置模式和名称
LODOP.SET_PRINT_MODE('打印机名称', true);
LODOP.SET_PRINTER_INDEX('打印机名称'); // 指定打印设备
// LODOP.SET_PRINT_PAGESIZE(2); // 纵向
// LODOP.SET_PRINT_PAGESIZE(1); // 横向

// 参数说明:  ADD_PRINT_TEXT(Top,Left,Width,Height,'内容xxx')
// 单位: 所增打印项在纸张内的上边距，整数或字符型，整数时缺省长度单位为 px。
//      字符型时可 包含单位名：in(英寸)、cm(厘米) 、mm(毫米) 、pt(磅)、px(1/96 英寸) 、%(百分比)，
//      如“10mm”表示 10 毫米
//      2.54cm(厘米)=25.4mm(毫米)=72pt(磅)=96px

// demo01: 普通打印
LODOP.ADD_PRINT_TEXT('20mm', '30mm', 100, 20, "01无样式文本");

let htm = ''
let styleHtml = ''
let typeface = '微软雅黑'
let value = '我是姓名:大飞'
styleHtml += 'font-weight: bold;'
styleHtml += 'font-size: 20px;' // 注意用px;
htm += "<div style=' " + styleHtml + " '>"
htm += "<span style='font-family: " + typeface + ";'>" + value + '</span>'
htm += '</div>'
LODOP.ADD_PRINT_HTM('50mm', '30mm', '100mm', '10mm', htm)

LODOP.PREVIEW(); // 打印预览
LODOP.PRINT(); // 开始打印
```

### demo2,只打印第一页

```javascript
LODOP = getLodop();
LODOP.PRINT_INIT("打印任务名称fei"); // 初始化打印任务

LODOP.SET_PRINT_MODE ("PRINT_END_PAGE",1); // 从第1页结束打印******
LODOP.SET_PRINT_MODE('打印机名称', true);
LODOP.SET_PRINTER_INDEX('打印机名称'); // 指定打印设备

let htm = ''
let styleHtml = ''
let typeface = '微软雅黑'
let value = '我是姓名:大飞A、B、C、D、E、F'
styleHtml += 'font-weight: bold;'
styleHtml += 'font-size: 30px;' // 注意用px; 调大,可以看到分页效果
htm += "<div style=' " + styleHtml + " '>"
htm += "<span style='font-family: " + typeface + ";'>" + value + '</span>'
htm += '</div>'
LODOP.ADD_PRINT_HTM('50mm', '30mm', '100mm', '10mm', htm)
LODOP.SET_PRINT_STYLEA(0,"PageIndex","first"); // 设置刚加入的这个内容只在首页输出******

LODOP.PREVIEW(); // 打印预览( 这里打印可能会显示分页,实际打印出来只要第一页 )
LODOP.PRINT(); // 开始打印
```



### 底部

没有了























