---
title: linux ubuntu15 mysql
---
### mysql 安装

### 在终端执行 以下命令

```
sudo apt-get install mysql-server
sudo apt install mysql-client
sudo apt install libmysqlclient-dev
```

![mysql install](/img/linux_ubunbu_mysql/fast_mysql_install.png "mysql install")

安装完用以下命测试,出现图中说明 OK

```
sudo netstat -tap | grep mysql
```

![mysql check](/img/linux_ubunbu_mysql/fast_mysql_check.png "mysql check")

### 进入 mysql

```
 mysql -uroot -p   然后回车输入密码
```

![show databases](/img/linux_ubunbu_mysql/fast_show_databases.png "show databases")

### 设置 mysql 运行远程访问

```
sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf
```

1、注释掉  bind-address  = 127.0.0.1  保存退出【在43行】
2、grant all on *.* to root@'%' identified by '你的密码' with grant option;
3、flush privileges;
4、exit; 退出 mysql服务
5、重启服务： service mysql restart

![remote connection](/img/linux_ubunbu_mysql/fast_remote_connection.png "remote connection")

### 卸载mysql

```
sudo apt-get remove mysql-server
sudo apt-get autoremove mysql-server
sudo apt-get remove mysql-common //这个很重要

清理残留数据；
dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P
```



## mysql 手动安装

### 下载【注意版本】

```
wget http://ftp.ntu.edu.tw/MySQL/Downloads/MySQL-5.6/mysql-5.6.39-linux-glibc2.12-x86_64.tar.gz
wget ftp://mirror.switch.ch/mirror/mysql/Downloads/MySQL-5.6/mysql-5.6.38.tar.gz
wget ftp://mirror.switch.ch/mirror/mysql/Downloads/MySQL-5.6/mysql-5.6.39.tar.gz

解压到你指定的目录，我这里选择  /usr/local/ 目录
tar -zxvf mysql-5.6.39-linux-glibc2.12-x86_64.tar.gz -C /usr/local/
mv mysql-5.6.39-linux-glibc2.12-x86_64 mysql


修改权限【我的用户是managers】

sudo groupadd mysql #添加组
##sudo useradd -g mysql mysql -s /bin/false #创建用户mysql并加入到mysql组，不允许mysql用户直接
sudo chown -R mysql:mysql /usr/local/mysql
cd mysql


这一步先不要做;
复制文件到init.d下，使机子开机时自动启动mysql服务器。
sudo cp support-files/mysql.server  /etc/init.d/mysql.server


```

![mysql download](/img/linux_ubunbu_mysql/mysql_download.png "mysql download")

### 初始化数据库

```
sudo ./scripts/mysql_install_db --user=managers

结束后，注意看英文提示

To start mysqld at boot time you have to copy
support-files/mysql.server to the right place for your system

PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !
To do so, start the server, then issue the following commands:

  ./bin/mysqladmin -u root password 'new-password'
  ./bin/mysqladmin -u root -h ubuntu password 'new-password'

Alternatively you can run:

  ./bin/mysql_secure_installation


```

![mysql install](/img/linux_ubunbu_mysql/mysql_install.png "mysql install")

### 启动 MySQL 服务

```
启动命令：【注意用户，在 managers 用户下】
/usr/local/mysql/support-files/mysql.server start

修改mysql目录下的my.cnf配置文件：vi my.cnf
找到[mysqld]模块,去掉注释#，添加如下内容：

basedir=/usr/local/mysql
datadir=/usr/local/mysql/data
port=3306

这里要是不修改会报错
******************************************************

错误一：
without updating files
或者报错：
Enter password: 
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)

修改mysql目录下的my.cnf配置文件：vi my.cnf
找到[mysqld]模块,去掉注释#，添加如下内容：

basedir=/usr/local/mysql
datadir=/usr/local/mysql/data
port=3306

错误二：
Logging to '/usr/local/mysql/data/ubuntu.err'.
. * The server quit without updating PID file (/usr/local/mysql/data/ubuntu.pid).
解决方法:切换到刚才设置的用户 managers ，然后启动服务：

```

![mysql start](/img/linux_ubunbu_mysql/mysql_start.png "mysql start")

### 查看 MySQL 服务是否启动

```
sudo lsof -i:3306

如图说明启动成功
root@ubuntu:/usr/local/mysql# sudo lsof -i:3306
COMMAND   PID     USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
mysqld  41934 managers   10u  IPv6 328086      0t0  TCP *:mysql (LISTEN)
root@ubuntu:/usr/local/mysql# 
```

![mysql check](/img/linux_ubunbu_mysql/mysql_check.png "mysql check")

### 配置环境变量

为了能在shell下使用mysql的bin工具（默认mysql 在shell中不能连接），需要将其配置到/etc/profile里。
命令如下：   sudo vi /etc/profile
在上方添加一行：export MYSQL_HOME=/usr/local/mysql
然后在PATH末尾下添加bin目录,添加 \$MYSQL_HOME/bin:$PATH到PATH末尾

```
export MYSQL_HOME=/usr/local/mysql
export PATH=$MYSQL_HOME/bin:$PATH
```

保存后退出，运行如下命令，使环境变量生效：source /etc/profile
再在shell下运行如下命令 :export $MYSQL_HOME
显示如下：

![mysql check](/img/linux_ubunbu_mysql/mysql_check.png "mysql check")


### 登录mysql

```
使用root账户登录:    mysql -uroot -p
默认密码为空
```

![mysql login](/img/linux_ubunbu_mysql/mysql_login.png "mysql login")





### 修改密码

```
set password for  'root'@'localhost' = password('你的密码');
flush privileges;  【刷新权限，必须】

```

### 更改 root 账号为所有主机都可以登录

```
update mysql.user set  host='%' where user='root' and host='localhost';
flush privileges;  【刷新权限，必须】
```

![mysql 远程连接](/img/linux_ubunbu_mysql/remote_connection.png "mysql 远程连接")

### mysql 命令

```
/usr/local/mysql/support-files/mysql.server start
/usr/local/mysql/support-files/mysql.server stop

MySQL登录命令：
mysql -uroot -p

屏蔽权限
/usr/local/mysql/bin/mysqld_safe --skip-grant-table
```



set password for  'root'@'localhost' = password('qhdroot!@#');

这个命令什么时候执行？？？？？？？

./bin/mysqladmin -u root -h 127.0.0.1 password 'qhdroot!@#'









----------------------------





### 



 [mysql官方下载地址](http://ftp.ntu.edu.tw/MySQL/Downloads/"mysql官方下载地址")





























