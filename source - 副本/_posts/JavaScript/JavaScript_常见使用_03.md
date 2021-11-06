---
title: JavaScript_常见使用_03
categories: 
- JavaScript
tags:
- JavaScript
---

 JavaScript常用使用
 JavaScript常用使用
 JavaScript常用使用

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





