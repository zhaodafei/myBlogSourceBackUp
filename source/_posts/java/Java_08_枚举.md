---
title:  -Java入门基础-枚举
date: 2025-07-28
categories: 
- Java
tags:
- Java
---

Java基础入门枚举

<!-- more -->

### 枚举基础

Java 枚举是一个特殊的类，一般表示一组常量，比如一年的 4 个季节，一年的 12 个月份，一个星期的 7 天，方向有东南西北等。

Java 枚举类使用 enum 关键字来定义，各个常量使用逗号 **,** 来分割。

例如定义一个颜色的枚举类。

```java
public enum Color 
{ 
    RED, GREEN, BLUE; 
} 


// 使用
Color.RED.ordinal(); // 返回枚举常量在枚举声明中的位置序号（从0开始）
Color.RED.name(); // 返回枚举常量的声明名称

System.out.println(Color.RED.ordinal());    // 输出 0
System.out.println(Color.GREEN.ordinal());  // 输出 1

System.out.println(Color.RED.name());    // 输出 "RED"
System.out.println(Color.GREEN.name());  // 输出 "GREEN"
```

### 避免使用`ordinal()`的情况

```java
public enum Color 
{ 
    RED(3), GREEN(4), BLUE(8); // 自定义内容
    
    private final int value;

    Color(int value){
      this.value = value;
    }

    public int value(){
      return this.value;
    }
} 
```

```java
public enum UserStatus
{
    OK("0", "正常"), DISABLE("1", "停用"), DELETED("2", "删除");

    private final String code;
    private final String info;

    UserStatus(String code, String info){
        this.code = code;
        this.info = info;
    }

    public String getCode(){
        return code;
    }

    public String getInfo(){
        return info;
    }
}
```



### 底部

1. [java枚举](https://www.runoob.com/java/java-enum.html)

