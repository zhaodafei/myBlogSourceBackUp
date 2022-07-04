---
title: C 语言随笔demo02
date: 2022-06-05
categories: 
- C语言
tags:
- C语言
---

`C`语言几个简单的入门demo02

<!-- more -->

### 判断是否是闰年

```c
int n;
// n = 2020;
scanf("%d", &n);
if ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0 ) {
    printf("Yes");
} else {
    printf("No");
}
```

### 输出`ASCII`码

从键盘接收一个字符，如果是字母，输出其对应的ASCII码，
如果是数字，按原样输出，否则给出提示信息“输入错误！”。

```c
char n;
// n = '1';
n = getchar();
if (n >= '0' && n <= '9') {
    printf("%c", n);
} else if ((n >= 'a' && n <= 'z') || (n >= 'A' && n <= 'Z')) {
    printf("%d", n);
} else {
    printf("输入错误!");
}
```

### 最大公约数和最小公倍数

输入两个正整数m和n，求其最大公约数和最小公倍数

```c
int a, b;
// a = 6; b = 16;
scanf("%d%d", &a, &b);
if (a < b) { // 交换2个数
    int temp;
    temp = a;
    a = b;
    b = temp;
}

int temp;
int x = a ,y =b;
while (y != 0) {
    temp = x % y;
    x = y;
    y = temp;
}

printf("最大公约数:%d\n", x);
printf("最小公倍数:%d", a * b / x);
```

### 输出x位整数的反序数

编写程序，从键盘输入一个4位正整数，输出该数的反序数。反序数即原数各位上的数字颠倒次序形成的另一个整数，例如1234的反序数是4321，2468的反序数是8642

```c
// 这个程序输入多少位都可以,最后结果都会输出反序数
int a, b = 0;
scanf("%d", &a); // 26789
while (a > 0) {
    b = b * 10 + a % 10;
    a = a / 10;
}
printf("%d", b);
```

### 分解质因数

输入一个100以内的正整数，将其分解质因数后输出。如输入60，输出60=2*2*3*5

```c
int a, i = 2; // i位数
// a = 60;
scanf("%d", &a);
printf("%d=", a);
while (a != i) { // 质数等于本身的时候结束循环
    if (a % i == 0) {
        printf("%d*", i);
        a = a / i;
    } else {
        i++;
    }
}
printf("%d", i);
```

### *经典--整元换零钱问题

整元换零钱问题。把1元兑换成1分、2分、5分的硬币，共有多少种不同的换法？

```c
int sum = 0; // 1分 2分 5分
for (int i = 0; i <= 100; i++) { // 1 分总数
    for (int j = 0; j <= 50; j++) { // 5分总数
        for (int k = 0; k <= 20; k++) { // 2分总数
            if (i * 1 + j * 2 + k * 5 == 100) {
                sum++;
            }
        }
    }
}

// 方法2,优化后
int i, j, k, n;
n = 100, k = 0;
for (i = 0; i <= n / 5; i++) {
    for (j = 0; j <= (n - i * 5) / 2; j++) {
        k++;
    }
}
printf("%d\n", k);
```







