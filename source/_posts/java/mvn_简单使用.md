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



### 其他

2个maven仓库 [mvnrepository](https://mvnrepository.com)  和  [search-maven-org](https://search.maven.org)























