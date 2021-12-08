---
title: MySQL 常见查询
date: 2015-11-01
categories: 
- MySQL
tags:
- MySQL
---
MySQL 常见查询
MySQL 常见查询
MySQL 常见查询

### 排序

#### 某条数据置顶

```mysql
SELECT * FROM user WHERE id<10 ORDER BY id!=3 AND id!=4 #3,4数据放到开始

SELECT * FROM user WHERE id<10 ORDER BY id in (3,4) DESC #3,4数据放到开始
```

![ORDER BY](/img/mysql/demo01/order_by.png "ORDER BY")



























