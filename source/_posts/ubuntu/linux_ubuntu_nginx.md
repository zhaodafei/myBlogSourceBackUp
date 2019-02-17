---
title: Ubuntu -nginx
---
## 安装nginx 01

### 安装nginx

```
sudo apt-get install nginx

启动 ngnnx:  
sudo service nginx start

扩展centos nginx 重启
service nginx restart
/etc/init.d/nginx stop
/etc/init.d/nginx start
```

![ubuntu nginx start](/img/ubuntu/nginx/nginx_start.png "ubuntu nginx start")

### 查看nginx配置文件目录

```
ps -aux | grep nginx   【返回结果包含安装目录】
nginx -t               【返回结果包含配置文件目录】
cat /etc/nginx/nginx.conf
```

 ![nginx 安装位置](/img/ubuntu/nginx/nginx_server.png "nginx 安装位置")

## 编译安装02

### 安装必要的编译环境

Tengine 安装需要使用源代码自行编译，所以安装前需要安装必要的编译工具

```
sudo apt-get install build-essential
sudo apt-get install libtool
sudo apt-get install g++

centos 平台编译环境命令：
yum -y install gcc automake autoconf libtool make
yum install gcc gcc-c++
```

安装所需要的组件【pcre、openssl、zlib】，组件安装的时候注意路径

### PCRE

```
wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.38.tar.gz
解压到你指定的目录
tar -zxvf pcre-8.38.tar.gz -C /data/server/nginx_component
mv pcre-8.38 pcre
cd pcre/
./configure --prefix=/data/server/nginx_component/pcre
make && make install
```

![component pcre](/img/ubuntu/nginx/component_pcre.png "component pcre")

### OpenSSL

```
wget http://www.openssl.org/source/openssl-1.0.2.tar.gz
解压到你指定的目录
tar -zxvf openssl-1.0.2.tar.gz -C /data/server/nginx_component
mv openssl-1.0.2 openssl
cd openssl/
./config --prefix=/data/server/nginx_component/openssl
make && make install
```

![component openssl](/img/ubuntu/nginx/component_openssl.png "component openssl")

### Zlib

```
wget http://zlib.net/zlib-1.2.11.tar.gz
解压到你指定的目录
tar -zxvf zlib-1.2.11.tar.gz -C /data/server/nginx_component
mv zlib-1.2.11 zlib
cd zlib/
./configure --prefix=/data/server/nginx_component/zlib
make && make install
```

![component pcre](/img/ubuntu/nginx/component_zlip.png "component pcre")

### 下载nginx安装包，我选择的是 1.4.2

```
wget http://nginx.org/download/nginx-1.4.2.tar.gz

解压到 /data/server/nginx 目录（可以根据实际情况选择目录）：
tar -zxvf nginx-1.4.2.tar.gz -C /data/server/
mv nginx-1.4.2 nginx
cd nginx

##注意路径
 ./configure --sbin-path=/data/server/nginx \
--conf-path=/data/server/nginx/nginx.conf \
--pid-path=/data/server/nginx/nginx.pid \
--with-http_ssl_module \
--with-pcre=/data/server/nginx_component/pcre \
--with-zlib=/data/server/nginx_component/zlib \
--with-openssl=/data/server/nginx_component/openssl

 make & make install
 
安装完的提示：
.........
test -f '/data/server/nginx/nginx.conf' 		|| cp conf/nginx.conf '/data/server/nginx/nginx.conf'
cp conf/nginx.conf '/data/server/nginx/nginx.conf.default'
test -d '/data/server/nginx' 		|| mkdir -p '/data/server/nginx'
test -d '/usr/local/nginx/logs' || 		mkdir -p '/usr/local/nginx/logs'
test -d '/usr/local/nginx/html' 		|| cp -R html '/usr/local/nginx'
test -d '/usr/local/nginx/logs' || 		mkdir -p '/usr/local/nginx/logs'
make[1]: Leaving directory '/data/server/nginx'
[1]+  Exit 2  

```

注意配置的时候 –with-pcre 、–with-openssl、–with-zlib的路径为源文件的路径

![nginx 安装结束](/img/ubuntu/nginx/nginx_end.png "nginx 安装结束")

