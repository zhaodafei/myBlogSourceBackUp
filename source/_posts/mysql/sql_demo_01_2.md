---
title: MySQL 二进制demo
date: 2015-11-02
categories: 
- MySQL
tags:
- MySQL
---
背景: 某人去图书馆借书,  图书馆开放时间, 该同学怎么在到合适的时间可以借到书
每天的 `09:00 --18:00`  可以预约,其他时间段没有,在这个时间段,图书馆可能在某个时间段暂停预约

reserve_book   预约图书 
reserve_book_cache  预约图书缓存

<!-- more -->

### 基础表

```mysql
CREATE TABLE `reserve_book` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `book_id` int(11) NOT NULL DEFAULT '0',
  `start_time` int(11) NOT NULL DEFAULT '0' COMMENT '时间戳_秒(空闲开始时间)',
  `end_time` int(11) NOT NULL DEFAULT '0' COMMENT '时间戳_秒(空闲结束时间)',
  `start_time_fei` datetime DEFAULT NULL COMMENT '可视化时间_方便查看',
  `end_time_fei` datetime DEFAULT NULL COMMENT '可视化时间_方便查看',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='预约图书缓存';
```

```mysql
CREATE TABLE `reserve_book_cache` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联图书book_id',
  `s_time` varchar(16) NOT NULL DEFAULT '' COMMENT '可视化日期',
  `s_bit` bigint(20) NOT NULL DEFAULT '0' COMMENT '二进制分割时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='预约图书';
```

```mysql
-- 录入31条测试数据
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (1, 201, 1651334400, 1651336200, '2022-05-01 00:00:00', '2022-05-01 00:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (2, 201, 1651338000, 1651339800, '2022-05-01 01:00:00', '2022-05-01 01:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (3, 201, 1651341600, 1651343400, '2022-05-01 02:00:00', '2022-05-01 02:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (4, 201, 1651377600, 1651379400, '2022-05-01 12:00:00', '2022-05-01 12:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (5, 201, 1651381200, 1651383000, '2022-05-01 13:00:00', '2022-05-01 13:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (6, 201, 1651384800, 1651386600, '2022-05-01 14:00:00', '2022-05-01 14:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (7, 201, 1651388400, 1651390200, '2022-05-01 15:00:00', '2022-05-01 15:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (8, 201, 1651392000, 1651393800, '2022-05-01 16:00:00', '2022-05-01 16:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (9, 201, 1651395600, 1651397400, '2022-05-01 17:00:00', '2022-05-01 17:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (10, 201, 1651399200, 1651401000, '2022-05-01 18:00:00', '2022-05-01 18:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (11, 201, 1651453200, 1651455000, '2022-05-02 09:00:00', '2022-05-02 09:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (12, 201, 1651456800, 1651458600, '2022-05-02 10:00:00', '2022-05-02 10:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (13, 201, 1651460400, 1651462200, '2022-05-02 11:00:00', '2022-05-02 11:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (14, 201, 1651464000, 1651465800, '2022-05-02 12:00:00', '2022-05-02 12:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (15, 201, 1651467600, 1651469400, '2022-05-02 13:00:00', '2022-05-02 13:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (16, 201, 1651471200, 1651473000, '2022-05-02 14:00:00', '2022-05-02 14:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (17, 201, 1651474800, 1651476600, '2022-05-02 15:00:00', '2022-05-02 15:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (18, 201, 1651478400, 1651480200, '2022-05-02 16:00:00', '2022-05-02 16:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (19, 201, 1651482000, 1651483800, '2022-05-02 17:00:00', '2022-05-02 17:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (20, 201, 1651485600, 1651487400, '2022-05-02 18:00:00', '2022-05-02 18:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (21, 201, 1651546800, 1651548600, '2022-05-03 11:00:00', '2022-05-03 11:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (22, 201, 1651550400, 1651552200, '2022-05-03 12:00:00', '2022-05-03 12:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (23, 201, 1651554000, 1651555800, '2022-05-03 13:00:00', '2022-05-03 13:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (24, 201, 1651557600, 1651559400, '2022-05-03 14:00:00', '2022-05-03 14:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (25, 201, 1651561200, 1651563000, '2022-05-03 15:00:00', '2022-05-03 15:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (26, 201, 1651640400, 1651642200, '2022-05-04 13:00:00', '2022-05-04 13:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (27, 201, 1651644000, 1651386600, '2022-05-04 14:00:00', '2022-05-01 14:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (28, 201, 1651647600, 1651649400, '2022-05-04 15:00:00', '2022-05-04 15:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (29, 201, 1651651200, 1651653000, '2022-05-04 16:00:00', '2022-05-04 16:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (30, 201, 1651654800, 1652520600, '2022-05-04 17:00:00', '2022-05-14 17:30:00');
INSERT INTO `temp_demo`.`reserve_book`(`id`, `book_id`, `start_time`, `end_time`, `start_time_fei`, `end_time_fei`) VALUES (31, 201, 1651681800, 1651683600, '2022-05-05 00:30:00', '2022-05-05 01:00:00');


```

