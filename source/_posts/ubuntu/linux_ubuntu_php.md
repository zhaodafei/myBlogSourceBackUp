---
title: ubuntu16 -php7.0.28
---
源码编译安装php7.0

### 依赖安装，安装依赖

```
apt-get install libxml2 libxml2-dev

apt-get install openssl
apt-get install libssl-dev

apt-get install curl
apt-get install libcurl4-gnutls-dev

apt-get install libxslt-dev

apt-get install libpng-dev

apt-get install libfreetype6-dev


// RetHat CentOS or Fedora 使用下面安装命令
yum install curl curl-devel

****************一般使用的依赖都是以下这些***************************
安装相关依赖库

sudo apt-get update
sudo apt-get install libxml2-dev
#安装gcc
sudo apt-get install build-essential
sudo apt-get install openssl 
sudo apt-get install libssl-dev 
sudo apt-get install make
sudo apt-get install curl
sudo apt-get install libcurl4-gnutls-dev
sudo apt-get install libjpeg-dev
sudo apt-get install libpng-dev
sudo apt-get install libmcrypt-dev
sudo apt-get install libreadline6 libreadline6-dev
apt-get -y install libfreetype6-dev  
sudo apt-get install libxslt1-dev
```



### 下载 PHP 源码

```
wget http://cn2.php.net/get/php-7.0.28.tar.gz/from/this/mirror
mv mirror php-7.0.28.tar.gz

解压到你指定的目录，我这里选择  /data/server/ 目录
tar -zxvf php-7.0.28.tar.gz -C /data/server/
mv php-7.0.28 php7
cd php7/
```

![PHP7.0.28 下载](/img/ubuntu/php/php7_download.png "PHP7.0.28 下载")

### 查看安装帮助，执行配置脚本进行配置

```
# ./configure   --help
# ./configure --prefix=/data/server/php7 \
 --with-curl \
 --with-freetype-dir \
 --with-gd \
 --with-gettext \
 --with-iconv-dir \
 --with-kerberos \
 --with-libdir=lib64 \
 --with-libxml-dir \
 --with-mysqli \
 --with-openssl \
 --with-pcre-regex \
 --with-pdo-mysql \
 --with-pdo-sqlite \
 --with-pear \
 --with-png-dir \
 --with-xmlrpc \
 --with-xsl \
 --with-zlib \
 --enable-fpm \
 --enable-bcmath \
 --enable-libxml \
 --enable-inline-optimization \
 --enable-gd-native-ttf \
 --enable-mbregex \
 --enable-mbstring \
 --enable-opcache \
 --enable-pcntl \
 --enable-shmop \
 --enable-soap \
 --enable-sockets \
 --enable-sysvsem \
 --enable-xml \
 --enable-zip \
 --enable-mysqlnd \
 --with-pdo-mysql=mysqlnd \
 --with-mcrypt
```

我的错误



| Configure Command                       | './configure' '--prefix=/data/server/php7' '--with-gd' '--with-freetype-dir' '--enable-gd-native-ttf' '--enable-mysqlnd' '--with-pdo-mysql=mysqlnd' '--with-openssl' '--with-mcrypt' '--enable-mbstring' '--enable-zip' '--enable-fpm' |
| --------------------------------------- | ------------------------------------------------------------ |
| Server API                              | FPM/FastCGI                                                  |
| Virtual Directory Support               | disabled                                                     |
| Configuration File (php.ini) Path       | /data/server/php7/lib                                        |
| Loaded Configuration File               | (none)        【正常情况这里不应该没有值的，还是之前的编译有问题，请仔细查看<br />                     正常应该是这个值   /data/server/php7/lib/php.ini】 |
| Scan this dir for additional .ini files | (none)                                                       |
| Additional .ini files parsed            | (none)                                                       |



之前安装过依赖这里就可以不用装，然后会提示部分依赖没有安装，安装依赖

```
apt-get install libxml2 libxml2-dev

apt-get install openssl
apt-get install libssl-dev

apt-get install curl
apt-get install libcurl4-gnutls-dev

apt-get install libxslt-dev

apt-get install libpng-dev

apt-get install libfreetype6-dev


// RetHat CentOS or Fedora 使用下面安装命令
yum install curl curl-devel

****************一般使用的依赖都是以下这些***************************
安装相关依赖库

sudo apt-get update
sudo apt-get install libxml2-dev
#安装gcc
sudo apt-get install build-essential
sudo apt-get install openssl 
sudo apt-get install libssl-dev 
sudo apt-get install make
sudo apt-get install curl
sudo apt-get install libcurl4-gnutls-dev
sudo apt-get install libjpeg-dev
sudo apt-get install libpng-dev
sudo apt-get install libmcrypt-dev
sudo apt-get install libreadline6 libreadline6-dev
apt-get -y install libfreetype6-dev  
sudo apt-get install libxslt1-dev
```

