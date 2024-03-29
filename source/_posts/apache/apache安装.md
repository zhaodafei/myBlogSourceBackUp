---
title: -Apache 安装
date: 2015-01-01
categories: 
- Apache
tags:
- Apache
---

Apache 安装
Apache 安装
Apache 安装

<!-- more -->

### apache 安装

1)官方地址: http://httpd.apache.org/docs/2.4/install.html
安装Apache 必须的源码包: [Apache, Apr,Apr-Util,Pcre],并且确认系统中已经安装了[gcc,gcc-c++,make,autoconf,automake],

### 2)centos系统中可以:

```
yum install -y gcc gcc-c++ autoconf libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libpng libpng-devel libxml2 libxml2-devel zlib zlib-devel glibc glibc-devel glib2 glib2-devel bzip2 bzip2-devel ncurses curl openssl-devel gdbm-devel db4-devel libXpm-devel libX11-devel gd-devel gmp-devel readline-devel libxslt-devel expat-devel xmlrpc-c xmlrpc-c-devel
```

### 3),下载好源码

```
wget  https://mirrors.tuna.tsinghua.edu.cn/apache//httpd/httpd-2.4.37.tar.gz
wget  https://mirrors.cnnic.cn/apache//apr/apr-1.6.5.tar.gz
wget  http://mirror.bit.edu.cn/apache//apr/apr-util-1.6.1.tar.gz
wget http://jaist.dl.sourceforge.net/project/pcre/pcre/8.36/pcre-8.36.tar.gz
```

### 4).安装

```
centos中安装pcre:   yum install -y pcre pcre-devel
ubuntu中安装pcre:   apt-get install libpcre3 libpcre3-dev
#安装过程中缺少依赖自行安装,我的pcre已经用apt安装好了
#groupadd deployer useradd -g apache apache 
#tar -zxvf apr-1.6.5.tar.gz -C /data/server/apache_component
#tar -zxvf apr-util-1.6.1.tar.gz -C /data/server/apache_component
#tar -zxvf pcre-8.36.tar.gz -C /data/server/apache_component
#tar -zxvf httpd-2.4.37.tar.gz -C /data/server/apache_component


tar -zxvf apr-1.6.5.tar.gz
cd apr-1.6.5
./configure --prefix=/data/server/apache_component/apr-1.6.5
make
make install

tar -zxvf apr-util-1.6.1.tar.gz
cd apr-util-1.6.1
./configure \
--prefix=/data/server/apache_component/apr-util-1.6.1  \
--with-apr=/data/server/apache_component/apr-1.6.5
make
make install

##centos中少库 expat-devel
##ubuntu中缺少 apt-get install libexpat-dev

tar -zxvf httpd-2.4.37.tar.gz
cd httpd-2.4.37
./configure \
--prefix=/data/server/apache \
--with-apr=/data/server/apache_component/apr-1.6.5 \
--with-apr-util=/data/server/apache_component/apr-util-1.6.1
make 
make install

##到这里已经安装完毕,下面配置Apache

vim httpd.conf   #修改配置
ServerName www.test.com:80

##Apache常用命令
/data/server/apache/bin/apachectl -v   #查看 Apache 版本
/data/server/apache/bin/apachectl -V   #大写V 查看 Apache 版本,安装路径等其他信息
/data/server/apache/bin/apachectl -k start  #参数k发送信号
/data/server/apache/bin/apachectl -k stop
/data/server/apache/bin/apachectl restart
/data/server/apache/bin/apachectl configtest #检查配置文件是否正确
/data/server/apache/bin/apachectl -t         #检查配置文件是否正确
/data/server/apache/bin/httpd -t             #检查配置文件是否正确

/data/server/apache/bin/apachectl -S   #大写S  显示已解析的vhost设置
/data/server/apache/bin/apachectl -help  
cat /data/server/apache/build/config.nice  #查看apache编译参数
ps -aux | grep httpd   # 查看 apache 状态

windows 中命令
./httpd.exe -t    #查看配置文件是否正确


 <Directory /data/www>
     Deny from all   #403 拒绝访问
     #ErrorDocument 404 /test/404.html  #404 重定向
     #ErrorDocument 404 "This is 404 page"
  </Directory>
```

