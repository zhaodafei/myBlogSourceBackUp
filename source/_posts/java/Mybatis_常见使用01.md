---
title: Mybatis_常见使用1
date: 2022-02-07
categories: 
- Mybatis
tags:
- Mybatis
---
Mybatis_常见使用1
Mybatis_常见使用1
Mybatis_常见使用1

<!-- more -->

### 逗号分隔参数

参数为,逗号分隔字符串demo: ` String ids = "1,2,3" `

```mysql
# 常见SQL  SELECT * FROM goods where id in (1,2,3)
SELECT * FROM goods where id in
<foreach item="item" index="index" collection="ids.split(',')"  open="(" separator="," close=")">
	#{item}
</foreach>
```

### 动态`SQL`

选择语句

```mysql
#choose、when、otherwise  类型其他语言中 switch 
select id="findActiveBlogLike" resultType="Blog">
  SELECT * FROM BLOG WHERE state = ‘ACTIVE’
  <choose>
    <when test="title != null">
      AND title like #{title}
    </when>
    <when test="author != null and author.name != null">
      AND author_name like #{author.name}
    </when>
    <otherwise>
      AND featured = 1
    </otherwise>
  </choose>
</select>
```

```mysql
<choose>
    <when test="status == 0">
        AND status = 0
    </when>
    <otherwise>
        AND status >= #{status}
    </otherwise>
</choose>
```

```mysql
<if test="status != null and status != ''">
    <choose>
        <when test="status == 0">
            AND status = 0
        </when>
        <otherwise>
            AND status >= #{status}
        </otherwise>
    </choose>
</if>
```

[MyBatis 官网,动态SQL](https://mybatis.org/mybatis-3/zh/dynamic-sql.html)

### resultMap和resultType区别

resultMap可以映射集合 resultType不可以,
简单理解: resultMap可以自定义字段值,并返回

![resultMap和resultType](/img/java/Mybatis/Mybatis_01.png "resultMap和resultType")









### 其他

[MyBatis官网](https://mybatis.org/mybatis-3/zh)





