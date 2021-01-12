---
title: 单体模式
categories: 
- WEB_JavaScript
- 单体模式
tags:
- 单体模式
---
单体模式

### 单体模式

```javascript
var Teacher = {
    name: "fei",
    age: 18,
    showName: function () {
        return this.name;
    }
};
Teacher.showName(); // fei
```

### 原型模式

```javascript
function Teacher(name, age) {
    this.name = name;
    this.age = age;
}

Teacher.prototype.showName = function () {
    return this.name;
};

var foo = new Teacher('fei', 18);
foo.showName(); // fei
```

### 伪类模式---建议使用ES6

```javascript
class Teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showName() {
        return this.name;
    }
}

var foo = new Teacher('fei', 18);
foo.showName(); // fei
```

### 面向对象继承

```javascript
// 面向对象继承 --------------------------
var Teacher = {
    name: "fei",
    age: 18,
    showName: function () {
        return this.name;
    }
};
var student = Object.create(Teacher);
student.name = "foo";
student.showName(); // foo

// 单体方式继承 --------------------------
var Teacher = {
    name: "fei",
    age: 18,
    showName: function () {
        return this.name;
    }
};
var student = Object.create(Teacher);
student.name = "foo";
student.age = 20;
student.showName(); // foo
student.showAge = function (age) {
    return this.age;
};
student.showAge(); // 20
```

### xxxx

```javascript
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showName() {
        return this.name;
    }
}

class Teacher extends Person {
    constructor(name,age,job) {
        super(name,age);
        this.job = job;
    }

    showInfo() {
        return this.job + "___" + super.showName();
    }
}

var foo = new Teacher("fei",18,"WEB");
foo.showInfo("WEB"); // WEB___fei
```

[对象原型 `prototypes`](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)



























