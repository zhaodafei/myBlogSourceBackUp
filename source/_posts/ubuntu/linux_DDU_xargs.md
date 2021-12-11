---
title:  -xargs  用作替换工具，读取输入数据重新格式化后输出 
date: 2014-01-04
categories: 
- Linux
tags:
- Linux
- xargs
---
xargs  用作替换工具，读取输入数据重新格式化后输出
xargs  用作替换工具，读取输入数据重新格式化后输出
xargs  用作替换工具，读取输入数据重新格式化后输出

<!-- more -->

### demo

### 在目录中搜索含有固定字符串文件命令，比如：

在当前目录(及其子目录)中搜索扩展名为 .txt 结尾文件中包含 hello 的内容的行

```
搜索文件中内容
grep "hello" test01.txt

查找 .txt 结尾的文件
find -name "*.txt"
find /home/fei/www -name "*.txt"
******************************************************************************

find  -name "*.txt" | xargs grep "hello"
find /home/fei/www -name "*.txt" | xargs grep "hello"
locate *.txt | xargs  grep "hello"
```

![xargs 典型使用](/img/ubuntu/linux_command/linux_xargs/xargs_01.png "xargs 典型使用")

### 单行输出文本内容

```
cat test01.txt | xargs

cat test01.txt | xargs -n3   [选项 -n]
```

![xargs 典型使用02](/img/ubuntu/linux_command/linux_xargs/xargs_02.png "xargs 典型使用02")

![xargs 典型使用03](/img/ubuntu/linux_command/linux_xargs/xargs_03.png "xargs 典型使用03")

### 其他使用场景demo

```
cat url.txt | xargs wget -c     [下载url.txt 中链接的内容]
ls | xargs -n2
```





























