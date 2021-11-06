---
title: centos7  -mysql5.7.22 安装
categories: 
- Linux
- CentOS
- MySQL
tags:
- Linux
- CentOS
- MySQL5
---

### 安装依赖

```
yum -y install libxml2 libxml2-devel curl-devel libjpeg-devel libpng-devel freetype-devel  libmcrypt-devel
yum install -y gcc gcc-c++ make automake  libaio-devel  cmake
yum install -y ncurses-devel
yum install openssl openssl-devel

查看一下cmake 版本
cmake --version
```

### 下载 [ 注意版本]

```
安装版本 5.7.22；如果是虚拟机建议内容 4G ;

wget https://cdn.mysql.com//archives/mysql-5.7/mysql-boost-5.7.22.tar.gz
【我这里是下载到 /usr/local/download/ 然后解压到 当前目录, 准备安装到/usr/local/mysql57 】
tar zxvf  mysql-boost-5.7.22.tar.gz 
mv mysql-5.7.21 mysql
cd mysql
```

![mysql 源码位置](/img/centos/mysql/mysql_tar.png "mysql 源码位置")

### 编译安装

```
cmake . -DBUILD_CONFIG=mysql_release \
-DCPACK_MONOLITHIC_INSTALL=ON \
-DCMAKE_INSTALL_PREFIX=/usr/local/mysql57 \
-DDEFAULT_CHARSET=utf8 \
-DDEFAULT_COLLATION=utf8_general_ci \
-DMYSQL_UNIX_ADDR=/usr/local/mysql57/mysql.sock \
-DMYSQL_TCP_PORT=3306 \
-DMYSQLX_UNIX_ADDR=/usr/local/mysql57/mysqlx.sock \
-DMYSQL_DATADIR=/usr/local/mysql57/data \
-DSYSCONFDIR=/usr/local/mysql57/etc \
-DWITH_BOOST=/usr/local/download/mysql-5.7.22/boost/boost_1_59_0

注意这一项：这个是你 boost 下载好的目录，我的这个版本的 MySQL 解压后对应的目录中有这个
-DWITH_BOOST=/usr/local/download/mysql-5.7.22/boost/boost_1_59_0
注意看编译报错信息,每次出现缺少包,安装完缺少的包,重新解压新的mysql压缩包

make    #需要很长时间
make install
```

![mysql cmake](/img/centos/mysql/mysql_cmake.png "mysql cmake")

![make_success](/img/centos/mysql/make_success.png "mysql success")

### 初始化mysql 

#### 创建 MySQL 组跟用户

```
groupadd mysql
useradd -r -g mysql -s /bin/false mysql
```

#### 更改 mysql 目录权限

```
cd /usr/local/mysql57

touch mysql.sock
chmod -R 777 mysql.sock

chown -R mysql .
chgrp -R mysql .
```

#### 初始化 mysql ， 生成 root 用户临时密码，

```
初始化要是操作出问题,可以删掉当前目录文件,然后到编译目录先 make install 可以重新生成文件
此时要删除 系统中生成的my.cnf 文件 [/etc/my.cnf   /etc/my.cnf.d  /etc/my.cnf.d/mysql-clients.cnf ]

bin/mysqld --initialize --user=mysql

通过mysqld初始化data目录时，如果使用--initialize选项，则会为'root'@'localhost'用户创建一个随机密码。该密码会打印在控制台，如下所示行中末尾就是临时密码：

2019-05-09T11:41:55.724145Z 1 [Note] A temporary password is generated for root@localhost: yfa!II_T%7dU

*****************初始化一个空密码，使用initialize-insecure ****************
bin/mysqld --initialize-insecure --user=mysql
```

![mysql init](/img/centos/mysql/mysql_init.png "mysql init")

### 启动mysql

```
!!!如果遇到启动报错记得杀死进程重新启动!!!
ps -aux | grep mysql
pkill -9 mysql
ps -aux | grep mysql


support-files/mysql.server start  #启动报错,没有报错则不用执行下面创建文件

mkdir /var/log/mariadb
touch /var/log/mariadb/mariadb.log
chown -R mysql:mysql /var/log/mariadb/

再次启动:
support-files/mysql.server start   #启动成功
```

![mysql start](/img/centos/mysql/mysql_start.png "mysql start")

### 登录mysql 修改密码

```

bin/mysql -u root -p
alter user 'root'@'localhost' identified by 'new_password';  #修改密码
修改完重启mysql 或者 刷新
support-files/mysql.server stop   或者
flush privileges;

----------------------
show databases;
use mysql;
show tables;
select * from user;
select Host,User from user;
select Host,User,authentication_string from user;
*************************************************************
我这里设置密码： 123456 做测试，实际中设置你认为安全的密码
方法1：alter user 'root'@'localhost' identified by '123456';
方法2：set password=password('123456');
方法3：update user set authentication_string=password('123456') where user='root';
( 不建议使用方法3,SQL会记录到日志中 )

这里如果不重新设置密码，系统会一直提示：
mysql> show databases;
ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.

****其他****
ALTER USER 'root'@'localhost' PASSWORD EXPIRE;  #使密码过期
```



