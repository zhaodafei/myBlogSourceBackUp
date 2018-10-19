---
title: ubuntu -mysql others
---
### mysql 5.6 其他

### 查看 MySQL 配置;

```
windows下是my.ini
linux下是my.cnf

linux 中 locate my.cnf 就出来了（没有的话先updatedb）
```

### MySQL 忘记密码

```
1、查找 my.cnf 配置文件位置，在文件最后添加 skip-grant-tables  保存退出，修改完密码记得删掉
2、修改密码，命令
MySQL> UPDATE mysql.user SET Password=PASSWORD('你的密码') where USER='root';
MySQL> flush privileges; 
MySQL> exit;
```

### 确定 MySQL 中文件位置

```
1、locate mysql.server 找到后启动 mysql
	./mysql.server start
2、 ps -aux  | grep mysql  看到信息如下（我自己的）：
root     19312  0.0  0.0 113256  1596 pts/2    S    14:09   0:00 
/bin/sh /usr/bin/mysqld_safe             #数据库登录运行路径
--datadir=/var/lib/mysql                 #数据库文件的存放路径
--pid-file=/var/lib/mysql/iZ2ze8dugwavcbouiggqoeZ.pid

mysql    19413  0.1  5.8 1236108 465644 pts/2  Sl   14:09   0:01 
/usr/sbin/mysqld 
--basedir=/usr 
--datadir=/var/lib/mysql                 #数据库文件的存放路径
--plugin-dir=/usr/lib64/mysql/plugin 
--user=mysql 
--log-error=/var/lib/mysql/iZ2ze8dugwavcbouiggqoeZ.err  #错误日志
--pid-file=/var/lib/mysql/iZ2ze8dugwavcbouiggqoeZ.pid


```

### 创建行用户并授权给指定数据库权限【以下命令在服务器 MySQL 中运行】

```
1、登录MySQL
mysql -u root -p

2、创建新用户
CREATE USER '用户名'@'ip地址' IDENTIFIED BY '密码'; 
%                 代表所有ip都能访问
localhost         代表本机才能访问
123.123.123.123   代表指定ip才能访问

3、验证账号是否创建成功
SELECT host, user, password FROM mysql.user WHERE user='用户';

4、给新建用户授权指定数据库
GRANT <privileges> ON <database>.<table> TO 'myuser'@'localhost';

命令中 
<privileges>         代表着用逗号分隔权限列表
<database>.<table>   代表数据库.表

demo：
GRANT ALL ON <database>.<table> TO 'myuser'@'localhost';
GRANT CREATE,INSERT ON <database>.<table> TO 'myuser'@'localhost';

以下是一些可用权限<privileges>：
ALL: 所有可用的权限
CREATE: 创建库、表和索引
LOCK_TABLES: 锁定表
ALTER: 修改表
DELETE: 删除表
INSERT: 插入表或列
SELECT: 检索表或列的数据
CREATE_VIEW: 创建视图
SHOW_DATABASES: 列出数据库
DROP: 删除库、表和视图

5、验证给用户的权限
SHOW GRANTS FOR '用户名'@'ip地址';

6、移除权限
REVOKE <privileges> ON <database>.<table> FROM '用户名'@'ip地址';



demo：
CREATE DATABASE afei_db;
CREATE USER 'afei'@'%' IDENTIFIED BY '123456';
SELECT host, user, password FROM mysql.user WHERE user='afei';
grant all privileges on afei_db.* to 'afei'@'%';            #没有指定密码授权
SHOW GRANTS FOR 'afei'@'%';
flush privileges;    #刷新

扩展命令
grant all privileges on afei.* to afei@l% identified by '123456';  #指定命令授权
drop user 'afei'@'%';     #删除用户
```

![mysql 创建行用户并授权给指定数据库权限01](/img/mysql/mysql_others/01.png "mysql 创建行用户并授权给指定数据库权限01")

![mysql 创建行用户并授权给指定数据库权限02](/img/mysql/mysql_others/01.png "mysql 创建行用户并授权给指定数据库权限02")

### linux 查看 MySQL 版本

1、在help中查找 mysql --help |grep Distrib
2、在help中查找 mysql --help |grep Distrib

![mysql 版本](/img/mysql/mysql_others/03.png "mysql 版本")

### Mysql 常用性能分析方法??

```
select version();  #查版本号
show processlist;  #查看那些线程正在运行
show profiles; 
show profiles for query 3;  #更具query_id 查看某个查询的详细时间耗费
explian + sql # 分析执行计划和最左前缀原理
reset query cache;   #清除缓存
```





















