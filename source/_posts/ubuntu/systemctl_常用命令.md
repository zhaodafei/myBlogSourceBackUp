---
title: -systemctl 常用命令
date: 2014-03-06
categories: 
- Linux
tags:
- Linux
- Imagick
---
systemctl 常用命令
systemctl 常用命令

<!-- more -->

常用命令

```
常用命令 

重新加载service文件：      systemctl daemon-reload
启动一个服务：                 systemctl start nginx-1.13.0.service
关闭一个服务：                 systemctl stop nginx-1.13.0.service
重启一个服务：                 systemctl restart nginx-1.13.0.service
显示一个服务的状态：      systemctl status nginx-1.13.0.service
在开机时启用一个服务：   systemctl enable nginx-1.13.0.service
在开机时禁用一个服务：   systemctl disable nginx-1.13.0.service
查看服务是否开机启动：   systemctl is-enabled nginx-1.13.0.service
查看已启动的服务列表：   systemctl list-unit-files|grep enabled
查看启动失败的服务列表：systemctl --failed

apache
启动  systemctl start httpd
停止  systemctl stop httpd
重启  systemctl restart httpd


mysql
启动 systemctl start mysqld
停止 systemctl stop mysqld
重启 systemctl restart mysqld


php-fpm
启动 systemctl start php-fpm
停止 systemctl stop php-fpm
重启 systemctl restart php-fpm


nginx
启动 systemctl start nginx
停止 systemctl stop nginx
重启 systemctl restart nginx


```

