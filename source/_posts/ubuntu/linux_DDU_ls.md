---
title:  -ls 显示目录列表 
date: 2014-01-04 
categories: 
- Linux
tags:
- Linux
- ls
---
ls 显示目录列表 
ls 显示目录列表 
ls 显示目录列表 

<!-- more -->

### 命令格式

``` php
ls[选项][文件][目录]
```

### 命令参数

```
-a：显示所有档案及目录（ls内定将档案名或目录名称为“.”的视为影藏，不会列出）；
-A：显示除影藏文件“.”和“..”以外的所有文件列表；

-c：与“-lt”选项连用时，按照文件状态时间排序输出目录内容，排序的依据是文件的索引节点中的ctime字段。与“-l”选项连用时，则排序的一句是文件的状态改变时间；
-C：多列显示输出结果。这是默认选项；

-l：与“-C”选项功能相反，所有输出信息用单列格式输出，不输出为多列；以长格式显示目录下的内容列表。输出的信息从     左到右依次包括文件名，文件类型、权限模式、硬连接数、所有者、组、文件大小和文件的最后修改时间等；
-L：如果遇到性质为符号链接的文件或目录，直接列出该链接所指向的原始文件或目录；

-f：此参数的效果和同时指定“aU”参数相同，并关闭“lst”参数的效果；
-F：在每个输出项后追加文件的类型标识符，具体含义：“*”表示具有可执行权限的普通文件，“/”表示目录，“@”表示符号链接，“|”表示命令管道FIFO，“=”表示sockets套接字。当文件为普通文件时，不输出任何标识符；

-r：以文件名反序排列并输出目录内容列表；
-R：递归处理，将指定目录下的所有文件及子目录一并处理；

--full-time：列出完整的日期与时间；  等价于full-iso
--time-style=long-iso   显示时间风格

////////////  以下不经常用到  //////////////

-b：将文件中的不可输出的字符以反斜线“”加字符编码的方式输出；
-d：仅显示目录名，而不显示目录下的内容列表。显示符号链接文件本身，而不显示其所指向的目录列表；
-i：显示文件索引节点号（inode）。一个索引节点代表一个文件；
-k：以KB（千字节）为单位显示文件大小；
-m：用“,”号区隔每个文件和目录的名称；
-n：以用户识别码和群组识别码替代其名称；
-s：显示文件和目录的大小，以区块为单位；
-t：用文件和目录的更改时间排序；



--color[=WHEN]：使用不同的颜色高亮显示不同类型的。
```

### 选项  a  、c 、 l  显示目录

```
ls -a
ls -A

ls -c
ls -C  [ 大写 ]

ls -l  [常用这个]
ls -L
```

![linux ls acl](/img/ubuntu/linux_command/linux_ls/ls_acl.png "linux ls acl")

### 选项  full-time 

```
ls --full-time
ls -l --time-style=long-iso
ls -l --time-style=local
```

![linux ls 显示详细时间](/img/ubuntu/linux_command/linux_ls/ls_full-time.png "linux ls full-time")

![ls time-style](/img/ubuntu/linux_command/linux_ls/time_style.png "ls time-style")

### 排除某些文件显示

```
ls *.txt|egrep -v '(*.md)'
ls *.txt|egrep -v *.md

ls | grep -v aaa.txt
ls *.txt | grep -v aaa.txt
ls *.txt | egrep -v aaa.txt
```

![linux rm 排除指定文件显示](/img/ubuntu/linux_command/linux_ls/ls_other_01.png "linux ls 排除指定文件显示")

![linux rm 排除指定文件显示](/img/ubuntu/linux_command/linux_ls/ls_other_02.png "linux ls 排除指定文件显示")

### 显示某一目录下文件，显示  www 目录下文件

```
ls -l /www
```

![显示 www目录下文件](/img/ubuntu/linux_command/linux_ls/ls_other_03.png "显示 www目录下文件")































