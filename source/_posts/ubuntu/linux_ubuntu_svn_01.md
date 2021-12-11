---
title: ubuntu16 --svn01 源码编译安装
date: 2014-02-05
categories: 
- SVN
tags:
- SVN
---

ubuntu16 系统通过源码编译安装 subversion-1.11.1   && apt-get 安装

<!-- more -->

### 安装apr

```
wget https://mirrors.cnnic.cn/apache//apr/apr-1.6.5.tar.gz
tar -zxvf apr-1.6.5.tar.gz
cd apr-1.6.5
./configure --prefix=/data/server/apache_component/apr-1.6.5
make
make install
```

### 安装apr-util

```
wget http://mirror.bit.edu.cn/apache//apr/apr-util-1.6.1.tar.gz
tar -zxvf apr-util-1.6.1.tar.gz
cd apr-util-1.6.1
./configure \
--prefix=/data/server/apache_component/apr-util-1.6.1  \
--with-apr=/data/server/apache_component/apr-1.6.5
make
make install
```

### 安装 scons  

```
wget https://svwh.dl.sourceforge.net/project/scons/scons/3.0.1/scons-3.0.1.tar.gz
[安装这个之前确保已经安装python环境  python --version ]
tar -zxvf scons-3.0.1.tar.gz
cd scons-3.0.1
python setup.py install --prefix=/data/server/apache_component/scons

[  ubuntu中可以使用 apt install scons   ]
```

### 安装self

```
### 注意 scons 使用的是 apt 安装还是 python 方式安装,这里会影响self安装

wget https://www.apache.org/dist/serf/serf-1.3.9.tar.bz2
tar -jxvf serf-1.3.9.tar.bz2
cd serf-1.3.9

/data/server/apache_component/scons/bin/scons \
PREFIX=/data/server/apache_component/self \
APR=/data/server/apache_component/apr-1.6.5/bin/apr-1-config \
APU=/data/server/apache_component/apr-util-1.6.1

/data/server/apache_component/scons/bin/scons install
cp /data/server/apache_component/self/lib/libserf-1.so* /usr/local/lib/

//--------------------如果 scons 使用了 apt install scons 安装 ,这里self安装也要变
scons \
PREFIX=/data/server/other_component/self \
APR=/data/server/other_component/apr-1.6.5/bin/apr-1-config \
APU=/data/server/other_component/apr-util-1.6.1

scons install
cp /data/server/other_component/self/lib/libserf-1.so* /usr/local/lib/
```

### SQLite 不需要安装,下载下来即可使用

```
wget https://www.sqlite.org/2015/sqlite-amalgamation-3081101.zip
wget https://www.sqlite.org/2015/sqlite-amalgamation-3081101.zip
unzip sqlite-amalgamation-3081101.zip

解压sqlite-amalgamation包，将解压文件拷贝到subversion解压后的源码根目录中去
cp -avr sqlite-amalgamation-3081101 subversion-1.11.1

拷贝过去后重命名为sqlite-amalgamation,否则一直会报错 [最后使用的名字为sqlite-amalgamation]
mv sqlite-amalgamation-3081101/ sqlite-amalgamation

###扩展,官方解释
https://www.sqlite.org/amalgamation.html
https://github.com/mirek/sqlite-amalgamation
 Just copy the amalgamation into your source directory and compile it along with the other C code files in your project.
```

![sqlite 不需要安装](/img/ubuntu/svn/svn_configure/sqlite.png "sqlite")

### 安装 subversion

```
wget http://mirrors.shu.edu.cn/apache/subversion/subversion-1.11.1.tar.gz
wget http://mirrors.shu.edu.cn/apache/subversion/subversion-1.11.1.tar.gz
tar -zxvf subversion-1.11.1.tar.gz
cd subversion-1.11.1

./configure \
--prefix=/data/server/svn \
--with-apr=/data/server/apache_component/apr-1.6.5 \
--with-apr-util=/data/server/apache_component/apr-util-1.6.1 \
--with-serf=/data/server/apache_component/self \
--with-lz4=internal  \
--with-utf8proc=internal  
[
	按照报错提示添加 相应的信息
	--with-lz4=internal
	--with-utf8proc=internal 
]

[!!! 警告,这里不能使用--with-sqlite ,一定要将sqlite-amalgamation拷贝到subversion-1.11.1根目录,并且使用的名字为 sqlite-amalgamation  !!!]
--with-sqlite=/home/fei/server/sqlite-amalgamation-3081101

make
make install
```

![编译](/img/ubuntu/svn/svn_configure/configure.png "编译")

![缺少 with-lz4=internal](/img/ubuntu/svn/svn_configure/configure_error01.png "缺少 with-lz4=internal")

![缺少with-utf8proc=internal ](/img/ubuntu/svn/svn_configure/configure_error02.png "缺少with-utf8proc=internal")

![安装结束](/img/ubuntu/svn/svn_configure/install_over.png "安装结束")

### 测试

```
/data/server/svn/bin/svn --version  #查看版本信息
```

![version](/img/ubuntu/svn/svn_configure/version.png "version")

### 安装完后使用svn一直报错

```
编译安装完后使用svn命令一直报错
 ./svn --version
./svn: error while loading shared libraries: libserf-1.so.1: cannot open shared object file: No such file or directory

解决01办法先使 apt install subversion  安装subversion ,
然后 卸载 sudo apt-get remove --purge subversion
再次使用 编译安装好的   /data/server/svn/bin/svn --version  #查看版本信息 没有报错

解决02[未亲自测试]
cd /etc/ld.so.conf.d/
vim libexpat.conf  [或者 vi user-libs.conf]
添加 /usr/local/lib   或者 添加 /data/server/other_component/self/lib
执行 ldconfig 使配置生效,  
ldconfig -v  查看
```

![启动报错](/img/ubuntu/svn/svn_configure/star_error.png "启动报错")

### 检出一个项目测试

```
svn checkout svn://192.168.1.11/repo/nh_rbac/aaa_test
接下来数据账号密码
svn checkout svn://192.168.1.11/repo/test/aaa_test  /data/fei    #检出到指定目录
```

![checkout 测试](/img/ubuntu/svn/svn_configure/checkout.png "checkout 测试")

### ubuntu16 中检出项目

```
svn checkout svn://192.168.1.104/repository/test

使用一次后账号密码保存位置: /home/fei/.subversion/
清除密码: /home/fei/.subversion/auth/svn.simple  删除这个svn.simple 文件夹即可.
下次会自从生成这个文件
```

![svn 信息](/img/ubuntu/svn/svn_info.png "svn 信息")

## ubuntu16 系统通过 apt-get 安装svn

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