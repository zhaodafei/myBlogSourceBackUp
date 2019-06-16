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

SELECT USER();
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

utf8mb4：Unicode字符集的UTF-8编码，每个字符使用一到四个字节。
utf8mb3：Unicode字符集的UTF-8编码，每个字符使用一到三个字节。
utf8：别名 utf8mb3。
```

### 数据类型  mysql5.7.8 新类型 json

```mysql
CREATE TABLE t1 (jdoc JSON);
INSERT INTO t1 VALUES('{"key1": "value1", "key2": "value2"}');
SELECT JSON_OBJECT('key1', 1, 'key2', 'abc');
```

###  控制运算符 `case` `if`

```mysql
mysql> SELECT CASE 1 WHEN 1 THEN 'one'
    -> WHEN 2 THEN 'two' ELSE 'more' END;
    -> 'one'

mysql> SELECT CASE 2 WHEN 1 THEN 'one'
    -> WHEN 2 THEN 'two' ELSE 'more' END;
    -> 'two'
    
mysql> SELECT CASE 3 WHEN 1 THEN 'one'
    -> WHEN 2 THEN 'two' ELSE 'more' END;
    -> 'more'    
-----------------

mysql> SELECT CASE WHEN 1>0 THEN 'true' ELSE 'false' END;
    -> 'true'
    
--------------
mysql> SELECT IF(1>2,2,3);
    -> 3
```

### 全文搜索功能

```mysql
#自然语言全文搜索
mysql> SELECT * FROM articles
        WHERE MATCH (title,body)
        AGAINST ('database' IN NATURAL LANGUAGE MODE);

#布尔全文搜索
mysql> SELECT * FROM articles WHERE MATCH (title,body)
    AGAINST ('+MySQL -YourSQL' IN BOOLEAN MODE);        
    
```

 [全文搜索功能](https://dev.mysql.com/doc/refman/5.7/en/fulltext-search.html "全文搜索功能")

### show 语法

```mysql
SHOW COLUMNS FROM city; #显示列
SHOW CREATE DATABASE test; #显示创建库语法
SHOW CREATE TABLE  student2; #显示创建表语法
```

### innoDB 表移动或者复制

```mysql
方法一、 复制数据文件(冷备份)
	01) 在新的库中新建和原来一样的表 , 在data目录下找到创建的表,删除 .ibd 文件
	02) 执行: ALTER TABLE tbl_name DISCARD TABLESPACE;
	03) 复制 .ibd 文件,到新刚才删除的位置
	04) 执行 ALTER TABLE tbl_name IMPORT TABLESPACE;  告诉InnoDb使用新的.bd文件
方法二、 导出和导入（热备份 mysqldump）
```

 [innoDB 表移动或者复制](https://dev.mysql.com/doc/refman/5.7/en/innodb-migration.html "innoDB 表移动或者复制")

### innodb 锁

```mysql
共享锁(S锁) ShareLock
排他锁(X锁) ExclusiveLock

区别:
如果事务T对数据A加上共享锁，则其他事务只能对A再加共享锁，不能加排它锁。只有事务T可以对A进行读取和修改，其他事务只能读取数据而不能修改数据。
如果事务T对数据A加上排它锁，只有事务T可以对A进行读取和修改，其他任何事务都不能对A进行读取和修改

 SHOW ENGINE INNODB STATUS
```

 [innodb处理死锁](https://dev.mysql.com/doc/refman/5.7/en/innodb-deadlocks-handling.html "innodb处理死锁")

### 主从复制

```mysql
# 在主服务器上，您必须启用二进制日志记录并配置唯一的服务器ID
# 在要连接到主服务器的每个从服务器上，必须配置唯一的服务器ID
# 在读取二进制日志以进行复制时，为主服务器创建一个单独的用户
```

 [基于二进制文件复制](https://dev.mysql.com/doc/refman/5.7/en/replication-howto.html "基于二进制日志复制")

### 存储过程

```mysql
https://dev.mysql.com/doc/refman/5.7/en/stored-routines-syntax.html
CREATE PROCEDURE 
CREATE FUNCTION

CALL

DROP PROCEDURE
DROP FUNCTION

ALTER PROCEDURE
ALTER FUNCTION

#一个库中不能出现2个相同的触发器
#创建的触发器在数据库 INFORMATION_SCHEMA 的 TRIGGERS 表中可以看到
#SELECT * FROM INFORMATION_SCHEMA.TRIGGERS

mysql> CREATE TABLE account (acct_num INT, amount DECIMAL(10,2));

mysql> CREATE TRIGGER ins_sum BEFORE INSERT ON account
       FOR EACH ROW SET @sum = @sum + NEW.amount;

mysql> SET @sum = 0;
mysql> INSERT INTO account VALUES(137,14.98),(141,1937.50),(97,-100.00);
mysql> SELECT @sum AS 'Total amount inserted';

#查看创建的触发器
mysql> SELECT * FROM INFORMATION_SCHEMA.TRIGGERS
       WHERE TRIGGER_SCHEMA='test' AND TRIGGER_NAME='ins_sum'
       
#查看创建触发器语法       
mysql> SHOW CREATE TRIGGER test.ins_sum     

#删除触发器
mysql> DROP TRIGGER test.ins_sum;
```

 [触发语法和示例](https://dev.mysql.com/doc/refman/5.7/en/trigger-syntax.html "触发语法和示例")

### 视图

```mysql
mysql> CREATE TABLE t (qty INT, price INT);
mysql> INSERT INTO t VALUES(3, 50), (5, 60);
mysql> CREATE VIEW v AS SELECT qty, price, qty*price AS value FROM t;
mysql> SELECT * FROM v;
mysql> SELECT * FROM v WHERE qty = 5;
```

 [视图](https://dev.mysql.com/doc/refman/5.7/en/view-syntax.html "视图")