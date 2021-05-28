---
title: ubuntu -mysql5.6.39
categories: 
- MySQL
tags:
- MySQL
- MySQL5.6
---
### mysql5.6.39

### 编译环境

```
sudo apt install make cmake gcc g++ perl bison libaio-dev libncurses5 libncurses5-dev libnuma-dev
```

### 下载

```
安装版本5.6.39

wget https://dev.mysql.com/get/Downloads/MySQL-5.6/mysql-5.6.39.tar.gz
wget https://dev.mysql.com/get/Downloads/MySQL-5.6/mysql-5.6.39.tar.gz
【解压到你指定的目录，我这里选择 /data/server/ 】
tar zxvf mysql-5.6.39.tar.gz -C  /data/server/
mv mysql-5.6.39 mysql
cd mysql
```

![root mysql download](/img/ubuntu/mysql/5.6/mysql_download.png "mysql download")

### 编译安装

```
cmake \
-DCMAKE_INSTALL_PREFIX=/data/server/mysql \
-DMYSQL_DATADIR=/data/server/mysql/data \
-DSYSCONFDIR=/data/server/mysql/etc \
-DWITH_MYISAM_STORAGE_ENGINE=1 \
-DWITH_INNOBASE_STORAGE_ENGINE=1 \
-DWITH_MEMORY_STORAGE_ENGINE=1 \
-DWITH_READLINE=1 \
-DMYSQL_UNIX_ADDR=/data/server/mysql/mysql.sock \
-DMYSQL_TCP_PORT=3306 \
-DENABLED_LOCAL_INFILE=1 \
-DWITH_PARTITION_STORAGE_ENGINE=1 \
-DEXTRA_CHARSETS=all \
-DDEFAULT_CHARSET=utf8 \
-DDEFAULT_COLLATION=utf8_general_ci

make && make install


注意事项：
重新编译时，需要清除旧的对象文件和缓存信息
# make clean
# rm -f CMakeCache.txt
# rm -rf /data/server/etc/my.cnf

编译参数： https://dev.mysql.com/doc/refman/5.6/en/source-configuration-options.html
编译参数： https://dev.mysql.com/doc/refman/5.6/en/source-configuration-options.html

cmake \
-DCMAKE_INSTALL_PREFIX=/data/server/mysql \   安装路径
-DMYSQL_DATADIR=/data/server/mysql/data \         文件存放路径
-DSYSCONFDIR=/etc \                              配置文件路径 /data/server/mysql/etc
-DWITH_MYISAM_STORAGE_ENGINE=1 \
-DWITH_INNOBASE_STORAGE_ENGINE=1 \
-DWITH_MEMORY_STORAGE_ENGINE=1 \
-DWITH_READLINE=1 \
-DMYSQL_UNIX_ADDR=/tmp/mysql/mysql.sock \         sock文件路径/data/server/mysql/mysql.sock
-DMYSQL_TCP_PORT=3306 \
-DENABLED_LOCAL_INFILE=1 \
-DWITH_PARTITION_STORAGE_ENGINE=1 \
-DEXTRA_CHARSETS=all \
-DDEFAULT_CHARSET=utf8 \                      字符集 -DDEFAULT_CHARSET=utf8mb4 
-DDEFAULT_COLLATION=utf8_general_ci           排序字符集  -DDEFAULT_COLLATION=utf8mb4_general_ci
```

![mysql make](/img/ubuntu/mysql/5.6/mysql_make.png "mysql make")

### 创建 mysql 组跟用户

```
检查系统中是否已经存在 mysql 用户，如果没有则创建
cat /etc/passwd | grep mysql
cat /etc/group | grep mysql

创建 mysql 用户
sudo groupadd mysql
sudo useradd -r -g mysql -s /bin/false mysql

```

#### 更改 mysql 目录权限

```
cd /data/server/mysql
sudo chown -R mysql .
sudo chgrp -R mysql .
```

### 初始化数据库

