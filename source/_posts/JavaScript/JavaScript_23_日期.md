---
title: js 日期
date: 2023-03-21
categories: 
- js
tags:
- js
---

js常用日期函数, js常用日期函数

<!-- more -->

### 常用日期函数

```js
// let dateStr = "2024-02-02"
let dateStr = "2024-02-02ssssssss"
var date = new Date(dateStr + 'T00:00:00'); // will be in local time
isNaN(date.valueOf()); // 判断日期是否有效
console.log(isNaN(date.valueOf()));

// 获取当前时间戳(毫秒)
new Date().getTime();
new Date('2025-01-18 11:50:00').getTime() // 指定日期时间戳(毫秒)
+new Date('2025-01-18') // 指定日期时间戳(毫秒); 含义相当于调用 Date.prototype.valueOf()方法
new Date('2025-01-18 11:50:00').valueOf() // 指定日期时间戳(毫秒)

```

1. [Date.prototype.valueOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf)

### 时间计时器

```js
// 借助一下 dayjs 时间库
let form = {feiTime: undefined}
let timer = null
const setTime = () => {
  timer = setTimeout(() => {
    form.reportTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
    setTime()
  }, 1000)
}
const clearTimeoutFn = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}
```

### 日期时间范围判断

```js
// 方法01: 简单比较日期
// 这种方法的前提是格式是固定的,比较的原理是基于 ASCII 码表来进行比较,如果ASCII码值大,那就是大。
const today = '2025-01-20'
const start = '2025-01-18'
const end = '2025-01-25'
let statusName = ''
if (start < today && today < end) {
  statusName = '正在进行'
} else if (start > today) {
  statusName = '未开始'
} else if (end < today) {
  statusName = '已结束'
}
console.log(statusName)

// 方法02: 比较2个日期和时间
const today = new Date().getTime()
const start = new Date('2025-01-18 11:50:00').getTime()
const end = new Date('2025-01-25 11:50:00').getTime()
let statusName = ''
if (start < today && today < end) {
  statusName = '正在进行'
} else if (start > today) {
  statusName = '未开始'
} else if (end < today) {
  statusName = '已结束'
}
console.log(statusName) // 结果

// 方法03: 比较2个日期
function compareDates(date1, date2) {
  const d1 = new Date(date1).getTime()
  const d2 = new Date(date2).getTime()

  if (d1 === d2) {
    return 0 // 日期相同
  } else if (d1 > d2) {
    return 1 // 日期d1晚于日期d2
  } else {
    return -1 // 日期d1早于日期d2
  }
}
console.log(compareDates('2025-01-01', '2025-01-02')) // -1
console.log(compareDates('2025-01-03', '2025-01-03')) // 0
console.log(compareDates('2025-01-04', '2025-01-03')) // 1

```



## 扩展知识

```js
// 扩展知识
const d = new Date()
const fei1 = d.getTime() // => 1331759119227
const fei2 = d.valueOf() // => 1331759119227
const fei3 = +d // => 1331759119227
console.log(fei1)
console.log(fei2)
console.log(fei3) // 结果: 这三个值都是一样的


```

### `getTime()`和 `valueOf()`的区别

```js
#date.getTime() 和 date.valueOf() 的区别

new Date().getTime() //1331759119227
new Date().valueOf() //1331759119227
这2个都会返回一个该对象所对应的毫秒数


getTime()常用于显示的调用，而valueOf()通常是隐式调用
如果，你需要把当前，或者某个指定的时间的Date对象转换或者说获取到一个number类型的毫秒数， 那么首要方法就是通过getTime()， 而不是valueOf()

为什么呢？怎么体现隐式调用？
通常，有一个场景是比较容易体现关于valueOf() 方法的隐式调用的：
// 值大小比较
在值的大小比较时，如果有任一操作数是对象，则会调用其valueOf()方法，取得结果后在去比较。 所以，
let firstTimeNode = new Date('2025-01-18');
let laterTimeNode = new Date('2025-01-25');
console.log(firstTimeNode > laterTimeNode); // false
console.log(firstTimeNode < laterTimeNode); // true

```

[`getTime 和 valueOf`](https://stackoverflow.com/questions/9710136/in-javascript-why-do-date-objects-have-both-valueof-and-gettime-methods-if-they/9710267#9710267)

```js
```



### 底部

没有了





















