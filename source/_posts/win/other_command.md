---
title: -other -command 其他命令
date: 2015-03-04
categories: 
- Win
tags:
- Win
---
command 其他命令
command 其他命令
command 其他命令

<!-- more -->

###  `explorer ` 直接打开可视化目录

```shell
#执行后可以打开弹出当前路径的目录

#windows中
start explorer .  #注意这里有个点
或者
explorer .    #注意这里有个点
#linux 中
nautilus  .      #注意这里有个点
```

![explorer 可视化目录](/img/other/explorer.gif "explorer 可视化目录")

###   `tracert` 路由跟踪命令

```shell
#路由跟踪命令,用于确定IP数据访问目标所经过的路径
tracert  www.baidu.com
tracert  php.net
```

### route  显示和操作IP路由表

```shell
route
route -n
route add
route del
```

### 刷新dns

```shell
#修改hosts后刷新dns
ipconfig /flushdns
```

### nslookup 命令

`nslookup` 是一个经典的网络管理命令行工具，主要用于**查询域名系统（DNS，Domain Name System）**，以获取域名对应的IP地址或其他DNS记录

```shell
#基本语法
nslookup [域名 或 IP地址] [可选的DNS服务器]

#正向解析（查IP）：查询域名 example.com 的IPv4地址（A记录）
nslookup example.com

#反向解析（查域名）：通过IP地址反查对应的域名（PTR记录）。
nslookup 93.184.216.34

#指定DNS服务器：使用特定的DNS服务器（如Google的公共DNS 8.8.8.8）进行查询，可以绕过本地DNS设置，用于对比或排查问题
nslookup example.com 8.8.8.8
nslookup example.com 114.114.114.114
```

### xxx

没有了





























