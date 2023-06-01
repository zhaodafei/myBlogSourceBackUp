---
title: ubuntu -jenkins02 
date: 2023-04-20
categories: 
- Jenkins
tags:
- Jenkins
---
ubuntu -jenkins 
ubuntu -jenkins 
配置一个发版任务`job`,以`Vue`为例

<!-- more -->

### 准备工作

安装插件

```wiki
Publish  Over SSH

Send build artifacts over SSH
```

![Jenkins ssh](/img/ubuntu/jenkins/use_05.png "Jenkins ssh")

#### 添加要发版的服务器信息

![Jenkins ssh](/img/ubuntu/jenkins/use_06.png "Jenkins ssh")

#### git权限

在`gitlab`仓库中添加`jenkins`用户访问权限

![Jenkins git成员](/img/ubuntu/jenkins/use_03.png "Jenkins git成员")

#### nodejs

安装`nodejs`

Manage Jenkins => Global Tool Configuration => NodeJS => NodeJS installations… => Add NodeJS

![Jenkins nodejs](/img/ubuntu/jenkins/use_04.png "Jenkins nodejs")



### 创建任务

![Jenkins 使用](/img/ubuntu/jenkins/use_01.png "Jenkins 使用")

![Jenkins 使用](/img/ubuntu/jenkins/use_02.png "Jenkins 使用")

#### 配置选项-源码管理

把准备工作中的`git`仓库地址配置到这里,指定`Branches to build`

#### 配置选项-构建环境

`Provide Node & npm bin/ folder to PATH`, 选择node版本

#### 配置选项-构建

```shell
#vue 的打包命令
npm install
npm run build:stage
```

![Jenkins Vue](/img/ubuntu/jenkins/use_07.png "Jenkins Vue")

#### 配置选项-构建后操作

选择 `Send build artifacts over SSH` 这个选项

![Jenkins ssh](/img/ubuntu/jenkins/use_08.png "Jenkins ssh")

### 成功,访问测试

![Jenkins ssh](/img/ubuntu/jenkins/use_09.png "Jenkins ssh")

### 其他

部署java版本的

任务中配置项不一样,下面列举几个终于项

#### 配置选项-pre steps

build

```html
pom.xml
clean package -pl fei-foo/foo-server -am -amd -Ptest -Dmaven.test.skip=true
```

配置选项-构建后设置

```bash
Transfers
Source files:  fei-foo/foo-server/target/fei-foo-server.jar
Remove prefix: fei-foo/foo-server/target
Remote directory: data/fei
Exec command:
            cd /data/java/fei-foo
            sh service.sh restart 

#service.sh 脚本中内容如下
ps -ef | grep fei-foo-server-1.0-SNAPSHOT.jar | grep -v grep | awk '{print $2}' | xargs kill -9

java -jar fei-foo-server-1.0-SNAPSHOT.jar --spring.profiles.active=test &

```



