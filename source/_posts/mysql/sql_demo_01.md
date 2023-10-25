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

<!-- more -->

### 时间处理

```mssql
SELECT FROM_UNIXTIME(1651366800); -- 转为,可视化时间 2022-05-01 09:00:00

SELECT UNIX_TIMESTAMP('2022-05-01 09:00:00'); -- 转为时间戳 1651366800
```

### 次方

```mysql
-- 求2的3次方
SELECT POW(2,3); -- 求次方,值为8
```

### CASE 语句

`CASE WHEN THEN  END;` 结构

```mysql
-- 语法结构

CASE case_value
    WHEN when_value THEN statement_list
    [WHEN when_value THEN statement_list] ...
    [ELSE statement_list]
END

-- 或者(这个写法省略了 case_value )

CASE
    WHEN search_condition THEN statement_list
    [WHEN search_condition THEN statement_list] ...
    [ELSE statement_list]
END
```

```mysql
-- demo1, 当 username 值为 dafei,输出1,否则输出2
SELECT
	id, username,
	CASE 1 WHEN username = 'dafei' THEN 1 ELSE 2 END  AS fei 
FROM
	`user`
```

```mysql
-- demo2, 当 username 值为 dafei,输出1,否则输出2
SELECT
	id, username,
	 CASE username WHEN 'dafei' THEN 1 ELSE 2 END  AS fei 
FROM
	`user`
```

 [流程控制语句 CASE](https://dev.mysql.com/doc/refman/5.7/en/case.html "流程控制语句 CASE")

### 排序

#### 某条数据置顶

```mysql
SELECT * FROM user WHERE id<10 ORDER BY id!=3 AND id!=4 #3,4数据放到开始

SELECT * FROM user WHERE id<10 ORDER BY id in (3,4) DESC #3,4数据放到开始
```

![ORDER BY](/img/mysql/demo01/order_by.png "ORDER BY")

### 按照行字段求和

```mysql
SELECT
	id, num, name,flag,
	SUM( course_01 + course_02 + course_03 ) AS total_score  #对一行这几个字段求和
FROM
	`foo`.`fei` 
WHERE
	`flag` = '1' 
GROUP BY num #分组
ORDER BY `total_score` DESC #排序(求和后排序)
```

### 字符串转数字排序

```mysql
SELECT id, name FROM dbfei ORDER BY CAST(id AS UNSIGNED);
```



## 其他

 [函数和运算符](https://dev.mysql.com/doc/refman/5.7/en/functions.html "函数和运算符")
 [流程控制语句 CASE](https://dev.mysql.com/doc/refman/5.7/en/case.html "流程控制语句 CASE")























