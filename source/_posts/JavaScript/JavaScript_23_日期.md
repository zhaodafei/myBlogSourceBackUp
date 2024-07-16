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

<!-- more -->

### 常用日期函数

```js
  // let dateStr = "2024-02-02"
  let dateStr = "2024-02-02ssssssss"
  var date = new Date(dateStr + 'T00:00:00'); // will be in local time
  isNaN(date.valueOf()); // 判断日期是否有效
  console.log(isNaN(date.valueOf()));
```

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





### 底部

没有了





















