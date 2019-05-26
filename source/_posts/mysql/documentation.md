---
title: mysql -Documentation  手册
---

###  sql

```mysql
SELECT PASSWORD('mypass');   #生成的密码值

SHOW STATUS;  
SHOW STATUS LIKE 'Table%';

SHOW VARIABLES;  
SHOW VARIABLES LIKE 'datadir';
SHOW VARIABLES LIKE 'have_symlink';
SHOW VARIABLES LIKE 'host_cache_size';

SET GLOBAL host_cache_size=300;

SELECT 'hello', '"hello"', '""hello""', 'hel''lo', '\'hello';
SELECT "hello", "'hello'", "''hello''", "hel""lo", "\"hello";

SET @t1=1, @t2=2, @t3:=4; #赋值
SELECT @t1, @t2, @t3, @t4 := @t1+@t2+@t3;

SET NAMES 'utf8';
SHOW CHARACTER SET;
USE test;
SELECT @@character_set_database, @@collation_database;
```

### 访问控制阶段1,2

```mysql
!!! 用户名和密码为空危险 !!!
!!!如果User列值为非空，则传入连接中的用户名必须完全匹配。如果 User值为空，则它匹配任何用户名

!!!该authentication_string列可以为空白。这不是通配符，并不表示任何密码匹配。这意味着用户必须在不指定密码的情况下进行连接

## 查看当前登录用户
SELECT CURRENT_USER();
```

 [访问控制阶段1](https://dev.mysql.com/doc/refman/5.7/en/connection-access.html "访问控制阶段1")

### 添加账号,分配权限和删除账号

```mysql
创建用户授权
GRANT ALL PRIVILEGES ON *.* TO 'fei'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;   
FLUSH   PRIVILEGES;

撤销账户权限
REVOKE ALL PRIVILEGES  ON  *.*  FROM 'fei'@'%';
FLUSH   PRIVILEGES;

删除账号
DROP USER 'fei'@'%';
FLUSH   PRIVILEGES;
```

 [6.2.7添加帐户，分配权限和删除帐户](https://dev.mysql.com/doc/refman/5.7/en/creating-accounts.html "6.2.7添加帐户，分配权限和删除帐户")

### 数据库备份和恢复

```mysql
创建数据库指定数据库字符集utf8mb4  排序规则 utf8mb4_general_ci ; mysql8有些字符集在低版本mysql没有

#使用mysqldump以SQL格式转储数据
/data/server/mysql/bin/mysqldump -h127.0.0.1 -uvagrant -p  --databases fei fei02 >/data/web/mysql_dump/dump.sql

./mysqldump -h127.0.0.1 -uvagrant -p  --databases fei fei02 >/data/web/mysql_dump/dump.sql

#重新加载SQL格式备份
./mysql -h127.0.0.1 -uvagrant -p  < /data/web/mysql_dump/dump.sql

/data/server/mysql/bin/mysql -h127.0.0.1 -uvagrant -p  < /data/web/mysql_dump/dump.sql

source /data/dump.sql       ###这里没有<符号
source /data/web/mysql_dump/dump.sql
```

 [使用mysqldump以SQL格式转储数据](https://dev.mysql.com/doc/refman/5.7/en/mysqldump-sql-format.html"使用mysqldump以SQL格式转储数据")

### mysql查看二进制日志文件

```mysql
#查看mysql二进制日志
/data/server/mysql/bin/mysqlbinlog -d demodb binlog.000004
```

### EXPLAIN 

```

```

 [EXPLAIN  输出格式](https://dev.mysql.com/doc/refman/5.7/en/explain-output.html"EXPLAIN  输出格式")

### 优化锁定操作

```mysql
SHOW STATUS LIKE 'Table%';   #查看表上锁争用

MyISAM 表锁
LOCK TABLES t1 WRITE, temp_t1 WRITE;
UNLOCK TABLES;
```

 [表锁定问题](https://dev.mysql.com/doc/refman/5.7/en/table-locking.html "表锁问题")

### 字符集

```mysql
USE test;
SELECT @@character_set_database, @@collation_database;
```

