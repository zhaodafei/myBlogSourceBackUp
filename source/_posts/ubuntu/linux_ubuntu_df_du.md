---
title:  --login 登录系统后常用命令
---

介绍：

登录新系统后常用命令

### uname 打印系统相关信息

```
uname 
uname -a   #显示全部信息
uname -m   #系统类型
uname -n
uname -r
uname -s
```

![uname](/img/linux_command/linux_df_du/uname.png "uname")

### free  查看内存

```
free -h   #以K，M，G为单位，提高信息的可读性
```

![free 参数h](/img/linux_command/linux_df_du/free_h.png "free 参数h")


### df  显示磁盘分区上的可使用的磁盘空间

```
df -h   #以K，M，G为单位，提高信息的可读性
```

![df 参数h](/img/linux_command/linux_df_du/df_h.png "df 参数h")

du :  与地方不同的是,du命令是对文件和目录磁盘使用的空间查看


### du  对文件和目录磁盘使用的空间查看

```
du -h   #以K，M，G为单位，提高信息的可读性
du -s   #显示目录中文件总和
```

![df 参数h](/img/linux_command/linux_df_du/du_h.png "du 参数h")

### uptime 查看系统运行时间、用户数、负载  

```
uptime

root@ubuntu:/home/fei/www# uptime
 18:24:03 up  1:52,  1 user,  load average: 0.39, 0.69, 0.37
root@ubuntu:/home/fei/www# 
```

### netstat  系统中网络状态信息(端口)   [lsof -i:22 ]   

```
netstat -lntp # 查看所有监听端口  
netstat -antp # 查看所有已经建立的连接, 查看端口是否被应用

#查看占用端口22的进程
netstat -tnlp | grep 22
lsof -i:22   
```

### ps 当前系统的进程状态

```
#选项很多,列举2个demo
ps -aux | grep php
ps -aux | nginx
```

### w 查看活动用户

```
w
```

###  crontab 计划任务

```
crontab -l # 查看当前用户的计划任务服务  
```

### top

```
top 
然后按 shift + p ,按照进程处理器占用率排序
然后按 Shift + m, 按照进程内存占用率排序
```



