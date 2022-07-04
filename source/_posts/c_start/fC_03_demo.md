---
title: C 语言随笔demo01
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

### 两数比较大小

```c
// 输入a,b两个值，输出两个数中的较大者
int a, b, max;
scanf("%d %d", &a, &b);
if (a > b) {
    max = a;
} else {
    max = b;
}
printf("%d ", max);
```

### 三数比较大小

```c
int a, b, c, max;
scanf("%d %d %d", &a, &b, &c);
max = a;
if (max < b) {
    max = b;
}
if (max < c) {
    max = c;
}

printf("%d\n", max);
```

### 交换2个数的值

```c
// 方法1,借助第三个变量
int a = 2, b = 3, temp;
temp = a;
a = b;
b = temp;
printf("%d %d", a, b);

// 方法2:位操作——按位异或,使用异或运算
int a = 2, b = 3;
a = a ^ b;
b = a ^ b;
a = a ^ b;
printf("%d %d", a, b);

// 扩展知识点
按位异或 ^，就是将两个数的每一位进行比较，相同的得到 0，不同的得到 1。
1 ^ 0 = 1
0 ^ 1 = 1
0 ^ 0 = 0
1 ^ 1 = 1
```
***异或运算几个很有用的特性：***

1. **归零律：一个数和自己进行异或运算，得到的是 0**：`x^x = 0`。因为所有的对应位都是相同的，所以只能得到 0。
2. **恒等律：一个数和 0 进行异或运算，得到的还是这个数**。`x^0 = x`。因为对于 0 来说，如果对方是 1，得到的是 1；如果对方是 0，得到的是 0。所以整了半天，结果还是原来的那个数。
3. **交换律和结合律**

### 切割一个9位数

```c
// 9位的长整数,分割为3个3位数
// 例如: 123456789分解为789、456和 123
long a;
scanf("%ld", &a);
while (a > 0) {
    printf("%d ", a % 1000);
    a = a / 1000;
}
```

### 字母大小写转化

```c
// 大写字母转为小写
char c1;
c1 = getchar();
putchar(c1 + 32);

```

### 从小到大输出4个数

输入4个整数，要求按由小到大的顺序输出

```c
int n1, n2, n3, n4, max;
// n1 = 1;  n2 = 5;  n3 = 6;  n4 = 4;
scanf("%d%d%d%d", &n1, &n2, &n3, &n4);

// n1 从第一位去除
if (n1 > n2) { max = n1; n1 = n2; n2 = max; }
if (n1 > n3) { max = n1; n1 = n3; n3 = max; }
if (n1 > n4) { max = n1; n1 = n4; n4 = max; }

// n2 从第二位去除
if (n2 > n3) { max = n2; n2 = n3; n3 = max; }
if (n2 > n4) { max = n2; n2 = n4; n4 = max; }

// n3 从第三位去除
if (n3 > n4) { max = n3; n3 = n4; n4 = max; }

printf("%d %d %d %d", n1, n2, n3, n4);
```

输入3个整数，要求按由小到大的顺序输出

```c
int n1, n2, n3, max;
// n1 = 1;  n2 = 5;  n3 = 6;
scanf("%d%d%d", &n1, &n2, &n3);

// n1 从第一位去除
if (n1 > n2) { max = n1; n1 = n2; n2 = max; }
if (n1 > n3) { max = n1; n1 = n3; n3 = max; }

// n2 从第二位去除
if (n2 > n3) { max = n2; n2 = n3; n3 = max; }

printf("%d %d %d", n1, n2, n3);
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





