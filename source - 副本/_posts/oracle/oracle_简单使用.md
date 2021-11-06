---
title:  -oracle 简单使用
categories: 
- Oracle
tags:
- Oracle
---
oracle 简单SQL的使用................

### sql

```sql
#sql
SELECT * FROM USER_TAB_COMMENTS
SELECT * FROM USER_TAB_COMMENTS T WHERE T.TABLE_NAME='表名' #查看表注释
SELECT table_name FROM user_tables; //当前用户的表
SELECT table_name FROM all_tables; //所有用户的表

查看oracle 数据库版本
select * from v$version;
select * from product_component_version;

#获取表字段：
SELECT * FROM user_tab_columns WHERE Table_Name='用户表'; 

#获取表注释
SELECT * FROM user_col_comments;
SELECT * FROM user_col_comments WHERE Table_Name='用户表'  #EMPI_ADDRESS

#查询一行
SELECT * FROM 表名 WHERE ROWNUM=1  

#查询2行
SELECT * FROM (SELECT * FROM 表名 order by CFG_ORGANIZATION_UNID) WHERE ROWNUM < 3;
SELECT * FROM 表名 WHERE ROWNUM<3  #这里最好不要用

#查询5条数据
SELECT * FROM (SELECT 表名.*,ROWNUM as num FROM 表名) WHERE num between 0 and 5;
SELECT * FROM 表名 WHERE ROWNUM <= 5 minus SELECT * FROM 表名 WHERE ROWNUM < 0;

#WHERE 条件查询
SELECT * FROM 表名 WHERE 表名.id<=200  #id小于200

#查询最后一条条数据
SELECT  p.* FROM (SELECT * FROM 表名 t order by t.id desc) p WHERE ROWNUM = 1

#between and
SELECT *  FROM 表名 WHERE 时间字段 BETWEEN TO_DATE('2000-01-01 02:00:00', 'yyyy-MM-dd HH24:MI:SS') AND TO_DATE('2000-02-01 08:00:59', 'yyyy-MM-dd HH24:MI:SS')

#时间字段 TO_CHAR
SELECT UNID,NAME,NAME_XML FROM TABLE_NAME WHERE UNID=10
```



![navicat oracle](/img/oracle/Navicat_oracle_01.png "navicat oracle")
![navicat oracle](/img/oracle/Navicat_oracle_02.png "navicat oracle")

![navicat oracle system](/img/oracle/Navicat_oracle_system.png "navicat oracle system")

### `PHP` 操作 `oracle`

```sql
### PHP 使用 pdo  操作oracle数据库 报错
## SELECT UNID,NAME,NAME_XML  WHERE UNID>=10 AND UNID<=15  ## 在10到15这5条数据中不为空数据
php: symbol lookup error: ...php/lib/php/extensions/no-debug-non-zts-20170718/pdo_oci.so: undefined symbol: GC_ADDREF

原因: oracle数据库中字段类型有 CLOB 和 SYS.XMLTYPE 这2中类型
解决办法:
我的字段 NAME 是 CLOB 类型; NAME_XML 是 SYS.XMLTYPE 类型
SELECT UNID,NAME,NAME_XML FROM TABLE_NAME WHERE UNID>=10 AND UNID<=15

SELECT UNID,TO_CHAR(a.NAME_XML.getclobval()) as NAME_XML  FROM TABLE_NAME WHERE UNID>=10 AND UNID<=15

SELECT UNID,TO_CHAR(a.NAME),TO_CHAR(a.NAME_XML.getclobval()) as NAME_XML FROM TABLE_NAME WHERE UNID>=10 AND UNID<=15
```

![PHP pdo clob](/img/oracle/clob_sql.png "PHP pdo clob")



























