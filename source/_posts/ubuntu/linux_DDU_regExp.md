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

### $符号正则(插入语)

插入语: 任何正则表达式的插入语都会使这部分匹配的副字符串被记忆

[插入语](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#%E4%BD%BF%E7%94%A8%E6%8F%92%E5%85%A5%E8%AF%AD)

```javascript
// $1,$2,$3... 可以保留原来的内容
let str_fei = '欢迎[[123]]登录大飞[[135管理系统,初次密码为[[456]]，请放心使用!'
// str_fei = str_fei.replace(/(\d+)/g,'=abc')
// str_fei = str_fei.replace(/(\[\[\d+)/g,'abc')
// str_fei = str_fei.replace(/(\[\[\d+\]\])/g,'abc')

// str_fei = str_fei.replace(/(\d+)/g,'$1_abc')
// str_fei = str_fei.replace(/(\[\[\d+)/g,'$1_abc')
str_fei = str_fei.replace(/(\[\[\d+\]\])/g,'$1_abc')

console.log(str_fei);
```

```javascript
// 将yyyy-mm-dd格式转换为年月日格式
let str_fei2 = "2023-05-01"
let reg =/(\d{4})\-(\d{2})\-(\d{2})/;
let foo = str_fei2.replace(reg,"$1年$2月$3日")
console.log(foo);
```

### 可变正则

```js
//官方原话: 以下三种表达式都会创建相同的正则表达式：
/ab+c/i; //字面量形式
new RegExp('ab+c', 'i'); // 首个参数为字符串模式的构造函数
new RegExp(/ab+c/, 'i'); // 首个参数为常规字面量的构造函数
```

当表达式被赋值时，字面量形式提供正则表达式的编译（compilation）状态，当正则表达式保持为常量时使用字面量。例如当你在循环中使用字面量构造一个正则表达式时，正则表达式<font color="#ff6b81">不会</font>在每一次迭代中都被重新编译（recompiled）。

而正则表达式对象的构造函数，如 `new RegExp('ab+c')` 提供了正则表达式运行时编译（runtime compilation）。如果你知道<font color="#ff6b81">正则表达式模式将会改变</font>，或者你事先不知道什么模式，而是从另一个来源获取，如用户输入，这些情况都可以使用构造函数。

```js
// demo:
// 以下三种等效
"123".match(/^[0-9]*$/g); // ["123"]
"123".match(new RegExp(/^[0-9]*$/, 'g')); // ["123"]
"123".match(new RegExp("^[0-9]*$", 'g')); // ["123"]

// 以下三种等效
"abbbc".match(/ab+c/g); // ['abbbc']
"abbbc".match(new RegExp(/ab+c/,'g')); // ['abbbc']
"abbbc".match(new RegExp("ab+c",'g')); // ['abbbc'], 写成这样就可以动态拼接正则
```

```js
let str ='<span class="{width} {fei} {class}" data-tip="{width} {fei} {class}">替换花括号中内容</span>'
let dataFei = {
  fei: '替换',
  class: "small",
  width: 10,
};
for (let k in dataFei) {
  str = str.replace(RegExp('{' + k + '}', 'g'), dataFei[k] == null ? '' : dataFei[k]);
}
console.log(str);//<span class="a1 10 替换 small" data-tip="a2 10 替换 small">替换花括号中内容</span>
```

### 不能有某个字符

```javascript
/^[^y]+$/.test("string") // 没有字符y返回true
```

```js
/^[^\*]+$/.test("string") // 没有字符*号返回true
```





[常用正则表达式](https://c.runoob.com/front-end/854/)

[正则_菜鸟教程](https://www.runoob.com/regexp/regexp-metachar.html)

[MDN_正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

[MDN_RegExp(正则表达式)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)































