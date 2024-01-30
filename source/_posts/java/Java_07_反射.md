---
title:  -Java入门基础-反射
date: 2024-01-14
categories: 
- Java
tags:
- Java
---

Java基础入门反射

<!-- more -->

### 反射基础

```java
class User {
    public void test1() {
        System.out.println("user_test1111");
    }
}

class child extends User {
    public void test2() {
        System.out.println("child__test2222");
    }
}


//============================================
User user = new child();
user.test1();
// user.test2(); // tip:这个执行不到

// 类对象
Class<? extends User> aClass = user.getClass();

aClass.getName(); // 获取类的完整名称
aClass.getSimpleName(); // 获取类的名称

// 获取类的父类
Class<?> superclass = aClass.getSuperclass();

// 获取类的接口
Class<?>[] interfaces = aClass.getInterfaces();

// 获取累的属性
aClass.getField("name"); // 获取到的 public 属性
aClass.getDeclaredField("name"); // 获取所有权限的属性
Field[] fields = aClass.getFields(); // 方法
Field[] declaredFields = aClass.getDeclaredFields(); // 所有权限

// 获取类的方法
Method method1 = aClass.getMethod("test2"); // public
Method method2 = aClass.getDeclaredMethod("test2");// 所有权限
Method[] methods = aClass.getMethods(); // public
Method[] declaredMethods = aClass.getDeclaredMethods(); // 所有权限

// 构造方法
Constructor<? extends User> constructor = aClass.getConstructor();
Constructor<?>[] constructors = aClass.getConstructors();
aClass.getDeclaredConstructors();

// 获取权限
int modifiers = aClass.getModifiers();
boolean aPrivate = Modifier.isPrivate(modifiers);

```

### 反射小demo

```java
// 利用反射做个简单小登录
class User {
    public String account;
    public String password;

    public boolean login() {
        if (account.equals("admin") && password.equals("123")) {
            return true;
        } else {
            return false;
        }
    }
}


// 构建方法对象
Class userClass = User.class;
Constructor declaredConstructors = userClass.getDeclaredConstructor();
// 构建对象
Object user = declaredConstructors.newInstance();

// 获取对象的属性
Field account = userClass.getField("account");
Field password = userClass.getField("password");

// 给属性赋值
account.set(user, "admin");
password.set(user, "123");
// password.set(user, "123xxx");

// 登录
Method login = userClass.getMethod("login");
// 调用方法
Object invoke = login.invoke(user);
System.out.println(invoke);
```



### 底部

没有了

