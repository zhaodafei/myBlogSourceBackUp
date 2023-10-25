---
title: bignumber数量计算库
date: 2023-07-28
categories: 
- bignumber
tags:
- bignumber
---
`bignumber.js`数量计算库
`bignumber.js`数量计算库
`bignumber.js`数量计算库
官网地址: [bignumber.js](https://mikemcl.github.io/bignumber.js/ "bignumber.js")



<!-- more -->

### 安装使用

```bash
npm install bignumber.js
```



### 常见功能

```js
let a = new BigNumber(3);
let b = new BigNumber(0.3);
// 加减乘除
console.log(a.plus(b).toNumber()); // 3.3
console.log(a.minus(b).toNumber()); // 2.7
console.log(a.multipliedBy(b).toNumber()); // 0.9
console.log(a.div(b).toNumber()); // 10

```

### 其他

```js
01) 小于等于  isGreaterThanOrEqualTo
02) 保留4位数,有逗号  BigNumber(10.123).toFormat(4) // 12,310.1230
03) 保留4位数,无逗号  BigNumber(10.123).toFormat(4) // 12310.12
04) 移位获取到前三位数 shiftedBy
    let x = new BigNumber(0.123)
    x.shiftedBy(3).toNumber()

05)小数位数处理: toFixed 中第二个参数确定取舍方法
x = 3.456
y = new BigNumber(x)
x.toFixed()                     // '3'
y.toFixed()                     // '3.456'
y.toFixed(0)                    // '3'
x.toFixed(2)                    // '3.46'
y.toFixed(2)                    // '3.46'
y.toFixed(2, 1)                 // '3.45'  (ROUND_DOWN)  向下取整
x.toFixed(5)                    // '3.45600'
y.toFixed(5)                    // '3.45600'
```



### 底部

没有了























