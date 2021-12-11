---
title: ubuntu -tomact
date: 2014-02-05
categories: 
- Tomact
tags:
- Tomact
---
ubuntu -tomact
ubuntu -tomact
ubuntu -tomact

<!-- more -->

#### 官网下载 Tomact 包上传到服务器

```
然后解压：
sudo tar -zxvf apache-tomcat-9.0.5.tar.gz
```

![tomact 解压](/img/ubuntu/tomact/tomcat_tar.png "tomact 解压")

在 /data/server 目录创建 tomcat 目录；然后将文件夹 apache-tomcat-9.0.5 移动到   /data/server/tomcat 下：

```
mkdir tomcat
sudo mv  apache-tomcat-9.0.5 /data/server/tomcat/  
```

![tomact 位置](/img/ubuntu/tomact/tomcat_position.png "tomact 位置")

#### 进入/data/server/tomcat/apache-tomcat-9.0.5/bin，编辑 startup.sh

```
在最后一行加入下信息;

#set java environment
export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_161    ## 这里要注意要换成自己解压的 jdk 目录
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:%{JAVA_HOME}/lib:%{JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH

#tomcat
export TOMCAT_HOME=/data/server/tomcat/apache-tomcat-9.0.5  ## 这里要注意要换成自己解压的 tomcat 目录
```

![tomact 环境变量](/img/ubuntu/tomact/tomcat_environment.png "tomact 环境变量")

#### 启动

```
 sudo ./startup.sh
```

![tomact 启动成功](/img/ubuntu/tomact/tomcat_start.png "tomact 启动成功")

#### 关闭 tomcat ，需要在 shutdown.sh 对应的位置添加信息

```
在最后一行加入下信息;

#set java environment
export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_161      ## 这里要注意要换成自己解压的 jdk 目录
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:%{JAVA_HOME}/lib:%{JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH

#tomcat
export TOMCAT_HOME=/data/server/tomcat/apache-tomcat-9.0.5  ## 这里要注意要换成自己解压的 tomcat 目录
```

#### 停止

```
sudo ./shutdown.sh
```

![tomact 停止](/img/ubuntu/tomact/tomcat_stop.png "tomact 停止")

#### 加入开机启动：

#### 把catalina.sh文件复制到/etc/init.d

```
sudo cp -p /data/server/tomcat/apache-tomcat-9.0.5/bin/catalina.sh /etc/init.d/tomcat  

编辑tomcat文件： 
sudo vim /etc/init.d/tomcat 

在开头写如下内容：【提醒：这里一定要注意书写格式，不能有空格，有#的注释部分也要写全，不要遗漏】

### BEGIN INIT INFO  
# Provides:          tomcat  
# Required-Start:    $local_fs $network  
# Required-Stop:     $local_fs  
# Default-Start:     2 3 4 5  
# Default-Stop:      0 1 6  
# Short-Description: tomcat service  
# Description:       tomcat service daemon  
### END INIT INFO  
CATALINA_HOME=/data/server/tomcat/apache-tomcat-9.0.5  
JAVA_HOME=/usr/lib/jvm/jdk1.8.0_161  
```

![tomact 开机自启编辑内容](/img/ubuntu/tomact/tomcat_edit_content.png "tomact 开机自启编辑内容")

#### 添加自启动服务

```
update-rc.d tomcat defaults 
```

#### 测试，关机重启访问 localhost:8080  或者 192.168.1.113:8080 

![tomact 开机自启成功](/img/ubuntu/tomact/tomcat_start2.png "tomact 开机自启成功")

#### tomact 命令

```
service tomcat {start|stop|restart}
service tomcat stop
service tomcat start
service tomcat restart
```































