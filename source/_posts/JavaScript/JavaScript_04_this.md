---
title: -JavaScript -this
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---

js 的 this 到底是谁???  js 中函数的4中调用方式

<!-- more -->

### 1). 作为普通函数来调用

```javascript
/**
 *  console.log(window.xxx);
 *  1: 作为普通函数来调用时,
 *  this 的值指向-->window
 *  准确的说,this 为 null ,但被解释成 window
 *  在 ECMAScript 表准中, 如果 this 为 null ,则解释成 undefined
 */
console.log(window.xxx); //undefined
function t() {
    this.xxx = 333;
}

t();
console.log(window.xxx);// 输出 333

function test() {
    console.log(this.test_window);
}
test(); //输出  undefined
```

### 作为对象的方法来调用

```javascript
/**
 * 2: 作为对象的方法来调用
 * this 指向方法的调用这,即该对象
 */
var obj = {
    xx: 99, yy: 88, t: function () {
        console.log(this.xx);
    }
};
obj.t();  // 输出 99

var dog = {xx: 'wangwang'};
dog.t = obj.t;
dog.t(); // 输出 wangwang

/**
 * 作为方法调用时,
 * this 指向其调用那一刻的调用者,即母体对象
 * 不管被调用函数,声明时属于方法,还是函数
 */
show = function () {
    console.log('show' + this.xx);
}
dog.t = show;
dog.t(); // show wangwang
```

### 函数作为构造函数调用时

```javascript
/**
 * 3: 函数作为构造函数调用时
 *  js 中没有类的概念,创建对象是用构造函数来完成,或者直接用json格式{}来写对象
 *
 *  new Dog 发生了一下几个步骤
 *  a: x系统创建空对象 {} ,(空对象 constructor 属性指向 Dog 函数,先别管)
 *  b: 把函数的 this --> 指向-->该空对象
 *  c: 执行该函数
 *  d: 返回该对象
 */
function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function () {
        console.log('this is ' + this.name);  //输出 this is huzi
    }
}

var dog = new Dog('huzi', 2);
dog.bark();

// 下面这个返回什么???
// 分析: 输出 Pig对象:  Pig {age: 99}; 因为函数作为构造函数运行时,return 的值是忽略的,还是返回对象
function Pig() {
    this.age = 99;
    return 'abc';
}

var pig = new Pig();
console.log(pig);
```

### 函数通过 call , apply 调用

```javascript
/**
 *  4. 函数通过 call , apply 调用
 *     语法格式: 函数.call(对象,参数,参数,参数,参数........参数N.)
 */
function t(num) {
    console.log('我的真实年龄是' + this.age);
    console.log('但是我一般告诉别人我' + (this.age + num));
}
//
var humanObject = {name: 'lisi', age: 28};

// 我的真实年龄是28
// 但是我一般告诉别人我18
humanObject.t = t;
humanObject.t(-10);

// 接下来,我们不把 t 赋值为 human 的属性,也能把 this 指向 human
// 运行结果:
//      我的真实年龄是30
//      但是我一般告诉别人我35
// 分析:
// fn.call(对象obj,参数1,参数2,....参数N)
//
// 运行如下:
// a):  fn 函数中的 this--->指向----->obj
// b):  运行 fn(参数1,参数2.....参数N);
var wangwuObject = {name: 'wangwu', age: 30};
t.call(wangwuObject, 5);
// t.apply(wangwuObject,[5]);

```

### demo 练习

```javascript
name = 'this is window';

var obj = {
    name: 'php', t: function () {
        console.log(this.name)
    }
};
var dog = {name: 'huzi'};
obj.t();  // 输出 php

var tmp = obj.t;
tmp(); //相当于window.tmp()  输出: this is window

dog.t = obj.t;
dog.t(); //输出 huzi

(dog.t = obj.t)(); //输出 this is window
(function(){console.log(this.name)})(); //输出 this is window
// 分析
// (dog.t = obj.t) 是一个表达式,返回值值"值",即 t 函数
// 强调是值,说明不是通过应用来调用的,而是立即使用函数本身
// 效果等同于 (function(){console.log(this.name)})
// null 又被解释成 window
```

### 其他 window 全局变量污染

```javascript
/**
 *  有一些经验的,但对 js 理解的不深的同学说:
 *  有 this 操作的,(如 this.age=xx ) 的函数不能直接用,而是要new 来调用?????
 *  答: 因为直接用, this 会指向 window ,将会污染去全局变量
 */
```









































