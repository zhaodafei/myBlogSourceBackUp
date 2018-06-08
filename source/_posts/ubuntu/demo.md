---
title: linux-DDU  显示目录列表  -ls
---
### 命令格式

```
    server {
        listen       80;   
        server_name  test.com;

        location / {
            root   test.com;
            index  index.html index.htm;
        }
        
        access_log  logs/test.com.access.log  main;

    }

    #打开注释
    #log_format  main   

```

### 

testlog.sh

```
#!/bin/bash
LOGPATH=/data/server/nginx-1.4.2/logs/test.com.access.log
BASEPATH=/data/$(date -d yesterday +%Y%m)

mkdir -p $BASEPATH
bak=$BASEPATH/$(date -d yesterday +%Y%m%d%H%M).test.com.access.log
#echo $bak

mv $LOGPATH $bak
touch $LOGPATH
kill -USR1 cat /data/server/nginx-1.4.2/logs/nginx.pid
```





























