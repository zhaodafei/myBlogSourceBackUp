---
title: -du 查看某个文件或目录占用磁盘空间的大小
date: 2013-07-04
categories: 
- 计算机
tags:
- 编程
---
`du` 查看某个文件或目录占用磁盘空间的大小

<!-- more -->

### 命令格式

```

```
### 常见使用 `sh`

```shell
#查看当前目录总共占的容量。而不单独列出各子项占用的容量

[root@localhost fei_test]# du -sh
2.0K    .
```

### 参数 `lh`

```shell
#查看当前目录下一级子文件和子目录占用的磁盘容量。

[root@localhost fei_test]# du -lh --max-depth=1
1.0K    ./fei
2.0K    .
```

### 参数`du -ah`

```shell
# a 表示显示目录下所有的文件和文件夹（不含子目录）
# h 表示以人类能看懂的方式
# max-depth 表示目录的深度

[root@localhost fei_test]# du -ah --max-depth=1
1.0K    ./fei
1.0K    ./test.txt
2.0K    .
```























