---
title: JavaScript_中的坑
categories: 
- JavaScript
tags:
- JavaScript
---
### 排序 `sort`

`MDN` 中说明
sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的<font color="red">UTF-16</font>代码单元值序列时构建的 

```javascript
[3,15,8,29,102,22].sort((a,b)=>{ return a-b}); // 结果 [3, 8, 15, 22, 29, 102]

[3,15,8,29,102,22].sort(); // 结果 [102, 15, 22, 29, 3, 8]

['a_3','a_15','a_8','a_29','a_102','a_22'].sort(); // 结果 ["a_102", "a_15", "a_22", "a_29", "a_3", "a_8"]
```

 [MDN sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "MDN sort")





























