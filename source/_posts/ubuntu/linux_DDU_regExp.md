---
title: -RegExp 正则
date: 2014-01-04
categories: 
- RegExp
tags:
- RegExp
---
`Regular Expression` 简写 `RegExp`  正则表达式
`Regular Expression` 简写 `RegExp`  正则表达式
`Regular Expression` 简写 `RegExp`  正则表达式

<!-- more -->

### 基本常见

```javascript
// ^  开始位置  $ 结束位置
// [具体内容]{次数}

^[a-z0-9_-]{3,15}$
```

![正则](/img/ubuntu/linux_command/linux_regexp/regexp.png "正则")

### 以`JavaScript`为例

```javascript
/^[0-9]*$/g.test("123456798_fei"); // false
/^[0-9]*/g.test("123456798_fei"); // true


"123".match(/^[0-9]*$/g); // ["123"]
"123".match(/^\d*$/g); // ["123"]
"123_fei".match(/^[0-9]*$/g); // null


"123_fei_456_foo_789".match(/\d{3}/g); // ["123", "456", "789"]
"123_fei_456_foo_789".match(/[0-9]{3}/g); // ["123", "456", "789"]
"12_fei_34  56_fei_78  0_fei_9".match(/\d{1,3}/g); // ["12", "34", "56", "78", "0", "9"]


"123@qq.com---456@gmail.com".match(/\d*@[\w]+[.]{1}\w+/g);// ["123@qq.com", "456@gmail.com"]
```

```javascript
"123_fei_456_foo_789".replace(/[0-9]{3}/g,",");   
",_fei_,_foo_,"

"123_fei_456_foo_789".replace(/(?=[0-9]{3})/g,",");  // (?=pattern)
",123_fei_,456_foo_,789"

"123_fei_456_foo_789".replace(/(?=\B[0-9]{3})/g,","); //  \B
"123_fei_,456_foo_,789"
```

![正则](/img/ubuntu/linux_command/linux_regexp/RegExp_02.png "正则")

### 手机号变`*`

```javascript
// 中间4为变为*号
"13685468080".replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2") 
```

### 去除空格

```javascript
"bar  ".replace(/(^\s*)|(\s*$)/g, "")
```

### 匹配二级目录

```javascript
let dirname = window.location.pathname;
let arr = dirname.match(/(\/.*\/)/g);
console.log(arr);
if (arr) { // 如果是二级目录
  console.log(arr[0].split("/"));
}
```

[常用正则表达式](https://c.runoob.com/front-end/854/)

[正则_菜鸟教程](https://www.runoob.com/regexp/regexp-metachar.html)

[MDN_正则](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)































