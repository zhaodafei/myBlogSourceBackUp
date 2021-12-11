---
title: ubuntu16 -php7 extension imagick
date: 2014-03-06
categories: 
- PHP
tags:
- PHP
- Imagick
---
### Extension 之 imagick 

温馨提示: 在安装过程中出现错误，一般是由于缺少编译工具包导致，可根据提示参照第一步安装相应的工具包即可

<!-- more -->

### 安装 ImageMagick

```
wget http://www.imagemagick.org/download/ImageMagick.tar.gz
解压到指定目录【我这里是 /data/server/other_component/】
tar -zxvf ImageMagick.tar.gz -C /data/server/other_component/
cd ImageMagick-7.0.7-28/
./configure --prefix=/data/server/other_component/ImageMagick-7.0.7-28 
make && make install

export PKG_CONFIG_PATH=/data/server/other_component/ImageMagick-7.0.7-28/lib/pkgconfig/  #设置环境变量 【重启电脑执行下一步】
```

### 安装 imagick

```
wget http://pecl.php.net/get/imagick-3.4.3.tgz

解压到指定目录【我这里是 /data/server/other_component/】
tar -zxvf imagick-3.4.3.tgz -C /data/server/other_component/
cd imagick-3.4.3/

/data/server/php7/bin/phpize   #用phpize生成configure配置文件，[找到你PHP安装位置中的phpsize]

./configure \
--with-php-config=/data/server/php7/bin/php-config \
--with-imagick=/data/server/other_component/ImageMagick-7.0.7-28 

make & make install

安装完成后提示如下，表示安装成功：
root@www:/data/server/other_component/phpredis-4.0.0# make install
Installing shared extensions:     /data/server/php7/lib/php/extensions/no-debug-non-zts-20151012/
root@www:/data/server/other_component/phpredis-4.0.0# 
```

### 配置

```
安装完成后配置【找到 php.ini 的位置添加扩展】：
vi /etc/php/7.0/cli/php.ini
vi  /data/server/php7/lib/php.ini  
这两个里面都要写上一以下内容：
extension=imagick.so


拷贝扩展，否则 在 【cli   PHP -m】 模式中看不到扩展：
cp /data/server/php7/lib/php/extensions/no-debug-non-zts-20151012/imagick.so  /usr/lib/php/20151012/
```

### 重启php-fpm 

```
重启php-fpm
查找PHP服务 ps aux | grep php-fpm
pkill -9 php
php启动命令
/data/server/php7/sbin/php-fpm
```

### 查看扩展

```
php -m | grep imagick
提示如下
root@www:/data/server/other_component/ImageMagick-7.0.7-28# php -m | grep redis
imagick
root@www:/data/server/other_component/ImageMagick-7.0.7-28# 
```

![imagick 扩展](/img/ubuntu/php/extension/e_imagick.png "redis imagick")

![imagick 扩展](/img/ubuntu/php/extension/e_imagick2.png "redis imagick")



[PHP扩展imagick下载网址](http://pecl.php.net/package/imagick "PHP扩展imagick下载网址")

 [PHP扩展下载网址](http://pecl.php.net/package-stats.php "PHP扩展下载网址")





























