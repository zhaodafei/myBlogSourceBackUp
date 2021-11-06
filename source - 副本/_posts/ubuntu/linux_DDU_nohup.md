---
title: linux-DDU  将进程挂起  -nohup
categories: 
- Linux
tags:
- Linux
- nohup
---
`nohup` 命令可以将程序以忽略挂起信号的方式运行起来，被运行的程序的输出信息将不会显示到终端

经常和 & 连用, 通俗理解:  后台运行,关闭当前窗口后命令也可以继续运行

### 常用命令

```
nohup command>/dev/null 2>&1 &

# nohup 忽略挂起信号
# &  后台运行
# command>/dev/null  这条命令输出重定向到空设备
# 2>&1  把标准输出错误重定向到标准输出, &1对标准输出的引用
# /dev/null 表示空设备文件
# 0 表示stdin标准输入
# 1 表示stdout标准输出
# 2 表示stderr标准错误

---- demo ---
nohup php fei.php > fei.log 2>&1 &
##关闭当前窗口改命令也可以继续在后台运行

nohup php fei.php >> fei.log 2>&1 &  
### 把日志追加到 fei.log 文件中
```

![nohup 2>&1 &](/img/ubuntu/linux_command/linux_nohup/nohup.png "nohup 2>&1 &")

### 其他

```
使用nohup命令提交作业，如果使用nohup命令提交作业，那么在缺省情况下该作业的所有输出都被重定向到一个名为nohup.out的文件中，除非另外指定了输出文件：

nohup command > myout.file 2>&1 &

# nohup 忽略挂起信号
# &  后台运行
# command > myout.file  这条命令输出重定向到myout.file中
# 2>&1  把标准输出错误重定向到标准输出

---- demo ---
./test.sh > fei.log 2>&1
```

![2>&1](/img/ubuntu/linux_command/linux_nohup/2_1.png "2>&1")































