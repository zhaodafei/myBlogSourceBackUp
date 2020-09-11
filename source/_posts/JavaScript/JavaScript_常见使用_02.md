---
title: JavaScript_常见使用
categories: 
- JavaScript
tags:
- JavaScript
---

 JavaScript常用使用
 JavaScript常用使用
 JavaScript常用使用

### 定义

```javascript
var daFei = {
    age: 18,
    name: "daFei",
    height: function () {
        console.log("身高");
    }
};
daFei.height && daFei.height();  // 短路与
console.log("执行下面数据");
```

### `for/in` 遍历对象

```javascript
var obj = {age: 18, name: "daFei"};
for (let key in obj) {
    console.log(key,"___",obj[key]);
}
```



