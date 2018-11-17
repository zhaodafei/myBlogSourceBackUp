---
title: --redis key 设计技巧
---

### redis  key 设计技巧

第一段 表名转化为key的前缀,如 book:  tag:
第二段 放置用于分区 key 的字段---对于的 mysql 中的主键的列名,如 id userid 
第三段 放置主键的值,如1 2 3 4 a b c
第四段,写要储存的列名

```
第一段 表名转化为key的前缀,如 book:  tag:
第二段 放置用于分区 key 的字段---对于的 mysql 中的主键的列名,如 id userid 
第三段 放置主键的值,如1 2 3 4 a b c
第四段,写要储存的列名


用户表 user , 转换为 key-value 存储   
+----+----------+----------+-----------+
| id | username | password | email     |
+----+----------+----------+-----------+
|  1 | 张三     | 123456   | 1@qwq.com |
|  2 | 李四     | 123456   | 2@qq.com  |
+----+----------+----------+-----------+

127.0.0.1:6379> set user:id:1:username zhangsan
127.0.0.1:6379> set user:id:1:password 123456
127.0.0.1:6379> set user:id:1:email 1@qwq.com

127.0.0.1:6379> set user:id:2:username lisi
127.0.0.1:6379> set user:id:2:password 123456
127.0.0.1:6379> set user:id:2:email 2@qq.com

127.0.0.1:6379> keys user*
127.0.0.1:6379> keys user:id*
```

![redis](/img/centos/redis/reids_01.png "redis")

### mysql 弊端

```mysql
#book 表 tags 表
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `bookid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` char(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`bookid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `tid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bookid` int(11) DEFAULT NULL,
  `content` char(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

#------------------- 测试数据 ---------------
INSERT INTO `book` VALUES ('5', 'PHP圣经');
INSERT INTO `book` VALUES ('6', 'ruby实战');
INSERT INTO `book` VALUES ('7', 'mysql 运维');
INSERT INTO `book` VALUES ('8', 'ruby服务端编程');

INSERT INTO `tags` VALUES ('10', '5', 'PHP');
INSERT INTO `tags` VALUES ('11', '5', 'WEB');
INSERT INTO `tags` VALUES ('13', '6', 'ruby');
INSERT INTO `tags` VALUES ('14', '7', 'database');
INSERT INTO `tags` VALUES ('15', '8', 'ruby');
INSERT INTO `tags` VALUES ('16', '8', 'server');
INSERT INTO `tags` VALUES ('12', '6', 'WEB');

# 查询:即有 web 标签又有 PPH  标签,要用连接查询
 select t1.bookid from tags as t1 inner join tags as t2  
 on t1.bookid=t2.bookid where t1.content='PHP' and t2.content='WEB';   

# 如果在查有其他标签 web php  ruby ,关联的又要多了
```

