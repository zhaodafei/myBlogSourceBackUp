---
title: -crontab 定时任务
categories: 
- Linux
- CentOS
tags:
- Linux
- CentOS
- crontab
---

### crontab 

crontab 文件说明,每个用户都会生成一个自己的 crontab 文件,位于 /var/spool/cron 目录下
查看 crontab 详情 cat  /etc/crontab

```shell
[root@localhost cron]# cat /etc/crontab
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root

# For details see man 4 crontabs

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed

[root@localhost cron]# ls /var/spool/cron
root           #root 用户
fei            #飞用户
```

###  crontab 命令

```tex
sudo apt-get install cron

/sbin/service crond start    //启动服务
/sbin/service crond stop     //关闭服务
/sbin/service crond restart  //重启服务
/sbin/service crond reload   //重新载入配置
/sbin/service crond status   //查看服务状态 

systemctl start crond.service
systemctl stop crond.service
systemctl restart crond.service
systemctl reload crond.service
systemctl status crond.service


//-----------------------------------------------
crontab -u //设定某个用户的cron服务，一般root用户在执行这个命令的时候需要此参数
crontab -l //列出某个用户cron服务的详细内容
crontab -r //删除没个用户的cron服务
crontab -e //编辑某个用户的cron服务
```

### Demo

```
#每隔一分钟执行一次
*/1 * * * *  php /crontab_test/index.php
#每小时的第一分,执行
1 * * * *  php /crontab_test/index.php
----------------------------------------------
#每隔2小时执行一次; 从整点开始计数
0 */2 * * *  sh /fei/test.sh
#每天的第2小时执行一次
0 2 * * *  sh /fei/test.sh
------------------------ !!!注意这种错误写法 ------
#每隔一分钟执行一次
* */1 * * *  sh /fei/test.sh
```

### demo test.sh

```
d1=`date +%Y-%m-%d-%H:%M:%S`
echo " $d1.    [ 0 */2 * * *  sh /fei/test.sh ] " >> /fei/ccc.txt

d1=`date +%Y-%m-%d-%H:%M:%S`
echo " $d1.    [ 0 2 * * *  sh /fei/test.sh ] " >> /fei/ccc.txt

d1=`date +%Y-%m-%d-%H:%M:%S`
echo " $d1.    [ * */1 * * *  sh /fei/test.sh ] " >> /fei/ccc.txt

```

![定时任务](/img/centos/crontab/crontab_01.png "定时任务")

![定时任务](/img/centos/crontab/crontab_02.png "定时任务")

![定时任务](/img/centos/crontab/crontab_03.png "定时任务")

![定时任务](/img/centos/crontab/crontab_04.png "定时任务")

![定时任务](/img/centos/crontab/crontab_05.png "定时任务")

