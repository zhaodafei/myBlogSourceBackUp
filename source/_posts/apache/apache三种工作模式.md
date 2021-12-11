---
title: -Apache 三种工作模式
date: 2015-01-01
categories: 
- Apache
tags:
- Apache
---
Apache 三种工作模式
Apache 三种工作模式
Apache 三种工作模式

<!-- more -->

Apache2.0 支持插入式并行处理模块,成为多路处理模块( MPM)

下面以我使用的 `Apache/2.4.33` 为例子:  

### 查看 `apache` 安装的那种模式

```shell
./bin/apache -V 
./bin/httpd  -V
./bin/apache -l
./bin/httpd -l

[root@localhost apache24]# ./bin/apachectl -V
Server version: Apache/2.4.33 (Unix)
Server built:   May  9 2019 09:09:30
Server's Module Magic Number: 20120211:76
Server loaded:  APR 1.6.3, APR-UTIL 1.6.1
Compiled using: APR 1.6.3, APR-UTIL 1.6.1
Architecture:   64-bit
Server MPM:     event

[root@localhost apache24]# ./bin/httpd -l
Compiled in modules:
  core.c
  mod_so.c
  http_core.c
  event.c
  
###   如果看到event.c 就是 mpm event 模式; 如果是 perfork.c 就是 perfork mp模式

```



### mpm_prefork

```shell
<IfModule mpm_prefork_module>
    StartServers             5
    MinSpareServers          5
    MaxSpareServers         10
    MaxRequestWorkers      250
    MaxConnectionsPerChild   0
</IfModule>
```

### mpm_worker

```shell
<IfModule mpm_worker_module>
    StartServers             3
    MinSpareThreads         75
    MaxSpareThreads        250
    ThreadsPerChild         25
    MaxRequestWorkers      400
    MaxConnectionsPerChild   0
</IfModule>

```

### mpm_event

```shell
<IfModule mpm_event_module>
    StartServers             3
    MinSpareThreads         75
    MaxSpareThreads        250
    ThreadsPerChild         25
    MaxRequestWorkers      400
    MaxConnectionsPerChild   0
</IfModule>

```

### 配置

```
修改里面的参数,需要在 conf/httpd.conf 中去掉 Include conf/extra/httpd-mpm.conf  前面注释
```





























