---
title: linux-DDU -ln  为文件创建连接  
---
### 命令格式

```
ln [参数] [源文件或目录][目标文件或目录]
```

### demo

```
ln index.html /home/fei/web/index.copy     #index.copy 就是index.html 的一个快捷方式 [硬链接]
```

![ln](/img/linux_command01_2017_1224/linux_00/ln.png "ln")

### 软连接符号 -s

```
ln -s index.html /home/fei/web/index.copy  
```































