---
title:  -Java入门基础
date: 2024-01-14
categories: 
- Java
tags:
- Java
---

Java基础入门,字符串和日期

字符串,字符,字节的关系

1. 连续的字符组成字符串
2. 除了( ASCII码表 )中字符,其他都是三个字节组成一个字符

<!-- more -->

### 基础知识

```java
// 打印当前字符在ASCII码表中值
byte b1 = 'A';
byte b2 = 'a';
System.out.println(b1); // 输出: 65
System.out.println(b2); // 输出: 97
```



### 字符串

```java
// 字符串,字符,字节的关系
// 连续的字符组成字符串
// 除了( ASCII码表 )中字符,其他都是三个字节组成一个字符
char[] cs = {'a', '中', '国'};
// a: 97
// 中: -28,-72,-83
// 国: -27,-101,-67
String sAll = new String(cs); // CTRL + P 提示参数展示
System.out.println(sAll); // 输出: a中国

byte[] bs = {-28, -72, -83, -27, -101, -67};
String s = new String(bs);
// String s = new String(bs,"UTF-8"); 防止乱码
System.out.println(s); // 输出: 中国

byte[] bs1 = {97};
String s1 = new String(bs1);
System.out.println(s1); // 输出: a

byte[] bs2 = {97, -28, -72, -83, -27, -101, -67};
String s2 = new String(bs2);
System.out.println(s2); // 输出: a中国
```

#### 扩展知识

> 128个US-ASCII字符，只需一个字节编码。
> 拉丁文等字符，需要二个字节编码。
> 大部分常用字（含中文），使用三个字节编码。
> 其他极少使用的Unicode辅助字符，使用四字节编码。

> **Java代码验证**
> 编码：将字符转为二进制代码称为编码。
> 解码：将二进制代码转为字符称为解码。
> 常见中文乱码的原因：编码和解码使用的规则不一致导致的。

```java
// 备注: UTF-8 一个中文三个字节
//1.编码 使用UTF-8
byte[] b1 = "中".getBytes("UTF-8");
System.out.println("字节数组长度" + b1.length);  //输出: 3; 备注: UTF-8一个中文三个字节
System.out.println("字节数组内容" + Arrays.toString(b1));//输出: [-28, -72, -83]

//2.解码 UTF-8
byte[] d1 = {-28, -72, -83};
String utf8Str = new String(d1, "UTF-8");
System.out.println(utf8Str);
```

```java
// 备注: gbk一个中文两个字节
byte[] b2 = "中".getBytes("gbk");
System.out.println("字节数组长度" + b2.length); // 输出: 2; 备注:gbk一个中文两个字节
System.out.println("字节数组内容" + Arrays.toString(b2));//输出: [-42, -48]

byte[] d2 = {-42, -48};
String gbkStr = new String(d2, "gbk");
System.out.println(gbkStr);
```

> [-28, -72, -83]解码为汉字"中"过程分析
>
>     [-28, -72, -83] 根据Unicode字符集,utf-8编码规则解码为汉字“中”
>     
>     [-28, -72, -83]的二进制补码：1110 0100 1011 1000 1010 1101
>     转为整数是 14989485 ,对应的16进制E4 B8 AD
>     去Unicode字符集查找，根据utf-8 编码规则 可找到 对应Unicode “中”

### 字符串拼接

```java
String s = "a" + "b";
String s1 = "ab";

// 输出内存地址一样,可以说明2个完全相等
System.out.println(s.hashCode());
System.out.println(s1.hashCode());
```

### 字符串比较

```java
// 判断是否相等
Boolean s1 = "a".equals("b");
System.out.println(s1); // 输出: false

// 忽略大小写判断是否相等
Boolean s2 = "a".equalsIgnoreCase("A");
System.out.println(s2); // 输出: true
```

```java
String s = "a" + "b";
String s1 = "ab";

// 输出内存地址一样,可以说明2个完全相等
System.out.println(s.hashCode());
System.out.println(s1.hashCode());
```

### 字符串截取

```java
// 原始方法:  substring()
// "abc".substring()

// 字符串分割为数组 split(",")
// "a,b,c".split(",")

// 去除字符串首位空格
// " abc ".trim()
```

### 字符串替换

```java
// 字符串替换 replace()
// "Hello world fei world".replace("world","Java")

// 按照指定规则替换 
// "Hello world fei world".replaceAll("world|fei","Java")
```

### 字符串大小写

```java
// "Hello World".toLowerCase();
// "Hello World".toUpperCase();
```

### 字符串查找

```java
String s = "Hello World";
char[] chars = s.toCharArray();
byte[] bytes = s.getBytes("UTF-8");
// charAt可以传递索引定位字符串中指定位置的字符
char c = s.charAt(1);

s.indexOf("World");
s.lastIndexOf("World");
s.contains("World");
s.startsWith("Hello");
s.endsWith("World");
s.isEmpty();
```

### 字符串`StringBuilder`

```java
StringBuilder s = new StringBuilder();
for (int i = 0; i < 5; i++) {
    s.append(i);
}
System.out.println(s.toString());

// ===============输出26个大写英文字母
char uc = 'A';
StringBuilder s1 = new StringBuilder();
for (int  i = 0; i < 26; i++) {
    s1.append((char) (uc + i));
}
System.out.println(s1.toString());

// ===============输出26个小写英文字母
char lc = 'a';
StringBuilder s2 = new StringBuilder();
for (int  i = 0; i < 26; i++) {
    s2.append((char) (lc + i));
}
System.out.println(s2.toString());
```

### 包装类

```java
// 包装类的作用
// 01) 一个实现基本类型之间的转换
// 02) 二是便于函数传值
// 03) 三就是在一些地方要用到Object的时候方便将基本数据类型装换

// 常见数据类型
// byte, short, int, long
// float, double
// char
// boolean

// 对应包装类
// Byte, Short, Integer, Long
// Float, Double
// Character
// Boolean

//=============================demo 如下
int i = 10;
// int类型 转为 Integer类型
Integer i1 = new Integer(i);
// 自动装箱
Integer i2 = Integer.valueOf(i);
Integer i3 = i;

// 自动拆箱
int m1 = i1.intValue();
int m2 = i1;
```

## 时间日期类

### 日期类

```java
// Date: 日期类
// 时间戳: 毫秒
System.currentTimeMillis();

// Date: 日期类
// calendar: 日历类
Date d = new Date();

// Java格式化日期格式
// Date --> String
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
// SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
String dateFormatString = sdf.format(d);
System.out.println(dateFormatString);

// String -> Date
String dateString = "2024-01-14 06:52:09";
Date parseDate = sdf.parse(dateString);
System.out.println(parseDate);

// 根据时间戳构建指定的日期对象
d.setTime(System.currentTimeMillis());
// 获取时间戳
d.getTime();

// 判断时间前后
parseDate.before(d);
parseDate.after(d);
```

### 日历类

```java
Calendar instance = Calendar.getInstance();
instance.get(Calendar.YEAR);
instance.get(Calendar.MONTH);
instance.get(Calendar.DATE);
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



### 底部

没有了

