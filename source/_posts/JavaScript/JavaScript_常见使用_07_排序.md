---
title: 标题demo模板
date: 2024-04-12
categories: 
- 计算机
tags:
- 编程
---
demo模板
demo模板
demo模板
下面more是分隔符

<!-- more -->

### 对象数组排序

```js
  let result = [
    {id: 1, name: '张三'},
    {id: 3, name: '李四'},
    {id: 2, name: '王五'},
    {id: 10, name: '马六'},
    {id: 7, name: '大飞'}
  ]

  function sortId(a, b) {
    if (a.id > b.id) {
      // 若 a 大于 b，则返回一个大于 0 的值
      return 1
    } else if (a.id < b.id) {
      // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值
      return -1
    } else {
      // 若 a 等于 b，则返回 0。
      return 0
    }
  }

  // sortId 和 sortId2 等效
  function sortId2(a, b) {
    return a.id - b.id
  }

  // result.sort(sortId);
  result.sort((a,b)=>{
    if (a.id > b.id) {
      // 若 a 大于 b，则返回一个大于 0 的值
      return 1
    } else if (a.id < b.id) {
      // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值
      return -1
    } else {
      // 若 a 等于 b，则返回 0。
      return 0
    }
  });


// 输出结果
  [
    {"id": 1, "name": "张三"},
    {"id": 2, "name": "王五"}, 
    {"id": 3, "name": "李四"}, 
    {"id": 7, "name": "大飞"}, 
    {"id": 10, "name": "马六"}
  ]
```




### 底部

没有了























