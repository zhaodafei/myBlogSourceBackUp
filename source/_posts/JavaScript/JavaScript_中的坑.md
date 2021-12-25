---
title: JavaScript_中的坑
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---
暂无介绍

<!-- more -->

### 排序 `sort`

`MDN` 中说明
sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的<font color="red">UTF-16</font>代码单元值序列时构建的 

```javascript
[3,15,8,29,102,22].sort((a,b)=>{ return a-b}); // 结果 [3, 8, 15, 22, 29, 102]

[3,15,8,29,102,22].sort(); // 结果 [102, 15, 22, 29, 3, 8]

['a_3','a_15','a_8','a_29','a_102','a_22'].sort(); // 结果 ["a_102", "a_15", "a_22", "a_29", "a_3", "a_8"]
```

 [MDN sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "MDN sort")

### 正则`RegExp.prototype.test()` 

`MDN` 中说明

如果正则表达式设置了全局标志，`test() `的执行会改变正则表达式  [`lastIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)属性。连续的执行`test()`方法，后续的执行将会从 `lastIndex` 处开始匹配字符串，([`exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 同样改变正则本身的 `lastIndex属性值`).

```javascript
var regex = /foo/g;

// regex.lastIndex is at 0
regex.test('foo'); // true

// regex.lastIndex is now at 3
regex.test('foo'); // false

```

建议: 使用正则的时候不要加`g`



























