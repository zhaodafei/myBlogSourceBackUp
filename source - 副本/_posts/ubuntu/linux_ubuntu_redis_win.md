---
title:  -redis 在windows中使用
categories: 
- Redis
tags:
- Redis
---
`redis` 在windows中使用
`redis` 在windows中使用
`redis` 在windows中使用

### 启动 `redis`

```
在redis目录下面执行(执行完后窗口不要关闭)

redis-server.exe redis.windows.conf
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





