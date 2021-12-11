---
title: -JavaScript   new 操作符具体干了什么呢？如何实现？
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---
`new` 操作符具体干了什么呢？如何实现？
`new` 操作符具体干了什么呢？如何实现？
`new` 操作符具体干了什么呢？如何实现？

<!-- more -->

1. 首先创建了一个新的空对象
2. 设置原型,，将对象的原型设置为函数的 prototype对象
3. 让函数的 this 指向这个对象，执行构造函数的代码(为这个新对象添加属性)
4. 判断函数的返回值类型， 如果是值类型,返回创建的对象。如果是引用类型,就返回这个引用类型的对象

### 具体实现demo:

```javascript
function objectFactory() {
    let newObject = null,
        constructor = Array.prototype.shift.call(arguments),
        result = null;
    // 参数判断
    if (typeof constructor !== "function") {
        console.error("type error");
        return;
    }
    // 新建一个空对象，对象的原型为构造函数的 prototype 对象
    newObject = Object.create(constructor.prototype);
    // 将 this 指向新建对象，并执行函数
    result = constructor.apply(newObject, arguments);
    
    // 判断返回对象   return typeof result === 'object' ? result : newObject;
    let flag = 
        result && (typeof result === "object" || typeof result === "function");

    // 判断返回结果
    return flag ? result : newObject;
}



// 调用,测试
function Books (name, author) {
    this.name = name;
    this.author = author;
}

var book = objectFactory(Books, '论语', '孔子');
console.log(book.name);  // 论语
console.log(book.author);  // 孔子
```



### 扩展

[new 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

[Object.create()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

[Array.prototype.shift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)





























