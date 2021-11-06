---
title: JavaScript_常见使用_02
categories: 
- JavaScript
tags:
- JavaScript
---

 JavaScript常用使用
 JavaScript常用使用
 JavaScript常用使用

### 定义

```javascript
var daFei = {
    age: 18,
    name: "daFei",
    height: function () {
        console.log("身高");
    }
};
daFei.height && daFei.height();  // 短路与
console.log("执行下面数据");
```

### `for/in` 遍历对象

```javascript
var obj = {age: 18, name: "daFei"};
for (let key in obj) {
    console.log(key,"___",obj[key]);
}
```

### `forEach` 遍历数组

循环所有值,直到所有元素都遍历

```javascript
let arr = [
    {age: 18, name: "daFei"},
    {age: 28, name: "foo"},
    {age: 38, name: "bar"}
];

arr.forEach(item => {
    console.log(item);
    console.log(item.age, item.name);
});
```

### `some `遍历对象

01) 可以跳出当前循环
02) 可以用来做判断   [Array.prototype.some()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

```javascript
const arr = [
        {name: "foo", age: "18"},
        {name: "bar", age: "28"},
        {name: "daFei", age: "20"}
    ];

    arr.some(item => {
        if (item.name === "bar") { 
            console.log("ok");
            return true;
        }
        console.log("执行"); // 条件生效后,这里的代码不在执行
    });
/////////////////////////
// 注意：如果用一个空数组进行测试，在任何情况下它返回的都是false
if ([12, 5, 8, 1, 4].some(x => x > 10)) { //结果 true
    console.log("找到大于10的数据");
}
if ([2, 5, 8, 1, 4].some(x => x > 22)) {
    console.log("找到大于22的数据");
}else {  //结果 false
    console.log("没有找到数据")
}
```

### `find`遍历对象

01) 可以跳出当前循环   [Array.prototype.find()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
02) **find()** 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`

```javascript
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found); // 12
```

### 序列化和反序列化

```javascript
let obj = {age: 18, name: "daFei"};

let bbb = JSON.stringify(obj); // 序列化: 对象-->字符串
console.log(bbb,obj);

let xxx = JSON.parse(bbb); // 反序列化: 字符串-->对象
console.log(xxx,obj);
```

### 立即执行

```html
<script>
    (function(){
        console.log("daFei");
    }())

    (()=>{ // ES6中箭头函数
        console.log("daFei");
    })()
    
    let demo=function(){
        console.log("daFei_002");
    }();

    // 最low 的写法
    function fei(){
        console.log("daFei_003");
    }
    fei();  // 这里的() , 相当于执行
</script>
```

### HTML事件属性

[HTML 事件属性_菜鸟教程](https://www.runoob.com/tags/ref-eventattributes.html)

[HTML 事件属性_MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers)

### 去除前后空格 `jQuery`

```javascript
// jQuery 去除前后端空格
console.log($.trim("111   去除前后空格  222") );
console.log($.trim("   去除前后空格  ") ); 
```



### 2个感叹号使用

`2`个感叹号一般用来将后面的表达式强制转为布尔类型 `true` 或者 `false`

```javascript
let foo;
console.log("foo = " + foo); // foo = undefined
let bar = !!foo;
console.log("bar = " + bar); // bar = false
```

`JavaScript` 中 `null`、`undefined`、`NaN`、`+0`、`-0`、`""`，这六种转换成布尔类型是 `false`，其余都是`true`

[理解相等比较的模型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)

```javascript
let foo = []; // true
let foo = {}; // true

let fei =  !!''    // false
let fei =  !!'0'   // true
let fei =  !!'1'   // true
let fei =  !!'-1'  // true
let fei =  !!'foo' // true
let fei =  !!0     // false
let fei =  !!undefined   //false
let fei =  !!null  // false
let fei =  !!NaN   // false
let fei =  !!{}    // true
let fei =  !![]    // true
let fei =  !!{foo: "bar"}           // true
let fei =  !!['foo', 'bar', 'fei']  // true
```

`PHP` 中

```php
$foo = []; // false
$foo = (object)[]; // true
```



###  数据类型

> ***`JavaScript` 数据类型***
>
> 基本类型：Number Boolean  String  undefined null
> 引用类型：Object  Function

> ***类型判断***
>
> typeof    Object.prototype.toString.call();
>
> ```javascript
> Object.prototype.toString.call("daFei"); // [object String]
> Object.prototype.toString.call(20); // [object Number]
> Object.prototype.toString.call(null); // [object Null]
> Object.prototype.toString.call(undefined); // [object Undefined]
> Object.prototype.toString.call(true); // [object Boolean]
> Object.prototype.toString.call(false); // [object Boolean]
> 
> Object.prototype.toString.call(new Date); // [object Date]
> Object.prototype.toString.call({name: "daFei", age: 18}); // [object Object]
> Object.prototype.toString.call(["daFei", 18, "Hello"]); // [object Array]
> Object.prototype.toString.call(function foo(){}); // [object Function]
> ```
>
> ```javascript
> (typeof "abc123"); // string
> (typeof 123); // number
> (typeof a); // undefined
> (typeof true); // boolean
> (typeof Symbol('fei')); // symbol
> (typeof function fei() {}); // function
> 
> 
> (typeof null); // object  *****************************
> (typeof []); // object
> (typeof {}); // object
> ```

> ```javascript
> let foo = [];
> 
> if (Array.isArray(foo)) {
>     console.log("这是一个数组");
> }else if (Object.prototype.toString.call(foo) === '[object Object]') {
>     console.log("这是一个json对象");
> }else {
>     console.warn("数据类型错误" + Object.prototype.toString.call(foo).slice(8, -1));
> }
> ```

> 最新的 ECMAScript 标准定义了 8 种数据类型:
>
> - 6 种
>
>   原始类型，使用 typeof 运算符检查:
>
>   - [undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/undefined)：`typeof instance === "undefined"`
>   - [Boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean)：`typeof instance === "boolean"`
>   - [Number](https://developer.mozilla.org/zh-CN/docs/Glossary/Number)：`typeof instance === "number"`
>   - [String](https://developer.mozilla.org/zh-CN/docs/Glossary/String)：`typeof instance === "string`
>   - [BigInt](https://developer.mozilla.org/zh-CN/docs/Glossary/BigInt)：`typeof instance === "bigint"`
>   - [Symbol](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol) ：`typeof instance === "symbol"`
>
> - [null](https://developer.mozilla.org/zh-CN/docs/Glossary/Null)：`typeof instance === "object"`。
>
> - [Object](https://developer.mozilla.org/zh-CN/docs/Glossary/Object)：`typeof instance === "object"`。任何 constructed 对象实例的特殊非数据结构类型，也用做数据结构：new [Object](https://developer.mozilla.org/zh-CN/docs/Glossary/Object)，new [Array](https://developer.mozilla.org/zh-CN/docs/Glossary/array)，new Map，new Set，new WeakMap，new WeakSet，new Date，和几乎所有通过 new keyword 创建的东西。
>
> 记住 `typeof` 操作符的唯一目的就是检查数据类型，如果我们希望检查任何从 Object 派生出来的结构类型，使用 `typeof` 是不起作用的，因为总是会得到 `"object"`。检查 Object 种类的合适方式是使用 instanceof 关键字。但即使这样也存在误差。
>
> [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)