```mysql
-- 从表中查询出来结果导入到 reserve_book_cache 这张表的数据
INSERT INTO `temp_demo`.`reserve_book_cache`(`id`, `book_id`, `s_time`, `s_bit`) VALUES (1, 201, '2022-05-01', 91620376597);
INSERT INTO `temp_demo`.`reserve_book_cache`(`id`, `book_id`, `s_time`, `s_bit`) VALUES (2, 201, '2022-05-02', 91625881600);
INSERT INTO `temp_demo`.`reserve_book_cache`(`id`, `book_id`, `s_time`, `s_bit`) VALUES (3, 201, '2022-05-03', 1430257664);
INSERT INTO `temp_demo`.`reserve_book_cache`(`id`, `book_id`, `s_time`, `s_bit`) VALUES (4, 201, '2022-05-04', 22884122624);
INSERT INTO `temp_demo`.`reserve_book_cache`(`id`, `book_id`, `s_time`, `s_bit`) VALUES (5, 201, '2022-05-05', 2);


```

### 逻辑

```mysql
-- 查询可视化时间
SELECT id, book_id, FROM_UNIXTIME( `start_time` ) AS start_time FROM `reserve_book`
```

#### 第一步: 图书馆时间点分割规则

```html
-- 这里一定要从 00:00 凌晨开始计数,方便后面写SQL
把 00:00 --23:30  时间段,每隔半个小时,计数一次,规则如下
00:00 -> 第一位   ->   2的0次方
00:30 -> 第二位   ->   2的1次方
01:00 -> 第三位   ->   2的2次方
01:30 -> 第四位   ->   2的3次方
...
23:30 -> 第四十八位  ->  2的47次方

如果 00:00 --23:30 这个全天都可以预约图书,那么用二进制表示为48个1,都没有空表示为48个0
简单理解为:
	哪个时间空闲就把对应的二进制位标记为1, 同时对应二进制 2的n次方
	整点2的n次方，半点2的n+1次方 ( 奇数和偶数次方 )


```



```mysql
-- 查询图书馆每天的的某个时刻是否空闲,标记为1,用2的n次方表示,
SELECT
	FROM_UNIXTIME( `start_time`, '%Y-%m-%d' ) AS s_date,
	POW(
		2,
		FROM_UNIXTIME( start_time, '%H' ) * 2 +
	CASE
			
			WHEN FROM_UNIXTIME( start_time, '%i' ) = 30 THEN
			1 ELSE 0 
		END 
		) AS date_bit 
	FROM
		`reserve_book` 
GROUP BY
	start_time
-- -------- 下面这个SQl中GROUP BY三个字段只是避免SQL报错,运行结果和上面一样 --------
SELECT
	id,
	book_id,
	FROM_UNIXTIME( `start_time`, '%Y-%m-%d' ) AS s_date,
	POW(
		2,
		FROM_UNIXTIME( start_time, '%H' ) * 2 +
	CASE
			
			WHEN FROM_UNIXTIME( start_time, '%i' ) = 30 THEN
			1 ELSE 0 
		END 
		) AS date_bit 
	FROM
		`reserve_book` 
	GROUP BY
		id,
	book_id,
	start_time
```



```mysql

-- 查询图书馆每天的空闲时间,并且把时间点标记为1,用2的n次方表示,SUM把每一位求和,最终标记为一个十进制数
-- 把这个SQL的结果导出到表reserve_book_cache中作为缓存
SELECT
	book_id,
	FROM_UNIXTIME( `start_time`, '%Y-%m-%d' ) AS s_date,
	SUM(
		POW(
			2,
			FROM_UNIXTIME( start_time, '%H' ) * 2 +
		CASE

				WHEN FROM_UNIXTIME( start_time, '%i' ) = 30 THEN
				1 ELSE 0
			END
			)
		) AS date_bit
	FROM
		`reserve_book`
	GROUP BY
	book_id,
	s_date
```

#### 第二步:  学生借书预约时间

把上面从表 `reserve_book` 中查出来的数据导入到表`reserve_book_cache`

学生想约`2022-05-02 13:00:00`这个时间的图书的时候 进行`按位与&` 进行计算就可以了,大于0代表图书馆这个时间段是空闲的

预约图书馆`2022-05-02 10:00:00`,测试demo

```mysql
SELECT
	* 
FROM
	reserve_book_cache 
WHERE
	s_time = '2022-05-02' 
	AND s_bit & POW(
		2,
		FROM_UNIXTIME( UNIX_TIMESTAMP( '2022-05-02 10:00:00' ), '%H' ) * 2 +
	CASE
			
			WHEN FROM_UNIXTIME( UNIX_TIMESTAMP( '2022-05-02 10:00:00' ), '%i' ) = 30 THEN
			1 ELSE 0 
	END 
	) > 0
```



预约图书馆`2022-05-05 13:30:00`,测试demo

```mysql
SELECT
	* 
FROM
	reserve_book_cache 
WHERE
	s_time = '2022-05-05' 
	AND s_bit & POW(
		2,
		FROM_UNIXTIME( UNIX_TIMESTAMP( '2022-05-05 10:00:00' ), '%H' ) * 2 +
	CASE
			
			WHEN FROM_UNIXTIME( UNIX_TIMESTAMP( '2022-05-05 10:00:00' ), '%i' ) = 30 THEN
			1 ELSE 0 
	END 
	) > 0
```