### 检测是否可用

```
/data/server/nginx/nginx -t
./nginx -t 
```

![nginx 检测](/img/ubuntu/nginx/nginx_check.png "nginx 检测")

![nginx 检测成功](/img/ubuntu/nginx/nginx_ok.jpg "nginx 检测成功")

### 报错：

```
安装完会有异常,没有 pid 文件，那就创建一个 pid  文件
root@ubuntu:/data/server/nginx# /data/server/nginx/nginx -s reload
nginx: [error] open() "/data/server/nginx/nginx.pid" failed (2: No such file or directory)
root@ubuntu:/data/server/nginx# touch nginx.pid
root@ubuntu:/data/server/nginx# /data/server/nginx/nginx -s reload
nginx: [error] invalid PID number "" in "/data/server/nginx/nginx.pid"
root@ubuntu:/data/server/nginx# /data/server/nginx/nginx  -c /data/server/nginx/conf/nginx.conf
root@ubuntu:/data/server/nginx# /data/server/nginx/nginx -s reload

```

![nginx 异常](/img/ubuntu/nginx/nginx_error.png "nginx 异常")

### 命令

```
/data/server/nginx/nginx -t          【检查配置】
/data/server/nginx/nginx             【启动命令】
/data/server/nginx/nginx -s stop     【停止命令】
/data/server/nginx/nginx -s reload   【重启命令：】

pid出错时，可以使用这个：
/data/server/nginx/nginx  -c /data/server/nginx/conf/nginx.conf
```

## 编译安装03

### 下载

```
当前操作目录位置：  /home/fei/server
wget http://nginx.org/download/nginx-1.4.2.tar.gz
tar -zxvf nginx-1.4.2.tar.gz  -C /home/fei/server
cd nginx-1.4.2
```

![nginx 安装](/img/ubuntu/nginx/nginx03_install.png "安装")

### 配置

```
./configure --prefix=/data/server/nginx-1.4.2
发现少包，安装缺少的包
sudo apt-get install libpcre3 libpcre3-dev 
再次配置【 一直到不在缺少包 】
./configure --prefix=/data/server/nginx-1.4.2

【 常见缺少少包： pcre、openssl、zlib，安装这三个包命令如下】
sudo apt-get install libpcre3 libpcre3-dev 
sudo apt-get install openssl libssl-dev  
sudo apt-get install zlib1g-dev  


配置 OK 后，继续操作
```

![nginx 安装缺少包](/img/ubuntu/nginx/nginx03_packet1.png "安装缺少包")

![nginx 安装缺少包](/img/ubuntu/nginx/nginx03_packet2.png "安装缺少包")

### 编译安装

```
make && make install
```

![nginx 安装](/img/ubuntu/nginx/nginx03_make.png "安装")

### 检测是否可用

```
/data/server/nginx-1.4.2/sbin/nginx -t
```

![nginx 检测是否可用](/img/ubuntu/nginx/nginx03_test.png "检测是否可用")

### 安装完成后，原文件就没有用了  

![nginx 删除没有用文件](/img/ubuntu/nginx/remove_useless.png "删除没有用文件")



### 命令

```
/data/server/nginx/nginx -t          【检查配置】
/data/server/nginx/nginx             【启动命令】
/data/server/nginx/nginx -s stop     【停止命令】
/data/server/nginx/nginx -s reload   【重启命令：】
/data/server/nginx/nginx -v          【查看nginx版本】
/data/server/nginx/nginx -V          【大写V 检查编译参数】

pid出错时，可以使用这个：
/data/server/nginx/nginx  -c /data/server/nginx/conf/nginx.conf

让nginx 返回http状态码
return 403;
return 500;

```
## 其他

### 让普通用户可以启动nginx

```
用root用户进入....nginx/sbin
然后chown root nginx
chmod u+s nginx
然后通过普通用户就可以启动了。
```

![nginx 普通用户启动nginx](/img/ubuntu/nginx/common_star.png "普通用户启动nginx")





[nginx 官网](http://nginx.org/)   

[nginx 官网下载](http://nginx.org/download/)      

[nginx 官网linux安装](http://nginx.org/en/docs/configure.html)











