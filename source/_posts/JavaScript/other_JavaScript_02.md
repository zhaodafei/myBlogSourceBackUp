---
title: other JavaScript
categories: 
- JavaScript
tags:
- JavaScript
---
###  .call() 和 .apply() 的区别

// 主要是 第二个参数不一样
实现继承(最常见的使用)

demo:

```javascript
// .call() 和 .apply() 的区别？ 
// 主要是 第二个参数不一样, 
// demo: 实现继承(最常见的使用)
function Product(name, author) {
    this.name = name;
    this.author = author;
}

function book(name, author) {
    Product.call(this, name, author); // 英文: 打电话 
    this.category = 'book';
}

function book22(name, author) {
    Product.apply(this, [name, author]); // array 数组
    this.category = 'book22';
}

console.log(new book('论语', "孔子")); // {name: "论语", author: "孔子", category: "book"}
console.log(new book22('史记', "司马迁")); // {name: "史记", author: "司马迁", category: "book22"}
```

[Function.prototype.call()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
[Function.prototype.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
[Function.prototype.bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)































