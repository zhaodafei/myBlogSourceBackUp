---
title: other JavaScript
categories: 
- JavaScript
tags:
- JavaScript
---
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

































