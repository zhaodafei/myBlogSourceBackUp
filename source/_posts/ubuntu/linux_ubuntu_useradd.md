---
title:  linux -useradd 
date: 2014-02-05
categories: 
- Linux
tags:
- Linux
- useradd
---

`useradd` 查看所有用户和用户组,添加删除用户
`useradd` 查看所有用户和用户组,添加删除用户

<!-- more -->

###  查看所有用户

```
/etc/group   文件包含所有组
/etc/shadow 和 /etc/passwd    系统存在的所有用户名

tail -3 /etc/group
tail -3 /etc/shadow
tail -3 /etc/passwd
```

![查看所有用户](/img/ubuntu/linux_command/linux_useradd/user.png "查看所有用户")

### 创建用户

```
useradd -m -s /bin/bash fei_04  ###可以远程登录,也可以执行shell命令  常用

useradd fei_02    #创建用户
passwd fei_02     #设定密码
tail -4 /etc/group  #查看用户
这样创建的用户登录后不能使用 ll,touch 等其他命令

useradd -m fei_03  #创建一个有家目录,远程登录后不能执行命令
useradd -m -s /bin/bash fei_04  ##可以远程登录,也可以执行shell命令
useradd -s /sbin/nologin fei_05  #创建一个没有家目录,且不能登录的用户

```

![m 选项](/img/ubuntu/linux_command/linux_useradd/m.png "m 选项")

![s 选项](/img/ubuntu/linux_command/linux_useradd/s.png "s 选项")

![不能登录](/img/ubuntu/linux_command/linux_useradd/no_login.png "不能登录")

### 删除用户

```
userdel fei_03   #如果用户还在登录状态,会出现无法删除,此时要先强制用户退
w    #查看当前登录用户
pkill -kill -t pts/20  # 强制退出用户
```

![删除用户](/img/ubuntu/linux_command/linux_useradd/userdel.png "删除用户")

