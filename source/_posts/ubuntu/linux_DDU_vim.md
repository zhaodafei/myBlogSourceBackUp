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

### 基本命令

```shell
i #在当前光标位置插入文本。
x #删除当前光标所在位置的字符。
:w  #保存文件。
:q  #退出Vim编辑器。
:q! #强制退出Vim编辑器，不保存文件。
:wq #保存文件并退出Vim编辑器。

Esc：退出插入模式。
```



### 跳转到指定行

```wiki
:5  回车
:10  回车
:15  回车
```

![vim](/img/ubuntu/linux_command/linux_vim/vim_01.gif "vim")

### 替换

```shell
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

```shell
u         #撤销
ctrl + r  #反撤销
shift + g #最后一行 或者输入大写的G
shift + ^ #跳转到当前行的开头(光标必须在具体的某一行)
shift + $ #跳转到当前行的末位(光标必须在具体的某一行)

:set nu   #显示行号
:set hlsearch #高亮显示搜索结果(默认显示)
:set nohlsearch #高亮显示搜索结果

#搜索要在normal模式(再任意其它模式按ESC键回到normal mode),
##按“/”或者“?”后面跟所要搜索的pattern，然后按回车开启对pattern的搜索
/pattern  #搜索demo   /fei
?pattern  #搜索demo  ?fei
```



