```
chmod +x mysql_install_db 或者  chmod +x scripts/mysql_install_db

./scripts/mysql_install_db --basedir=/data/server/mysql --datadir=/data/server/mysql/data --user=mysql

初始化后提示：

To start mysqld at boot time you have to copy
support-files/mysql.server to the right place for your system

PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !
To do so, start the server, then issue the following commands:

  /data/server/mysql/bin/mysqladmin -u root password 'new-password'
  /data/server/mysql/bin/mysqladmin -u root -h ubuntu password 'new-password'

Alternatively you can run:

  /data/server/mysql/bin/mysql_secure_installation

which will also give you the option of removing the test
databases and anonymous user created by default.  This is
strongly recommended for production servers.
See the manual for more instructions.
You can start the MySQL daemon with:

  cd . ; /data/server/mysql/bin/mysqld_safe &

You can test the MySQL daemon with mysql-test-run.pl
  cd mysql-test ; perl mysql-test-run.pl
Please report any problems at http://bugs.mysql.com/
The latest information about MySQL is available on the web at
  http://www.mysql.com
Support MySQL by buying support/licenses at http://shop.mysql.com
New default config file was created as /data/server/mysql/my.cnf and
will be used by default by the server when you start it.
You may edit this file to change server settings

```

![mysql init](/img/ubuntu/mysql/5.6/mysql_init.png "mysql init")

### 启动数据库

```
chmod +x mysql.server 或者 chmod +x support-files/mysql.server
 ./support-files/mysql.server start
 
初始化密码，我这里设置密码： 123456 做测试，实际中设置你认为安全的密码
  /data/server/mysql/bin/mysqladmin -u root password '123456'
  
登录MySQL
  bin/mysql -u root -p
```

![mysql 启动](/img/ubuntu/mysql/5.6/mysql_pwd.png "mysql 启动")

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

查看创建的新用户信息：
SELECT `Host`,`User`,`Password`,authentication_string,password_expired FROM `user`;
```

![mysql 连接](/img/ubuntu/mysql/5.6/mysql_remote_connect.png "mysql 远程连接")

### MySQL 命令

```
support-files/mysql.server start
support-files/mysql.server stop
/data/server/mysql/bin/mysql -u root -p

mysql -h 你登录的ip -u username -P 3306 -p 【远程登录】
demo： mysql -h 192.168.1.230 -u afei2 -p
```

### 查看 mysql 默认读取 my.cnf 的目录

如果没有设置使用指定目录的my.cnf，mysql启动时会读取安装目录根目录及默认目录下的my.cnf文件。查看mysql启动时读取配置文件的默认目录

```
mysql --help|grep 'my.cnf'

输出：
root@ubuntu:/data/server/mysql/bin# mysql --help|grep 'my.cnf'
/etc/my.cnf /etc/mysql/my.cnf ~/.my.cnf 
                      order of preference, my.cnf, $MYSQL_TCP_PORT,
root@ubuntu:/data/server/mysql/bin# 

//////////////////或者/////////////////
./bin/mysqld --verbose --help |grep -A 1 'Default options'

输出：
root@ubuntu:/data/server/mysql# ./bin/mysqld --verbose --help |grep -A 1 'Default options'
2018-04-08 01:55:32 0 [Note] --secure-file-priv is set to NULL. Operations related to importing and exporting data are disabled
2018-04-08 01:55:32 0 [Note] ./bin/mysqld (mysqld 5.6.39) starting as process 34387 ...
2018-04-08 01:55:32 34387 [Note] Plugin 'FEDERATED' is disabled.
Default options are read from the following files in the given order:
	/etc/my.cnf /etc/mysql/my.cnf /data/server/mysql/etc/my.cnf ~/.my.cnf 
2018-04-08 01:55:32 34387 [Note] Binlog end
2018-04-08 01:55:32 34387 [Note] Shutting down plugin 'CSV'
2018-04-08 01:55:32 34387 [Note] Shutting down plugin 'MyISAM'
root@ubuntu:/data/server/mysql# 



/etc/my.cnf, /etc/mysql/my.cnf, /usr/local/etc/my.cnf, ~/.my.cnf 这些就是mysql默认会搜寻my.cnf的目录，顺序排前的优先
```

![mysql 配置文件](/img/ubuntu/mysql/5.6/my_cnf.png "mysql 配置文件")

### 查看错误日志位置

```
修改 my.cnf 文件指定错误日志位置
log_error=/data/mysql.log


错误日志默认存放位置为数据目录下，你也可以用下面命令查看:
SHOW  GLOBAL VARIABLES LIKE '%log_error%';

mysql> SHOW  GLOBAL VARIABLES LIKE '%log_error%';
+---------------------+-----------------+
| Variable_name       | Value           |
+---------------------+-----------------+
| binlog_error_action | IGNORE_ERROR    |
| log_error           | /data/mysql.log |
+---------------------+-----------------+
2 rows in set (0.00 sec)

mysql> 

```

 [mysql官方预编译配置参数](https://dev.mysql.com/doc/refman/5.6/en/source-configuration-options.html "mysql官方预编译配置参数")





























