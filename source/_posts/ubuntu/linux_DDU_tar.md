---
title: -tar  打包文件
date: 2014-01-04
categories: 
- Linux
tags:
- Linux
- tar
---
tar  打包文件
tar  打包文件

首先要弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件

<!-- more -->

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

```shell
tar -cvf aaa_ccc.tar aaa_bbb   #仅打包不压缩
tar -tvf aaa_ccc.tar   #查看包里面文件
tar -xvf aaa_ccc.tar -C /home/fei/web/  #解压到 /home/fei/web/ 目录下

#打包当前目录,  解压到当前目录
tar -cvf xm_$(date '+%m%d')_01.tar .   #不要丢了这个点
tar -xvf xxx.tar
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

![tar zcvf](/img/ubuntu/linux_command/linux_tar/tar_zcvf.png "tar zcvf")

#### 以 bzip2  压缩

```
tar -jcvf aaa_bbb.tar.bz2 aaa_bbb      #打包后，以 bzip2 压缩 
tar -jtvf aaa_bbb.tar.bz2                 #查看包里面文件
tar -jxvf aaa_bbb.tar.bz2 -C /home/fei/web/  #解压到 /home/fei/web/ 目录下
tar -xvf aaa_bbb.tar.bz2 -C /home/fei/web/  #没有参数j

tip: 在这里其实没有 j 这个参数有可以查看
```

![tar jcvf](/img/ubuntu/linux_command/linux_tar/tar_jcvf.png "tar jcvf")

#### 打包后用当前时间命名

```
tar -cvf fei_$(date '+%Y-%m-%d').tar codeFileName
tar -cvf fei_$(date '+%m%d')_01.tar  codeFileName
```

![tar cvf date](/img/ubuntu/linux_command/linux_tar/tar_cvf_date.png "tar cvf date")

### 排除某个文件打包

参数`exclude`后面不能用正则,可以是目录或者文件名字

```bash
#排除 fei_01.tar 文件打包codeFileName文件
tar -cvf xm_$(date '+%m%d')_backups.tar  --exclude fei_01.tar  codeFileName
tar -cvf xm_$(date '+%m%d')_backups.tar  --exclude xm_$(date '+%m%d')_backups.tar  codeFileName

#排除 fei_01.tar 文件打包当前文件下所有文件
tar -cvf xm_$(date '+%m%d')_backups.tar  --exclude fei_01.tar  .  #不要丢了这个点
```

### 常用命令

```shell
tar -tvf aaa_ccc.tar   #查看包里面文件

#打包当前目录,  解压到当前目录
tar -cvf xm_$(date '+%m%d')_01.tar .  #不要丢了这个点
tar -xvf xxx.tar   #解压到当前目录

#排除fei_01.tar打包当前目录
tar -cvf xm_$(date '+%m%d')_01.tar --exclude fei_01.tar  .  #不要丢了这个点
tar -xvf xxx.tar   #解压到当前目录


```



























