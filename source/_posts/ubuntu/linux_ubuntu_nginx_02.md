---
title: linux Ubuntu nginx
---
### 日志切割  testlog.sh

使用脚本切割 nginx 日志，脚本内容如下

```
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

```
Syntax:	location [ = | ~ | ~* | ^~ ] uri { ... }
location @name { ... }
Default:	—
Context:	server, location
```
![nginx location](/img/ubuntu/nginx/other/nginx_location.png "nginx location")

[location 模块]: http://nginx.org/en/docs/http/ngx_http_core_module.html#location	"location 模块"



### rewrite 重写

```



```





























