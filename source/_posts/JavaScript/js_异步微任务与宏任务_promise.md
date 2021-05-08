---
title: 异步微任务与宏任务
categories: 
- WEB
- JavaScript
- setTimeout
- Promise
tags:
- setTimeout
- Promise
---
`JavaScript`是单线程执行的,`JavaScript`中的任务按顺序一个一个的执行，但是一个任务耗时太长;那么后面的任务就需要等待,为了解决这种情况,将任务分为了<font color="#ff6b81">同步任务</font>和<font color="#ff6b81">异步任务</font>；而异步任务又可以分为<font color="#ff6b81">微任务</font>和<font color="#ff6b81">宏任务</font>。

### 执行顺序总则

主进程--->微任务-->宏任务   [ 依次循环 ]

```javascript
// 微任务:
process.nextTick
Promise的then方法 [ 注意是then 方法 ] ***************

// 宏任务: ( script 脚本的执行 )
setTimeout
setInterval
```

```javascript
01) JS中用来存储待执行回调的队列包含2个不同特定的队列
02) 宏队列: 用来保存待执行的宏任务(回调),比如: 定时器/DOM事件回调/ajax回调
03) 微队列: 用来保存待执行的微任务(回调),比如: promise的回调/MutationObserver 的回调
04) JS 执行时会区别这2个队列
    04-1) JS引擎首先必须先执行所有的初始化同步代码
    04-2) 每次准备取出第一个宏任务执行前,都要将所有的微任务一个一个取出来执行
```



###  执行顺序 `setTimeout`

`setTimeout` 可以返回一个 ID(数字),可以将这个ID传递给 `clearTimeout()` 来取消执行 [ 不是这次研究的重点]

```javascript
console.log('daFei start');

setTimeout(function() {
    console.log('setTimeout_1');
}, 1000);
setTimeout(function() {
    console.log('setTimeout_0');
}, 0);

console.log('daFei end');

// 输出结果
// daFei start
// daFei end
// setTimeout_0
// setTimeout_1
```

###  执行顺序 `Promise`

```javascript
new Promise(function (resolve, reject) {
    console.log("第一次执行___1111");
    resolve("返回结果给第一个then___2222");
}).then(function (value_1) {
    console.log(value_1);
    return "返回结果给下一个then___3333";
}).then(function (value_2) {
    console.log(value_2);
    throw "剖出异常__catch捕获";
}).catch(function (err) {
    console.log(err);
});

// 第一次执行___1111
// 返回结果给第一个then___2222
// 返回结果给下一个then___3333
// 剖出异常__catch捕获   
```


![setTimeout_Promise](/img/z_interview/setTimeout_Promise.png "setTimeout_Promise")

###  执行顺序 `setTimeout` 和 `Promise`

```javascript
console.log('---1');

setTimeout(function () {
    console.log('---5');
}, 0);

new Promise(function (resolve, reject) {
    console.log("同步执行 ---2");
    resolve("返回结果给第一个then");
}).then(function (value_1) {
    console.log(value_1, "---4");
})

console.log('---3');

// 结果; 1,2,3,4,5
// ---1
// 同步执行 ---2
// ---3
// 返回结果给第一个then ---4
// ---5
```

### 执行顺序demo

```javascript
setTimeout(() => { // 立即放入宏队列
    console.log("timeout callBack1()---3");
}, 0);
setTimeout(() => { // 立即放入宏队列
    console.log("timeout callBack2()---4");
}, 0);
Promise.resolve(1).then( // 立即放入微队列
    value => {
        console.log("Promise onResolved1()---1", value);
    }
);
Promise.resolve(2).then( // 立即放入微队列
    value => {
        console.log("Promise onResolved2()---2", value);
    }
);

// 结果; 1,2,3,4
// Promise onResolved1()---1 1
// Promise onResolved2()---2 2
// timeout callBack1()---3
// timeout callBack2()---4
```

### 执行顺序demo2

```javascript
setTimeout(() => { // 立即放入宏队列
    console.log("timeout callBack1()---3");
    Promise.resolve(4).then( // 立即放入微队列 ********************
        value => {
            console.log("Promise onResolved3()---4", value);
        }
    );
}, 0);
setTimeout(() => { // 立即放入宏队列
    console.log("timeout callBack2()---5");
}, 0);
Promise.resolve(1).then( // 立即放入微队列
    value => {
        console.log("Promise onResolved1()---1", value);
    }
);
Promise.resolve(2).then( // 立即放入微队列
    value => {
        console.log("Promise onResolved2()---2", value);
    }
);
// 结果; 1,2,3,4,5
// Promise onResolved1()---1 1
// Promise onResolved2()---2 2
// timeout callBack1()---3
// Promise onResolved3()---4 4
// timeout callBack2()---5
```
### 执行顺序demo3

```javascript
setTimeout(() => {
    console.log("---4");
}, 0);

Promise.resolve().then(() => {
    console.log("---2");
});

Promise.resolve().then(() => {
    console.log("---3");
});
console.log("---1");
// 结果; 1,2,3,4
// ---1
// ---2
// ---3
// ---4
```
### 执行顺序demo4

```javascript
setTimeout(() => {
    console.log("---5");
}, 0);
new Promise((resolve) => {
    console.log("---1");
    resolve();// *******************
}).then(() => {
    console.log("---3");
}).then(() => {
    console.log("---4");
});
console.log("---2");
// 结果; 1,2,3,4,5
// ---1
// ---2
// ---3
// ---4
// ---5
```
### 执行顺序demo5

```javascript
const first = () => (new Promise((resolve, reject) => {
    console.log("---1");
    let p = new Promise((resolve, reject) => {
        console.log("---2");
        setTimeout(() => {
            console.log("---6");
            resolve(7);//[这个值不会输出]  状态只能改变一次, 在 resolve(4) 已经改变了一次
        }, 0);
        resolve(4);// 改变p的状态
    });
    resolve(5); // 改变first 的状态
    p.then((arg) => {
        console.log("---4",arg);
    });
}));

first().then((arg) => {
    console.log("---5",arg);
});

console.log("---3");
// 结果; 1,2,3,4,5,6
// ---1
// ---2
// ---3
// ---4 4
// ---5 5
// ---6
```
### 执行顺序demo6

```javascript
setTimeout(() => {
    console.log("---9");
}, 0);
new Promise((resolve, reject) => {
    console.log("---1");
    resolve();
}).then(() => {
    console.log("---3");
    new Promise((resolve, reject) => {
        console.log("---4");
        resolve();
    }).then(() => {
        console.log("---6");
    }).then(() => {
        console.log("---8");
    })
}).then(() => {
    console.log("---7");
});

new Promise((resolve, reject) => {
    console.log("---2");
    resolve();
}).then(() => {
    console.log("---5");
});
// 结果; 1,2,3,4,5,6,7,8,9
// ---1
// ---2
// ---3
// ---4
// ---5
// ---6
// ---7
// ---8
// ---9
```


 [setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout "setTimeout")

[对微任务和宏任务的执行顺序的个人理解](https://zhuanlan.zhihu.com/p/257069622)

[JS事件循环机制(event loop)之宏任务/微任务](https://juejin.cn/post/6844903638238756878)



















