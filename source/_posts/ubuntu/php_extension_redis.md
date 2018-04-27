---
title: ubuntu16 php7 extension redis
---
### Extension 之 redis

```
wget https://github.com/nicolasff/phpredis/archive/4.0.0.tar.gz
wget http://pecl.php.net/get/redis-4.0.0.tgz

解压到指定目录【我这里是 /data/server/other_component/】
tar -zxvf 4.0.0.tar.gz -C /data/server/other_component/
cd phpredis-4.0.0/

/data/server/php7/bin/phpize   #用phpize生成configure配置文件，[找到你PHP安装位置中的phpsize]
./configure --with-php-config=/data/server/php7/bin/php-config   #配置
make
make install

安装完成后提示如下，表示安装成功：
root@www:/data/server/other_component/phpredis-4.0.0# make install
Installing shared extensions:     /data/server/php7/lib/php/extensions/no-debug-non-zts-20151012/
root@www:/data/server/other_component/phpredis-4.0.0# 

安装完成后配置【找到 php.ini 的位置添加扩展】：
vi /etc/php/7.0/cli/php.ini
vi  /data/server/php7/lib/php.ini  
这两个里面都要写上一以下内容：
extension=redis.so


拷贝扩展，否则 在 【cli   PHP -m】 模式中看不到扩展：
cp /data/server/php7/lib/php/extensions/no-debug-non-zts-20151012/opcache.a  /usr/lib/php/20151012/
cp /data/server/php7/lib/php/extensions/no-debug-non-zts-20151012/opcache.so  /usr/lib/php/20151012/
cp /data/server/php7/lib/php/extensions/no-debug-non-zts-20151012/redis.so  /usr/lib/php/20151012/


重启php-fpm
查找PHP服务 ps aux | grep php-fpm
pkill -9 php
php启动命令
/data/server/php7/sbin/php-fpm

查看扩展
php -m | grep redis
提示如下
root@www:/data/server/other_component/phpredis-4.0.0# php -m | grep redis
redis
root@www:/data/server/other_component/phpredis-4.0.0# 
```

![redis 扩展](/img/ubuntu/php/extension/e_redis.png "redis 扩展")

 [历史版本](https://github.com/phpredis/phpredis/releases "历史版本")

 [历史版本2](http://pecl.php.net/package/redis "历史版本2")

 [PHP扩展下载网址](http://pecl.php.net/package-stats.php "PHP扩展下载网址")

























