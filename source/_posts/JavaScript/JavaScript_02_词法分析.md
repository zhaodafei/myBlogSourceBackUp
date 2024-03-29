---
title: -JavaScript  词法分析期  执行期
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---

词法分析期  执行期
词法分析期  执行期
词法分析期  执行期

<!-- more -->

###   词法分析期  执行期

```javascript
    /**
     * 第一步: 先分析参数
     * 第二部: 在分析变量声明
     * 第三个: 分析函数声明
     *
     * 一个函数就能使用的局部变量,就从上面的3步分析而来
     *
     * 具体步骤:
     * 0: 函数运行前的一瞬间,生成 Active Object(活动对象),下称为 AO
     * 1:把声明的参数,形成 AO 的属性,值全是 undefined
     * 2:分析变量声明声明声明!!! 如 var age
     *      如果 AO 上还没有 age 属性,则添加 AO 属性,值是 undefined
     *      如果 AO 上已经有 age 属性,则不做任何影响
     * 3: 分析函数声明,如 function foo(){}
     *      则把函数赋给 AO.foo 属性
     *      注: 如果此前 foo 属性已经存在,则被无情覆盖了
     */
```

### demo_1

```javascript
//分析过程
// AO {age:unfettered}
// 运行过程:
// t(5)-->AO.age=5; alert(AO.age);  //5
// t()--->AO.age 没得到复制,还是 undefined

function t(age) {
    alert(age)
}

t(5); // 输出 5
t(); //输出undefined
```

### demo_02

```javascript
/**
 *  分析过程:
 *  0: 形成 AO={}
 *  1: 分析形参 AO = {age:undefined}
 *     接受形参 AO= {age:5}
 *  2: 分析 var age ,发现 AO 已经有 age属性,不做任何影响
 *
 *  执行过程:
 *   console.log(age);  //66
 *   AO.age = 66;
 */
function t2(age) {
    var age= 66;
    console.log(age); //输出66
}

t2(5);
```

### demo_03

```javascript
/**
 *  词法分析过程:
 *      0: AO = {}
 *      1: 分析参数 AO = {greet:undefined}
 *      2: 分析 greet 变量声明, AO 已经有greet 属性,因此不做任何影响
 *      3: 分析 greet 函数声明, AO.greet = function(){}, 被覆盖成函数
 *  执行过程
 *      console.log(greet);
 *      greet = 'hello';
 *      console.log(greet);
 *      console.log(greet);
 */
function t3() {
    console.log(greet);// 输出greet() {}
    var greet = 'hello';
    console.log(greet);// 输出 hello
    function greet() {
    }

    console.log(greet);// 输出 hello
}

t3(null);
```

### demo_04

```javascript
/**
 *  词法分析过程:
 *      0: AO = {}
 *      1: 分析参数 AO = {greet:undefined}
 *      2: 分析 greet 变量声明, AO 已经有greet 属性,因此不做任何影响
 *      3: 分析 greet 函数声明, AO.greet = function(){}, 被覆盖成函数
 *  执行过程
 *      console.log(greet);
 *      console.log(greet);
 *      console.log(greet);
 */
function t3() {
    console.log(greet);// 输出 greet() {}
    var greet;
    console.log(greet);// 输出 greet() {}
    function greet() {
    }

    console.log(greet);// 输出 greet() {}
}

t3(null);
```

### demo_05

```javascript
/**
 * 分析
 * 0: AO = {}
 * 1: 分析参数 AO ={b:undefined}
 *    接受参数 AO = {b:2}
 * 2: 分析 var 声明,此函数没有 var
 * 3: 分析函数声明, AO = {b:function(){console.log(b);}}
 *
 * 执行期:
 * console.log(b)  //function
 * b();  //由作用域寻找到 a 函数中的 b , 即 function , console.log() 出来
 */
function a(b) {
    console.log(b); // 输出 b() { console.log(b); }   ****注意这里的注释也会被输出***
    function b() {
        console.log(b); // 输出 b() { console.log(b); }  ****注意这里的注释也会被输出***
    }

    b();
}

a(2);
```

### demo_06

```javascript
/**
 * 词法分析
 *      0: AO = {}
 *      1: 分析参数 AO = {b:undefined} --> {b:2}
 *      2: 分析 var 声明,没有
 *      3: 分析函数声明???  [没有!!!]!!!***
 *
 *      (注: b = function(){} ,是一个赋值过程,在执行期才有用)
 *
 * 执行过程
 *  console.log(b);
 *  b = function(){ console.log(b);  }
 *  console.log(b);
 */
function a(b) {
    console.log(b);  //输出 2
    b = function () {
        console.log(b); // b() { console.log(b); }  ****注意这里的注释也会被输出***
    };
    b();
}

a(2);
```

### demo_07  函数声明  函数赋值

```javascript
        // 这两种方式 效果不同
        // t1 是函数声明,虽然全局内也得到一个 t1 变量,值是 function
        // 而 t2 只是一个复制过程----值是谁? 值是右侧的表达式的返回结果,即函数
        // 就是说 function (){} 在js 看来,就和 2*4  8/4 一样,是一个表达式,返回一个结果
        // 因此 , t1 t2 两种方式在词法分析是,有这本质的区别
        // 前者 在词法分析阶段,就发挥作用
        // 而后者,在运行阶段,才发挥作用
        function t1() {
        }

        t2 =function () {
        }
```

### jQuery 最外层代码分析

```javascript
//----------------- jQuery 最外层代码分析---------------
(function (window, undefined) { }) //内层表达式.返回值是函数,包括在小括号李,当成表达式来执行
(function (window, undefined) { }(window)) //立即调用
// 而内层函数又没有起名字,成为匿名函数
// 这种手法,匿名函数,立即执行,不污染全局, 称为 立即执行匿名函数表达式

//------------------  思路: 为什么传 window , 而又不会传 undefined ???--------------
//------------------  传window 是为了速度 --------------
// function () {
//     function () {
//         function () {
//             function () {
//                 document.getElementById........  //这个 document 将会向作用域层层上找,直到最外层
//             }
//         }
//     }
// }
// jQuery 就是为了加快内部查找局部变量的速度,而直接把 window 以参数形式传进来
// 这样 window 就在jQuery 内部 AO 上
// 不传 undefined 是为了安全
// 因为在 IE ,低版本中, undefined 竟然可以重新赋值, 如 undefined = 6;
// 声明 undefined 局部变量( 名字是undefined而已),
// 同时,又不传参,值自然是 undefined 防止了对外界 undefined 的污染
```































