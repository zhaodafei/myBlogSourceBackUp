---
title: -TypeScript 数据类型01
date: 2015-05-04
categories: 
- TypeScript
tags:
- TypeScript
---
`TypeScript` 数据类型01
`TypeScript` 数据类型01
`TypeScript` 数据类型01

<!-- more -->

### 可选参数

```typescript
// age 必须写
let foo: { name: string, age: number; };
foo = {name: "daFei", age: 18};

// age 可选参数
let bar: { name: string, age?: number; };
bar = {name: "daFei"};
bar = {name: "daFei2", age: 20};

// [xxx: string]: any; any表示任意类型   可扩展参数  ---xxx 可以随便写
let hello: { name: string, [xxx: string]: any; };
hello = {name: "daFei3", age: 22, gender: '男', tel: "无"};
```

### 函数参数

```typescript
// 设置函数结构类型声明
//      语法: (形参:类型, 形参:类型 ...) => 返回值
let world: (a: number, b: number) => number;
world = function (n1, n2): number {
    return n1 + n2;
};
world(1, 3);
```

### 字符串声明

```typescript
let name: string   // 声明一个字符串类型
name = 'dafei'

let age: number  // 声明一个数字类型
age = 18

let isStudent: boolean // 布尔类型
isStudent = true

let anything: any  // 任意类型
anything = 'hello'
anything = 123


// 简洁写法, 在声明时直接初始化
let name: string = 'dafei'
let age: number = 18
let isActive: boolean = true
```



### 数组声明

```typescript
// 数组类型声明:
//      类型[]
//      Array<类型>
let foo: string[];  // 字符串数组
foo = ['a', 'b', 'c'];

let bar: number[];  // 数字数组
bar = [1, 2, 3];

let bar2: Array<number>; // 数字数组
bar2 = [4, 5, 6];


//demo001: 使用场景================
// 定义任意类型数组(比如处理路由菜单)
let fei2: Array<any> = [];

// 向数组添加任意类型元素（无类型校验）
fei2.push(123); // 数字
fei2.push('字符串'); // 字符串
fei2.push({ id: 1, name: '对象' }); // 对象
fei2.push([4, 5, 6]); // 嵌套数组
fei2.push(null); // null

console.log('fei2 内容：', fei2); // 输出内容
```

```wiki
数组介绍:

TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
let list: number[] = [1, 2, 3];


第二种方式是使用数组泛型，Array<元素类型>：
let list: Array<number> = [1, 2, 3];
```

### 元祖

```typescript
// 元祖,就是固定长度的数组
//      语法:[类型, 类型, 类型]
let foo: [number, string, string];
foo = [1, 'hello', 'world'];
```

### 枚举

```typescript
// 枚举成员会被默认赋值为从 0 开始递增的数字
enum Gender {
    Male,
    Female
}
let foo: { name: string, gender: Gender; };
foo = {name: "daFei", gender: Gender.Male};
console.log(Gender.Male); // 输出 0
console.log(Gender.Female);// 输出 1

// 手动赋值
enum Language {
    Chinese = 1,
    English = 2
}
console.log(Language.Chinese); // 输出 1
console.log(Language.English); // 输出 2

```

###  表示同时`&`

```typescript
// & 表示同时
let bar: { name: string; } & { age: number; };
bar = {name: "daFei", age: 18};
```

### 类型别名

```typescript
// type 创建 类型别名

type myType = String;
type  myType2 = number;

let foo: myType;
let bar: myType2;

foo = "daFei";
bar = 18;
```

### 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

```typescript
// T 是随便写的(自定义),T会捕获用户传入的类型
function foo<T>(name: T): T {
    return name;
}
foo<String>("daFei"); // 字符串


function bar<T>(age: T): T {
    return age;
}
bar<number>(18); //  数字


// 多个泛型参数的函数
function fn<K, V>(name: K, age: V): K {
    console.log(age);
    return name;
}
fn<string, number>("daFei", 20);


function person<K, V>(name: K, age: V): [K, V] {
    return [name, age];
}
person<string, number>("daFei", 18);

```

#### 泛型约束

```typescript
// 泛型约束,对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量
interface inter {
    length: number;
}

function fn<T extends inter>(name: T): T {
    return name;
}

fn<string>("daFei");
fn<Array<string>>(["论语", "史记"]);
```

```typescript
// 泛型约束,对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量
interface inter2 {
    length: number;
}

function fn2<T extends inter2>(name: T): number {
    return name.length;
}

fn2<string>("daFei");
fn2<Array<string>>(["论语", "史记"]);
```



### 类型断言`as`

```typescript
// 类型断言:告诉编译器,这里是什么类型,语法 ( xxx as 类型)
function foo(name:string|number):number {
    if ((name as string).length) {
        return (name as string).length;
    }else{
        // 说明name是number
        return name.toString().length;
    }
}
```

### 忽略检查`@ts-ignore`

```typescript
function bar(name:string|number):number {
    //@ts-ignore
    if (name.length) { // todo:fei 忽略检查
        return (name as string).length;
    }else{
        // 说明name是number
        return name.toString().length;
    }
}


// 或者用判断 --------------
function hello(name:string|number):number {
    if (typeof name !== "number" && name.length) { // todo:fei 用判断
        return (name as string).length;
    }else{
        // 说明name是number
        return name.toString().length;
    }
}
```



### 属性封装

```typescript
class Person {
    private _name: string;

    constructor(name:string) {
        this._name = name;
    }

    /*getName() {
        return this._name;
    }
    setName(value: string) {
        this._name = value;
    }*/

     // ES6 语法
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

}

const per =new Person("daFei");
// per.setName("论语");
per.name = "史记"; //  ES6 语法
console.log(per);
```

### 内置对象--类型声明使用

1. ECMAScript 的内置对象

> Boolean
> Number
> String
> Date
> RegExp
> Error

1. BOM 和 DOM 的内置对象

> Window
> Document
> HTMLElement
> DocumentFragment
> Event
> NodeList



[`TypeScript` 手册](https://typescript.bootcss.com/basic-types.html)
[`TypeScript` 备用手册1 ](https://24kcs.github.io/vue3_study/chapter1/03_HelloWorld.html)
[`TypeScript` 备用手册2 ](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)





























