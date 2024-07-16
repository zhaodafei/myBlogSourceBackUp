---
title: js Object内置对象
date: 2024-06-12
categories: 
- Object
tags:
- Object
---

js Object内置对象

`Object.assign()` 静态方法将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。

<!-- more -->

### Object.assign()

```js
Object.assign() 静态方法将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。
```

```js
const route = { title: 'fei', age: 20 };
const newRoute = Object.assign({}, route, { title: '编辑title' })
console.log(newRoute); // 输出： { title: '编辑title', age: 20 }
```

### Object.getOwnPropertyNames()

```wiki
返回给定对象中所有自有属性
```

```js
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object1));
// Expected output: Array ["a", "b", "c"]
```

### Object.hasOwn()

### Object.keys()

### Object.values()

### Object.entries()

```js
// 把obj转为get请求方式连接参数
function convertToUrl(requestParams) {
  let params = []
  Object.entries(requestParams).forEach(([key, value]) => {
    let param = key + '=' + value
    params.push(param)
  })
  return params.join('&')
}

const obj = { a: 5, b: 7, c: 9 };
convertToUrl(obj) // 输出 'a=5&b=7&c=9'
```



## 删除对象属性

```js
const params = {
    name: "fei",
    age: 18,
    hobby: "web",
    other:undefined
}
// delete params['hobby']; // 删除对象中某个属性
// delete params.hobby; // 删除对象中某个属性
console.log(params); // 输出: {name: 'fei', age: 18, other: undefined}


// 场景复现,把里面的无用值删掉
Object.keys(params).forEach(item=>{
  const key = params[item]
  if (key === '' || key === null || key === undefined) {
    delete params[item]
  }
})
```



[delete 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)

### 底部

[mdn_Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)





















