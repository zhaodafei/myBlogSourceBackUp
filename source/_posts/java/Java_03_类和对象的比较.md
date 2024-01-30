---
title:  -Java入门基础
date: 2024-01-14
categories: 
- Java
tags:
- Java
---

Java基础入门

<!-- more -->

### 类和对象的比较1

```javascript
// 类和对象的比较
int i = 10;
int j = 10;
System.out.println(i == j); // true
double n = 10.0;
System.out.println(i == n); // true
```

### 类和对象的比较2

```java
// 引用数据类型,双引号比较变量的内存地址
String s = "abc";
String s1 = "abc";
String s2 = new String("abc");
System.out.println(s == s1); // true
System.out.println(s == s2); // false; 比较的是内存地址
System.out.println(s.equals(s2)); // true; 比较的是值
```

### 类和对象的比较3

```java
class User {}
User user1 = new User();
User user2 = new User();
System.out.println(user1 == user2); // false;
System.out.println(user1.equals(user2)); // false;
```

### 类和对象的比较4

```java
class Person{
    // 重写hashCode和equals这2个方法;就可以使用equals进行判断
    @Override
    public int hashCode() {
        return 1;
    }

    @Override
    public boolean equals(Object obj) {
        return true;
    }
}


Person person1 = new Person();
Person person2 = new Person();
System.out.println(person1 == person2); // false;
System.out.println(person1.equals(person2)); // true;
```

### 类和对象的比较5

#### 包装类型

```java
// 包装类型
// int => Integer => JVM为了操作方便,简化了很多操作
// Integer缓存:-128~127
// Integer i1 = Integer.valueOf(-120);
// Integer i2 = Integer.valueOf(-120);

// 用这2组数据会发现问题  // Integer缓存:-128~127
// Integer i1 = 120;
// Integer i2 = 120;
Integer i1 = 150;
Integer i2 = 150;

System.out.println(i1 == i2);
System.out.println(i1.equals(i2));
```

