---
title: mybatis-generator常见使用1
date: 2022-02-07
categories: 
- Mybatis
tags:
- Mybatis
---
`mybatis-generator` 自动生成dao、sql.xml、实体类
`mybatis-generator` 自动生成dao、sql.xml、实体类
`mybatis-generator` 自动生成dao、sql.xml、实体类

<!-- more -->

### `pom`引入

```xml
<build>
    <plugins>
        <!--  自动生成了dao、sql、xml、实体类 -->
        <plugin>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-maven-plugin</artifactId>
            <version>1.3.7</version>
            <configuration>
                <overwrite>true</overwrite>
            </configuration>
        </plugin>

    </plugins>
</build>
```

### 配置 `generatorConfig.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">

<!-- 配置生成器 -->
<generatorConfiguration>
    <!--  构建命令：mvn mybatis-generator:generate  -->
    <!--    windows下路径和Mac路径不一样，需要自己替换-->
    <classPathEntry
            location="C:\Users\fei\.m2\repository\mysql\mysql-connector-java\8.0.27\mysql-connector-java-8.0.27.jar"/>

    <context id="MysqlTables" targetRuntime="MyBatis3">

        <!-- 格式化java代码 -->
        <property name="javaFormatter" value="org.mybatis.generator.api.dom.DefaultJavaFormatter"/>
        <!-- 格式化XML代码 -->
        <property name="xmlFormatter" value="org.mybatis.generator.api.dom.DefaultXmlFormatter"/>
        <plugin type="org.mybatis.generator.plugins.SerializablePlugin" />

        <plugin type="org.mybatis.generator.plugins.ToStringPlugin" />

        <!-- 注释 -->
        <commentGenerator >
            <property name="suppressAllComments" value="true"/><!-- 是否取消注释 -->
            <property name="suppressDate" value="true" /> <!-- 是否生成注释代时间戳-->
        </commentGenerator>

        <!-- jdbc连接 -->
        <jdbcConnection driverClass="com.mysql.cj.jdbc.Driver"
                        connectionURL="jdbc:mysql://127.0.0.1:3306/temp_demo"
                        userId="root"
                        password="root">
        </jdbcConnection>

        <!-- 类型转换 -->
        <javaTypeResolver>
            <!-- 是否使用bigDecimal， false可自动转化以下类型（Long, Integer, Short, etc.） -->
            <property name="forceBigDecimals" value="false"/>
        </javaTypeResolver>

        <!-- 生成实体类地址 -->
        <javaModelGenerator targetPackage="com.example.fei.domain" targetProject="src/main/java">
            <property name="enableSubPackages" value="true"/>
            <property name="trimStrings" value="true" />
        </javaModelGenerator>

        <!-- 生成map.xml文件 -->
        <sqlMapGenerator targetPackage="mapper" targetProject="src/main/resources">
            <property name="enableSubPackages" value="true"/>
        </sqlMapGenerator>

        <!-- 生成map xml对应client，也就是接口dao -->
        <javaClientGenerator type="XMLMAPPER" targetPackage="com.example.fei.mapper" targetProject="src/main/java">
            <property name="enableSubPackages" value="true"/>
        </javaClientGenerator>

        <!-- table可以有多个,每个数据库中的表都可以写一个table，tableName表示要匹配的数据库表 -->
        <table tableName="yz_book" domainObjectName="Book" enableCountByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" enableUpdateByExample="false">
            <!-- 数据库表主键 -->
            <generatedKey column="id" sqlStatement="Mysql" identity="true" />
        </table>

        <table tableName="yz_foo" domainObjectName="Foo" enableCountByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" enableUpdateByExample="false">
            <!-- 数据库表主键 -->
            <generatedKey column="id" sqlStatement="Mysql" identity="true" />
        </table>

        <!-- 配好表后在pom.xml目录下执行mvn mybatis-generator:generate -->

    </context>
</generatorConfiguration>
```

### 控制台执行构建命令

```shell
#在pom.xml目录下执行mvn mybatis-generator:generate
mvn mybatis-generator:generate
```



### 其他

[mybatis-generator官网](http://mybatis.org/generator/running/runningWithMaven.html "mybatis-generator官网")

