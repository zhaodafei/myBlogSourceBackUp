---
title: -kill -pkill -killall 终结进程
---

### kill 发送指定信号到相应进程

```
ps -aux | grep vim
kill 3453

#demo
root@ubuntu:/# ps -aux | grep vim
fei        3452  0.0  0.9  62048  9344 pts/19   S+   20:11   0:00 vim hello.php
fei        3453  0.0  0.8  60916  8252 pts/18   S+   20:11   0:00 vim aaa.txt
root       3468  0.0  0.1  21292  1028 pts/1    S+   20:14   0:00 grep --color=auto vim
root@ubuntu:/# kill 3453
root@ubuntu:/# ps -aux | grep vim
fei        3452  0.0  0.9  62048  9344 pts/19   S+   20:11   0:00 vim hello.php
root       3472  0.0  0.0  21292   880 pts/1    S+   20:15   0:00 grep --color=auto vim
root@ubuntu:/# 
```

![kiil](/img/ubuntu/linux_command/linux_kill/kill.png "kill")

### pkill 按照进程名称杀死进程

```
ps -aux | grep vim
pkill vim


#demo
root@ubuntu:/# ps -aux | grep vim
fei        3497  1.6  0.9  62048  9328 pts/19   S+   20:20   0:00 vim hello.php
fei        3499  1.0  0.8  60916  8368 pts/18   S+   20:20   0:00 vim aaa.txt
root       3501  0.0  0.1  21292  1012 pts/1    S+   20:20   0:00 grep --color=auto vim
root@ubuntu:/# pkill vim
root@ubuntu:/# ps -aux | grep vim
root       3504  0.0  0.0  21292   912 pts/1    S+   20:20   0:00 grep --color=auto vim
root@ubuntu:/# 

### 特殊demo, 踢某个用户下线(who w 查看登录用户)
pkill -kill -t pts/17
pkill -9 -t pts/17
fuser -k /dev/pts/17
echo “你被管理员踢出了” > /dev/pts/17 && fuser -k /dev/pts/17
```

![pkiil](/img/ubuntu/linux_command/linux_kill/pkill.png "pkill")