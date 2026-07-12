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
> Nginx 的 location 匹配优先级（从高到低）：
>
> 1. `=` 精确匹配
> 2. `^~` 前缀匹配（优先于正则）
> 3. `~` 或 `~*` 正则匹配
> 4. 普通前缀匹配（如 `/profile/`）

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

### rewrite 重写 SpringBoot 和 Vue 部署

```nginx
server {
    listen        80;
    #server_name  localhost demo.fei.com;
    server_name  demo.fei.com;
    # 配置 Vue 打包首页地址
    root   "E:/self_web/git_dev/vue/zFei_vue/dist";
    location / {
        try_files $uri $uri/ /index.html;
        index  index.html index.htm;
    }
    # 代理到 Java 的8072接口
    # 访问 http://localhost:80/api/test/detail
    # 调用 Java 接口 http://localhost:8072/api/test/detail
    location /api/ {
        proxy_pass http://127.0.0.1:8072/api/;
    }
}
```

### 重写文件地址

```wiki
#场景描述
文件上传后再某个具体的访问地址下面，需要给代理访问到

#知识扩展
alias：将 /profile/ 直接替换为 /home/ruoyi/uploadPath/
root：将 /profile/ 追加到 /home/ruoyi/uploadPath/ 后面。
```



```nginx
location /profile/ {
    # 方式一：指向地址
    proxy_pass http://127.0.0.1:8072/profile/; 
}
```

```nginx
location /profile/ {
    # 方式二：指向目录，对应后台`application.yml`中的`profile`配置
    #       这种方法是指向Linux服务器上的一个地址
    alias /home/ruoyi/uploadPath/;
}
```

```nginx
location ~*\.txt$ {
    #匹配特定文件后缀（所有 .txt 文件）
    root /home/ruoyi/uploadPath/;
}
```
**关键点**：

- `~*` 表示正则匹配且**不区分大小写**（`.TXT`、`.txt` 都能匹配）
- `\.txt$` 表示以 `.txt` 结尾的路径
- `$` 是正则中的**结束符**，确保只匹配文件扩展名，而不是包含 `txt` 的目录（如 `/text/`）


> ```nginx
> #这个2项nginx配置的区别
> location /profile/ {
>     alias /home/ruoyi/uploadPath/;
> }
> 
> location /profile/ {
>     root /home/ruoyi/uploadPath/;
> }
> ```
>
> 这两个 Nginx 配置的核心区别在于**URL路径与文件系统路径的映射方式**。简单来说：
>
> - **`alias`**：将 `/profile/` 直接替换为 `/home/ruoyi/uploadPath/`。
> - **`root`**：将 `/profile/` **追加**到 `/home/ruoyi/uploadPath/` 后面。
>
> ### 具体区别演示
>
> 假设用户访问 `https://your-domain.com/profile/avatar/1.jpg`
>
> #### 使用 `alias`
>
> ```nginx
> location /profile/ {
>     alias /home/ruoyi/uploadPath/;
> }
> ```
>
> **Nginx查找的文件路径**：
>
> ```wiki
> /home/ruoyi/uploadPath/avatar/1.jpg
> ```
>
> **处理逻辑**：Nginx会从URL中剥离 `/profile/` 部分，然后将剩余部分（`avatar/1.jpg`）直接拼接到 `alias` 指定的路径后面。
>
> #### 使用 `root`
>
> ```nginx
> location /profile/ {
>     root /home/ruoyi/uploadPath/;
> }
> ```
>
> **Nginx查找的文件路径**：
>
> ```wiki
> /home/ruoyi/uploadPath/profile/avatar/1.jpg
> 
> 说明: 这里多了一层 profile
> ```
>
> 
>
> **处理逻辑**：Nginx会将完整的URL路径（`/profile/avatar/1.jpg`）拼接到 `root` 指定的路径后面。

### 底部

没有了



























