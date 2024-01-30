---
title:  -Java入门基础,常见排序
date: 2024-01-14
categories: 
- Java
tags:
- Java
---

Java基础入门,常见排序

<!-- more -->

### 数组定义

```java
// 定义一个数组
int[] numsArr = {5, 2, 7, 6, 9, 3};

// 打印数组中每一项
for (int num : numsArr) {
    System.out.println(num);
}
```



### 冒泡排序

原理：对一组数据，比较相邻数的大小，将值大的放到后面。

```java
// 定义一个数组
int[] numsArr = {5, 2, 7, 6, 9, 3};

for (int i = 0; i < numsArr.length - 1; i++) {
    for (int j = 0; j < numsArr.length - 1; j++) {
        if (numsArr[j] > numsArr[j + 1]) {
            int temp = numsArr[j];
            numsArr[j] = numsArr[j + 1];
            numsArr[j + 1] = temp;
        }
    }
}

for (int num : numsArr) {
    System.out.println(num);
}
```

### 选择排序