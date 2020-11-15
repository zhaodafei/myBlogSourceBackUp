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

可以跳出当前循环

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

