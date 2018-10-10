---
title: linux-DDU -ln  为文件创建连接  
---
### ln 使用的时候要写全路径,否则编辑链接后的文件可能会出现错误:

```
root@ubuntu:/home/fei/web# tail -f index.html 
tail: cannot open 'index.html' for reading: Too many levels of symbolic links
tail: no files remaining
root@ubuntu:/home/fei/web# ll
```

![ln error](/img/linux_command01_2017_1224/linux_00/error.png "ln error")

### 命令格式
```
ln [参数] [源文件或目录][目标文件或目录]
```

### demo 硬链接
```
ln /home/fei/www/index.html /home/fei/web/    
ln /home/fei/www/index.html /home/fei/web/index.txt # [硬链接]源文件变化后.链接的文件也随着变化
```

![ln](/img/linux_command01_2017_1224/linux_00/ln.png "ln")

硬链接
链接文件删除后,源文件不影响; 
删除源文件后,链接文件不收影响
![链接文件删除后,源文件不影响](/img/linux_command01_2017_1224/linux_00/ln_001.png "链接文件删除后,源文件不影响")
![删除源文件后,链接文件不收影响](/img/linux_command01_2017_1224/linux_00/ln_002.png "删除源文件后,链接文件不收影响")


### 软连接符号 -s   [ 想当与windows中的快捷方式]
```
ln -s /home/fei/www/test01.txt /home/fei/web/
ln -s /home/fei/www/test05.txt /home/fei/web/test_05.txt  #test01.txt 源文件变化后.链接的文件也随着变化
```

![ln s](/img/linux_command01_2017_1224/linux_00/ln_s.png "ln s 软连接符号")

软连接符号 -s
链接文件删除后,源文件不影响; 
删除源文件后,链接文件失效
![链接文件删除后,源文件不影响](/img/linux_command01_2017_1224/linux_00/ln_01.png "链接文件删除后,源文件不影响")
![删除源文件后,链接文件失效](/img/linux_command01_2017_1224/linux_00/ln_02.png "删除源文件后,链接文件失效")







































































