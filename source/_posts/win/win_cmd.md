---
title: windows cmd 命令
---

windows中常用命令

### 帮助命令 help

```
help  #查看所有命令
help xcopy #查看xcopy所有参数
```



### xcpoy 复制文件夹

```
参数:
/s 复制目录和子目录，除了空的。
/e 复制目录和子目录，包括空的。
/c 即使有错误，也继续复制
/y 禁止提示以确认改写一个

xcopy E:\web\win_web\aaa  E:\web\win_web\bbb\bbb_01 /e/c/y   #注意目录文件后面不要有\
```
