---
title: -mysql-shell 工具使用(windows篇)
categories: 
- MySQL
tags:
- MySQL
- MySQL-shell
---
### mysql-shell 

```
MySQL Shell是MySQL Server的高级客户端和代码编辑器。除了提供的SQL功能，类似于 mysql，MySQL Shell还提供了JavaScript和Python的脚本功能，并包含用于MySQL的API

!!!! 以下暂时提供windows中demo,其他系统原理相同 !!!
```

 [mysql-shell 文档](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-features.html "mysql-shell")

### 基本使用

```
\? {command} #查看命令的用法,也可以用\help {command}
\py #python模式
\js #js模式
\sql #sql模式
\exit #退出
```

### 连接数据库01 `mysqlsh`

```
#这种方式需要在mysql-shell的bin目录下面直接执行命令
mysqlsh --uri 用户名@IP地址       #使用默认端口
mysqlsh root@localhost
mysqlsh --uri root@localhost       #使用默认端口
mysqlsh --uri root@localhost:3306  #指定端口

\sql         #切换SQL模式
show databases   #正常SQL语句
或者
\sql show databases   #查看数据库
```

![mysqlsh 连接数据库](/img/mysql/mysql_shell/mysqlsh.png "mysqlsh 连接数据库")

### 连接数据库02 ` \connect`

```
##这种连接方式,需要点击mysqlsh.exe,在弹出的窗口中执行下面的命令
\connect root@localhost:3306   #连接数据库


\sql         #切换SQL模式
show databases   #正常SQL语句
或者
\sql show databases   #查看数据库
```

![connect 连接数据库](/img/mysql/mysql_shell/connect.png "connect 连接数据库")

### 连接数据库03  `shell.connect`

```
##这种连接方式,需要点击mysqlsh.exe,在弹出的窗口中执行下面的命令
shell.connect({'user':'root','host':'localhost','port':3306}  #连接数据库


\sql         #切换SQL模式
show databases   #正常SQL语句
或者
\sql show databases   #查看数据库
```

![shell.connect 连接数据库](/img/mysql/mysql_shell/shell_connect.png "shell.connect 连接数据库")



 [mysql-shell 文档](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-features.html "mysql-shell")





























