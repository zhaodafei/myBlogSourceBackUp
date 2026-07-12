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

#### some,校验所有值

```js
  let arr = [
    {id: 1, name: "daFei", age: "18", hobby: "JavaScript"},
    {id: 1, name: "daFei", age: "18", hobby: ""}, // 设置一个空值
    {id: 2, name: "daFei", age: "18", hobby: "HTML"},
    {id: 3, name: "daFei", age: "18", hobby: "CSS"},
  ];

  // 校验不能为空
  const hasNoEmpty2 = arr.some(item => {
    const t = Object.keys(item)
        .filter(key1 => !['id'].includes(key1)) // 过滤掉 id 这个字段,保留剩下字段组成新的数组['name','age','hobby']
        .every(key2 => {
          console.log("ddddddddddd", item[key2]);
          return item[key2] // 是不是所有列表项都有值
        })
    console.log("=====取反", !t);
    return !t
  })

  console.log("22222222", hasNoEmpty2);
  if (hasNoEmpty2) {
    console.log('some遍历: 出现空值');
  }
```

### every 遍历

```js
let arr = [
    {id: 1, name: "daFei", age: "18", hobby: "JavaScript"},
    {id: 1, name: "daFei", age: "18", hobby: ""}, // 设置一个空值
    {id: 2, name: "daFei", age: "18", hobby: "HTML"},
    {id: 3, name: "daFei", age: "18", hobby: "CSS"},
];

const res = arr.every(item => {
    console.log('多少');
    return item.id = 2 // 找到id为2的项
})
const res2 = arr.every(item => item.id = 2)
console.log(res);
console.log(res2);
```

#### every,校验所有值

```js
let arr = [
    {id: 1, name: "daFei", age: "18", hobby: "JavaScript"},
    {id: 1, name: "daFei", age: "18", hobby: ""}, // 设置一个空值
    {id: 2, name: "daFei", age: "18", hobby: "HTML"},
    {id: 3, name: "daFei", age: "18", hobby: "CSS"},
];

// 校验不能为空
const hasNoEmpty = arr.every(item => {
    const t = Object.keys(item)
    .filter(item => !['id'].includes(item)) // 过滤掉 id 这个字段,保留剩下字段组成新的数组['name','age','hobby']
    .every(key => {
        console.log("aaaaaaaa", item[key]);
        return item[key] // 是不是所有列表项都有值
    })
    console.log("########################", t);
    return t
})

if (!hasNoEmpty) {
    console.log('every遍历: 有==空空空空空');
    // return
}
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

### 遍历obj格式数组2

```js
const obj = {
  a: ['a001'],
  b: ['b001', 'b002'],
  c: ['c001', 'c002']
};
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
```



### `Object.keys`删除对象中值

```js
const params = {
  id: 1,
  name:"fei",
  age:"18",
  xxx1:'',
  xxx2:undefined
};

// 删除多余值
Object.keys(params).forEach(item => {
    const key = params[item]
    if (key === '' || key === null || key === undefined) {
        delete params[item]
    }
})
```

### 数组扁平化

二维数组变为一维数组, 场景: 3列分别显示`A,B,C`,一共5行

```wiki
#效果
第一列   第二列    第三列
A1号     B1号     C1号
A2号     B2号     C2号
A3号     B3号     C3号
A4号     B4号     C4号
A5号     B5号     C5号

#核心点:
Array.from({})
flat()
new Map([])
```



```vue
<template>
  <div class="fei">
    <div class="hall-grid">
      <div
        v-for="hall in allHalls"
        :key="hall"
        :class="['hall-item', { active: currentHall === hall }]"
      >
        {{ getHallDisplayName(hall) }}
      </div>
    </div>
  </div>
</template>

<script setup>
  const currentHall = ref('fei_a08')
  const getHallDisplayName = (efHalls) => {
    const hallMap = new Map([
      // A1-A5 (fei_a11 - fei_a15)
      ['fei_a11', 'A1'],
      ['fei_a12', 'A2'],
      ['fei_a13', 'A3'],
      ['fei_a14', 'A4'],
      ['fei_a15', 'A5'],

      // B1-B5 (fei_a06 - fei_a10)
      ['fei_a06', 'B1'],
      ['fei_a07', 'B2'],
      ['fei_a08', 'B3'],
      ['fei_a09', 'B4'],
      ['fei_a10', 'B5'],

      // C1-C5 (fei_a01 - fei_a05)
      ['fei_a01', 'C1'],
      ['fei_a02', 'C2'],
      ['fei_a03', 'C3'],
      ['fei_a04', 'C4'],
      ['fei_a05', 'C5'],
    ]);
    const hallInfo = hallMap.get(efHalls)
    return hallInfo
  }

  // 17馆平铺 - 按 E → N → W 列优先顺序排列
  // CSS Grid 按行填充,所以需要交叉排列: E1,N1,W1, E2,N2,W2...
  const allHalls_01 = Array.from({ length: 5 }, (_, i) => [
    `fei_a${String(i + 11).padStart(2, '0')}`, // A1-A5
    `fei_a${String(i + 6).padStart(2, '0')}`,  // B1-B5
    `fei_a${String(i + 1).padStart(2, '0')}`,  // C1-C5
  ])
  const allHalls = allHalls_01.flat()

  console.log("ddd",allHalls_01) //二维数组
  console.log("ddd",allHalls) // 展开操作,扁平化为一维数组

</script>


<style scoped lang="scss">
.hall-grid {
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  .hall-item {
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    background: #ff6b81;
    border-radius: 18px;
    border: 1px solid transparent;
    font-size: 30px;
    color: rgba(0,0,0,0.85);
    cursor: pointer;
    transition: all 0.2s;

    &.active {
      border-color: #ffd700;
      background: #eee8aa;
    }
  }
}
</style>

```



































