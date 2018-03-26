---
title: linux ubuntu16 swoole 
---
### swoole 

php7 中安装swoole1.9.1

```
安装依赖
apt-get install libpcre3 libpcre3-dev  

*********************************************

cd  /data/server/
wget https://github.com/swoole/swoole-src/archive/v1.9.1-stable.tar.gz
tar zxvf v1.9.1-stable.tar.gz
cd swoole-src-1.9.1-stable

/data/server/php7/bin/phpize
【
	这一步很少出问题： 我的报错如下：
错误一：
	root@ubuntu:/data/server/swoole-src-1.9.1-stable# /data/server/php7/bin/phpize
	Configuring for:
	PHP Api Version:         20151012
	Zend Module Api No:      20151012
	Zend Extension Api No:   320151012
	Cannot find autoconf. Please check your autoconf installation and the
	$PHP_AUTOCONF environment variable. Then, rerun this script.
错误二:
	Cannot find config.m4. 
	Make sure that you run '/data/server/php7/bin/phpize' in the top level source directory of the module


解决方法：
sudo apt-get install m4
sudo apt-get install autoconf
	

】
./configure --with-php-config=/data/server/php7/bin/php-config
make
make install


最后安装成功后显示：
root@ubuntu:/data/server/swoole-src-1.9.1-stable# make install
Installing shared extensions:     /data/server/php7/lib/php/extensions/no-debug-non-zts-20151012/
root@ubuntu:/data/server/swoole-src-1.9.1-stable# 
```

### 配置php支持swoole

vi  /data/server/php7/lib/php.ini   #######编辑配置文件，在最后一行添加以下内容(查找php.ini最好的方法就是phpinfo)

```
vi /etc/php/7.0/cli/php.ini
vi  /data/server/php7/lib/php.ini  
这两个里面都要写上一以下内容：

extension=swoole.so
```

### 重启php-fpm

```
插找PHP服务 ps aux | grep php-fpm
pkill -9 php
php启动命令
/data/server/php7/sbin/php-fpm
```

先用 php -m 看一下,没有 swoole ，扩展，检索一下  locate php.ini   ,发现在  /etc/php/7.0/cli/php.ini  这里还有一个，这里也加上  extension=swoole.so   ，在看看有没有，如果还是没有，   php -ini|grep 'extesion_dir'  看一下，发现如下错误：

```
root@ubuntu:/home/afei# php -ini|grep 'extesion_dir'
PHP Warning:  PHP Startup: Unable to load dynamic library '/usr/lib/php/20151012/swoole.so' - /usr/lib/php/20151012/swoole.so: cannot open shared object file: No such file or directory in Unknown on line 0
root@ubuntu:/home/afei# cd  /usr/lib/php/20151012
root@ubuntu:/usr/lib/php/20151012# ls -l


解决办法， 拷贝一份过去： 
cp /data/server/php7/lib/php/extensions/no-debug-non-zts-20151012/swoole.so  /usr/lib/php/20151012/

```



在phpinfo页面可以看到关于swoole的选项，说明安装成功

![swoole 安装成功](/img/ubuntu/swoole/swoole_success.png "swoole 安装成功")



 [swoole官方文档](https://wiki.swoole.com/wiki/page/6.html "swoole官方文档")





























