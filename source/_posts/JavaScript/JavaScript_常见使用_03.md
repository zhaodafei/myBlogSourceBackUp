---
title: JavaScript_常见使用_03
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---

 JavaScript常用使用_03
 JavaScript常用使用_03
 JavaScript常用使用_03

<!-- more -->

### 判断空对象

```javascript
function checkObj(obj) {
    return Object.keys(obj).length === 0;
}
checkObj([]); // true
checkObj({}); // true
//-------------------------------------------


Object.keys({}).length; // 长度为0
Object.keys({foo: "bar"}).length; // 长度为1

Object.keys([]).length; // 长度为0
Object.keys(["fei"]).length; // 长度为1
```

### 常见加密解密

```javascript
// Base64的编码与解码
let foo = "Hello fei";
window.btoa(foo); // SGVsbG8gZmVp
window.atob("SGVsbG8gZmVp"); // Hello fei

//  url 编码解码
let url = "http://github.com/search?name=1 2 3 $age=456";
encodeURI(url); // http://github.com/search?name=1%202%203%20$age=456
decodeURI("http://github.com/search?name=1%202%203%20$age=456");

// url 中参数编码解码
let bar = "a=123&b=456";
encodeURIComponent(bar); // a%3D123%26b%3D456
decodeURIComponent("a%3D123%26b%3D456"); // a=123&b=456
```

### `Blob` 和 `String`相互转换

```javascript
// 将String字符串转换成Blob对象
var blob = new Blob(['daFei'], {
    type: 'text/plain'
});
console.log(blob);

//将Blob 对象转换成字符串
var reader = new FileReader();
reader.readAsText(blob, 'utf-8');
reader.onload = function (e) {
    console.info(reader.result);
}
```

### 参数

解构参数  和  方法参数

```javascript
// 解构参数
function foo({name = "daFei", age = 18}={}) {
    console.log(name,age);
}
foo({name:"foo",age:20});
foo({age:22});

// 方法参数
function bar(name="daFei",callBack) {
    if (callBack) {
        callBack();
    }else{
        console.log("没有执行");
    }
}
bar("bar", () => {
    console.log("开始执行");
});
bar("bar2")
```

### 判断浏览器类型

```javascript
  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);
```

### 抛出异常

```javascript
  try {
    throw  "抛出异常";
  } catch (err) {
    console.error("捕获___" + err);
  }
```

### 解构重命名

```javascript
const {fei: fei_temp, foo: foo_temp} = {fei: "123", foo: "helloWorld"};
console.log(fei_temp, foo_temp); // 对 fei 和 foo 重新定义名字
```

#### 剩余

```javascript
let {a, b, ...fei} = {a: 10, b: 20, c: 30, d: 40};
```

####  默认

```javascript
let {foo, b = 5} = {foo: 3};
let {foo, b: bb = 5} = {foo: 3};
```

#### demo

```html
<script>
  let foo = [];
  let bar = [];
  let fei = [];

  const testFun = () => {
    let foo = [1, 2, 3];
    let bar = ['a', 'b', 'c'];
    let fei = ['hello', 'world'];
    return {foo, bar, fei}
  }

  try {
    ({foo, bar, fei} = testFun())
  } catch (e) {
    ({foo, bar, fei} = testFun())
  }

  console.log(foo, bar, fei)
</script>
```



### 高阶函数 `filter` `map` `reduce`

```javascript
// 高阶函数 filter map reduce  用es6语法
// 过滤小于20的值,返回布尔值 true 或者 false
// 循环数组中的每一个元素
//接受一个函数作为参数，这个函数作为一个累加器，从左到右遍历整个类型数组，最后返回一个单一的值
const nums = [10, 15, 18, 25, 34];
let newNums = nums.filter(item => item < 20) 
.map(item2 => item2 * 2) 
.reduce((total, item3) => total + item3); 

//--------------------
const nums = [10, 15, 18, 25, 34];
let newNum_1 = nums.filter(function (item1) {
    return item1 < 20;
});
console.log(newNum_1); // [10, 15, 18]

let newNum_2 = newNum_1.map(function (item2) {
    return item2 * 2;
});
console.log(newNum_2); // [20, 30, 36]

let newNum_3 = newNum_2.reduce(function (total, item3) {
    return total + item3;
})
console.log(newNum_3); // 86
```

### `set` 和 `map`

`set` 利用唯一,数组去重

```javascript
[...new Set([1, 1, 2, 2, 5, 7])]
```

### 获取当前之后的时间

JavaScript获取当前时间减去10分钟

```javascript
// JavaScript获取当前时间减去10分钟
function dateDecrease(dStr,interval = 10) {
    let d = new Date(
        dStr.substring(0, 4),
        dStr.substring(5, 7) - 1,
        dStr.substring(8, 10),
        dStr.substring(11, 13),
        dStr.substring(14, 16),
        dStr.substring(17, 19)
    );
    d.setTime(d.getTime() - interval * 60 * 1000);
    //小于10前面补0
    let getMonth = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    let getDate = d.getDate() < 10 ? "0" + (d.getDate()) : d.getDate();
    let getHours = d.getHours() < 10 ? "0" + (d.getHours()) : d.getHours();
    let getMinutes = d.getMinutes() < 10 ? "0" + (d.getMinutes()) : d.getMinutes();
    return d.getFullYear() + "-" + getMonth + "-" + getDate + " " + getHours + ":" + getMinutes;
}
console.log(dateDecrease('2022-02-04 08:00'))
```

JavaScript获取当前时间加上10分钟

```javascript
// JavaScript获取当前时间加上10分钟
function dateAdd(dStr, interval = 10) {
    let d = new Date(
        dStr.substring(0, 4),
        dStr.substring(5, 7) - 1,
        dStr.substring(8, 10),
        dStr.substring(11, 13),
        dStr.substring(14, 16),
        dStr.substring(17, 19)
    );
    d.setTime(d.getTime() + interval * 60 * 1000);
    //小于10前面补0
    let getMonth = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    let getDate = d.getDate() < 10 ? "0" + (d.getDate()) : d.getDate();
    let getHours = d.getHours() < 10 ? "0" + (d.getHours()) : d.getHours();
    let getMinutes = d.getMinutes() < 10 ? "0" + (d.getMinutes()) : d.getMinutes();
    return d.getFullYear() + "-" + getMonth + "-" + getDate + " " + getHours + ":" + getMinutes;
}
console.log(dateAdd('2022-02-20 08:00'))
```





