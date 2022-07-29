---
title: Windows10 关闭自带 80 端口服务
date: 2013-07-04
categories: 
- Win
tags:
- Win
---
`Windows10` 关闭自带 `80` 端口服务,让`nginx`可以启动
`Windows10` 关闭自带 `80` 端口服务,让`nginx`可以启动
`Windows10` 关闭自带 `80` 端口服务,让`nginx`可以启动

<!-- more -->

### 直接关闭

找到系统里面的`World Wide Web`服务,直接关掉,下面值2中找到服务的方法

![World Wide Web 服务](/img/win/cmd/w3c_80.png "World Wide Web 服务")
![World Wide Web 服务](/img/win/cmd/w3c_80_2.png "World Wide Web 服务")

### 确定端口使用关闭

1. 查看那个进程占用80端口

   ```shell
   netstat -ano|findstr 80
   ```

   ![World Wide Web 服务](/img/win/cmd/w3c_80_3.png "World Wide Web 服务")

2) 再次确定80端口是谁在使用

   - 直接用浏览器访问 `127.0.0.1:80` ,结果访问不到
   - 改用` telnet` 测试 telnet `127.0.0.1 80` 打开了,确定是`Windows10`系统进程在使用, 可以确定是系统自带的 `http` 占用`80`端口
   - 关闭 `https` 服务 `net stop http`
     ![World Wide Web 服务](/img/win/cmd/w3c_80_4.png "World Wide Web 服务")
   - 再次用 `telnet` 测试 `telnet 127.0.0.1 80` ,这次打不开了,说明关闭成功
     ![World Wide Web 服务](/img/win/cmd/w3c_80_5.png "World Wide Web 服务")

以上就是解决`Windows10` 系统中 `80` 端口占用解决办法,如果和上述情况不一样,请自行查询问题













