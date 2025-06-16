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

### 正则表达式中的特殊字符

1. （小数点）默认匹配除换行符之外的任何单个字符

   > ```wiki
   > （小数点）默认匹配除换行符之外的任何单个字符。
   > 例如，/.n/ 将会匹配 "nay, an apple is on the tree" 中的 'an' 和 'on'，但是不会匹配 'nay'。
   > ```
   >
   > 

2. xxx

3. xxx

4. xxx

### 元字符

```js
// 基本元字符
. (点号)
匹配除换行符(\n)外的任意单个字符
示例：a.b 匹配 "aab", "a1b", "a b" 等

^ (脱字符)
匹配字符串的开始位置
示例：^abc 匹配以 "abc" 开头的字符串

$ (美元符)
匹配字符串的结束位置
示例：xyz$ 匹配以 "xyz" 结尾的字符串

\ (反斜杠)
转义字符，使后面的字符失去特殊含义
示例：\. 匹配实际的点号而不是任意字符
```

```js
// 字符类元字符
[] (方括号)
定义字符集合，匹配其中任意一个字符
示例：[aeiou] 匹配任意一个元音字母

[^] (否定字符类)
匹配不在方括号中的任意字符
示例：[^0-9] 匹配任意非数字字符

- (连字符)
在字符类中表示范围
示例：[a-z] 匹配任意小写字母
```

```js
// 量词元字符
* (星号)
匹配前面的子表达式零次或多次
示例：ab*c 匹配 "ac", "abc", "abbc" 等

+ (加号)
匹配前面的子表达式一次或多次
示例：ab+c 匹配 "abc", "abbc" 但不匹配 "ac"

? (问号)
匹配前面的子表达式零次或一次
示例：colou?r 匹配 "color" 和 "colour"

{n} (花括号)
精确匹配n次
示例：a{3} 匹配 "aaa"

{n,}
至少匹配n次
示例：a{2,} 匹配 "aa", "aaa" 等

{n,m}
匹配n到m次
示例：a{2,4} 匹配 "aa", "aaa", "aaaa"
```

```js
// 分组和选择元字符
() (圆括号)
定义子表达式或捕获组
示例：(ab)+ 匹配 "ab", "abab" 等

| (竖线)
表示"或"关系
示例：cat|dog 匹配 "cat" 或 "dog"
```

```js
// 特殊字符类元字符
\d  匹配任意数字，等价于 [0-9]
\D  匹配任意非数字，等价于 [^0-9]
\w  匹配任意单词字符(字母、数字、下划线)，等价于 [a-zA-Z0-9_]
\W  匹配任意非单词字符，等价于 [^a-zA-Z0-9_]
\s  匹配任意空白字符(空格、制表符、换行符等)
\S  匹配任意非空白字符
\W  匹配任意非单词字符，等价于 [^a-zA-Z0-9_]

// 备注fei, 匹配特殊字符的时候可以用 \W
```

```js
// 边界匹配元字符
\b
匹配单词边界
示例：\bcat\b 匹配 "cat" 但不匹配 "category"

\B
匹配非单词边界
示例：\Bcat\B 匹配 "scattered" 中的 "cat" 但不匹配单独的 "cat"
```

```js
// 其他元字符
\n  匹配换行符
\t  匹配制表符
\r  匹配回车符
\f  匹配换页符
\v  匹配垂直制表符
```

```js
// 贪婪与非贪婪量词
默认情况下，量词(*, +, ?, {})是贪婪的，会尽可能多地匹配字符。在量词后加?可使其变为非贪婪(懒惰)模式：

*?：零次或多次，但尽可能少
+?：一次或多次，但尽可能少
??：零次或一次，但尽可能少
{n,m}?：n到m次，但尽可能少

示例：<.*?> 匹配HTML标签时不会跨标签匹配
```



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

### 数据变`*`

```js
// 数据脱敏  
export const desensitizationFun = t => {
    let str = String(t)

    if (/^\d{17}([0-9]|X|x)$/.test(str)) {
      // 身份证号脱敏
      return str.replace(/(\d{6})\d{8}(\d{3}[0-9xX])/, '$1********$2')
    } else if (/^1[0-9]{10}$/.test(str)) {
      // 手机号脱敏
      return str.replace(/^(1[0-9][0-9])\d{4}(\d{4}$)/, '$1****$2')
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)) {
      // 邮箱脱敏
      return str.replace(/^(.)(.*)(.@.*)$/, function (match, firstChar, middleChars, domain) {
        const sanitizedMiddleChars = '*'.repeat(middleChars.length)
        return firstChar + sanitizedMiddleChars + domain
      })
    } else {
      return t
    }
  }
```



### 去除空格

```javascript
"bar  ".replace(/(^\s*)|(\s*$)/g, "")
```

### 前后不能是空格

```js
// 非空白字符，其S是大写, 
// 前后没有空格返回true

/^\S.*\S$|(^\S{0,1}\S$)/.test("123")   // true
/^\S.*\S$|(^\S{0,1}\S$)/.test("1 23")   // true

/^\S.*\S$|(^\S{0,1}\S$)/.test(" 123")   // false
/^\S.*\S$|(^\S{0,1}\S$)/.test("123 ")   // false
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

### 常用正则

1. 前后不能有空格
   ```js
   /^\S.*\S$|(^\S{0,1}\S$)/
   ```

2. 密码由英文大小写和数字组成
   ```js
   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/
   ```

3. 只能是正整数 
   ```js
   /^\d+$/
   ```

4. 只能是正整数 或 保留两位的小数
   ```js
   /^\d+(\.\d{0,2})?$/
   ```

5. 只能输入英文和数字
   ```js
   /^[a-zA-Z0-9]+$/
   ```

6. 只能输入中文
   ```js
   /^[\u4E00-\u9FA5]+$/
   ```

7. 只能输入英文
   ```js
   /^[a-zA-Z]+$/
   ```

8. 正确的手机号码
   ```js
   /^1[0-9]{10,}/
   ```

9. 银行卡号
   ```js
   /^([1-9]{1})(\d{14}|\d{18})$/
   ```

10. 密码8到20位
    ```js
    // 长度 8到20位
    // 必须满足数字、小写字母、大写字母、特殊符号中至少三种
    const passwordReg =
      /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,20}$/
    
    console.log(passwordReg.test('123456789'))
    console.log(passwordReg.test('123@wwwww'))
    console.log(passwordReg.test('A'))
    
    // 分析这个正则
    (?![a-zA-Z]+$) - 不只是字母（必须至少有一个非字母）
    (?![A-Z0-9]+$) - 不仅仅是大写字母和数字
    (?![A-Z\W_]+$) - 不仅仅是大写字母和特殊字符
    (?![a-z0-9]+$) - 不仅仅是小写字母和数字
    (?![a-z\W_]+$) - 不仅仅是小写字母和特殊字符
    (?![0-9\W_]+$) - 不仅仅是数字和特殊字符
    ```
    
11. xx

12. xx

13. xx

14. xx

15. xx

16. xx

17. xx

18. xx

19. xx

20. xx



### 底部

1. [常用正则表达式](https://c.runoob.com/front-end/854/)
2. [正则_菜鸟教程](https://www.runoob.com/regexp/regexp-metachar.html)
3. [MDN_正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
4. [MDN_RegExp(正则表达式)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)































