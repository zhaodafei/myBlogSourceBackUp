---
title: -vim  编辑文件
date: 2014-01-04
categories: 
- Linux
tags:
- Linux
- vim
---
vim  编辑文件
vim  编辑文件
vim  编辑文件

<!-- more -->

### 跳转到指定行

```
:5  回车
:10  回车
:15  回车
```

![vim](/img/ubuntu/linux_command/linux_vim/vim_01.gif "vim")

### 替换

```
利用 :s 命令可以实现字符串的替换。具体的用法包括：
:s/str1/str2/       用字符串 str2 替换[行]中[首次]出现的字符串 str1
:s/str1/str2/g      用字符串 str2 替换[行]中[所有]出现的字符串 str1
:.,$ s/str1/str2/g  用字符串 str2 替换[正文]当前[行到末尾]所有出现的字符串 str1
:1,$ s/str1/str2/g  用字符串 str2 替换[正文]中[所有]出现的字符串 str1
:g/str1/s//str2/g   功能同上

:%s/^/dada          在每行开始添加dada
:%s/$/feifei        在每行末尾添加feifei
```



### 其他

```
u         #撤销
ctrl + r  #反撤销
shift + G #最后一行
:set nu   #显示行号
```



































