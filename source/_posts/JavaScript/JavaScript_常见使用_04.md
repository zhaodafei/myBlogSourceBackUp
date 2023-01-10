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







