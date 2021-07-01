---
title: call apply bind 的用法以及区别
categories: 
- JavaScript
tags:
- JavaScript
---
call apply bind 的用法以及区别
call apply bind 的用法以及区别
call apply bind 的用法以及区别

***相同之处***:  改变函数体内`this`的指向

***不同之处***: 

>call、apply的区别：接受参数的方式不一样。
>
>bind：不立即执行。而apply、call 立即执行。

### 改变`this`指向

```javascript
function Book(name){
    this.name = name;
}

Book.prototype = {
    constructor: Book,
    showName: function () {
        console.log(this.name);
    }
};
var Book = new Book('论语');
Book.showName(); // 输出: 论语

var news = {
    name: '人民日报'
};

// 输出:  人民日报
Book.showName.call(news);
Book.showName.apply(news);
Book.showName.bind(news)(); // 不会立即执行，需要调用
```



### 接受参数不一样

```javascript
Math.min.apply(Math, [1,5,9,3,5,7]);
Math.min.call(Math, 1,5,9,3,5,7);

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





















