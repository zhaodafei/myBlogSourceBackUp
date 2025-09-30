---
title: Java_常见使用
date: 2022-02-07
categories: 
- Java
tags:
- Java
---
Java_常见使用
Java_常见使用
Java_常见使用

<!-- more -->

### 乘法运算

BigDecimal 中 乘法运算multiply

```java
import java.math.BigDecimal;

public class Main {

    public static void main(String[] args) {
        BigDecimal a = new BigDecimal("3");
        BigDecimal b = new BigDecimal("3.3");

        BigDecimal c = b.multiply(a);

        System.out.println(c);// 输出 9.9
    }
}
```

### 获取字符串`Hash`值

```java

public static String hashKeyForDisk(String key) {
    String cacheKey;
    try {
        final MessageDigest mDigest = MessageDigest.getInstance("MD5");
        mDigest.update(key.getBytes());
        cacheKey = bytesToHexString(mDigest.digest());
    } catch (NoSuchAlgorithmException e) {
        cacheKey = String.valueOf(key.hashCode());
    }
    return cacheKey;
}

private static String bytesToHexString(byte[] bytes) {
    // http://stackoverflow.com/questions/332079
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < bytes.length; i++) {
        String hex = Integer.toHexString(0xFF & bytes[i]);
        if (hex.length() == 1) {
            sb.append('0');
        }
        sb.append(hex);
    }
    return sb.toString();
}
```

### 当前时间

```java
// System.currentTimeMillis()   当前毫秒
Date nowTime = new Date(System.currentTimeMillis());
SimpleDateFormat sdFormatter = new SimpleDateFormat("yyyy-MM-dd"); // yyyy-MM-dd HH:mm:ss
System.out.println(sdFormatter.format(nowTime));
```

### 唯一识别码

```java
String fei = UUID.randomUUID().toString(); // 通用唯一识别码
System.out.println(fei);
```

### 随机数

```java
System.out.println(new SplittableRandom(20231203).nextInt(1,20));
```

### 自定义随机数

```java
// 使用: makeString("abc123", 6);
public static String makeString(String from, int len) {
    if (len <= 1) {
        return "";
    }else {
        char[] chars = from.toCharArray();
        StringBuilder str = new StringBuilder();
        for (int i = 0; i < len; i++) {
            Random random = new Random();
            int j = random.nextInt(chars.length);
            char c = chars[j];
            str.append(c);
        }
        return str.toString();
    }
}
```

### 非空字符串

```java
public static boolean isEmpty(String str)
{
    return isNull(str) || NULLSTR.equals(str.trim());
}
```

### 日期格式化

```java
public static Date parseDate(String dateString, String format) throws ParseException {
    SimpleDateFormat sdf = new SimpleDateFormat(format);
    return sdf.parse(dateString);
}

public static String formatDate(Date date, String format) {
    SimpleDateFormat sdf = new SimpleDateFormat(format);
    return sdf.format(date);
}

// 使用
Date s = parseDate("2024-01-20", "yyyy-MM-dd");
System.out.println(s); // Sat Jan 20 00:00:00 CST 2024

String date = formatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
System.out.println(date); // 2024-01-20 08:58:23
```



### 常识

#### 01)前后端类型对应

| Js类型    | Java类型    | 说明                                  |
| --------- | ----------- | ------------------------------------- |
| string    | string      | 字符串                                |
| boolean   | boolean     | 布尔值                                |
| undefined | null        | JS 的 undefined 通常对应 Java 的 null |
| null      | null        | 两者都有 null 概念                    |
| object    | object      | JS 对象对应 Java 对象                 |
| Array     | List / 数组 | JS 数组对应 Java 集合或数组           |

> 举例说明
>
> ```java
> // 前端传递:  ['a', 'b', 'c'] 数组类型数据, 到了后端可以使用 List和数组 这2种方式接受,常用List
> 
> // 在Java中 ['a', 'b', 'c'] 这个既可以是 List 也可以是 数组
> 
> // 下面这2个输出是一样的: [Google, Taobao, Weibo]
> ArrayList<String> sites = new ArrayList<String>();
> sites.add("Google");
> sites.add("Taobao");
> sites.add("Weibo");
> System.out.println(sites);
> 
> String[] names = new String[3];
> names[0] = "Google";
> names[1] = "Taobao";
> names[2] = "Weibo";
> System.out.println(Arrays.toString(names));
> ```
>
> 
>
> ```js
> // 发送字符串数组( 这个注意一下, 后端出现2种情况 list和数组 )
> fetch('/example', {
>  method: 'POST',
>  headers: {
>      'Content-Type': 'application/json'
>  },
>  body: JSON.stringify(['a', 'b', 'c'])
> });
> 
> // 发送对象数组
> fetch('/example2', {
>  method: 'POST',
>  headers: {
>      'Content-Type': 'application/json'
>  },
>  body: JSON.stringify([
>      {id: 1, name: 'Alice'},
>      {id: 2, name: 'Bob'}
>  ])
> });
> ```
>
> ```java
> // 使用 List 接收
> // Java 后端
> @PostMapping("/example")
> public void handleArray(@RequestBody List<String> array) {
>  // 处理字符串数组
> }
> 
> @PostMapping("/example2")
> public void handleObjectArray(@RequestBody List<MyObject> list) {
>  // 处理对象数组
> }
> ```
>
> 



