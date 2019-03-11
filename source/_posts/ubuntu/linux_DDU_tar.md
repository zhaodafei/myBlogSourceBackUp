---
title: -tar  打包文件
---
首先要弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件

### 命令格式

```
tar [选项] [参数]
```

### 选项

```
-C <目录>：这个选项用在解压缩，若要在特定目录解压缩，可以使用这个选项。
-x或--extract或--get：从备份文件中还原文件
-t或--list：列出备份文件的内容；
-z或--gzip或--ungzip：通过gzip指令处理备份文件；
-f<备份文件>或--file=<备份文件>：指定备份文件；
-v或--verbose：显示指令执行过程；
-j：支持bzip2解压文件；
```

### demo

#### 普通打包

```
tar -cvf aaa_ccc.tar aaa_bbb   #仅打包不压缩
tar -tvf aaa_ccc.tar   #查看包里面文件
tar -xvf aaa_ccc.tar -C /home/fei/web/  #解压到 /home/fei/web/ 目录下
```

![tar cvf](/img/ubuntu/linux_command/linux_tar/tar_cvf.png "tar cvf")

#### 以 gzip 压缩

```
tar -zcvf aaa_bbb.tar.gz aaa_bbb   #打包后，以 gzip 压缩 
tar -ztvf aaa_bbb.tar.gz     #查看包里面文件
tar -zxvf aaa_bbb.tar.gz -C /home/fei/web/  #解压到 /home/fei/web/ 目录下
tar -xvf aaa_bbb.tar.gz -C /home/fei/web/  #没有参数z

由于使用 gzip 压缩aaa_bbb.tar.gz 的文件,所以查看的时候aaa_bbb.tar.gz包内文件时,加上 z 这个参数
tip: 在这里其实没有 z 这个参数有可以查看
```

![tar zcvf](/img/ubuntu/linux_command/linux_tar/tar_cvf.png "tar zcvf")

#### 以 bzip2  压缩

```
tar -jcvf aaa_bbb.tar.bz2 aaa_bbb      #打包后，以 bzip2 压缩 
tar -jtvf aaa_bbb.tar.bz2                 #查看包里面文件
tar -jxvf aaa_bbb.tar.bz2 -C /home/fei/web/  #解压到 /home/fei/web/ 目录下
tar -xvf aaa_bbb.tar.bz2 -C /home/fei/web/  #没有参数j

tip: 在这里其实没有 j 这个参数有可以查看
```

![tar jcvf](/img/ubuntu/linux_command/linux_tar/tar_cvf.png "tar jcvf")





























