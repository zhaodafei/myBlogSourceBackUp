---
title:  --login 登录系统后常用命令
categories: 
- Linux
tags:
- Linux
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

### top

```
top 
然后按 shift + p ,按照进程处理器占用率排序
然后按 Shift + m, 按照进程内存占用率排序
然后按 Shift + e, 切换单位K,M,G直接切换
```

### ps 当前系统的进程状态

```
#选项很多,列举2个demo
ps -aux | grep php
ps -aux | nginx
ps -aux |  more
ps -aux | head -3

[root@localhost ~]# ps aux |head -1; ps aux | grep httpd
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND

[root@localhost ~]# ps -aux | grep httpd

```

### free  查看内存

```
free -h   #以K，M，G为单位，提高信息的可读性
```

![free 参数h](/img/ubuntu/linux_command/linux_login/free_h.png "free 参数h")

### pmap 报告进程的内存映射关系

```
pidof  #查找指定名称的进程id号demo:  pidof nginx
pmap  #查看进程的内存印象信息demo: pmap -d 6953
pmap 最后一行的值
mapped 表示该进程映射的虚拟地址空间大小，也就是该进程预先分配的虚拟内存大小，即ps出的vsz
writeable/private  表示进程所占用的私有地址空间大小，也就是该进程实际使用的内存大小      
shared 表示进程和其他进程共享的内存大小
```

### vmstat 显示虚拟内存状态

```
vmstat

字段说明:
Memory（内存）

swpd: 使用虚拟内存大小，如果swpd的值不为0，但是SI，SO的值长期为0，这种情况不会影响系统性能。
free: 空闲物理内存大小。
buff: 用作缓冲的内存大小。
cache: 用作缓存的内存大小，如果cache的值大的时候，说明cache处的文件数多，如果频繁访问到的文件都能被cache处，那么磁盘的读IO bi会非常小。


/proc/sys/vm/drop_caches 
这个文件的值是0--3之间的数字,代表不同改的含义
0：不释放（系统默认值）
1：释放页缓存
2：释放dentries和inodes
3：释放所有缓存

-------- 释放缓存 --------
sync                           #!!!将所有未写的系统缓冲区写到磁盘中!!!
echo 1 > /proc/sys/vm/drop_caches   #仅清除pagecache(页面)缓存
echo 2 > /proc/sys/vm/drop_caches   #清除dentries(目录缓存)和inode
echo 3 > /proc/sys/vm/drop_caches   #清除pagecache(页面缓存)，dentries(目录缓存)和inode

或者(这和上面是一样的效果)
sync 
sysctl -w vm.drop_caches=1
sysctl -w vm.drop_caches=2
sysctl -w vm.drop_caches=3

系统重启后 /proc/sys/vm/drop_caches 里面的值会自己改为0
```

![vmstat 虚拟内存状态](/img/ubuntu/linux_command/linux_login/vmstat.png "vmstat")


### df  显示磁盘分区上的可使用的磁盘空间

```
df -h   #以K，M，G为单位，提高信息的可读性
```

![df 参数h](/img/ubuntu/linux_command/linux_login/df_h.png "df 参数h")

du :  与df不同的是,du命令是对文件和目录磁盘使用的空间查看


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
netstat -lntp | grep 22
lsof -i:22   
```

###  crontab 计划任务

```
crontab -l # 查看当前用户的计划任务服务  
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

### 其他

```
ubuntu 命令窗口背景颜色  #300a24
```

[Linux命令大全](https://man.linuxde.net/)

[Linux学习频道](http://linux.it.net.cn/)

[Linux公社](https://www.linuxidc.com/)