---
title: -curl  一个利用URL规则在命令行下工作的文件传输工具  
date: 2014-01-04
categories: 
- Linux
tags:
- Linux
- curl
---
在 linux 中 curl 是一款利用 URL 规则在命令下工作的开源文件传输工具.

<!-- more -->

以下 demo 中,使用文件  index.php 作为实例演示, index.php 中内容为

```php
//访问本页面的地址为 www.test.com
<?php
print_r($_GET);

echo "分隔符";

print_r($_POST);
```

![test](/img/ubuntu/linux_command/linux_curl/test.png "test")

### 没有参数, 获取页面内容

```
curl  www.test.com
```

![curl](/img/ubuntu/linux_command/linux_curl/curl_01.png "curl")

#### 参数 I 显示 HTTP 头

```
curl -I www.test.com   [显示头信息,不显示内容]

curl -i www.test.com   [显示头和内容]
```

![curl I](/img/ubuntu/linux_command/linux_curl/curl_I.png "curl I")

![curl i](/img/ubuntu/linux_command/linux_curl/curl_ii.png "curl i")

### 链接保存到文件中

```
curl www.test.com > index.html
```

![curl url](/img/ubuntu/linux_command/linux_curl/curl_url.png "curl url")

### 使用 -d  -X发送  POST 请求

```
curl -d "post1=001&post2=002" www.test.com
curl -d "post1=001&post2=002" -X POST www.test.com    # X大写 POST 大写
```

![curl post](/img/ubuntu/linux_command/linux_curl/curl_post.png "curl post")

![curl post](/img/ubuntu/linux_command/linux_curl/curl_post02.png "curl post")

使用 -d -G 发送 GET 请求

```
curl -d "get01=111&get02=002" -G GET www.test.com
```

![curl get](/img/ubuntu/linux_command/linux_curl/curl_get.png "curl get")

































































