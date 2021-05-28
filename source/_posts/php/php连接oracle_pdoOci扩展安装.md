---
title: linux php -PDO_OCI 扩展
categories: 
- PHP
tags:
- PHP
- PDO_OCI
---
PHP连接到oracle数据库需要pdo_oci 扩展

### 下载文件

```
https://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html
https://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html
下载下面2个文件,上传到服务器:
instantclient-basic-linux.x64-12.1.0.2.0.zip
instantclient-sdk-linux.x64-12.1.0.2.0
下载 oracle 数据库的扩展 oci8
https://pecl.php.net/package/oci8
oci8-2.2.0.tgz
下载  php-src ,主要使用 pdo_oci 目录
https://github.com/php/php-src  
```

### 安装 `instantclient`

```
进入linux:
unzip instantclient-basic-linux.x64-12.1.0.2.0.zip
unzip instantclient-sdk-linux.x64-12.1.0.2.0.zip

cd /data/server/oracle_php
cp -avr instantclient-basic-linux.x64-12.1.0.2.0.zip /data/server/oracle_php/
cp -avr instantclient-sdk-linux.x64-12.1.0.2.0.zip /data/server/oracle_php/

#这里解压后会放再一个目录中
unzip instantclient-basic-linux.x64-12.1.0.2.0.zip
unzip instantclient-sdk-linux.x64-12.1.0.2.0.zip
mv instantclient_12_1 instantclient  
cd instantclient

ln -s libnnz12.so libnnz.so
ln -s libclntsh.so.12.1 libclntsh.so
ln -s libocci.so.12.1 libocci.so

```

### 安装 `oci8`  扩展

```
cd /data/server/oracle_php
tar -zxvf oci8-2.2.0.tgz
cd oci8-2.2.0
/data/server/php72/bin/phpize

./configure \
--with-oci8=instantclient,/data/server/oracle_php/instantclient \
--with-php-config=/data/server/php72/bin/php-config
make
make install
## 最后安装成功
[www@localhost oci8-2.2.0]$ make install
Installing shared extensions:     /data/server/php72/lib/php/extensions/no-debug-non-zts-20170718/
[www@localhost oci8-2.2.0]$ 
```

### 安装 `pdo_oci` 扩展

```
https://pecl.php.net/package/PDO_OCI
这里的 PDO_OCI-1.0.tgz 已经不在维护,从github 上php/php-src  中下载使用 pdo_oci 目录
改从这里下载
https://github.com/php/php-src  

使用 php-src 里面的 pdo_oci
cd pdo_oci
/data/server/php72/bin/phpize

./configure \
--with-pdo-oci=instantclient,/data/server/oracle_php/instantclient \
--with-php-config=/data/server/php72/bin/php-config
make
make install
## 最后安装成功
[www@localhost pdo_oci]$ make install
Installing shared extensions:     /data/server/php72/lib/php/extensions/no-debug-non-zts-20170718/
[www@localhost pdo_oci]$ 

-----配置 php.ini ------
php.ini配置中添加一句 extension=pdo_oci.so
```

![php oracle](/img/php/oracle_01.png "php oracle")

![php oracle](/img/php/oracle_02.png "php oracle")



 [php-src](https://github.com/php/php-src "php-src")

 [pecl](https://pecl.php.net/ "pecl")





























