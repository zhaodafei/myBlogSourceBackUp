---
title: llinux-DDU shell 脚本  -sh
---
### 简单shell，打印昨天时间，并输出到屏幕上，注意 反引号

echo  把执行命令的返回结果输出到屏幕上

```
#!/bin/bash
echo 'date -d yesterday +%Y%m%d'  #没有使用反引号

echo `date -d yesterday +%Y%m%d`  #使用反引号，输出昨天时间
echo `ls /www`                    #使用反引号，显示 www 目录下文件
touch /www/test.txt               #在 www 目录下创建 test.txt 文件
```

![demo shell](/img/linux_command/linux_sh/sh_01.png "demo shell")































