---
title: WIN -node 修改npm全局模式的默认安装路径
date: 2014-02-05
categories: 
- WIN
tags:
- WIN
- Node
- npm
---

WIN -node 修改`npm`全局模式的默认安装路径
WIN -node 修改`npm`全局模式的默认安装路径
WIN -node 修改`npm`全局模式的默认安装路径

<!-- more -->

### 查看当前配置

```shell
npm root -g
npm config ls
```

![mpm config1](/img/ubuntu/node/npm_config/npm_01.png "mpm config1")

### 新建文件夹
在欲更改的目录下新建两个文件夹，分别是：`node_global_modules` 和 `node_cache`，效果如图

![mpm config2](/img/ubuntu/node/npm_config/npm_02.png "mpm config2")

### 执行命令改配置

```shell
npm config set prefix "D:\soft_position\nodejs\fei_node_repo\node_global_modules"
npm config set cache  "D:\soft_position\nodejs\fei_node_repo\node_cache"

#执行成功后查看
npm config ls
```

![mpm config3](/img/ubuntu/node/npm_config/npm_03.png "mpm config3")

### 配置环境变量

在环境变量中，新建一个系统变量，变量名：`NODE_HOME`，变量值：`D:\soft_position\nodejs\fei_node_repo`，效果如图：
![mpm config4](/img/ubuntu/node/npm_config/npm_04.png "mpm config4")
在`Path`变量名中，新建变量值：

```shell
#Windwos10中
%NODE_HOME%
%NOED_HOME%\node_modules
%NODE_HOME%\node_modules\npm\node_global_modules\

#Windwos7中
;%NODE_HOME%;%NOED_HOME%\node_modules;%NODE_HOME%\node_modules\npm\node_global_modules\;
```

### 测试结果

安装一个`jquery`测试一下

```shell
 npm install -g jquery
```

![mpm config5](/img/ubuntu/node/npm_config/npm_05.png "mpm config5")





