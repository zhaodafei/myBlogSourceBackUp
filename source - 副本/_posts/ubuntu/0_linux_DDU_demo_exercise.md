---
title: Linux 命令综合运用
categories: 
- Linux
tags:
- Linux
---
### 统计日志访问量

统计`nginx`中`access.log` 某个接口访问量

```shell
demo01:

日志内容:
2021-03-10T20:29:35+0800|127.0.0.1|-|-|GET|http|127.0.0.1|/goodsList?id=1
2021-03-10T20:29:35+0800|127.0.0.1|-|-|GET|http|127.0.0.1|/goodsList?id=2
2021-03-10T20:29:35+0800|127.0.0.1|-|-|GET|http|127.0.0.1|/goodsList?id=3
2021-03-10T20:29:35+0800|127.0.0.1|-|-|GET|http|127.0.0.1|/goodsList?id=4
2021-03-10T20:29:35+0800|127.0.0.1|-|-|GET|http|127.0.0.1|/goodsList?id=5
2021-03-10T20:29:35+0800|127.0.0.1|-|-|GET|http|127.0.0.1|/goodsList?id=6

统计命令:
cat access.log | grep -i goodsList | awk -F'|' '{print $1}' | uniq -c
```

```shell
demo02:

日志内容:
127.0.0.1 - - [10/Mar/2021:20:29:30 +0800] "GET /api/goods/list?page=1&per_page=10 HTTP/1.1" 200 3538 "http://demo.yizheng_fei.com/web/" 
127.0.0.1 - - [10/Mar/2021:20:29:30 +0800] "GET /api/goods/list?page=2&per_page=10 HTTP/1.1" 200 3521 "http://demo.yizheng_fei.com/web/" 
127.0.0.1 - - [10/Mar/2021:20:29:30 +0800] "GET /api/goods/list?page=3&per_page=10 HTTP/1.1" 200 3575 "http://demo.yizheng_fei.com/web/" 
127.0.0.1 - - [10/Mar/2021:20:29:35 +0800] "GET /api/goods/list?page=4&per_page=10 HTTP/1.1" 200 3615 "http://demo.yizheng_fei.com/web/" 
127.0.0.1 - - [10/Mar/2021:20:29:35 +0800] "GET /api/goods/list?page=5&per_page=10 HTTP/1.1" 200 3469 "http://demo.yizheng_fei.com/web/" 
127.0.0.1 - - [10/Mar/2021:20:30:40 +0800] "GET /api/goods/list?page=6&per_page=10 HTTP/1.1" 200 3499 "http://demo.yizheng_fei.com/web/" 
127.0.0.1 - - [10/Mar/2021:20:30:40 +0800] "GET /api/goods/list?page=7&per_page=10 HTTP/1.1" 200 3457 "http://demo.yizheng_fei.com/web/" 
127.0.0.1 - - [10/Mar/2021:20:30:40 +0800] "GET /api/goods/list?page=8&per_page=10 HTTP/1.1" 200 3465 "http://demo.yizheng_fei.com/web/" 

统计命令
cat access.log | grep -i api/goods/list | awk -F' ' '{print $4}' | uniq -c
```

![01](/img/ubuntu/linux_command/demo_exercise/exercise_01.png "01")





