### 5)自定义配置文件

```apacheconf
Include conf/self_vhosts/*.conf
```

![apache 配置文件](/img/apache/apache.png "apache 配置文件")

### 让普通用户可以启apache

```apacheconf
##用普通用户安装的时候
cd /data/server/apache/bin
chown root httpd   #chown root:www httpd
chmod u+s httpd
```



### 强制 Apache 返回一个404状态码

```
Redirect 404 /          #访问根目录显示404
Redirect 500 /          #访问根目录显示500
<Directory /data/www>
    Deny from all   #403 拒绝访问
    #ErrorDocument 404 /test/404.html  #404 重定向
    #ErrorDocument 404 "This is 404 page"  #400 显示错误字符串
</Directory>
```



### Apache 解析php

```apacheconf
#方法一: PHP编译的时候使用--with-apxs2
'--with-apxs2=/usr/local/apache/bin/apxs' #让Apache支持PHP
#查看原来PHP的编译参数
/data/server/php7/bin/php -i | grep  configure

#方法二,在Apache2.4以后支持FCGI方式
在Apache的conf中添加自己的文件路径;  Include conf/self_vhosts/*.conf

<VirtualHost *:80>
  #ServerAdmin webmaster@localhost
  ServerName www.afei.com
  DocumentRoot /data/www
  
  #主要是这2个配置
  ProxyRequests Off
  ProxyPassMatch ^/(.*\.php(/.*)?)$ fcgi://127.0.0.1:9000/data/www/$1

  <Directory /data/www>
     Options FollowSymlinks
     DirectoryIndex index.php
     AllowOverride All
     Require all granted
  </Directory>
</VirtualHost>

##需要在 conf/httpd.conf 文件中打开4个扩展,把下面这几个的注释都打开
#LoadModule proxy_module modules/mod_proxy.so
#LoadModule proxy_http_module modules/mod_proxy_http.so  
#LoadModule proxy_fcgi_module modules/mod_proxy_fcgi.so
#LoadModule rewrite_module modules/mod_rewrite.so


#方法三,解析PHP,需要Apache 2.4.9  以后
<FilesMatch \.php$>
     SetHandler "proxy:fcgi://127.0.0.1:9000"
</FilesMatch>
```

### 使用ip访问,骚气操作01

```apacheconf
#http://192.168.1.202/api/hello/world       #后端PHP访问方式
#http://192.168.1.202/test/dist/index.html  #前端访问方式
#/data/www/web/test/public    前端

<IfModule alias_module>
    #解析php
    ProxyRequests Off
    ProxyPassMatch ^/(.*\.php(/.*)?)$ fcgi://127.0.0.1:9000/data/www/test/public/$1
    Alias /test  "/data/www/test/public"  #使用别名访问
</IfModule>
<Directory /data/www/test/public>
    Options FollowSymlinks
    DirectoryIndex index.php
    Allow from all
    AllowOverride All
    Require all granted
</Directory>
```

### 使用ip访问,骚气操作01

```apacheconf
在 conf/httpd.conf 文件中添加
#解析PHP
<FilesMatch \.php$>
     SetHandler "proxy:fcgi://127.0.0.1:9000"
</FilesMatch>

#访问方法 ip/index.php
<Directory "/data/www/web/fsnh/api/trunk/public">
    Options Indexes FollowSymLinks MultiViews
    AllowOverride all
    Require all granted
</Directory>


#访问方法 ip/aaa/index.php
Alias /aaa "/data/www/cfsh/CFSH/public"
<Directory "/data/www/cfsh/CFSH/public">
    Options Indexes FollowSymLinks MultiViews
    AllowOverride all
    Require all granted
</Directory>

```

