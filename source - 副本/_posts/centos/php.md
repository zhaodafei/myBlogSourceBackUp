---
title: centos -PHP7
categories: 
- Linux
- CentOS
- PHP
tags:
- Linux
- CentOS
- PHP7
---
### centos  PHP7 安装

### 安装依赖

```
yum install -y epel-release
yum -y install libxslt libxslt-devel
yum -y install libxml2 libxml2-devel  libjpeg-devel libpng-devel  libmcrypt-devel
yum -y install  curl-devel freetype-devel
yum install openssl openssl-devel
```

### 安装

```
安装php
wget http://cn2.php.net/get/php-7.0.28.tar.gz/from/this/mirror
mv mirror php-7.0.28.tar.gz

解压到你指定的目录，我这里选择  /data/server/ 目录
tar -zxvf php-7.0.28.tar.gz -C /data/server/
mv php-7.0.28 php7
cd php7/
```



### 编译

```
./configure --prefix=/data/server/php7 \
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

![PHP 编译](/img/centos/php/configure.png "PHP 编译")

### 预处理ok后，make 编译

```
make &&  make install

最后用 make test 测试一下【这个过程时间比较长】
```

### 安装完毕

```
查看 php 版本
/data/server/php7/bin/php -v
这时候在命令窗口执行 php -v ,会提示命令找不到,需要配置环境变量,详情看下文
```

### 配置PHP

```
cp /data/server/php7/php.ini-development   /data/server/php7/lib/php.ini
cp /data/server/php7/etc/php-fpm.conf.default /data/server/php7/etc/php-fpm.conf
cp /data/server/php7/etc/php-fpm.d/www.conf.default /data/server/php7/etc/php-fpm.d/www.conf

官方这里拷贝文件有点不一样，注意一下
```

### 添加 PHP 启动用户

```
groupadd www
useradd -r -g www -s /bin/false www

设置 PHP 启动用户
cd /data/server/php7/etc/php-fpm.d
vi www.conf  修改23、24行，内容如下：
 user = 启动fpm的用户名
 group = 启动fpm的用户所在组
 
 user = www
 group = www

修改完启动 PHP-fpm
```

### php 启动命令

```
/data/server/php7/sbin/php-fpm
```

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

![PHP7 测试](/img/centos/php/php7_test.png "PHP7 测试")

### 配置环境变量

```
这时候在命令窗口执行 php -v ,会提示命令找不到,需要配置环境变量,详情看下文
修改 /etc/profile 配置环境变量
PATH=$PATH:/data/server/php/bin
export PATH
然后执行source /etc/profile 或者 ./profile 使其生效; 执行完后可以通过 echo $PATH  命令查看环境变量,
在次执行 PHP -v 就看到PHP信息
```

![PHP7 环境变量](/img/centos/php/php_env.png "PHP7 环境变量")































