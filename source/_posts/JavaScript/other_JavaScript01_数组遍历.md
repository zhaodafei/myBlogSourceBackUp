---
title: other JavaScript
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---
数组遍历

<!-- more -->

###  event.target.value 获取当前点击事件的值

```html
<input type="button" value="123" onclick="foo(event.target.value)">
<script>
    const  foo = function (val) {
        console.log(val); // 123
    };
</script>
```

### 高阶函数 `filter` `map` `reduce`

```javascript
// 高阶函数 filter map reduce  用es6语法
// 过滤小于20的值,返回布尔值 true 或者 false
// 循环数组中的每一个元素
//接受一个函数作为参数，这个函数作为一个累加器，从左到右遍历整个类型数组，最后返回一个单一的值
const nums = [10, 15, 18, 25, 34];
let newNums = nums.filter(item => item < 20) 
.map(item2 => item2 * 2) 
.reduce((total, item3) => total + item3); 

//--------------------
const nums = [10, 15, 18, 25, 34];
let newNum_1 = nums.filter(function (item1) {
    return item1 < 20;
});
console.log(newNum_1); // [10, 15, 18]

let newNum_2 = newNum_1.map(function (item2) {
    return item2 * 2;
});
console.log(newNum_2); // [20, 30, 36]

let newNum_3 = newNum_2.reduce(function (total, item3) {
    return total + item3;
})
console.log(newNum_3); // 86
```

### map,获取对象中某个属性的所有值ES6

```javascript
let obj = [
    {name: "daFei", age: "18", hobby: "JavaScript"},
    {name: "daFei", age: "18", hobby: "HTML"},
    {name: "daFei", age: "18", hobby: "CSS"},
];
let arr = obj.map(item => item.hobby);
console.log(arr); // 输出 ["JavaScript", "HTML", "CSS"]

// 弊端, 如果这个属性没有回返回 [undefined, undefined, undefined]
// 针对以上情况优化,加个filter
let obj = [
  {name: "daFei", age: "18", hobby: "JavaScript"},
  {name: "daFei", age: "18", hobby: "HTML"},
  {name: "daFei", age: "18", hobby: "CSS"},
];
let arr = obj.map(item => item.hobby_xxxx).filter(notUndefined => notUndefined !== undefined);
console.log(arr); // 输出 []
```

###  map,保留原数组修改数据

```javascript
let arr = [
    {name: "daFei", age: "18", hobby: "JavaScript"},
    {name: "daFei", age: "18", hobby: "HTML"},
    {name: "daFei", age: "18", hobby: "CSS"},
];

let arrNew = arr.map(item => {
    item.hobby = item.hobby + "__修改";
    return item;
});
console.log(arr, arrNew);


let brr = [
    {name: "daFei", age: "18", hobby: "JavaScript"},
    {name: "daFei", age: "18", hobby: "HTML"},
    {name: "daFei", age: "18", hobby: "CSS"},
];
let brrNew = brr.map(item => {
    item = {...item, hobby: item.hobby + "__不改原数组"};
    return item;
});
console.log(brr, brrNew); 
```

![map](/img/JavaScript/map.png "map")

#### map,获取数组中一部分对象

```js
let arr = [
  {name: "daFei", age: "18", hobby: "JavaScript"},
  {name: "daFei", age: "18", hobby: "HTML"},
  {name: "daFei", age: "18", hobby: "CSS"},
];

let arrNew = arr.map(item => {
  return {
    // 只要 id 和 hobby 属性
    id: item.name,
    hobby: item.hobby,
  };
});
console.log(arr, arrNew);

// 简写
let arrNew2 = arr.map(item => ({
  // 只要 id 和 hobby 属性
  id: item.name,
  hobby: item.hobby,
}));
console.log(arr, arrNew2);
```



### filter, find, some循环

```js
let arr = [
  {id: 1, name: "daFei", age: "18", hobby: "JavaScript"},
  {id: 1, name: "daFei", age: "18", hobby: "JS_我会不会找到???"},
  {id: 2, name: "daFei", age: "18", hobby: "HTML"},
  {id: 3, name: "daFei", age: "18", hobby: "CSS"},
];

// 返回 id===1 所有行的数组; 【结果:Array】;  找不到返回 【结果:Array】是空数组
let arrRows1 = arr.filter(item => {
  return item.id === 1
})
let arrRows2 = arr.filter(item => item.id === 1)
console.log("aaa_111", arrRows1);
console.log("aaa_222", arrRows2);

// ==========================================================
// 找到 id===1 第一次出现, 然后返回这一行对象; 【结果:Object】; 找不到返回 【结果:undefined】
let objItem1 = arr.find(item => {
  return item.id === 1
})
let objItem2 = arr.find(item => item.id === 1)

console.log("bbb_111", objItem1);
console.log("bbb_222", objItem2);

// ==========================================================
// 找到 id===1, 然后返回true,否则返回false; 【结果:Boolean】
let barS1 = arr.some(item => {
  return item.id === 1
})
console.log("ccc_111", barS1);
```



### fill,填充数组

```javascript
const item = {
  date: '2016-05-02',
  name: 'daFei',
  address: '北京',
}
Array(20).fill(item)
```

### findIndex,数组中查找位置

```java
// 查找数组中某一元素的位置
let test = "a";
let foo = ["a", "b", "c"].findIndex((item) => item === test)
console.log(foo); 

let arr = [
  {id: 1, name: "daFei", age: "18", hobby: "JavaScript"},
  {id: 2, name: "daFei", age: "18", hobby: "HTML"},
  {id: 3, name: "daFei", age: "18", hobby: "CSS"}, // 先找到这个
  {id: 4, name: "daFei", age: "18", hobby: "CSS"},
];
const res = arr.findIndex(item => item.hobby === 'CSS') 
console.log('res', res); // 返回下标2
```

### splice,删除或者替换数组

让`findIndex`和`splice`连用

```js
let arr = [
  {id: 1, name: "daFei", age: "18", hobby: "JavaScript"},
  {id: 2, name: "daFei", age: "18", hobby: "HTML"},
  {id: 3, name: "daFei", age: "18", hobby: "CSS"},
  {id: 4, name: "daFei", age: "18", hobby: "CSS"},
];

arr.splice(2, 1); // 从第二个开始删除, 只删除一个
console.log(arr); // 结果数组中只剩下 3个值了

// 注意 splice 第一个参数如果是负数,是从末尾开始删除
```

```js
// findIndex 和  splice连用
let arr = [
  {id: 1, name: "daFei", age: "18", hobby: "JavaScript"},
  {id: 2, name: "daFei", age: "18", hobby: "HTML"},
  {id: 3, name: "daFei", age: "18", hobby: "CSS"},
  {id: 4, name: "daFei", age: "18", hobby: "CSS"},
];
const resIndex = arr.findIndex(item => item.hobby === 'CSS') // 返回下标2
console.log('res', resIndex) //

if (resIndex !== -1) {
  arr.splice(resIndex, 1); // 从第 resIndex 个开始删除, 只删除一个
  console.log(arr); // 结果数组中只剩下 3个值了
}
```

### 遍历obj格式数组

```js
const obj = {
  a: ['a001', 'a002'],
  b: ['b001', 'b002'],
  c: ['c001', 'c002']
};
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});
```



































