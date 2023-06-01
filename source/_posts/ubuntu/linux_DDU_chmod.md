---
title: -chmod 文件权限
date: 2023-05-31
categories: 
- Linux
tags:
- Linux
- chmod
---
chmod 文件权限
chmod 文件权限
chmod 文件权限

r ： (read) 读权限 , 值为 4
w ：(write) 写权限 , 值为 2
x ： (execute) 执行权限 , 值为 1

<!-- more -->

### 命令格式

```
chmod  755  [文件名]

7 就是所有权限即rwx
5 是r-x的权限
3 是-wx权限
文件名为 * 时修改目标为当前目录下所有文件
```

### demo

```bash
#将当前目录下的 fei.txt 文件权限修改为：-rwx r-x r-x
chmod 755 fei.txt

#将当前目录下的 bar.html 文件权限修改为：-rw- r-- r--
chmod 644 bar.html
```

### 常用

```bash
#文件夹权限
chmod 755 /abc/bar

#文件权限
chmod 644 bar.html
```























