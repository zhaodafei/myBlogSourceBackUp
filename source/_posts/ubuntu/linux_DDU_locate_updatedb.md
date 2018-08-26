---
title: linux-DDU  搜索 locate
---
使用 locate 搜索前一般先执行 updatedb 来更新

### 命令格式

```
locate [选项] [参数]
```

### 选项

```
-n 至多显示 n个输出。
-r 使用正规运算式 做寻找的条件。
-c 查询指定文件的数目
```

demo

```
locate pwd
locate -n 2 pwd     [显示2条输出]
locate -r  pwdt.*   [使用正则]
```

![locate 使用正则搜索](/img/ubuntu/linux_command/linux_locate_updatedb/locate_01.png "使用正则搜索")

### 指定位置搜索

```
locate aaa/linux.txt
```

![locate 指定位置搜素](/img/ubuntu/linux_command/linux_locate_updatedb/locate_02.png "指定位置搜素")

### 查询指定文件的数目

```
locate -c  pwd
locate -c  pwdt
```

![locate 查询指定文件的数目](/img/ubuntu/linux_command/linux_locate_updatedb/locate_03.png "查询指定文件的数目")



























