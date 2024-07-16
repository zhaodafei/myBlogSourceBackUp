---
title: -mysql_常见使用_01
date: 2015-11-01
categories: 
- MySQL
tags:
- MySQL
---
mysql_常见使用_01

mysql_常见使用_01

<!-- more -->

### MySQL5.7异常

```mysql
In aggregated query without GROUP BY, expression #1 of SELECT list contains nonaggregated column 'fei.id'; this is incompatible with sql_mode=only_full_group_by


在没有组 BY 的聚合查询中，SELECT 列表的表达式 #1 包含非聚合列 ’
原因是：当mysql的sql_mode存在only_full_group_by的时候，在不使用group by 并且select后面出现聚集函数的话，那么所有被select的都应该是聚集函数，否则就会报错。

```

```MySQL
#场景复现, 对学生成绩求和
##报错SQL,没有对所有字段使用SUM函数
SELECT
	id,
	num,
	NAME,
	SUM(
		course_01 + course_02 + course_03
	)  AS total_score
FROM
	`bei_jing`.`bei_hang_001` 
WHERE
    `num` = '622231292' 

##调整后SQL
SELECT
	SUM(id),
	SUM(num),
	SUM(NAME),
	SUM(
		course_01 + course_02 + course_03
	)  AS total_score
FROM
	`bei_jing`.`bei_hang_001` 
WHERE
    `num` = '622231292' 
```

```ini
#或者修改配置文件
#Windows下面MySQL配置文件my.ini,在这个文件的 [mysqld] 下面添加配置
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION

```

配置参数扩展说明

```wiki
ONLY_FULL_GROUP_BY： 对于GROUP BY聚合操作，如果在SELECT中的列，没有在GROUPBY中出现，那么这个SQL是不合法的，因为列不在GROUP BY从句中

NO_AUTO_VALUE_ON_ZERO： 该值影响自增长列的插入。默认设置下，插入0或NULL代表生成下一个自增长值。如果用户希望插入的值为0，而该列又是自增长的，那么这个选项就有用了。

STRICT_TRANS_TABLES： 在该模式下，如果一个值不能插入到一个事务表中，则中断当前的操作，对非事务表不做限制NO_ZERO_IN_DATE： 在严格模式下，不允许日期和月份为零

NO_ZERO_DATE： 设置该值，mysql数据库不允许插入零日期，插入零日期会抛出错误而不是警告。

ERROR_FOR_DIVISION_BY_ZERO： 在INSERT或UPDATE过程中，如果数据被零除，则产生错误而非警告。如果未给出该模式，那么数据被零除时MySQL返回NULL

NO_AUTO_CREATE_USER： 禁止GRANT创建密码为空的用户

NO_ENGINE_SUBSTITUTION：如果需要的存储引擎被禁用或未编译，那么抛出错误。不设置此值时，用默认的存储引擎替代，并抛出一个异常

PIPES_AS_CONCAT：将”||”视为字符串的连接操作符而非或运算符，这和Oracle数据库是一样的，也和字符串的拼接函数Concat相类似

ANSI_QUOTES： 启用ANSI_QUOTES后，不能用双引号来引用字符串，因为它被解释为识别符
```





































