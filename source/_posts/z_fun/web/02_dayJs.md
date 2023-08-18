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



### 底部

没有了























