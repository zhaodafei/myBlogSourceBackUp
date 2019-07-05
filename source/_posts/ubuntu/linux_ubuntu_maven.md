---
title: -maven  centos7
---
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





































