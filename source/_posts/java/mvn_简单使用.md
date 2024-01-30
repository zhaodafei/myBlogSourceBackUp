---
title: mvn简单使用
date: 2022-03-14
categories: 
- mvn
tags:
- mvn
---
`mvn`简单使用
`mvn`简单使用
`mvn`简单使用

<!-- more -->

### 常见命令

```shell
mvn jar:jar # 只打jar包
mvn package # 打包

mvn clean  #清除产生的项目
mvn compile #编译类文件

mvn install，包含mvn compile，mvn package，然后上传到本地仓库

mvn deploy, 包含mvn install,然后，上传到私服
```

### 私服阿里云

```xml
<mirror>
    <id>nexus-aliyun</id>
    <mirrorOf>central</mirrorOf>
    <name>Nexus aliyun</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>


<activeProfiles>
    <activeProfile>nexus</activeProfile>
</activeProfiles>
```

### IDEA配置`mvn`

```wiki
创建mvn的项目后,需要在idea中配置自己的mvn,尽量不使用idea自带的mvn
File->Settings->Maven
01) Maven home path
    D:/soft_position/Java/apache-maven-3.6.0
02)User settings file
    D:\soft_position\Java\apache-maven-3.6.0\conf\settings.xml
03)Local repository
    D:\soft_position\Java\mvn_repository
```



### 其他

2个maven仓库 [mvnrepository](https://mvnrepository.com)  和  [search-maven-org](https://search.maven.org)























