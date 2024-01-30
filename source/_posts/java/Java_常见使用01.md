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



