---
title: JavaScript_常见使用_02
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

### forEach 遍历数组

```javascript
let arr = [
    {age: 18, name: "daFei"},
    {age: 28, name: "foo"},
    {age: 38, name: "bar"}
];

arr.forEach(item => {
    console.log(item);
    console.log(item.age, item.name);
});
```

### 序列化和反序列化

```javascript
let obj = {age: 18, name: "daFei"};

let bbb = JSON.stringify(obj); // 序列化: 对象-->字符串
console.log(bbb,obj);

let xxx = JSON.parse(bbb); // 反序列化: 字符串-->对象
console.log(xxx,obj);
```



