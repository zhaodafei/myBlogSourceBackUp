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

### js精度问题

```wiki
#乘法,经典数,出现误差, 所以才考虑使用第三方库bignumber.js
138.33 * 100 = 13833.000000000002
3 * 0.3 = 0.8999999999999999
```



### 安装使用

```bash
npm install bignumber.js
```

### 属性`Properties`

> | Property             | Value | Description                                       |
> | :------------------- | :---- | :------------------------------------------------ |
> | **ROUND_UP**         | 0     | 向上取整                                          |
> | **ROUND_DOWN**       | 1     | 向下取整                                          |
> | **ROUND_CEIL**       | 2     | 向上取整，如果是负数如下 -99.1 => -99             |
> | **ROUND_FLOOR**      | 3     | 向下取整，如果是负数如下 -99.9 => -100            |
> | **ROUND_HALF_UP**    | 4     | 四舍五入，大于5向上                               |
> | **ROUND_HALF_DOWN**  | 5     | 四舍五入，小于5向下                               |
> | **ROUND_HALF_EVEN**  | 6     | 向最近的邻居舍入。如果等距，则向偶数邻居舍入      |
> | **ROUND_HALF_CEIL**  | 7     | 向最近的邻居舍入。如果等距，则向四舍五入Infinity  |
> | **ROUND_HALF_FLOOR** | 8     | 向最近的邻居舍入。如果等距，则向四舍五入-Infinity |

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
05-2)第二个参数默认值为4(ROUND_HALF_UP)四舍五入
x = 3.456
y = new BigNumber(x)
x.toFixed()                     // '3'
y.toFixed()                     // '3.456'
y.toFixed(0)                    // '3'
x.toFixed(2)                    // '3.46' (保留2为小数, 第三位进行四舍五入)
y.toFixed(2)                    // '3.46'
y.toFixed(2, 1)                 // '3.45'  (ROUND_DOWN)  向下取整
x.toFixed(5)                    // '3.45600'
y.toFixed(5)                    // '3.45600'

// !!! 注意这个函数用的时候容易和原生js的toFixed用在一起(原生方法是四舍五入) !!!
error = new BigNumber(x)
error.toNumber().toFixed(2, 1)  // 返回的是 3.46
// 正确用法: error.toFixed(2, 1) // 返回 3.45

// 保留整数位
y.toFixed(0,1)                    // '3'
```

### 计算顺序

```js
// 正常数学逻辑: 输出3.2
3.3 -0.3 /3

// 使用 bigNumber 库后,计算是从左往右的; 输出 1
bigNumber(3.3).minus(bigNumber(0.3)).div(bigNumber(3)).toNumber()
```



### 底部

没有了























