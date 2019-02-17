---
title: -nginx 
---

nginx 相关使用文章介绍

--------飞-  nginx--------

### 防盗链

```nginx
    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$ {
        # none   允许没有http_refer的请求资源
        # blocked  允许不是 http://开头的,不带协议的请求访问资源
        # *.test22.com  只允许指定域名访问
        valid_referers none blocked *.test22.com;
        if ($invalid_referer) {
            #return 403;
            #return 500;
            rewrite ^/  https://www.baidu.com/img/bd_logo1.png;
        }
        expires 30d;
    }
```

### 强制 Apache 返回一个404状态码

```apacheconf
Redirect 404 /          #访问根目录显示404
Redirect 500 /          #访问根目录显示500
```

