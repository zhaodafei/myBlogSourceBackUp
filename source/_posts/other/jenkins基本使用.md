---
title: jenkins
date: 2026-03-01
categories: 
- jenkins
tags:
- jenkins
---
`jenkins`基本使用
`jenkins`基本使用
`jenkins`基本使用

<!-- more -->

### 准备工作

#### 安装插件

```wiki
Publish  Over SSH

Send build artifacts over SSH

#界面步骤
01)菜单 Dashboard / 系统管理 / 插件管理 / 搜索( Publish  Over SSH )

```

![Jenkins ssh](/img/other/jenkins/use_05.png "Jenkins ssh")

#### 添加要发版的服务器信息

![Jenkins ssh](/img/other/jenkins/use_06.png "Jenkins ssh")

#### git权限

在`gitlab`仓库中添加`jenkins`用户访问权限

![Jenkins git成员](/img/other/jenkins/use_03.png "Jenkins git成员")

#### nodejs

安装`nodejs`

Manage Jenkins => Global Tool Configuration => NodeJS => NodeJS installations… => Add NodeJS

![Jenkins nodejs](/img/other/jenkins/use_04.png "Jenkins nodejs")

### 创建任务

![Jenkins 使用](/img/other/jenkins/use_01.png "Jenkins 使用")

![Jenkins 使用](/img/other/jenkins/use_02.png "Jenkins 使用")

#### 配置选项-源码管理

把准备工作中的`git`仓库地址配置到这里,指定`Branches to build`

#### 配置选项-构建环境

`Provide Node & npm bin/ folder to PATH`, 选择node版本

#### 配置选项-构建

```shell
#vue 的打包命令(配置一下源)
npm config set registry https://registry.npmmirror.com
npm install
npm run build:stage
```

![Jenkins Vue](/img/other/jenkins/use_07.png "Jenkins Vue")

#### 配置选项-构建后操作

选择 `Send build artifacts over SSH` 这个选项

![Jenkins ssh](/img/other/jenkins/use_08.png "Jenkins ssh")

### 成功,访问测试

![Jenkins ssh](/img/other/jenkins/use_09.png "Jenkins ssh")

### 其他

部署`java`版本的

任务中配置项不一样,下面列举几个要用项

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

## 添加node_modules到服务器

```wiki
01)本地压缩 node_modules 为 node_modules_2024年11月01日.tar 然后上传到服务器上的目录
/var/lib/jenkins/workspace/fei-project/项目测试环境前端-vue/vue_fei-marketing-admin

02)在服务器上解压 tar -xvf aaa_ccc.tar
```

### 具体项目配置

```wiki
node -v


#npm config set registry https://registry.npmjs.org   #设置为官方地址
npm config set registry https://registry.npmmirror.com
npm install
npm run build:stage


vue_mice
vue_fei-aaa01-admin
vue_fei-aaa02-admin
vue_fei-aaa03-admin

=================
/data/bar/fei-aaa01-admin
=================
git 地址fei-aaa01-admin
bar/fei-aaa01-admin

=================
git 地址fei-aaa02-admin
/data/fei-aaa02-admin
```

```shell
#重新构建一下
## 清空git换成,
git clean -df;
git checkout .;
npm cache clean --force
#npm install; // 这一行可以不用, 用本地下载好的依赖放到服务器上的指定位置
npm run build:test
```

