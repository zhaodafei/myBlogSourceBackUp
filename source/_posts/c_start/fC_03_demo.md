---
title: C 语言随笔03
date: 2022-03-16
categories: 
- C语言
tags:
- C语言
---

`C`语言几个简单的入门demo

<!-- more -->

### 编程小工具

```c
system("chcp 65001"); // 解决,中文乱码
fflush(stdin); // 刷新缓冲,否则下面的不能输入和获取
```

### 温度转化

```c++
#include <stdio.h>

void system(const char *string);

int main() {
    //#编译代码
    // gcc -o template.out template.c
    // #执行程序
    // template.out  回车
    printf("Hello, World!\n");
    system("chcp 65001"); // 解决,中文乱码
    double num;
    char flag;
    printf("请输入温度标识符:(C/F)");
    scanf("%c:", &flag);
    printf("请输入温度值:");
    scanf("%f", &num);
    if (flag == 'C') {
        double num_F = num * 1.8 + 32;
        printf("转换后的华氏温度为:%.2f", num_F);
    } else if (flag == 'F') {
        double num_C = (num - 32) / 1.8;
        printf("转换后的摄氏温度为:%.2f", num_C);
    }else{
        printf("输入有误!!");
    }

    return 0;
}


```

### 温度转化02

需求描述

```wiki
输入一个华氏温度F ，要求输出摄氏温度C 。计算公式为C=5*(F-32)/9 ，要求输出结果取小数点后2 位数字
```

输入41进行测试

```c
// 利用整型--- 官方
int flag;
scanf("%d", &flag);
float num_c = 5.0 * (flag - 32) / 9;
printf("转换后的摄氏温度为:%.2f", num_c);
```

```c
// 利用单精度浮点数
float flag; 
scanf("%f", &flag);
float num_c = 5.0 * (flag - 32) / 9;
printf("转换后的摄氏温度为:%.2f", num_c);
```

```c
// 利用双精度浮点数
double flag;
scanf("%lf", &flag);

double num_c = 5.0 * (flag - 32) / 9;
printf("转换后的摄氏温度为:%.2lf", num_c);
```

### 时间计算

需求描述:

```wiki
从键盘输入一个秒数， 即从某日0 点0 分开始到现在所经历的时间，编程计算输入秒数所代表的时间已经过了几天，现在的时间是多少，按00:00:00 的格式输出时间。例如，输入1234567 ，计算出已经过了14 天，现在的时间是06:56:07。

提示：输入秒数，通过整除可以计算出已经过去的天数，通过取余数，可以得到今天的总秒数，再由此计算时间，几小时、几分、几秒
```

输入: 123456  进行测试

```c
// --- 官方
int n, second, minute, hour, days, today;
printf("输入秒数:");
scanf("%d", &n);
days = n / (24 * 3600);
today = n % (24 * 3600);
hour = today / 3600;
minute = today % 3600 / 60;
second = today % 3600 % 60;
printf("已经过去了%d天，现在时间是：%02d: %02d: %02d \n", days, hour, minute, second);
```



```c
// 输入秒数，通过整除可以计算出已经过去的天数，通过取余数，可以得到今天的总秒数，再由此计算时间，几小时、几分、几秒
// demo: 输入 1234567, 显示 已经过了14天，现在的时间是06:56:07
int second; // 输入描述
int minute = 60 * 1;
int hour = 60 * 60 * 1;
int day = 24 * 60 * 60 * 1;

printf("请输入一个秒数:");
scanf("%d", &second);
int pass_day = second / day;
int pass_hour = second % day / hour;
int pass_minute = second % day % hour / minute;
int pass_second = second % day % hour % minute / 1;
printf("过去了%d天,现在时间是%02d:%02d:%02d \n", pass_day, pass_hour, pass_minute, pass_second);
```





