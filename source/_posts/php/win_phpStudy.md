---
title: windows  phpstudy curl超时
date: 2015-04-04
categories: 
- PHP
tags:
- PHP
---
场景:  `windows7` `phpstudy2016` `php7.3` `nginx`, 使用`curl` `file_get_content`本地项目之间互相访问一直超时或者失败

<!-- more -->

### 场景再现

```php
demo.test.com:80
文件 E:\selfweb\git_dev\test\index.php 内容如下:

<?php
$file = file_get_contents("http://demo.test.com:80/index2.php");
print_r($file);
echo "<br> php-cgi.exe -b demo.test.com:9001 -c php.ini";

-------------
 目录 E:\selfweb\git_dev\test\index2.php 内容如下
<?php
echo "我是 index2.php 从我这里拿数据";

访问 http://demo.test.com:80/index2.php    #成功
访问 http://demo.test.com:80/index.php     #失败
```

![失败](/img/php/fail.png "失败")

### 解决办法

```nginx
#修改nginx配置,添加81端口,添加9001端口
server {
    listen       80;   #这里
    server_name  demo.test.com 192.168.1.151;
    charset utf-8;
    root  E:/selfweb/git_dev/test/;
    index index.php;

    location ~ .+\.php($|/) {
        fastcgi_pass 127.0.0.1:9000; #这里
        fastcgi_index index.php;
        include fastcgi.conf;
    }

}

server {
    listen       81; #这里
    server_name  demo.test.com;
    charset utf-8;
    root  E:/selfweb/git_dev/test/;
    index index.php;

    location ~ .+\.php($|/) {
        fastcgi_pass 127.0.0.1:9001; #这里
        fastcgi_index index.php;
        include fastcgi.conf;
    }
}

#重启phpStudy,在当前php目录下的cmd中运行命令:
php-cgi.exe -b demo.test.com:9001 -c php.ini

#修改文件
文件 E:\selfweb\git_dev\test\index.php 中端口内容如下:
<?php
$file = file_get_contents("http://demo.test.com:81/index2.php");
print_r($file);
echo "<br> php-cgi.exe -b demo.test.com:9001 -c php.ini";

#再次访问
访问 http://demo.test.com:80/index2.php    #成功
访问 http://demo.test.com:80/index.php     #成功
```

![成功](/img/php/success.png "成功")

### 编写bat 脚本

```bash
#创建 test_curl.bat 脚本,内容如下
set php_nts=D:\soft_position\phpStudy20161103\php\php-7.3.4-nts
%php_nts%\php-cgi.exe -b demo.test.com:9001 -c %php_nts%\php.ini
```

### 多个版本的nginx

在`phpstudy_pro`最新版本中开始支持安装2个`nginx`版本; 在低版本中很多是不支持的

![phpstudy_pro](/img/php/phpstudy_pro.png "phpstudy_pro")





























