---
title: -sh  shell 脚本
---
### 简单shell，打印昨天时间，并输出到屏幕上，注意 反引号

echo  把执行命令的返回结果输出到屏幕上
运行脚本  sh test.sh ;  test.sh 内容如下

```
#!/bin/bash
echo 'date -d yesterday +%Y%m%d'  #没有使用反引号

echo `date -d yesterday +%Y%m%d`  #使用反引号，输出昨天时间
echo `ls /www`                    #使用反引号，显示 www 目录下文件
touch /www/test.txt               #在 www 目录下创建 test.txt 文件
```

![demo shell](/img/ubuntu/linux_command/linux_sh/sh_01.png "demo shell")

demo 2,创建文件，运行命令  sh testlog.sh

```
#!/bin/bash
BASEPATH=/data/$(date -d yesterday +%Y%m)
bak=$BASEPATH/$(date -d yesterday +%Y%m%d%H%M).test.txt
mkdir -p $BASEPATH
echo $BASEPATH
```

![demo shell](/img/ubuntu/linux_command/linux_sh/sh_02.png "demo shell")

### demo3  运行 test.sh 文件使用 source 命令

```
source test.sh 
# 四个的区别区别, 执行权限; 脚本报错后是否继续执行
1) ./test.sh
2) sh test.sh
3) . test.sh
4) source test.sh

```

### 其他

```
cat /etc/shells 
使用 #sh test.sh  #dash test.sh #bash test.sh #rbash test.sh 都是可以执行的 

root@ubuntu:/home/fei/web# cat /etc/shells 
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
root@ubuntu:/home/fei/web# 
```



























