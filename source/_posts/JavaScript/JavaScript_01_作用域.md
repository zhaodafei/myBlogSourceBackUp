---
title:  -JavaScript 作用域   词法分析
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---

### 注意
​          以 window.xxx 引用全局变量寻找不到,作为某个属性不存在,返回 undefined
​          直接以 xxx 引用某变量,寻找不到,则是报错 xxx is not defined 错误       

<!-- more -->

### 作用域 入门

```javascript
var test;
console.log(test); // 输出 undefined
console.log(test2); //报错 test2 is not defined
```

### 词法分析入门

```javascript
/**
* 词法分析 入门
* js 代码自上而下执行!!!
*
* 但是---------
* js 代码在整体运行分:
* 词法分析期
* 运行期
*
* 自上而下执行,先有个一个"词法分析过程"!!!
*/
// 分析 词法分析期 var test_1;  赋值期 tes_1='fei';
var test_1 = 'fei';
console.log(test_1); //输出 fei
console.log(window.test_1); //输出 fei
```

###  作用域  demo

```javascript
/**
 * 作用域
 * 在js中,函数嵌套是非常普遍的
 * 在函数嵌套中,
 *
 * 对变量是如何寻找的?
 * 答:首先在函数内寻找
 * 寻找不到,则往外层寻找
 * 直到....全局(window)
 */
var c = 5;
function t1() {
    var d = 6;
    function t2() {
        var e = 7;
        alert(c + d + e);
    }

    t2();
}
t1(); //输出 18
//----------------------------
var c = 5;
function t1() {
    var d = 6;
    function t2() {
        var e = 7;
        var d=3;
        alert(c + d + e);
    }

    t2();
}
t1(); //输出 15
```

### 声明变量 var 的作用

```javascript
/**
 * 声明变量 var 的作用
 * var 是在函数运行的上下文中,声明一个变量
 * 如果不加 var , 则是一个赋值操作
 * 但不要狭隘的理解为----声明了一个全局变量
 */
alert(window.d);//输出 undefined
alert(window.e);//输出 undefined
function t() {
    d = 5;//赋值操作
    var e = 6;
}

t();
// 5   d没有加 var 仅仅是一个赋值操作,
// 寻找t域内的函数,没有找到继续寻找...直到..>window,最后 window.d = 5
alert(window.d); // 输出 5
alert(window.e); //输出 undefined
//----------------------------------
function t1() {
    var  d;
    function t2() {
        d = 5;
        e = 6;
    }

    t2();
}

t1();

console.log(e);  // 输出 6
console.log(d);  //报错 is not defined
console.log(window.e); //输出 6
console.log(window.d); //输出 undefined
```

###  作用域 demo 2

```javascript
var str1 = 'global';

function t1() {
    // 分析
    // 这里 str1 这一行执行,在 t1 内寻找 str1--没有找到,又在 window 上寻找 str1--有,打印global
    // 这里 str2 这一行执行,在 t1 内寻找 str2--没有找到,又在 window 上寻找str2--没有,报错 str2 is not defined
    console.log(str1); // 输出 global
    console.log(str2); // 报错 is not defined
    // console.log(window.str1);// 输出 global
    // console.log(window.str2);// 输出 undefined

    // 分析
    // 如果执行到这里,才会把全局的 str2变量赋上值
    str2 = 'local';
    // console.log(str1); // 输出 global
    // console.log(str2); // 报错 local
    // console.log(window.str1);// 输出 global
    // console.log(window.str2);// 输出 local
}

t1();
```

### 词法分析期   运行期

```javascript
/*
 * 1步:先分析 t1 函数
 * t(){
 *     var str2;  // 分析 t1 内有str2 局部变量,注意此时函数没有执行,因此str2 的值是 undefined
 * }
 *
 * 2步:执行 t1 函数
 *       console.log(str1); //global
 *       console.log(str2); //undefined
 *       str2 = 'local'; //此时,str 的值为 local
 */
var str1 = 'global';

function t1() {
    console.log(str1); // 输出 global
    console.log(str2); // 报错 undefined
    console.log(window.str1);// 输出 global
    console.log(window.str2);// 输出 undefined

    var str2 = 'local';
}

t1();
```

### 扩展 const、let、var之间的区别 ..........



