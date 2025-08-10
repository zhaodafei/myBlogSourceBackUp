---
title: Lombok_常见使用1
date: 2025-07-28
categories: 
- Lombok
tags:
- Lombok
---
Lombok_常见使用1
Lombok_常见使用1
Lombok_常见使用1

<!-- more -->

`Lombok`常用注解

## 核心注解

### 01) `@data`

@Data 相当于注解集合。效果等同于 @Getter + @Setter + @ToString + @EqualsAndHashCode + @RequiredArgsConstructor 效果同和这5个注解的效果

```java
import lombok.Data;

@Data
public class Demo3 {
    private String name;
    private int age;
}
```

### 02)`@Getter`和`@Setter`

自动生成`getter`和`setter`方法

```java
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Demo1 {
    private String name;
    private int age;
}
```

### 03)`@ToString`

自动生成 toString() 方法

```java
import lombok.ToString;

@ToString
public class ToStringExample {
    private String name;
}
```

### 04)`@EqualsAndHashCode`

自动生成 equals() 和 hashCode() 方法

```java
import lombok.EqualsAndHashCode;

@EqualsAndHashCode
public class Demo1 {
    private String name;
    private int age;
}
```

### 05)构造器相关注解

- `@NoArgsConstructor`：生成无参构造器
- `@AllArgsConstructor`：生成全参构造器
- `@RequiredArgsConstructor`：生成包含 final 字段和 @NonNull 字段的构造器

```java
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
public class Student {
    private Long id;
    private final String name;
    @NonNull
    private Integer age;
}
```

## 实用注解

### 06)`@Builder`

实现建造者模式

```java
@Builder
public class Order {
    private Long id;
    private String productName;
}
// 使用方式
Order order = Order.builder().id(1L).productName("Book").build();
```

### 07)`@Slf4j`

自动生成日志对象

```java
@Slf4j
public class Service {
    public void doSomething() {
        log.info("Doing something");
    }
}
```

### 08)`@Value`

创建不可变对象（相当于 `@Data` 的不可变版本）;

@Value注解和@Data类似，区别在于它会把所有成员变量默认定义为private final修饰，并且不会生成set方法。

```java
@Value
public class ImmutablePoint {
    int x;
    int y;
}
```

### 09)`@SneakyThrows`

静默抛出受检异常

```java
public class FileUtil {
    @SneakyThrows
    public static String readFile(String path) {
        return Files.readString(Paths.get(path));
    }
}
```

### 特殊用途注解

### 10)`@Cleanup`

自动管理资源关闭

```java
public void copyFile(String in, String out) {
    @Cleanup InputStream is = new FileInputStream(in);
    @Cleanup OutputStream os = new FileOutputStream(out);
    // 自动在代码块结束时关闭流
}
```

### 11)`@NonNull`

自动生成 null 检查

```java
public void setName(@NonNull String name) {
    this.name = name;
}
// 相当于
public void setName(String name) {
    if (name == null) throw new NullPointerException("name is marked non-null but is null");
    this.name = name;
}
```

## 配置注解

### 12)`@Accessors`

@Accessors 一个为getter和setter方法设计的更流畅的注解 这个注解要搭配@Getter与@Setter使用，用来修改默认的setter与getter方法的形式。 **@Accessors属性详解**

- fluent 属性 : 链式的形式 这个特别好用，方法连缀越来越方便了
- chain 属性 : 流式的形式（若无显示指定chain的值，也会把chain设置为true）
- prefix 属性 : 生成指定前缀的属性的getter与setter方法，并且生成的getter与setter方法时会去除前缀

### 其他