![php configure](/img/ubuntu/php/php7_configure01.png "php configure")



### 预处理ok后，make 编译

```
make &&  make install

最后用 make test 测试一下【这个过程时间比较长】
```

![php make](/img/ubuntu/php/php7_configure01.png "php make")

![php make install](/img/ubuntu/php/php7_make_install.png "php make install")

### 安装完毕

```
#查看 php 版本 ,这个时候没有环境变量,全局还不能使用 php -v,下问有介绍
/data/server/php7/bin/php -v  

#查看配置文件,没有加载,需要自己复制一份 php.ini
/data/server/php7/bin/php --ini
```

![php version](/img/ubuntu/php/php7_version.png "php version")

### 配置PHP 

```

cp /data/server/php7/php.ini-development   /data/server/php7/lib/php.ini
cp /data/server/php7/etc/php-fpm.conf.default /data/server/php7/etc/php-fpm.conf
cp /data/server/php7/etc/php-fpm.d/www.conf.default /data/server/php7/etc/php-fpm.d/www.conf

官方这里拷贝文件有点不一样，注意一下
```

![php7 php.ini](/img/ubuntu/php/php7_php_ini.png "php7 php.ini")

### 添加 PHP 启动用户

```
PHP 安装默认使用 www 用户，这里根据自己情况添加用户
groupadd managers
useradd -r -g managers -s /bin/false managers

设置 PHP 启动用户
cd /data/server/php7/etc/php-fpm.d
vi www.conf  修改23、24行，内容如下：
 user = 启动fpm的用户名
 group = 启动fpm的用户所在组
 
 user = managers
 group = managers

修改完启动 PHP-fpm
```

### php 启动命令

```
 /data/server/php7/sbin/php-fpm
```

![php7 启动用户](/img/ubuntu/php/php7_user.png "php7 启动用户")

### 配置虚拟主机测试一下

在 /data/www/ 目录下创建 index.php 内容如下：

```
<?php
echo phpinfo();
?>

```

在 nginx 中配置虚拟主机

```
server {
    listen       80;
    server_name  127.0.0.1 192.168.1.230;
    client_max_body_size 10m;
    charset utf-8;
    #access_log /data/server/tengine/logs/127.0.0.1_access.log;
    #error_log  /data/server/tengine/logs/127.0.0.1_error.log;
    root  /data/www/;
   # index index.html;
    index index.php;
    location ~ .+\.php($|/) {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        include fastcgi.conf;
    }
}
```

![php7 测试](/img/ubuntu/php/php7_test.jpg "php7 测试")



扩展： 使用 php -m  查看扩展,提示如下：

```
root@ubuntu:/data/server/php7/bin# php -m
The program 'php' can be found in the following packages:
 * php7.0-cli
 * hhvm
Try: apt install <selected package>
root@ubuntu:/data/server/php7/bin# apt install php7.0-cli

安装：  apt install php7.0-cli
```

PHP命令

```
php --ini   #查看PHP的配置文件
php -ini    #查看php.ini里面的配置
php  -a     #进入交互模式,可以写PHP代码,demo: 输入 echo "hello world"; 然后回车显示hello world

查询 PHP 服务 ps aux | grep php-fpm
pkill -9 php
php启动命令
/data/server/php7/sbin/php-fpm

#查看PHP的编译参数
/data/server/php7/bin/php -i | grep configure
此命令使用场景:
编译web服务器由nginx换为Apache的时候需要在Apache中添加PHP模块,  PHP需要添加 --with-apxs2 后重新编译
```

### 配置 php 全局变量

```
PHP编译安装后的目录:  /data/server/php7/bin
vim  /etc/profile

#centos中配置PHP环境变量:
修改 /etc/profile 配置环境变量
PATH=$PATH:/data/server/php7/bin
export PATH
然后执行source /etc/profile 或者 ./profile 使其生效; 执行完后可以通过 echo $PATH  命令查看环境变量

###PATH=$PATH:/data/server/php/bin  意思加入环境变量
###export PATH          意思使环境变量生效
```



 [PHP官网下载地址](http://www.php.net/downloads.php)

[PHP官方安装文档](http://php.net/manual/zh/install.unix.nginx.php "PHP 官方安装文档")






























