---
title: -date 服务器时间
date: 2024-05-20
categories: 
- Linux
tags:
- Linux
- chmod
---
date 服务器时间
date 服务器时间
date 服务器时间

<!-- more -->

### 修改服务器时间

```shell
修改服务器时钟，找到其他机器使用的时钟服务器
1、 修改vi /etc/chrony.conf 
server 10.10.20.09 iburst
server 10.10.20.200 iburst

2、重启服务，设置为自启动
sudo systemctl restart chronyd
systemctl enable chronyd

3、设置时区
timedatectl list-timezones
timedatectl set-timezone Asia/Shanghai

4、 同步查看
chronyc -a makestep

5、查看时间 
chronyc sources -v 
chronyc tracking
timedatectl status
```

### 使用dete查看

```wiki
[home]# date
2024年 05月 20日 星期一 06:24:38 CST

```






### 底部

没有了























