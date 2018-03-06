---
title: linux ubuntu redis安装
---
### 安装redis

```
sudo apt-get install redis-server  

启动redis
redis-server
```

![redis install](/img/linux_ubuntu_redis/redis_install.png "redis install")

### 检查redis 进程

```
ps -aux|grep redis  
```

![redis server](/img/linux_ubuntu_redis/reids_server.png "redis server")

### 终端输入：redis-cli 测试redis是否成功

![redis-cli](/img/linux_ubuntu_redis/redis_cli.png "redis-cli")

### redis 设置密码

```
reids默认是不需要密码的，设置密码

在397行：   
取消 注释      # requirepass foobared  
设置新密码：   requirepass redis_pwd_123456  
让 reids 远程登录  
注释bind，在69行  
# bind 127.0.0.1  
```

 ![redis pwd remote](/img/linux_ubuntu_redis/redis_pwd_remote.png "redis pwd remote")

### 修改后重启redis

```
sudo /etc/init.d/redis-server restart  
```

![redis restart](/img/linux_ubuntu_redis/redis_restart.png  "redis restart")

### 记得使用密码登录奥！！！

![redis login](/img/linux_ubuntu_redis/redis_login.png  "redis login")

### 卸载redis

```
sudo apt-get purge --auto-remove redis-server
```



























