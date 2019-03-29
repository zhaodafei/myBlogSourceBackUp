---
title: ubuntu16 --svn02 编译安装后使用
---
编译安装后使用

### 创建svn 版本库

```
mkdir  /data/www/svn_repository
svnadmin create /data/www/svn_repository/repository01   #创建一个新的版本仓库
```

![创建版本仓库](/img/ubuntu/svn/svn_create.png "创建版本仓库")

### 设置访问权限

```
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

#-d 后台启动;  -r 指定根目录启动 !!!注意这里的路径
/data/server/svn/bin/svnserve -d -r /data/www/svn_repository/repository01
ps -aux | grep svnserve      #查看svnserve是否启动
killall svnserve       #停止服务
```

![访问权限](/img/ubuntu/svn/svnserve_start.png "启动svn")

### windows 中访问svn版本库

```
#vim conf/svnserve.conf   这个配置文件修改的时候有空格这时候这里会一直练不上
#报错信息: unable to connect to a repository url line 19:Option expected

svn://192.168.1.104/  #访问版本控制
```

![访问svn版本控制](/img/ubuntu/svn/success.png "访问svn版本控制")

### 实现svn 代码仓库与web线上代码同步01 

```
### svn 仓库和代码在同一台服务器
svn 服务器中代码目录   /data/www/svn_repos
window中代码目录     E:\selfweb\git_dev\zzz

首先在svn服务器上checkout检出一份,检出到/data/www/svn_repos 目录
/data/server/svn/bin/svn checkout  svn://192.168.42.128/  /data/www/svn_repos
```

![自动同步01](/img/ubuntu/svn/synch_01.png "自动同步01")

### 实现svn 代码仓库与web线上代码同步02

```
### svn 仓库和代码在同一台服务器

建立同步脚本
cd  /data/www/svn_repository/repository01/hooks
cp post-commit.tmpl post-commit
chmod 755 post-commit
vim post-commit
添加如下代码:(SVN_PATH svn安装目录; WEB_PATH项目目录;  svn账号密码)
export LANG=en_US.UTF-8
SVN_PATH=/data/server/svn/bin/svn         
WEB_PATH=/data/www/svn_repos            
$SVN_PATH update $WEB_PATH --username fei_svn --password 123456


重启svn 服务
killall svnserve       #停止服务
ps -aux | grep svnserve      #查看svnserve是否启动
/data/server/svn/bin/svnserve -d -r /data/www/svn_repository/repository01
```

![自动同步02](/img/ubuntu/svn/synch_02.png "自动同步01")

![自动同步ok](/img/ubuntu/svn/synch_03.png "自动同步ok")

### 使用过svn后,账户保存位置

```
linux中
/root/.subversion/auth    [ cd ~/.subversion/auth] 

windows中
C:\Documents and Settings\Administrator\Application Data\Subversion\auth

账户信息保存在 svn.simple 文件下
```





### 常用命令

```
/data/server/svn/bin/svn help            //--svn帮助
/data/server/svn/bin/svn --version       #查看版本信息
/data/server/svn/bin/svnserve --version       //--svn版本信息

/data/server/svn/bin/svn checkout  svn://192.168.42.128/test
```







































