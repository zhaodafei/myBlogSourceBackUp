---
title: mysql -sql other
---

### mysql 简单整理

 group by  ;  group_concat 

```
SELECT * FROM student_01 GROUP BY `name`;

SELECT *,GROUP_CONCAT(name) FROM student_01 GROUP BY `name`;

+----+------+---------+-------+
| id | name | kecheng | score |
+----+------+---------+-------+
|  1 | 张三  | 语文    | 81    |
|  3 | 李四  | 语文    | 76    |
|  5 | 王五  | 语文    | 81    |
+----+------+---------+-------+


+----+------+---------+-------+--------------------+
| id | name | kecheng | score | GROUP_CONCAT(name) |
+----+------+---------+-------+--------------------+
|  1 | 张三  | 语文    | 81    | 张三,张三           |
|  3 | 李四  | 语文    | 76    | 李四,李四           |
|  5 | 王五  | 语文    | 81    | 王五,王五,王五      |
+----+------+---------+-------+--------------------+


```

###  int (3)   int (5) 区别,是否需要零填充

```
#没有使用零填充 init(3)  
CREATE TABLE `test` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

mysql> select * from test;
+----+------+
| id | name |
+----+------+
|  1 | 许褚  |
|  2 | 郭嘉  |
|  3 | 贾诩  |
+----+------+

#使用零填充 init(3)  zerofill 
CREATE TABLE `test` (
  `id` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

mysql> select * from test;
+-----+------+
| id  | name |
+-----+------+
| 001 | 许褚  |
| 002 | 郭嘉  |
| 003 | 贾诩  |
+-----+------+
3 rows in set (0.00 sec)

#使用零填充 init(5)  zerofill 
CREATE TABLE `test` (
  `id` int(5) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

mysql> select * from test;
+-------+------+
| id    | name |
+-------+------+
| 00001 | 许褚  |
| 00002 | 郭嘉  |
| 00003 | 贾诩  |
+-------+------+
3 rows in set (0.00 sec)
```

![int zerofill](/img/ubuntu/mysql/other/init.png "init zerofill")

###  mysql 存储引擎

```
#InnoDB表引擎
通过一些机制和工具支持真真的热备份
支持奔溃后的安全恢复
支持行级锁
支持外键

#MyISAM表引擎
5.1版本之前,MyISAM是默认的存储引擎
拥有全文索引、压缩、 空间函数
不支持事务和行级锁,不支持奔溃后的安全恢复
表存储在两个文件,MYD和MYI
```

### mysql 锁

```
当多个查询同一时刻进行数据修改时,就会产生并发控制的问题, 共享锁(读锁) 、排他锁(写锁)

#共享锁(读锁)
共享的,不堵塞,多个用户可以同时读取一个资源,互不干扰
#排他锁(写锁)
排他的,一个写锁会阻塞一塔的写锁和读锁,这样可以值允许一个人写进行写入,防止其他用户读取正在写入的资源

#demo共享锁(读锁)
select * from test; 
lock table test read; #共享锁
unlock TABLES;  #解锁
update test set name="贾诩_update" where id=03; 

#排他锁  执行完lock加锁后,update 结束后及时执行解锁操作
lock tables test write;
update test set name="贾诩_update" where id=03;
unlock TABLES;
在排他锁执行期间.在当前窗口其他SQL是不能执行的,

#通过进程id, kill 掉锁
show processlist;  #查看锁状态
kill id  #杀掉等待sql
show OPEN TABLES where In_use > 0; #查看是否有在锁表
```

```
粒度锁

#表锁
系统性能开销最小,会锁定整张表,MyISAM 使用表锁
#行锁
最大程度地支持并发处理,但是也带来了最大的的锁开销,InnoDb 实现行级锁
```

```
#Mysql 存储过程
使用场景,通过处理把封装在容易使用的单元中,简化复杂的操作,保证数据的一致性
```

### mysql 索引

```mysql
#索引类型: 普通索引(index  另一个名字normal)、唯一索引(unique)、全文索引(fulltext)、空间索引(SPATIAL)
ALTER TABLE `test`.`test` 
ADD INDEX `id_score_score2`(`id`, `score`, `score2`);

ALTER TABLE `test`.`test` 
ADD UNIQUE INDEX `id_score_score2`(`id`, `score`, `score2`);

ALTER TABLE `test`.`test` 
ADD FULLTEXT INDEX `id_score_score2`(`id`, `score`, `score2`);

ALTER TABLE `test`.`test` 
ADD SPATIAL INDEX `id_score_score2`(`id`, `score`, `score2`);


```

### mysql 连接查询

```mysql
#自己关联自己查询
select * from test a1 inner join  test a2 on a1.score=a2.score2
```















