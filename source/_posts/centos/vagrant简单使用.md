---
title: linux-DDU  -vagrant 简单使用
date: 2015-02-04
categories: 
- Linux
- Vagrant
tags:
- Linux
- Vagrant
---
vagrant 简单使用
vagrant 简单使用
vagrant 简单使用

<!-- more -->

### 常用命令

vagrant 常用命令介绍

```
vagrant init  [初始化]
vagrant up    [启动虚拟机]
vagrant halt  [关闭虚拟机]
vagrant reload [重新启动虚拟机,主要用于重新载入配置文件]
vagrant suspend [暂停虚拟机,这是虚拟机的内存,配置信息会暂存至硬盘]
vagrant resume  [恢复虚拟机]
vagrant ssh   [ssh登录到虚拟机]
vagrant status  [查看虚拟机运行状态]
vagrant destroy [销毁当前虚拟机]
vagrant box add [添加一个box]
vagrant box list [显示当前已经添加的box列表]
vagrant box remove [删除相应的box]
vagrant package  [打包命令,可以吧当前运行的虚拟机环境进行打包]
vagrant plugin  [用于安装卸载插件]
vagrant ssh-config [输出用于ssh连接的一些信息]

vagrant 创建的虚拟机账号
用户名：vagrant 
密   码：vagrant 
root帐号密码：vagrant
用vagrant创建的ubuntu系统，root账号密码默认是没有设置的，需要手动设置 
sudo passwd
```

一般使用

```
1.	vagrant --help
2.	vagrant -version
3.显示当前已经添加的box列表
	vagrant box list 
4.  添加 box 
	vagrant box add new-box-name yours-box-name.box(你的box文件)
5.  删除 box	
	vagrant box remove yours-box-name
6. 	指定 box 初始化
	vagrant init yours-box-name
7.启动
	vagrant up
	vagrant up --provider virtualbox
8.关闭
	vagrant halt
9.重新启动,加载配置文件
	vagrant reload
10. 挂起
	vagrant suspend
11. ssh登录
	vagrant ssh
12. 打包box
打包前删除一个文件
sudo rm -rf /etc/udev/rules.d/70-persistent-net.rules
vagrant package
vagrant package --base ubuntu18_default_1543569229538_92064 --output php72_mysql8_nginx.box
	
demo:
    vagrant --help
    vagrant -version
    vagrant box list
    vagrant box add centos7 centos7-vagrant-123456.box
    vagrant box list
    vagrant init centos7
    vagrant up --provider virtualbox
    vagrant ssh
    vagrant reload
    vagrant ssh
    vagrant halt

```



[ubuntu box -releases版本](http://cloud-images.ubuntu.com/releases/releases/ "记得要下载release版本")

[centos box](http://cloud.centos.org/centos/7/vagrant/x86_64/images/)























