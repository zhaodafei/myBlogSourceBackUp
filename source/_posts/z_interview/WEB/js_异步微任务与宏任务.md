---
title: 异步微任务与宏任务
categories: 
- WEB_JavaScript
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
Promise的then方法 [ 注意是then 方法 ]

// 宏任务:
setTimeout
setInterval
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
console.log('daFei start'); // 01  

setTimeout(function() {
    console.log('setTimeout_0'); // // 05
}, 0);

new Promise(function (resolve, reject) {
    console.log("Promise第一次执行___1111");    // 02  
    resolve("返回结果给第一个then___2222");
}).then(function (value_1) {
    console.log("Promise第二次"+value_1); // 04
})

console.log('daFei end'); // 03


// daFei start
// Promise第一次执行___1111
// daFei end
// Promise第二次返回结果给第一个then___2222
// setTimeout_0  
```

![setTimeout_Promise](/img/z_interview/setTimeout_Promise2.png "setTimeout_Promise")

 [setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout "setTimeout")

[对微任务和宏任务的执行顺序的个人理解](https://zhuanlan.zhihu.com/p/257069622)

[JS事件循环机制(event loop)之宏任务/微任务](https://juejin.cn/post/6844903638238756878)



















