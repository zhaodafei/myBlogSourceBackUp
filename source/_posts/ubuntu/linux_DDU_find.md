---
title: -find 文件查找
date: 2014-01-04
categories: 
- Linux
tags:
- Linux
- find
---
...... find 命令用来指定目录文件下查找

<!-- more -->

### 命令格式

```
find [选项] [参数]
```

### 常见参数

```
-name	按名称查找
-iname	忽略大小写
-size	按大小查找
-user	按属性查找
-type	按类型查找
```

### demo_01,按照时间搜索

```
搜索一段时间内,被存取/变更的文件或目录
find /home -amin -5  五分钟内存取的文件或目录
find /home -atime -5  五小时内存取的文件或目录
find /home -cmin -5  五分钟内更改的文件或目录
find /home +ctime +5  五小时前更改的文件或目录

find /home -size +5k 查找/home目录下大小为5k的文件或目录
```

### demo

```
find /home -name "*.txt"   #在home目录下查找以.txt结尾的文件名
find /home -iname "*.txt"  #忽略大小写
```





























