---
title: -typeof 和 -instanceof 运算符
categories: 
- JavaScript
tags:
- JavaScript
- 运算符
---

typeof 和 instanceof
typeof 和 instanceof
typeof 和 instanceof

### typeof

1. 识别所有值类型
2. 识别函数
3. 判断是否是引用类型(但是不能区分是那种引用类型)

```javascript
(typeof "abc123"); // string
(typeof 123); // number
(typeof a); // undefined
(typeof true); // boolean
(typeof Symbol('fei')); // symbol
(typeof function fei() {}); // function


(typeof null); // object  *****************************
(typeof []); // object
(typeof {}); // object
```

### instanceof

```javascript
([] instanceof Array) ? "ok" : "no"; // ok
([] instanceof Object) ? "ok" : "no"; // ok
({} instanceof Object) ? "ok" : "no"; // ok

(null instanceof Object) ? "ok" : "no"; // no   *****************************
```




