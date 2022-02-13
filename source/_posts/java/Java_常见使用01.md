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



