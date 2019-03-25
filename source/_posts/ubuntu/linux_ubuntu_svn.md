---
title: ubuntu16 --svn
---

ubuntu16 系统通过 apt-get 安装svn ; svn的源码编译安装比较复杂这里不做介绍

### 检查是否安装 svn,并安装

```
svn 
svn help            //--svn帮助
svn --version       //--svn版本
svnserve --version  //--svn server版本

卸载命令(–purge 选项表示彻底删除改软件和相关文件)
sudo apt-get remove --purge subversion

开始安装
apt install subversion

```

![svn 信息](/img/ubuntu/svn/svn_info.png "svn 信息")

###  创建 svn 版本库

```
mkdir  /data/server/svn
mkdir  /data/server/svn/repository
chmod -R 777 /data/server/svn/repository
svnadmin create /data/server/svn/repository   #创建一个新的版本仓库
chmod -R 777 /data/server/svn/repository/db
```

![创建版本仓库](/img/ubuntu/svn/create_svn.png "创建版本仓库")

### 设置访问权限

```tex
vim conf/svnserve.conf   #设置读写,启用密码文件路径  

这三个的注释去掉!!!!  注意这三行前面不要有空格,否则后面会一直找不到仓库,报错
anon-access = read
auth-access = write
password-db = passwd


```

![访问权限](/img/ubuntu/svn/svnserve.png "访问权限")

### 添加用户

```
 vim conf/passwd 
 账户密码内容为: fei_svn=123456
```

![添加用户](/img/ubuntu/svn/passwd.png "添加用户")

### 添加访问用户

```
vim conf/authz

内容如下:
admin_groups=fei_svn   #用户fei_svn属于admin_groups权限组
@admin_groups=rw       #admin_groups权限组有读和写
*=r                    #其他用户具只能读

```

![添加访问用户](/img/ubuntu/svn/authz.png "添加访问用户")

### 启动svn

```
svnserve -d -r /data/server/svn/       #-d 后台启动;  -r 指定根目录启动 !!!注意这里的路径
ps -aux | grep svnserve      #查看svnserve是否启动
killall svnserve       #停止服务
```

### windows 中访问svn版本库

```
#vim conf/svnserve.conf   这个配置文件修改的时候有空格这时候这里会一直练不上
#报错信息: unable to connect to a repository url line 19:Option expected

svn://192.168.1.104/repository   #访问版本控制
```

![访问svn版本控制](/img/ubuntu/svn/success.png "访问svn版本控制")