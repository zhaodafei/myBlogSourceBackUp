---
title: -RegExp 正则
categories: 
- RegExp
tags:
- RegExp
---
### 基本常见

```
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



[正则_菜鸟教程](https://www.runoob.com/regexp/regexp-metachar.html)

[MDN_正则](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

### 





























