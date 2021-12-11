---
title:  -scp  Linux之间复制文件和目录
date: 2014-01-04
categories: 
- Linux
tags:
- Linux
- scp
---
scp  Linux之间复制文件和目录

### scp 简介

scp是secure copy的简写，用于在Linux下进行远程拷贝文件的命令，和它类似的命令有cp，<font color="red">不过cp只是在本机进行拷贝不能跨服务器</font>，而且scp传输是加密的。可能会稍微影响一下速度。当你服务器硬盘变为只读 read only system时，用scp可以帮你把文件移出来。另外，scp还非常不占资源，不会提高多少系统负荷，在这一点上，rsync就远远不及它了。虽然 rsync比scp会快一点，但当小文件众多的情况下，rsync会导致硬盘I/O非常高，而scp基本不影响系统正常使用

<!-- more -->

### 命令格式
scp \[参数\]  \[原路径\]  \[目标路径\]

### 命令参数

-1 强制scp命令使用协议ssh1
-2 强制scp命令使用协议ssh2
-4 强制scp命令只使用IPv4寻址
-6 强制scp命令只使用IPv6寻址
-B 使用批处理模式（传输过程中不询问传输口令或短语）
-C 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）
-p 保留原文件的修改时间，访问时间和访问权限。
-q 不显示传输进度条。
-r 递归复制整个目录。
-v 详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。
-c cipher 以cipher将数据传输进行加密，这个选项将直接传递给ssh。
-F ssh_config 指定一个替代的ssh配置文件，此参数直接传递给ssh。
-i identity_file 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。
-l limit 限定用户所能使用的带宽，以Kbit/s为单位。
-o ssh_option 如果习惯于使用ssh_config(5)中的参数传递方式，
-P port 注意是大写的P, port是指定数据传输用到的端口号
-S program 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项

### 使用实例

使用scp前提：两台服务器必须都安装 ssh

#### 从本地服务器复制到远程服务器

#### 复制文件

```
注意目标文件的权限:
scp local_file remote_username@remote_ip:remote_folder
或者
scp local_file remote_username@remote_ip:remote_file
或者
scp local_file remote_ip:remote_folder
或者
scp local_file remote_ip:remote_file

demo：
scp test2_01.test dafei@192.168.1.113:/data/www/test/

```

第1,2个指定了用户名，命令执行后需要输入用户密码，
第1个仅指定了远程的目录，文件名字不变，
第2个指定了文件名 
第3,4个没有指定用户名，命令执行后需要输入用户名和密码（默认使用root），
第3个仅指定了远程的目录，文件名字不变，
第4个指定了文件名

![scp 本地拷贝到远程复制文件](/img/ubuntu/linux_command/linux_scp/scp_local_remote01.png "本地拷贝到远程复制文件")

#### 复制目录

```
-r参数不要遗漏：【否则报错： not a regular file】
scp -r local_folder remote_username@remote_ip:remote_folder
或者
scp -r local_folder remote_ip:remote_folder 

demo:
scp -r test2 dafei@192.168.1.113:/data/www/test/
```

第1个指定了用户名，命令执行后需要输入用户密码； 
第2个没有指定用户名，命令执行后需要输入用户名和密码(默认使用root)；

![scp 本地拷贝到远程复制目录](/img/ubuntu/linux_command/linux_scp/scp_local_remote02.png "scp 本地拷贝到远程复制目录")

#### 从远程服务器复制到本地服务器

从远程复制到本地的scp命令与上面的命令雷同，只要将从本地复制到远程的命令后面2个参数互换顺序就行了

从远程拷贝文件到本地目录

```
scp root@remote_ip:remote_file local_folder
demo：
scp dafei@192.168.1.87:/data/www/test2/test2_01.test  /data/www/test/
```

![scp 远程拷贝文件到本地](/img/ubuntu/linux_command/linux_scp/scp_remote_locat01.png "scp 远程拷贝文件到本地")

#### 从远处复制目录到本地

```
scp -r root@remote_ip:remote_folder local_folder
demo:
scp -r dafei@192.168.1.87:/data/www/test2 /data/www/test/
```

![scp 远程拷贝目录到本地](/img/ubuntu/linux_command/linux_scp/scp_remote_locat02.png "scp 远程拷贝目录到本地")





### 其他

 [expect-nt](https://github.com/an7oine/expect-nt/tree/master/original-5.21r1b1 "expect-nt")























