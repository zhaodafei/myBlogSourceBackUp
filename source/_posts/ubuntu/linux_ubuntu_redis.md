---
title: linux ubuntu15 redis安装
---
redis2种安装方式

### 安装redis

```
sudo apt-get install redis-server  

启动redis
redis-server
```

![redis install](/img/ubuntu/redis/redis_install.png "redis install")

### 检查redis 进程

```
ps -aux|grep redis  
```

![redis server](/img/ubuntu/redis/reids_server.png "redis server")

### 终端输入：redis-cli 测试redis是否成功

![redis-cli](/img/ubuntu/redis/redis_cli.png "redis-cli")

### redis 设置密码

```
reids默认是不需要密码的，设置密码
sudo vi /etc/redis/redis.conf  

在397行：   
取消 注释      # requirepass foobared  
设置新密码：   requirepass redis_pwd_123456  
让 reids 远程登录  
注释bind，在69行  
# bind 127.0.0.1  
```

 ![redis pwd remote](/img/ubuntu/redis/redis_pwd_remote.png "redis pwd remote")

### 修改后重启redis

```
sudo /etc/init.d/redis-server restart  
```

![redis restart](/img/ubuntu/redis/redis_restart.png  "redis restart")

### 记得使用密码登录奥！！！

![redis login](/img/ubuntu/redis/redis_login.png  "redis login")

### 卸载redis

```
sudo apt-get purge --auto-remove redis-server
```



## 2、编译安装

### 下载

```
wget http://download.redis.io/releases/redis-4.0.8.tar.gz
tar -xzvf redis-4.0.8.tar.gz  -C /data/server/
cd redis-4.0.8/
make
```

![redis02 install](/img/ubuntu/redis/redis02_install.png  "redis02 install")

### 启动redis
make完后 redis-4.0.8目录下会出现编译后的redis服务程序redis-server,还有用于测试的客户端程序redis-cli,两个程序位于安装目录 src 目录下，下面启动redis服务.

```
cd src/
./redis-server 
```

![redis02 start](/img/ubuntu/redis/redis02_start.png  "redis02 start")

### redis设置密码

```
reids默认是不需要密码的，设置密码
vi redis.conf  

在500行：   
取消 注释      # requirepass foobared  
设置新密码：   requirepass redis_pwd_123456
让 reids 远程登录  
注释bind，在69行  
# bind 127.0.0.1  
```

 ![redis02 pwd remote](/img/ubuntu/redis/redis_pwd_remote.png "redis02 pwd remote")

### 修改后启动redis

```
src/redis-server ./redis.conf   【指定配置文件启动】
```

![redis02 pwd login](/img/ubuntu/redis/redis02_login.png "redis02 pwd login")

### 设置 reids 后台启动

```
vi redis.conf  

在136行
把 daemonize no 改成 daemonize yes

修改完重启redis：
src/redis-server ./redis.conf   【指定配置文件启动】
/data/server/redis-4.0.8/src/redis-server ./redis.conf   【指定配置文件启动】
后台启动后关闭命令：
./redis-cli -h 127.0.0.1 -a redis_pwd_123456 -p 6379 shutdown

指定密码登录：
./redis-cli -a redis_pwd_123456
测试数据：
set key1 "hello world"
get key1
```

![redis02 backend start](/img/ubuntu/redis/redis02_backend_start.png "redis02 backend start")







 [redis官网下载地址](http://download.redis.io/releases/)













