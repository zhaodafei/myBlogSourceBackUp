---
title: ubuntu15 -mysql5.7
---
### mysql 5.7安装

### 在终端执行 以下命令

```
sudo apt-get install mysql-server
sudo apt install mysql-client
sudo apt install libmysqlclient-dev
```

![mysql install](/img/ubuntu/mysql/fast_mysql_install.png "mysql install")

安装完用以下命测试,出现图中说明 OK

```
sudo netstat -tap | grep mysql
```

![mysql check](/img/ubuntu/mysql/fast_mysql_check.png "mysql check")

### 进入 mysql

```
 mysql -uroot -p   然后回车输入密码
```

![show databases](/img/ubuntu/mysql/fast_show_databases.png "show databases")

### 设置 mysql 运行远程访问

```
sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf
```

1、注释掉  bind-address  = 127.0.0.1  保存退出【在43行】
2、grant all on *.* to root@'%' identified by '你的密码' with grant option;
3、flush privileges;
4、exit; 退出 mysql服务
5、重启服务： service mysql restart

![remote connection](/img/ubuntu/mysql/fast_remote_connection.png "remote connection")

### 卸载mysql

```
sudo apt-get remove mysql-server
sudo apt-get autoremove mysql-server
sudo apt-get remove mysql-common //这个很重要

清理残留数据；
dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P
```



## mysql 手动安装

### 编译环境

```
sudo apt install make cmake gcc g++ perl bison libaio-dev libncurses5 libncurses5-dev libnuma-dev

```

### 下载【注意版本】

```
安装版本 5.7.21；如果是虚拟机建议内容 4G ;

wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-boost-5.7.21.tar.gz
【解压到你指定的目录，我这里选择 /data/server/ 】
tar zxvf mysql-boost-5.7.21.tar.gz -C /data/server/
mv mysql-5.7.21 mysql
cd mysql
```

![mysql download](/img/ubuntu/mysql/mysql_download.png "mysql download")

### 编译安装

```
cmake . -DBUILD_CONFIG=mysql_release \
-DCPACK_MONOLITHIC_INSTALL=ON \
-DCMAKE_INSTALL_PREFIX=/data/server/mysql \
-DDEFAULT_CHARSET=utf8 \
-DDEFAULT_COLLATION=utf8_general_ci \
-DMYSQL_UNIX_ADDR=/data/server/mysql/mysql.sock \
-DMYSQL_TCP_PORT=3306 \
-DMYSQLX_UNIX_ADDR=/data/server/mysql/mysqlx.sock \
-DMYSQL_DATADIR=/data/server/mysql/data \
-DSYSCONFDIR=/data/server/mysql/etc \
-DWITH_BOOST=/data/server/mysql/boost/boost_1_59_0

make && make install


注意这一项：这个是你 boost 下载好的目录，我的这个版本的 MySQL 解压后对应的目录中有这个
-DWITH_BOOST=/data/server/mysql/boost/boost_1_59_0

make 的过程比较耗时；耐心等待，make install 就很快啦
官方预编译配置参数：
https://dev.mysql.com/doc/refman/5.7/en/source-configuration-options.html#cmake-general-options
https://dev.mysql.com/doc/refman/5.7/en/source-configuration-options.html#cmake-general-options
```

这个过程时间比较长…………

![mysql make install](/img/ubuntu/mysql/mysql_make.png "mysql make install")

![mysql exception_01](/img/ubuntu/mysql/exception_01.png "mysql exception_01")

### 初始化设置 mysql 

#### 创建 MySQL 组跟用户

```
sudo groupadd mysql
sudo useradd -r -g mysql -s /bin/false mysql
```

#### 更改 mysql 目录权限

```
cd /data/server/mysql
sudo chown -R mysql .
sudo chgrp -R mysql .
```

#### 初始化 mysql ， 生成 root 用户临时密码，

```
sudo bin/mysqld --initialize --user=mysql

通过mysqld初始化data目录时，如果使用--initialize选项，则会为'root'@'localhost'用户创建一个随机密码。该密码会打印在控制台，如下所示行中末尾就是临时密码：

2018-03-29T01:10:08.161779Z 1 [Note] A temporary password is generated for root@localhost: xJB.L-TJ)2wB

*****************初始化一个空密码，使用initialize-insecure ****************
sudo bin/mysqld --initialize-insecure --user=mysql
```

![mysql init](/img/ubuntu/mysql/mysql_init.png "mysql init")

### 启动 mysql

```
support-files/mysql.server start
bin/mysql -u root -p
alter user 'root'@'localhost' identified by 'new_password';  #修改密码
修改完重启mysql 或者 刷新
support-files/mysql.server stop   或者
flush privileges;

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

![mysql 启动](/img/ubuntu/mysql/mysql_pwd.png "mysql 启动")

### 设为系统服务

```
cp /data/server/mysql/support-files/mysql.server /etc/init.d/mysqld

systemctl daemon-reload  [重新加载 service 文件]
systemctl start mysqld
systemctl stop  mysqld
systemctl restart mysqld

```

### 创建新用户，并允许远程连接

```
命令: 
GRANT ALL PRIVILEGES ON *.* TO 'username'@'host' IDENTIFIED BY 'new_password' WITH GRANT OPTION; 

. 点代表所有表
username 代表你创建的用户名
host 代表你指定在那台机器可以登录，本地登录就是 localhost ，允许所有远程登录就是 % ；
new_password 代表该用户的登录密码，密码可以为空，如果是空则改用户可以不需要密码登录

demo:
新增超级权限并允许远程访问：
GRANT ALL PRIVILEGES ON *.* TO 'afei2'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;   
FLUSH   PRIVILEGES; 
```

![mysql 远程连接](/img/ubuntu/mysql/mysql_remote_connect.png "mysql 远程连接")

### MySQL 命令

```
support-files/mysql.server start
support-files/mysql.server stop
/data/server/mysql/bin/mysql -u root -p

mysql -h 你登录的ip -u username -P 3306 -p 【远程登录】
demo： mysql -h 192.168.1.230 -u afei2 -p

```

### mysql 配置文件 my.cnf

```
mysql5.7 以后版本中编译安装完后没有my.cnf 文件,需要自己创建

./bin/mysql --help|grep 'my.cnf'   #查看mysql默认读取的my.cnf

/data/server/mysql  下新建 
mkdir etc    
cd etc
touch my.cnf       #权限 chmod 644 /data/server/mysql/etc/my.cnf  权限过大会出问题
chown mysql:mysql -R etc/my.cnf    #用户

在my.cnf 中修改日志配置测试文件是否生效
[mysqld]
log-error = /data/server/mysql/mysql_log/error.log
```



### mysql  命令行工具中 \c  取消之前的输入,重新开始输入

```
mysql> fdfds \c
mysql> show tables ddjfkldjfdklsf \c
mysql> show tables;
```

mysql  命令行工具中 \G 竖向显示内容

```
mysql> show tables \G;
mysql> show table status \G;
```

mysql  命令行工具中 \q 退出终端

```
mysql> \q;
```











 [mysql官方下载地址](https://dev.mysql.com/downloads/mysql/  "mysql官方下载地址")

 [mysql官方下载地址](http://ftp.ntu.edu.tw/MySQL/Downloads/ "mysql官方下载地址")

 [mysql官方预编译配置参数](https://dev.mysql.com/doc/refman/5.7/en/source-configuration-options.html#cmake-general-options "mysql官方预编译配置参数")

 [mysql官方手册](https://dev.mysql.com/doc/refman/5.7/en/faqs.html "mysql官方手册")



























