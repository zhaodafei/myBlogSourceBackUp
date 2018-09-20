---
title: linux-DDU  显示目录列表  -curl
---
在 linux 中 curl 是一款利用 URL 规则在命令下工作的开源文件传输工具.



### 命令格式

```
mkdir [option] [url]
```

### 选项

```
-m     安安分分分
```

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





https://www.jb51.net/article/118402.htm?tdsourcetag=s_pcqq_aiomsg





http://man.linuxde.net/curl



































































