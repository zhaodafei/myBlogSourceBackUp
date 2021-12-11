---
title: -MySQL8
date: 2015-11-01
categories: 
- MySQL8
tags:
- MySQL8
---
MySQL8 使用
MySQL8 使用
MySQL8 使用

<!-- more -->

### mysql8忘记密码

01) 停止mysql服务

```shell
net stop mysql
```

02) 打开命令窗口,跳过验证密码,[ 注意:这个窗口不要关闭,不要动 ]

```shell
mysqld --console  --skip-grant-tables --shared-memory
```

03) 打开一个新的窗口,无密码登录mysql

```shell
mysql -u root -p  #输入密码行,直接回车跳过
```

04) 重置密码

```shell
use mysql
update user set authentication_string='' where user='root';
flush privileges;

#注意这里不能使用  alter user 'root'@'localhost' identified by ''; ,
# 到这里为止就可以无密码登录数据库,可以在打开一个命令窗口测试一下
# !!!这里也可以直接设置上密码!!!
```

05) 退出`02` 步骤的跳过密码窗口

```shell
#重启mysql服务,无密码登录mysql数据库
# 现在可以使用 alert 修改密码
mysql -u root -p  #无密码登录数据库
alter user 'root'@'localhost' identified by '123456'; #修改密码
flush privileges;
```





 [Resetting the Root Password 官网](https://dev.mysql.com/doc/refman/8.0/en/resetting-permissions.html "Resetting the Root Password")





























