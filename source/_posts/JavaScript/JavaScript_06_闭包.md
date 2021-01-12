---
title:  -JavaScript  -闭包
categories: 
- JavaScript
tags:
- JavaScript
---

### 闭包 

一句话概括 :函数的作用域取决于声明时,而不取决于调用时!!!
函数的作用取决于声明时,而非调用时,
函数内部声明变量的时候,一定要用 `var` 命令.如果不用的话,就是声明了一个全局变量

```javascript
function t1() {
    var age = 20;

    function t2() {
        console.log(age)
    }

    return t2;
}

var tmp = t1();

/**
 *  1: 在大部分的语言中, t1 被调用执行,则申请内存
 *  并把其局部变量, push 入栈!!!
 *  t1 函数 执行完毕,内部的局部变量,随着函数的退出而销毁
 *  因此, age = 20 的局部变量,依靠已经消失了
 *
 *  但是在 js 中 , age = 20 这个变量,却被 t2 捕捉,
 *  即使 t1 执行完毕,通过 t2 依然能访问该变量
 *
 *  这种情况---返回的函数,并非孤立的函数,甚至吧其周围的变量环境.
 *  形成了一封闭的"环境包",并同返回,所以叫"闭包"
 *
 *  ----  一句话概括---  函数的作用域取决于声明时,而不取决于调用时!!
 * @type {number}
 */
var age = 99;
tmp();// 输出 20
```

### 函数的作用取决于声明时,而非调用时

```javascript
function closure() {
    var sister = '大桃花';
    var me = function () {
        console.log(sister);
    };
    return me;
}

function place() {
    var sister = '大福晋';
    var girl = closure();
    girl();
}

place();  // 输出 大桃花
```

### 闭包计数器01

```javascript
        // 多个人开发 js 程序,需要一个全局的计数器
        // 多个人的函数共同用一个计数器,计数器一直增长
        /**
         * 解决办法:
         *  1: 设立一个全局变量
         *  window.cat = 0;
         *  调用 ++window.cnt;
         *
         *  这个办法可行,但是污染了全局变量,
         *  其次引入了多人的 js 程序,别人的程序里,也有一个 window.cnt = 'hello';
         *  该计数器就损坏了,(所以要尽量避免用全局变量)
         */
```

### 闭包计数器02  --- 闭包维护一个别人污染不到的变量,做计数器

```javascript
// 闭包维护一个别人污染不到的变量,做计数器
function counter() {
    var cnt = 0; // 当 ccounter 执行完毕后,除了返回的 cnter 函数,谁也别想碰到 cnt 变量了

    var cnter = function () {
        return ++cnt;
    };
    return cnter;
}

var inc = counter();
console.log(inc());
console.log(inc());
console.log(inc());

//-----------简化版-----------
var cnt = (function () {
        var cnt = 0;
        return function () {
            return ++cnt;
        }
    })();

console.log(cnt());
console.log(cnt());
console.log(cnt());
```

### 闭包计数器03  ---在工作中,一般如何避免全局污染或冲突

```javascript
/**
*  疑问: cnt 不依然是全局变量吗?
*  第3版---在工作中,一般如何避免全局污染或冲突
*
*  1: 统一放在一个全局对象上,如 jQuery->$
*  2:每个人用自己的命名空间
*/
// jQuery 的计数插件形式
$ = {};
$.cnt = (function () {
    var cnt = 0;
    return function () {
        return ++cnt;
    }
})();
console.log($.cnt());
console.log($.cnt());
console.log($.cnt());
```

### 闭包计数器04   -- 把自己的变量,函数,都放在一个对象里

```javascript
// 第4版 个人命名空间,在团队开发中也很常见
// 其实就是把自己的变量,函数,都放在一个对象里
var Y18 = {};
Y18.cnt = (function () {
var cnt = 0
return function () {
    return ++cnt;
}
})();
console.log(Y18.cnt());
console.log(Y18.cnt());
console.log(Y18.cnt());

```

### demo 练习

要求:点击 li ,分别弹出 0,1,2,3

```html
<ul>
    <li>男</li>
    <li>女</li>
    <li>老</li>
    <li>少</li>
</ul>
<script type="text/javascript">
    //要求:点击 li ,分别弹出 0,1,2,3
    for (var i = 0, lis = document.getElementsByTagName('li'), len = lis.length; i < len; i++) {
        lis[i].onclick = (function () {
            var p=i;
            return function () {
                return alert(p);
            }
        })();
    }
</script>
```

### demo 2

```javascript
function t1() {
    let age = 20;

    function t2() {
        console.log(age);
    }

    return t2;
}

let fn = t1();
let age = 100;
fn(); // 20
```

### demo 3

```javascript
// 所有函数自由变量的查找是在定义时候,向上级作用域查询,不是在执行的地方
function t1(fn) {
    let a = 20;
    fn();
}

let a = 100;
function t2() {
    console.log(a);
}

// 函数作为参数传递
t1(t2); // 100
```











































































