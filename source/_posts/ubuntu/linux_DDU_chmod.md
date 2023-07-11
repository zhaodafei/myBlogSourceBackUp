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
chmod [-cfvR] [--help] [--version] mode file

用于改变文件或目录的访问权限，用它控制文件或目录的访问权限
```

### 选项

```
-c 当发生改变时，报告处理信息
-f 错误信息不输出
-R 处理指定目录以及其子目录下的所有文件 (====常用=====)
-v 运行时显示详细处理信息


权限代号：
r ：读权限，用数字4表示
w ：写权限，用数字2表示
x ：执行权限，用数字1表示
- ：删除权限，用数字0表示
s：特殊权限
```

### 其他

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

#递归修改指定目录以及其子目录下的所有文件
chmod -R 777 /fei/bar
```

### 常用

```bash
#文件夹权限
chmod 755 /abc/bar

#文件权限
chmod 644 bar.html
```























