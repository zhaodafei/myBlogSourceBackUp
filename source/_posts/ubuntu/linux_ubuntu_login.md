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

![uname](/img/ubuntu/linux_command/linux_login/uname.png "uname")

### free  查看内存

```
free -h   #以K，M，G为单位，提高信息的可读性
```

![free 参数h](/img/ubuntu/linux_command/linux_login/free_h.png "free 参数h")


### df  显示磁盘分区上的可使用的磁盘空间

```
df -h   #以K，M，G为单位，提高信息的可读性
```

![df 参数h](/img/ubuntu/linux_command/linux_login/df_h.png "df 参数h")

du :  与地方不同的是,du命令是对文件和目录磁盘使用的空间查看


### du  对文件和目录磁盘使用的空间查看

```
du -h   #以K，M，G为单位，提高信息的可读性
du -s   #显示目录中文件总和
du -sh  
```

![du 参数h](/img/ubuntu/linux_command/linux_login/du_h.png "du 参数h")

```
du -h --max-depth=0
du -h --max-depth=1
du -h --max-depth=2
```

![参数max-depth](/img/ubuntu/linux_command/linux_login/max_depth.png "参数max-depth")

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

### w  显示已经登陆系统的用户列表，并显示用户正在执行的指令

```
w

root@ubuntu:/# w      #当前登录用户 fei, fei_02
 19:46:31 up  1:19,  2 users,  load average: 0.18, 0.10, 0.03
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
fei      tty7     :0               18:27    1:19m  7.79s  0.58s /sbin/upstart -
fei_02   pts/18   192.168.47.1     19:46   12.00s  0.00s  0.00s -sh

```

### who 显示目前登录系统的用户信息

```
root@ubuntu:/home/fei# who
fei      tty7         2019-01-05 18:27 (:0)
fei_02   pts/17       2019-01-05 22:05 (192.168.47.1)
root@ubuntu:/home/fei# 
```

### write 终端给登录用户发消息

```
 write fei_02 pts/17
 ctrl+c 或者 ctrl + d 结束
 
 或者:
 echo “你被管理员踢出了” > /dev/pts/17
 fuser -k /dev/pts/17
```

![w who write](/img/ubuntu/linux_command/linux_login/w_who_write.png "w who write")

### fuser 踢用户下线

```
fuser -k /dev/pts/17  #使用 w 或者 who 可查看在线用户
echo “你被管理员踢出了” > /dev/pts/17 && fuser -k /dev/pts/17  #发送消息并踢下线
```

![fuser](/img/ubuntu/linux_command/linux_login/fuser.png "fuser")