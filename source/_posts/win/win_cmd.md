---
title: windows cmd 命令
categories: 
- command
- Win
tags:
- Win
- command
---

windows中常用命令

### 帮助命令 help

```shell
help  #查看所有命令
help xcopy #查看xcopy所有参数

```

### xcpoy 复制文件夹

```bash
参数:
/s 复制目录和子目录，除了空的。
/e 复制目录和子目录，包括空的。
/c 即使有错误，也继续复制
/y 禁止提示以确认改写一个

xcopy E:\web\win_web\aaa  E:\web\win_web\bbb\bbb_01 /e/c/y   #注意目录文件后面不要有\

```

### tree 显示目录树

```bash
语法:
 tree [drive:][path] [/F] [/A]
 参数:
       drive 盘符
       path 文件路径
       /F 递归列出所有文件
       /A 只查看文件夹, 忽略文件

demo:
tree tree_test
tree tree_test /F
tree tree_test /A

```

![tree](/img/win/cmd/tree.png)

### 查看端口,关闭端口

```bash
netstat -aon|findstr 443
tasklist|findstr xxxxxxx上面查出来PID


#查看443端口
Administrator@WIN-P6OAO8N8D5C MINGW64 ~/Desktop   
$ netstat -aon|findstr 443
  TCP    0.0.0.0:443            0.0.0.0:0              LISTENING       5056

#查看5056这个进程名字
Administrator@WIN-P6OAO8N8D5C MINGW64 ~/Desktop
$ tasklist|findstr 5056
vmware-hostd.exe              5056 Services                   0     52,416 K

```

![tree](/img/win/cmd/netstat_tasklist.png)

### telnet 查看服务器某个端口是否开启

```shell
telnet 127.0.0.1 80
```

![tree](/img/win/cmd/telent.png)

### 打开当前目录

```shell
#windows中
start explorer .  #注意这里有个点 
或者
explorer .    #注意这里有个点
```

