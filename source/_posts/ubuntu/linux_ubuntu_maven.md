---
title: -maven  centos7
date: 2014-02-05
categories: 
- Java
- Maven
tags:
- Java
- Maven
---
maven  centos7
maven  centos7
maven  centos7

<!-- more -->

## maven   Binary方式安装使用

安装maven之前区别系统中安装了 JDK,  

```
下载 maven 
http://39.137.67.79/mirror.bit.edu.cn/apache/maven/maven-3/3.6.0/binaries/apache-maven-3.6.0-bin.tar.gz
```

### 解压

```
tar -zxvf apache-maven-3.6.0-bin.tar.gz -C /data/server/
```

### 修改环境变量

```
vim /etc/profile

#set maven
export M2_HOME=/data/server/apache-maven-3.6.0
export PATH=$PATH:$M2_HOME/bin
```

### 验证

```
source /etc/profile    #使环境变量生效
mvn -v
```

![root passwd](/img/ubuntu/maven/maven_success.png "maven 成功")



## maven   source 方式安装使用

## maven 仓库位置

`maven`默认仓库位置`C:/Users/Administrator/.m2/repository`,如果改为自己指定本地位置位置，可通过修改`maven安装包下面配置文件`...\apache-maven-3.6.0\conf\settings.xml`中55行左右

```xml
<localRepository>D:\soft_position\java\maven_repo</localRepository>
```

修改完成后可以执行命令`mvn help:system`后，到新的仓库位置看一下是否有下载的包

### 设置`aliyun`仓库

```xml
<mirrors>
      <mirror>
        <id>nexus-aliyun</id>
        <mirrorOf>central</mirrorOf>
        <name>Nexus aliyun</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public</url>
      </mirror>
  </mirrors>
 
  <profiles>
         <profile>
              <id>jdk-1.8</id>
              <activation>
                <activeByDefault>true</activeByDefault>
                <jdk>1.8</jdk>
              </activation>
              <properties>
                <maven.compiler.source>1.8</maven.compiler.source>
                <maven.compiler.target>1.8</maven.compiler.target>
                <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
              </properties>
         </profile>
  </profiles>
```





































