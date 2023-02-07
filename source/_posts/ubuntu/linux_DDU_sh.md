---
title: -sh  shell 脚本
date: 2014-01-04
categories: 
- Linux
tags:
- Linux
- shell
---
sh  shell 脚本
sh  shell 脚本
sh  shell 脚本

<!-- more -->

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

```shell
#!/bin/bash
BASEPATH=/data/$(date -d yesterday +%Y%m)
bak=$BASEPATH/$(date -d yesterday +%Y%m%d%H%M).test.txt
mkdir -p $BASEPATH
echo $BASEPATH
```

![demo shell](/img/ubuntu/linux_command/linux_sh/sh_02.png "demo shell")

### demo3  运行 test.sh 文件使用 source 命令

```shell
source test.sh 
# 四个的区别区别, 执行权限; 脚本报错后是否继续执行
1) ./test.sh
2) sh test.sh
3) . test.sh
4) source test.sh

```

### 利用当前时间作为目录

```shell
#!/bin/bash
cp -arv /home/fei/www/aaa/  "/home/fei/www/ffffffffffff_"$(date  +%Y%m%d%H%M)
```



### 其他

```shell
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

### 判断语句

1. 每个 `case` 分支用右圆括号开始，
2. 用两个分号 `;;` 表示 `break`，即执行结束，跳出整个 case ... esac 语句，
3. esac（就是 case 反过来）作为结束标记

```bash
#!/bin/bash
echo ":::::::::服务管理系统::::::::::::::::::::::::::::"
echo "++ 作者:赵大飞, QQ:1097625354 ++"
echo ""
echo "请选择你要的操作"
echo "     1、选择A"
echo "     2、选择B"
echo "     3、跳过"
echo ""
read num
case "$num" in
	1)
	  echo "1111"
		#ls
	;;
	2)
	  #这是注释
	  echo "222222222"
	  #ls  这里可以写linux命令
	;;
	3)
		echo "跳过3"
	;;
	8|9)
		echo "输入的是8或者9"
	;;
	999)
		echo "跳过999"
	;;
	*)
	    echo "输入错误,退出"
	;;
esac
echo ""
echo ""
echo " ***已经退出***"

```

参考学习:  [Shell 流程控制](https://www.runoob.com/linux/linux-shell-process-control.html) 

























