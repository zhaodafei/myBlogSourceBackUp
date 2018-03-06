---
title: linux Ubuntu nginx
---
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

![ubuntu nginx start](/img/linux_ubuntu_nginx/nginx_start.png "ubuntu nginx start")

### 查看nginx配置文件目录

```
ps -aux | grep nginx   【返回结果包含安装目录】
nginx -t               【返回结果包含配置文件目录】
cat /etc/nginx/nginx.conf
```

 ![nginx 安装位置](/img/linux_ubuntu_nginx/nginx_server.png "nginx 安装位置")































