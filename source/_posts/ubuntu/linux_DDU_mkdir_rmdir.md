---
title: linux-DDU  显示目录列表  -mkdir  -rmdir
---
mkdir 不指定参数，创建文件默认权限 为 755  rwxr-xr-x

### 命令格式

``` php
mkdir [选项] [参数]
```

### 选项

```
-m<目标属性>或--mode<目标属性>建立目录的同时设置目录的权限；
-p或--parents 若所要建立目录的上层目录目前尚未建立，则会一并建立上层目录；
--version 显示版本信息。
```

### 参数

目录：指定要创建的目录列表，多个目录之间用空格隔开

## demo

### 选项 -m 创建目录并设置权限

```
mkdir -m 700 /www/test    #在 /www  目录下创建子目录test，并设置 700 权限
```

![mkdir 创建目录并设置权限](/img/linux_command/linux_mkdir/mkdir_m.png "mkdir 创建目录并设置权限")

### 选项 -m 创建 子目录

```
mkdir -p aaa/bbb    #在当前目录创建 aaa 目录 和 aaa下的bbb目录
```

![mkdir 创建子目录](/img/linux_command/linux_mkdir/mkdir_p.png "mkdir 创建子目录")



## rmdir

只可以删除空目录

### 命令格式

```php
rmdir [选项] [参数]
```

### 选项

```
-p或--parents：删除指定目录后，若该目录的上层目录已变成空目录，则将其一并删除；
-v或-verboes：显示命令的详细执行过程；
--help：显示命令的帮助信息；
--version：显示命令的版本信息。
```

### 参数

目录列表：要删除的空目录列表。当删除多个空目录时，目录名之间使用空格隔开。 

### 选项 -p 删除空目录

```
rmdir    aaa/bbb   #删除 bbb 目录
rmdir -p aaa/bbb   #删除 bbb 目录，如果aa目录是空也一并删除
```

![rmdir 删除空目录](/img/linux_command/linux_mkdir/rmdir.png "rmdir 删除空目录")

![rmdir 删除空目录和子目录](/img/linux_command/linux_mkdir/rmdir_p.png "rmdir 删除空目录和子目录")

















