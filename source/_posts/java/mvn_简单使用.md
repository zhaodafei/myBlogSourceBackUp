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

### 把`jar`注入本地仓库

场景描述

> 雪花id依赖包`com.baidu.fsg.uid-generator`在中央仓库没有, 存在阿里云仓库中
>
> ```shell
> #核心命令: 把 uid-generator-1.0.5.jar 注入到本地仓库中
> #注意路径中 / 是反斜杠
> 
> mvn install:install-file \
> -Dfile=E:/self_web/git_dev/gitee_source/tmpl_springBoot/doc/uid-generator-1.0.5.jar \
> -DgroupId=com.baidu.fsg \
> -DartifactId=uid-generator \
> -Dversion=1.0.5 \
> -Dpackaging=jar
> ```
>
> 步骤:
>
> 1. 从阿里云仓库下载[uid-generator-1.0.5.jar](https://aliyun-osm-maven.oss-cn-shanghai.aliyuncs.com/repository/spring/com/baidu/fsg/uid-generator/1.0.5/uid-generator-1.0.5.jar?Expires=1763711124&OSSAccessKeyId=LTAI5tQeTg2SkYgiUPXMyK7t&Signature=t5q%2BThVusig72RhzWrHJ9ohKVXU%3D)
>
> 2. 使用`mvn`命令开始注入
>    ```shell
>    #注意uid-generator-1.0.5.jar 这个包不能用, 这里的命令主要是用来学习
>    
>    mvn install:install-file \
>      -Dfile=E:/self_web/git_dev/gitee_source/tmpl_springBoot/doc/uid-generator-1.0.5.jar \
>      -DgroupId=com.baidu.fsg \
>      -DartifactId=uid-generator \
>      -Dversion=1.0.5 \
>      -Dpackaging=jar
>      
>      
>      
>    mvn install:install-file \
>      -Dfile=E:/self_web/git_dev/gitee_source/tmpl_springBoot/doc/uid-generator-1.0.5.jar \
>      -DpomFile=E:/self_web/git_dev/gitee_source/tmpl_springBoot/doc/uid-generator-1.0.5.pom \
>      -DgroupId=com.baidu.fsg \
>      -DartifactId=uid-generator \
>      -Dversion=1.0.5 \
>      -Dpackaging=jar
>    ```
>    
> 3. 修改项目中`pom`依赖
>    ```xml
>    <dependency>
>        <groupId>com.baidu.fsg</groupId>
>        <artifactId>uid-generator</artifactId>
>        <version>1.0.5</version>
>    </dependency>
>    ```
>
> 4. 项目中安装成功
>
> ![mvn注入本地依赖](/img/java/mvn/mvn_01.png "mvn注入本地依赖")

### 其他

2个maven仓库 [mvnrepository](https://mvnrepository.com)  和  [search-maven-org](https://search.maven.org)























