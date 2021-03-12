---
title: -uniq 用于统计或忽略文件中的重复行
categories: 
- Linux
tags:
- Linux
---
介绍：uniq 用于统计或忽略文件中的重复行。一般与 sort 命令结合使用。
介绍：uniq 用于统计或忽略文件中的重复行。一般与 sort 命令结合使用。
介绍：uniq 用于统计或忽略文件中的重复行。一般与 sort 命令结合使用。

!!! 注意要是连续的行,才可以统计 !!!

### uniq 命令格式

```
uniq [选项] [参数]
```

### 选项

```
-c或——count：在每列旁边显示该行重复出现的次数；
-d或--repeated：仅显示重复出现的行列；
```

## demo

测试文本内容

```wiki
Linux
HTML
CSS
JavaScript
HTML
CSS
JavaScript
CSS
JavaScript
JavaScript
```

### -c 统计文件中出现次数

```shell
 uniq -c fei.txt #如果重复行是连续的,直接用这个
 sort fei.txt | uniq -c
```

### -d  在文件中找出重复行

```shell
 uniq -d fei.txt  #如果重复行是连续的,直接用这个
 sort fei.txt |  uniq -d
```

![01](/img/ubuntu/linux_command/linux_uniq/uniq_01.png "01")
























