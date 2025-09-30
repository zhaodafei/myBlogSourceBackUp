---
title:  -Java入门基础-循环
date: 2025-08-12
categories: 
- Java
tags:
- Java
---

Java基础入门循环

<!-- more -->

### 增强 for 循环

```java
// Java5 引入了一种主要用于数组的增强型 for 循环。
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");

    int[] numbers = {10, 20, 30, 40, 50};
    for (int x : numbers) {
      System.out.print(x); // 依次输出: 10 20 30 40 50
      System.out.print(",");
    }

    System.out.print("\n");

    String[] names = {"James", "Larry", "Tom", "Lacy"};
    for (String name : names) {
      System.out.print(name); // 依次输出: James Larry Tom Lacy
      System.out.print(",");
    }
  }
}
```

### forEach 循环

```java
// 集合的 forEach() 方法 (Java 8+)
// Java 8 在 Iterable 接口中引入了 forEach 方法，所有集合类都可以使用。
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");

    List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
    names.forEach(e -> {
      System.out.println(e); // 依次输出: Alice Bob Charlie
    });
  }
}
```

```java
// 数组的 forEach (需要转为Stream)
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");

    String[] names = {"Alice", "Bob", "Charlie"};
    Arrays.stream(names).forEach(e -> {
      System.out.println(e); // 依次输出: Alice Bob Charlie
    });
      
  }
}
```

```java
// Map 的 forEach
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");

    Map<String, Integer> ages = new HashMap<>();
    ages.put("Alice", 25);
    ages.put("Bob", 30);

    ages.forEach((name, age) -> {
      // 输出2行内容如下:
      // Bob is 30 years old
      // Bob is 30 years old
      System.out.println(name + " is " + age + " years old");
    });
 
  }
}
```



### 底部

1. [java枚举](https://www.runoob.com/java/java-enum.html)

