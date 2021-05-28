---
title: Ubuntu -jdk
categories: 
- Java
tags:
- Java
- jdk
---
## Ubuntu 安装 jdk 2 种方式

1、 通过 ppa 源方式安装 jdk8
2、通过官网下载安装包安装 jdk8

检测linux多少位： getconf LONG_BIT    我的系统是64位

## 使用 ppa 源方式安装

### 添加ppa

```
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
```

### 安装oracle-java-installer

```
sudo apt-get install oracle-java8-installer
```

接下来会出现连个界面，选择ok、yes 即可

![jdk1.8 install](/img/ubuntu/jdk/installer.png "jdk1.8 install")

![jdk1.8 install](/img/ubuntu/jdk/installer.png "jdk1.8 install02")

#### 查看java版本

```
java -version
```

### 卸载jdk

```
sudo apt-get remove openjdk*
```

![uninstall](/img/ubuntu/jdk/uninstall.png "uninstall")

### 直接下载 jdk 压缩包方式安装

#### 官网下载 jdk

[jdk1.8 官网地址](http://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html "jdk1.8 官网地址")    选择相应的系统 .tar.gz 包，然后用ssh上传到服务器【提醒：不要在服务器直接下载，否则解压会出错】

![tar Download error](/img/ubuntu/jdk/tar_download_error.png "tar Download error")

#### 解压缩，放到指定目录

```
sudo tar -zxvf jdk-8u161-linux-x64.tar.gz -C /usr/lib/jvm
```

![tar jdk](/img/ubuntu/jdk/tar_jdk.png "tar jdk")

#### 修改环境变量

```
sudo vim ~/.bashrc    #或者修改 vim /etc/profile
```

文件的末尾追加下面内容

```
#set oracle jdk environment
export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_161  ## 这里要注意目录要换成自己解压的jdk 目录
export JRE_HOME=${JAVA_HOME}/jre  
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib  
export PATH=${JAVA_HOME}/bin:$PATH  
```

![jdk environment](/img/ubuntu/jdk/jdk_environment.png "jdk environment")

#### 设置系统默认 jdk 版本

```
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk1.8.0_161/bin/java 300  
sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk1.8.0_161/bin/javac 300  
sudo update-alternatives --install /usr/bin/jar jar /usr/lib/jvm/jdk1.8.0_161/bin/jar 300   
sudo update-alternatives --install /usr/bin/javah javah /usr/lib/jvm/jdk1.8.0_161/bin/javah 300   
sudo update-alternatives --install /usr/bin/javap javap /usr/lib/jvm/jdk1.8.0_161/bin/javap 300  

然后执行
sudo update-alternatives --config java
```

#### 测试 jdk

```
java -version
```

![java version](/img/ubuntu/jdk/java_version.png "java version" )



###  其他

```
java -version   // 查看jdk版本
javac -version  // 查看jdk版本
java -verbose   // 查看jdk安装路径
```

































