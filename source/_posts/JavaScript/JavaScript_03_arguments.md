---
title:  -JavaScript arguments
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---

argumets 是什么? 

答: 是一个对象,是一个长得很像数组的对象  

arguments 内容是什么???  

答: arguments是函数运行时的实体参数列表

<!-- more -->

```javascript
/**
* 函数运行期内,关键的三个对象
*  AO -----> 本函数 AO 上没有某属性,则继续去外层函数的
*  arguments -----> 每个函数都有自己的 callee ,但 不 向外层接着找 arguments 的相关属性,即 不形成链
*  this
 */
```

### demo_01   arguments 是什么?

```javascript
(function (d, e, f) {
    // 在此函数中无法用 d,e,f 形参来取的 'haha',因为没有相对应的形参
    // 但我们可以用 arguments 来获取任意多个的实参
    console.log(typeof  arguments); // 输出 object
    console.log(arguments);  // 对象
    console.log(arguments[0]); // hello -->长得像数组
    console.log(arguments[1]);
    console.log(arguments[3]);
})('hello', 'world', '!', 'haha');
```

### arguments 实际内容

```javascript
(function (d, e, f) {
    console.log(d); // 输出 hello
    arguments[0] = 'China';
    console.log(d); // 输出 China ; 形参与对应的 arguments 单元,其实是互相映射的,互相影响
})('hello', 'world', '!', 'haha');

//---------------------------------------
(function (d, e, f) {
    console.log(arguments.length); // 输出长度 4 ; 实参个数
})('hello', 'world', '!', 'haha');
```

### 递归 arguments.callee

```javascript
(function (d, e, f) {
    console.log(arguments.callee); // 输出  function(d, e, f) { console.log(arguments.callee); }
})('hello', 'world', '!', 'haha');

//-----------------------------
// 递归 , 求和,输出 5050
console.log(
    (function (n) {
        if (n <= 1) {
            return 1;
        } else {
            return n + arguments.callee(n - 1);
        }
    })(100)
);
```

































