---
title: JavaScript_常见使用
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---
 JavaScript常用使用
 JavaScript常用使用
 JavaScript常用使用

<!-- more -->

### console

```javascript
// 让输出的 console 带样式
console.log("%c大飞信息跟踪", "color:#FF6B81")

console.log(
    '%c[fei-bar] %c fei-line:88 %c fei-data ',
    'color:#fff;background:#FF6B81;padding:3px;border-radius:2px',
    'color:#fff;background:#808080;padding:3px;border-radius:2px;margin:0 3px;',
    'color:#fff;background:#000000;padding:3px;border-radius:2px',
)


// 常见demo
let fei = {name: '大飞', age: 18, gender: '男',}
let str_1 =
    `%c 姓名${fei.name}, ` +
    `%c 年龄${fei.age}, ` +
    `%c 性别${fei.gender}, `
console.log(str_1, 'color:blue', 'color:red', 'color:blue')
```

[MDN console 其他资料](https://developer.mozilla.org/zh-CN/docs/Web/API/console#%E7%A4%BA%E4%BE%8B)

### 随机数测试

```javascript
Math.floor(Math.random()*10000)
```

### 获取逗号拼接字符串

```javascript
let ids = "1,2,3,4,5,6,";
ids.substring(0, ids.length - 1); //去掉末尾逗号,  *** 禁止使用substr ***

let feiArr = [
    {id: 1, name: "daFei"},
    {id: 2, name: "foo"},
    {id: 3, name: "bar"},
];
feiArr.map(m => m.id).join(",");// 输出 1,2,3

```

警告： 尽管 `String.prototype.substr(…)` 没有严格被废弃 (as in "removed from the Web standards"), 但它被认作是遗留的函数并且可以的话应该避免使用。它并非JavaScript核心语言的一部分，未来将可能会被移除掉。如果可以的话，使用 `substring()` 替代它.       [警告: String.prototype.substr()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

### hasOwnProperty 判断自身属性是否存在 

```javascript
// hasOwnProperty 判断自身属性是否存在 
let test = {author: "dafei", bookName: "史记"};
console.log(test.hasOwnProperty("author"));// true
console.log(test.hasOwnProperty("price"));// false
```

### px、em、rem区别介绍

如果你不指定一个字体的大小，默认大小和普通文本段落一样，是16像素（1em=16px）

### 判断一个对象是否是数组

```javascript
let arr = [1, 2, 3];
console.log(arr instanceof Array); // 返回true
console.log("eeee" instanceof Array); // 返回false
```

### 数组去重ES6

```javascript
let arr = [1, 2, 3, 1, 2];
let newIds = Array.from(new Set(arr));
console.log(newIds);// 输出 [1, 2, 3]
```

### 对象2种取值方式

当对象是一个变量的时候,使用[]会方便很多

```javascript
let obj = {name: "daFei"};
console.log(obj.name);
console.log(obj['name']); // 常使用在,对象是个变量
```

### 获取对象中某个属性的所有值ES6

```javascript
let obj = [
    {name: "daFei", age: "18", hobby: "JavaScript"},
    {name: "daFei", age: "18", hobby: "HTML"},
    {name: "daFei", age: "18", hobby: "CSS"},
];
let arr = obj.map(item => item.hobby);
console.log(arr); // 输出 ["JavaScript", "HTML", "CSS"]
```

### 判断一个数组或者字符串中存在某个值

indexOf ,不存在则返回-1

```javascript
// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
let arr = [1, 2, 3, 4];
let index = arr.indexOf(3);
console.log(index);// 返回对应的下标2

// indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引。如果未找到该值，则返回 -1。
let str = "fei,da,foo,bar,JavaScript";
let index_str = str.indexOf("foo"); // 返回对应的下标7
console.log(index_str);
```

[数组中属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 和  [字符串中属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

### 获取一个对象中的所有属性

```js
let obj = {name: "daFei", age: "18", hobby: "JavaScript"};
let arr = Object.keys(obj);
console.log(arr); // 输出 ["name", "age", "hobby"]
```

使用`map`获取数组中某个值集合,参考文件`other_JavaScript.md`中的`map,获取对象中某个属性的所有值ES6`

























