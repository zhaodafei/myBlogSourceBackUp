---
title: Ubuntu -nginx配置
date: 2014-02-05
categories: 
- Nginx
tags:
- Nginx
---
Ubuntu -nginx配置
Ubuntu -nginx配置

### 日志切割  testlog.sh

使用脚本切割 nginx 日志，脚本内容如下

```nginx
--------------------------nginx.conf---------------------
  #打开注释
  #log_format  main 
    
  server {
        listen       80;   
        server_name  test.com;

        location / {
            root   test.com;
            index  index.html index.htm;
        }
        
        access_log  logs/test.com.access.log  main;

   }

     

--------------------------testlog.sh---------------------
#!/bin/bash
LOGPATH=/data/server/nginx-1.4.2/logs/test.com.access.log
BASEPATH=/data/$(date -d yesterday +%Y%m)

mkdir -p $BASEPATH
bak=$BASEPATH/$(date -d yesterday +%Y%m%d%H%M).test.com.access.log
#echo $bak

mv $LOGPATH $bak
touch $LOGPATH
kill -USR1 cat /data/server/nginx-1.4.2/logs/nginx.pid

--------------------------------------------------
```

![nginx log](/img/ubuntu/nginx/other/nginx_log.png "nginx log")

### location  精准匹配，正则匹配

```nginx
Syntax:	location [ = | ~ | ~* | ^~ ] uri { ... }
location @name { ... }
Default:	—
Context:	server, location
```
![nginx location](/img/ubuntu/nginx/other/nginx_location.png "nginx location")


 [location 模块](http://nginx.org/en/docs/http/ngx_http_core_module.html#location"location 模块")

### location 二级目录,忽略index.html

```

```

### rewrite 重写

```nginx
location /h5cfsh {
	index index.html;
	root /usr/local/apache2/htdocs/cfsh/h5cfsh/dist/;
	rewrite ^(.*)$ /index.html break;
}
```

### rewrite 重写 Laravel 和 Vue 部署

```nginx
server {
    listen       80;
    server_name  demo.dafei.com;
    #client_max_body_size 1000m;
    charset utf-8;
    root E:/web/laravel_demo/public/;
    index index.php index.html;
    location / {
        autoindex on;
        try_files $uri $uri/ /index.php?$query_string;
    }
    location ~ .+\.php($|/) {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        include fastcgi.conf;
    }
    location /web {
        alias  E:/web/vue_demo/dist/;
        index  index.html;
        #autoindex on;
    }
}
```

### rewrite 重写---代理

```nginx
location /api { 
    #代理到某个地址api
    proxy_pass   http://127.0.0.1:8080/api; 
}
```





























