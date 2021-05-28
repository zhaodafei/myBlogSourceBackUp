---
title: ubuntu系统
categories: 
- CentOS
- Ubuntu
tags:
- CentOS
- Ubuntu
---
### 虚拟机安装完ubuntu后root没有密码
```
设置root密码
sudo passwd
```
![root passwd](/img/ubuntu/linux_command/linux_00/root_passwd.png)
### 虚拟机安装完centos后重新设置root密码
```
设置root密码
passwd
```
--------------------------------
### 用户切换：    
```
 sudo su (切换到root用户)；    
 su user（user是你自己安装时候的用户名；切换到普通用户）
 
 其他命令：
	修改文件权限：
     	sudo chmod -R 777 文件名
	安装文件命令：
     	sudo apt-get install 文件名
    清空某个文件
    	echo "" >log.log
    动态查看内容
    	tail -f api_v1.log
    修改文件权限
     	sudo chmod -R 777 文件名
```

### `ubuntu`安装好系统后，vi不能正常使用方向键和退格键
ubuntu中vi在编辑状态下方向键不能用，还有回格键不能删除等我们平时习惯的一些键都不能使用。解决办法：可以安装vim full版本，在full版本下键盘正常，安装好后同样使用vi命令。

```

-----------（1）-----一般安装步骤------------------
   sudo apt-get remove vim-common
   sudo apt-get install vim
-----------（2）------直接安装vim 报错 packet 不存在、找不到  请换源，参考下面-----------
进入/etc/apt/
	cd /etc/apt
对 sources.list文件进行备份
	sudo cp sources.list sources.list.bak
删除掉 sources.list 中的内容【命令 echo "">sources.list  】，选择阿里云源	

deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse


------------（3）换源结束-------------------------------
apt-get update   先更新一下

现在可以安装vim
 	sudo apt-get install vim
 	
```

### `centos7`换源

```shell
进入 /etc/yum.repos.d/ 
	cd /etc/yum.repos.d/
对 CentOS-Base.repo 文件备份 CentOS-Base.repo.backups
   cp -avr CentOS-Base.repo  CentOS-Base.repo.backups

cenos7的源;
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
或者
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

 yum clean all   #清理缓存
 yum makecache   #生成新缓存
 yum update -y  #更新源设置
```

### 关闭防火墙

```shell
systemctl stop firewalld.service
```



[OPSX阿里巴巴开源镜像站](https://opsx.alibaba.com/guide?lang=zh-CN&document=69a1db68-801e-11e8-b6bd-00163e04cdbb)

















