---
title: dayjs处理时间和日期库
date: 2023-07-28
categories: 
- dayjs
tags:
- dayjs
---
dayjs处理时间和日期库
dayjs处理时间和日期库
dayjs处理时间和日期库
官网地址: [dayjs](https://dayjs.gitee.io/zh-CN/ "dayjs")



<!-- more -->

### 常见功能

```js
dayjs().format('YYYY-MM-DD HH:mm:ss');  // 当前时间 2008-06-17 22:22:22
dayjs(new Date("2008-06-17 22:22:22")).format('YYYY-MM-DD HH:mm:ss'); // 2008-06-17 22:22:22
dayjs("2008-06-17 20:20:20").format('YYYY-MM-DD HH:mm:ss'); // 2008-06-17 20:20:20
dayjs("2008-06-17 20:20:20").add(1, 'day').format('YYYY-MM-DD HH:mm:ss');  // 加一天时间
dayjs("2008-06-17 20:20:20").add(1, 'hours').format("YYYY-MM-DD HH:mm:ss"); // 加一小时

dayjs("2008-06-17 20:20:20").subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss');  // 减一天时间


dayjs("2008-06-17 20:20:20").unix();  // 时间戳(单位秒)
dayjs("2008-06-17 20:20:20").valueOf(); // 时间戳(毫秒)

```

### 计算2个日期之间的差值

```js
console.log(dayjs('2023-07-28').diff('2023-07-26', 'day')) // 2天

let newDay = dayjs().format('YYYY-MM-DD')
let checkDay = dayjs('2023-07-26 20:20:20').format('YYYY-MM-DD')
console.log(dayjs(newDay).diff(checkDay, 'day')) // 需要转化格式
```

### 显示2个日期之间的所有日期

```js
const startDate = dayjs('2022-06-28')
const endDate = dayjs('2022-07-03')
const diff = endDate.diff(startDate, 'day') + 1 // 差额天数

const dates = []
for (let i = 0; i < diff; i++) {
  const date = startDate.add(i, 'day') // 每次加一天
  dates.push(date.format('YYYY-MM-DD'))
}

console.log(dates) // 输出2个日期之间所有日期
```



### 获取当月第一天和最后一天

```js
// 当月1号
let startDay = dayjs().startOf('month').format('YYYY-MM-DD 00:00:00')
// 当月最后一天
let endDay = dayjs().endOf('month').format('YYYY-MM-DD 23:59:59')

console.log(startDay)
console.log(endDay)
```



### 时间相关数字

```js
01) 86400000 // 86400000毫秒: 1天的时间=24小时 x 60分钟 x 60秒 x 1000毫秒 单位是L
			// 即86400000L=24小时*60分钟*60秒*1000毫秒。
02)
```



### 底部

没有了























