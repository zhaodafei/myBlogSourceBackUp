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

#### 选择语句

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



### 实体类定义别名

在Java中，类的全限定名往往会很繁琐，在mybatis使用这些类型的时候，需要配置很复杂的属性，例如：

```xml
<select id="getUser" parameterType="int"  resultType="cn.mybatis.fei.domain.User">
    select * from users where id=#{id}
</select>
```

`cn.mybatis.fei.domain.User`就很繁琐了，所以mybatis提供了给实体类定义别名的配置，如下所示：

```xml
<typeAliases>
    <typeAlias alias="User" type="cn.mybatis.fei.domain.User"/> 
</typeAliases>
```

把 `cn.mybatis.fei.domain.User` 定义别名为 User。定义别名了之后就可以在userMapper.xml中简化一下：

```xml
<mapper namespace="userMapper">
    <select id="getUser" parameterType="int"  resultType="User">
        select * from users where id=#{id}
    </select>
    <select id="getAllUsers" resultType="User">
        select * from users
    </select>
</mapper> 
```

1. [中文官网： mybatis为实体类定义别名](http://www.mybatis.cn/archives/820.html)
2. [官网：类型别名 typeAliases](https://mybatis.org/mybatis-3/zh_CN/configuration.html#typeAliases)

在`springBoot`中，可以直接在`application.xml`配置文件中配置

```yaml
# MyBatis配置
mybatis:
  # 搜索指定包别名
  typeAliasesPackage: com.example.fei.domain
```

为了让`IDEA`不是红色，可以在`mapper.xml`中写全路径

```xml
<resultMap type="com.example.fei.domain.BusBook" id="BusBookResult">
    <result property="bookId"    column="bookId"    />
    <result property="bookName"  column="bookName"    />
</resultMap>
```



### 大于小于转义

`mybatis` 中 `SQL` 写在`mapper.xml`文件中，而xml解析` < 、>、<=、>=` 时会出错，这时应该使用转义写法。

```html
| <    | <=    | >    | >=    | &     | '      | "      |
| ---- | ----- | ---- | ----- | ----- | ------ | ------ |
| &lt; | &lt;= | &gt; | &gt;= | &amp; | &apos; | &quot; |
```

> ```wiki
> #gt,gte,lt,lte缩写的含义
> ## 这几个单词在范围查询的时候会用到
> gt:  greater than 大于
> gte: greater than or equal 大于等于
> lt:  less than 小于
> lte: less than or equal 小于等于
> ```
>
> 

```xml
<!-- 范围查询, 注意这里大于小于符号 -->
<where>
    <if test="username != null and username != ''">
        AND username like concat('%', #{username}, '%')
    </if>
    <if test="beginTime != null and beginTime != ''">
        and  create_time &gt;= #{beginTime}
    </if>
    <if test="endTime != null and endTime != ''">
        and  create_time &lt;= #{endTime}
    </if>
    AND del_flag = 0
</where>
```

[MyBatis中大于和小于号的转义写法](http://www.mybatis.cn/archives/754.html)

### 新增后返回插入主键

场景描述：添加单条记录时获取主键值

在定义`xml`映射器时设置属性`useGeneratedKeys`值为`true`，并分别指定属性`keyProperty`和`keyColumn`为对应的数据库记录主键字段与`Java`对象的主键属性。

```xml
<mapper namespace="cn.mybatis.mydemo.mapper">
    <!-- 插入数据：返回记录主键id值 -->
    <insert id="insertPerson" parameterType="cn.mybatis.fei.domain.Person" 
            useGeneratedKeys="true" keyProperty="id" keyColumn="id" >
        insert into t_person(name,sex,age,create_time,update_time) 
        values(#{name},#{sex},#{age},now(),now())
    </insert>
</mapper>
```

```xml
<insert id="insertPerson" parameterType="cn.mybatis.mydemo.domain.Person">
    <selectKey resultType="INTEGER" order="AFTER" keyProperty="id">
      SELECT LAST_INSERT_ID()
    </selectKey>
    insert into t_person(name,sex,age,create_time,update_time) 
    values(#{name},#{sex},#{age},now(),now())
  </insert>
```

[MyBatis如何返回插入主键？](http://www.mybatis.cn/archives/743.html)

### 其他

常见的`SQL`写法在`官网 XMl映射文件`这个菜单中都可以查询到具体的使用案例

1. [MyBatis官网](https://mybatis.org/mybatis-3/zh)
2. [MyBatis 中文官网](http://www.mybatis.cn/)





