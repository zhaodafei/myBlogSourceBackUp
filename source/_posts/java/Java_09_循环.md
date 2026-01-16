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

### filter 循环过滤

```Java
// filter 循环筛选
public class HelloWorld {
    public static void main(String[] args) {
        // 创建示例数据列表
        List<Person> people = new ArrayList<>();
        people.add(new Person("张三", 25));
        people.add(new Person("李四", 17));
        people.add(new Person("王五", 30));
        people.add(new Person("赵六", 22));

        // 1. 查找第一个年龄大于20的人
        Optional<Person> firstAdult = people.stream()
                .filter(person -> person.getAge() > 20)  // 筛选条件
                .findFirst();  // 获取第一个匹配的元素

        // 处理结果（Optional避免空指针）
        if (firstAdult.isPresent()) {
            System.out.println("第一个年龄大于20的人: " + firstAdult.get());
        } else {
            System.out.println("没有找到年龄大于20的人");
        }

        // 查找所有大于20满足条件的数据
        List<Person> fei = people.stream()
                .filter(person -> person.getAge() > 20)
                .collect(Collectors.toList());

        System.out.println(fei);
    }

    // 自定义Person类
    static class Person {
        private String name;
        private int age;
        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
        public String getName() { return name; }
        public int getAge() { return age; }
        @Override
        public String toString() {
            return name + "(" + age + "岁" + ")";
        }
    }
}
```

### map 循环处理字段

核心思想`元素转换`

```java
// map 取出List中某个字段的所有值
// map 遍历修改List中某个字段的所有值

// map 循环
public class HelloWorld {
    public static void main(String[] args) {
        // 创建示例数据列表
        List<Person> people = new ArrayList<>();
        people.add(new Person("张三", 25));
        people.add(new Person("李四", 17));
        people.add(new Person("王五", 30));
        people.add(new Person("赵六", 22));


        // demo01: map遍历,取出所有的姓名name
        List<String> allNames = people.stream().map(Person::getName).collect(Collectors.toList());
        System.out.println(allNames);

        // demo02: 传统 for 循环提取姓名
        List<String> allNames_1 = new ArrayList<>();
        for (Person person : people) {
            allNames_1.add(person.getName());
        }
        System.out.println(allNames_1);

        // demo03: 使用map生成新对象,不修改原列表数据
        System.out.println("修改前：" + people);
        // 核心：用 map 修改年龄（示例：所有人年龄 +3 岁）
        List<Person> updatedPeople = people.stream()
                // map 转换：创建新 Person 对象，姓名不变，年龄修改
                .map(p -> new Person(
                        p.getName(),  // 保留原姓名
                        p.getAge() + 3  // 修改年龄（这里是 +3，可自定义逻辑）
                ))
                .collect(Collectors.toList());  // 收集为新 List

        List<Person> updatedPeople2 = people.stream()
                .map(p -> new Person(p.getName(), 18)) // 年龄都修改为18
                .collect(Collectors.toList());  // 收集为新 List

        System.out.println("1修改后（新列表）：" + updatedPeople);
        System.out.println("2修改后（新列表）：" + updatedPeople2);
        System.out.println("原列表是否不变：" + people);
    }

    // 自定义Person类
    static class Person {
        private String name;
        private int age;
        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
        public String getName() { return name; }
        public int getAge() { return age; }
        @Override
        public String toString() {
            return name + "(" + age + "岁" + ")";
        }
    }
}
```



### 底部

1. [java枚举](https://www.runoob.com/java/java-enum.html)

