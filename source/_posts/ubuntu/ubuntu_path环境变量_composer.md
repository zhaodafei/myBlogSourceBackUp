---
title: ubuntu -path 环境变量篇 -composer 测试
date: 2014-03-06
categories: 
- Ubuntu
tags:
- Ubuntu
- composer
---

源码编译完的包,很多时候在任何目录时访问不到的,这时候需要添加环境变量,或者通过链接的形式,链接到系统默认的PATH目录下的一个,这篇文章就是介绍一下这2中添加环境变量的方式; !!!修改系统环境变量后,要退出当前用户重新登录后才可以看到效果;  <font style="color:red"> 本章介绍修改文件配置环境变量, 软链接配置环境变量参考node篇 <font>

<!-- more -->

demo背景,采用composer测试,前提编译安装完php

### 安装composer 

``` 
curl -sS https://getcomposer.org/installer | /data/server/php7/bin/php
```

![composer 安装](/img/ubuntu/path/composer_install.png "composer 安装")

### 配置环境变量方法 01

```
#第一种方式,放到系统默认PATH环境变量目录下
cp /test/composer.phar /usr/local/bin/composer  或者
mv /test/composer.phar /usr/local/bin/composer

###扩展,使用 echo $PATH 可以看到当前的环境变量内容,系统默认的环境变量包括:
root@ubuntu:/test# echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games
root@ubuntu:/test# 

##查看环境变量 
01)  echo $PATH
02)  evn
```

![composer 环境变量](/img/ubuntu/path/path_01.png "composer 环境变量")

![composer 环境变量](/img/ubuntu/path/path_01_1.png "composer 环境变量")

### 配置环境变量方法 02 , 使用 PHP 来测试,系统 centos7

```
PHP编译安装后的目录:  /data/server/php/bin
vim  /etc/profile

#centos中配置PHP环境变量:
修改 /etc/profile 配置环境变量
PATH=$PATH:/data/server/php/bin
export PATH
然后执行source /etc/profile 或者 ./profile 使其生效; 执行完后可以通过 echo $PATH  命令查看环境变量
```

![php 环境变量2](/img/ubuntu/path/path_02.png "php 环境变量2")

### 添加多个环境变量

```
以node 和 PHP 为例
修改 /etc/profile 配置环境变量
PATH=$PATH:/data/server/node-v10.15.3-linux-x64/bin:/data/server/php7/bin
export PATH
然后执行source /etc/profile 或者 ./profile 使其生效; 执行完后可以通过 echo $PATH  命令查看环境变量

执行 
node -v
npm -v
php -v
node 和 PHP 都生效
```

![多个环境变量](/img/ubuntu/path/path_more.png "多个环境变量")

### 其他--环境变量顺序

```
正常情况下修改
/etc/profile
在图形界面中需要再修改
~/.bashrc      #针对当前用户
```

### composer 命令

```
composer config -gl    #查看composer全局设置
composer config --list -g  #查看composer全局设置
composer require monolog/monolog   #安装monolog
composer require monolog/monolog:"1.24.0"   #安装monolog指定版本
composer require "monolog/monolog:1.24.0"   #安装monolog指定版本
composer install 
composer update
composer dump-autoload   #添加自定义后文件执行

设置镜像地址:
1) 全局配置
composer config -g repo.packagist composer https://repo.packagist.org
2) 当前项目使用  [ 去掉参数-g ]
 composer config repo.packagist composer https://repo.packagist.org

repo.packagist.org  ip地址: 139.99.121.122   新加坡
packagist.org       ip地址: 139.99.121.122   新加坡

其他镜像地址
composer-proxy.jp  
packagist.jp
https://packagist.laravel-china.org  [laravel 中国镜像]
https://mirrors.aliyun.com/composer  [阿里云 composer 镜像]

https://opsx.alibaba.com/mirror   [这里可以看到阿里云的所有镜像]
```





[composer官方安装文档](https://docs.phpcomposer.com/00-intro.html#Installation-*nix)

