---
title: JavaScript_常见使用_04
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---

 JavaScript常用使用_0
 JavaScript常用使用_404
 JavaScript常用使用_04

<!-- more -->

### 超链接

`a`标签调用`js`方法

```html
<a href="javascript:fei('https://github.com')"></a>
<script>
    function fei(params) {
        console.log(params);
    }
</script>
```

### `map`数组中值类型转换

`JS` 数组中`String`类型转为`Number`

```javascript
// 字符数组转数字数组
let strArr = ["1", "2", "3"];
let numArr = strArr.map(Number)
console.log(numArr)
```

`JS` 数组中`Number`类型转为`String`

```javascript
// number数组转为string数组
let numArr1 = [1, 2, 3]
let strArr1 = numArr1.map(String)

console.log(strArr1)
```

### 网页中右键和选取功能

```javascript
document.oncontextmenu = new Function('event.returnValue=false;')
document.onselectstart = new Function('event.returnValue=false;')
```

```html
<div @contextmenu.prevent="event => (event.returnValue = false)">
    这个是Vue最外层
</div>
```

### 地址参数

获取地址中某个参数值

```javascript
/***
 * 获取地址中某个参数值
 * @param variable 参数名字
 * @returns {string} 参数值
 */
function GetQueryVariable(variable) {
    // ?foo=123&bar=456
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === variable) {
            return String(pair[1]);
        }
    }
    return "";
}
```

获取地址栏参数转为json格式

```javascript
/**
 * 获取地址栏参数转为json格式
 * @param url    demo:    www.demo.com/index.html?foo=123&bar=789
 * @returns {{}} demo:    {"foo": "123", "bar": "789"}
 * @constructor
 */
function GetQueryVariable_to_json(url) {
    let obj = {};
    let keyValue = [];
    let key = "", value = "";
    let paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    for (let i in paraString) {
        keyValue = paraString[i].split("=");
        key = keyValue[0];
        value = keyValue[1];
        obj[key] = value;
    }
    return obj;
}
```

### 获取当前文件目录位置

```javascript
/**
 * 在windows系统中获取当前文件目录位置
 * @param newFilename 新文件名字
 * @returns {string|string} 目录 或者 目录+文件地址
 */
function getWinDir(newFilename) {
  const pathName = window.document.location.pathname;
  let arr = pathName.split('/')
  let filename = arr[arr.length - 1]
  let pos = pathName.indexOf(filename)
  let dirName = pathName.substring(0, pos).substring(1)
  return newFilename ? dirName + newFilename : dirName;
}
```





### 秒转为小时分钟秒

```javascript
  /**
   * 秒转为小时
   * @param value  秒
   * @returns {string}
   */
  const timeFormat = value => {
    let theTime = parseInt(value) // 需要转换的时间秒
    let theTime1 = 0 // 分
    let theTime2 = 0 // 小时
    let theTime3 = 0 // 天
    if (theTime > 60) {
      theTime1 = parseInt(theTime / 60)
      theTime = parseInt(theTime % 60)
      if (theTime1 > 60) {
        theTime2 = parseInt(theTime1 / 60)
        theTime1 = parseInt(theTime1 % 60)
        if (theTime2 > 24) {
          //大于24小时
          theTime3 = parseInt(theTime2 / 24)
          theTime2 = parseInt(theTime2 % 24)
        }
      }
    }
    let result = ''
    if (theTime > 0) {
      result = '' + parseInt(theTime) + '秒'
    }
    if (theTime1 > 0) {
      result = '' + parseInt(theTime1) + '分' + result
    }
    if (theTime2 > 0) {
      result = '' + parseInt(theTime2) + '小时' + result
    }
    if (theTime3 > 0) {
      result = '' + parseInt(theTime3) + '天' + result
    }
    return result
  }
  
// 36000000 毫秒
// 36000 秒
// 600 分
// 10 小时
timeFormat(36000000 / 1000); // 10个小时
```

### 格式化时间

```javascript
// 格式化时间 demo:  parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s}')
function parseTime(time, pattern) {
    if (arguments.length === 0 || !time) {
        return null;
    }
    const format = pattern || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === "object") {
        date = time;
    } else {
        if (typeof time === "string" && /^[0-9]+$/.test(time)) {
            time = parseInt(time);
        } else if (typeof time === "string") {
            time = time
                .replace(new RegExp(/-/gm), "/")
                .replace("T", " ")
                .replace(new RegExp(/\.[\d]{3}/gm), "");
        }
        if (typeof time === "number" && time.toString().length === 10) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === "a") {
            return ["日", "一", "二", "三", "四", "五", "六"][value];
        }
        if (result.length > 0 && value < 10) {
            value = "0" + value;
        }
        return value || 0;
    });
    return time_str;
}

// demo
parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s}')
```









