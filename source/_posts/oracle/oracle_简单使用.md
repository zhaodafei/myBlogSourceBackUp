---
title:  -oracle 简单使用
---
oracle 简单SQL的使用................

### sql

```
#sql
SELECT * FROM USER_TAB_COMMENTS
SELECT * FROM USER_TAB_COMMENTS T WHERE T.TABLE_NAME='表名' #查看表注释
SELECT table_name FROM user_tables; //当前用户的表
SELECT table_name FROM all_tables; //所有用户的表

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
```



![root passwd](/img/oracle/Navicat_oracle_01.png "navicat oracle")
![root passwd](/img/oracle/Navicat_oracle_02.png "navicat oracle")





























