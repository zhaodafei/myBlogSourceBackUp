---
title:  -redis 在windows中使用
date: 2014-02-05
categories: 
- Redis
tags:
- Redis
---
`redis` 在windows中使用
`redis` 在windows中使用
`redis` 在windows中使用

<!-- more -->

### 启动 `redis`

```shell
在redis目录下面执行(执行完后窗口不要关闭)

redis-server.exe redis.windows.conf

```

### 固定服务安装

```shell
#这种方式不会有cmd窗口,#此时window service服务列表中出现名为Redis的服务
redis-server.exe --service-install redis.windows.conf

#卸载服务,从windows service服务列表中移除
redis-server.exe --service-uninstall
```



### 连接`redis` 三种方法

```
01) 双击`redis-cli.exe`,然后 auth ***(密码)

02) redis-cli.exe -h 127.0.0.1 -p 6379 -a 123456 //密码连接(不建议这样使用)

03) redis-cli.exe -h 127.0.0.1 -p 6379  //无需添加密码参数 (回车)
    auth ***(输入密码)
```

### 使用`telnet`连接`redis`

```
telnet 127.0.0.1 6379  # 回车
auth ***(输入密码)
```

### `windows` 中`redis` 设置密码

```
requirepass 123456
```

### 测试

```shell
set key1 "hello world"
get key1
```

### 常见命令

```bash
#查看所有keys
keys *
keys fei*
keys bar*
```





