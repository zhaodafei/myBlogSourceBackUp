---
title:  -head -tail -sed 输出文件中的内容
categories: 
- Linux
tags:
- Linux
- head
- tail
- sed
---
## 命令 head

### 命令格式

```
head [选项] [参数]
```

### 选项

```
-n<数字>：指定显示头部内容的行数；
```

demo

默认显示文件前 10 行内容

参数 n 显示文件的前 2 行

```
#显示文件的前2行
head -2 d01.txt
head -n 2 d01.txt

#输出除了文件最后 2 行的全部内容
head -n -2 d01.txt
```

![root 显示文件的前 2 行](/img/ubuntu/linux_command/linux_head_tail/head_n.png "显示文件的前 2 行")

![root 显示除了文件的最后 2 行](/img/ubuntu/linux_command/linux_head_tail/head_n2.png "显示除了文件的最后 2 行")

## 命令 tail

### 命令格式

```
tail [选项] [参数]
```

### 选项

```
-n<N>或——line=<N>：输出文件的尾部N（N位数字）行内容。
-f<name/descriptor>：显示文件最新追加的内容。“name”表示以文件名的方式监视文件的变化。
-F：与选项“-follow=name”和“--retry"连用时功能相同；
```

demo

默认显示文件最后 10 行内容

选项 n 显示文件最后 2 行内容

```
tail -2 d01.txt
tail -n 2 d01.txt

#从文件第 3 行开始显示内容
tail -n +3 d01.txt
```

![root 显示文件的最后 2 行](/img/ubuntu/linux_command/linux_head_tail/tail_n.png "显示文件的最后 2 行")

![root 从文件第 3 行开始显示内容](/img/ubuntu/linux_command/linux_head_tail/tail_n2.png "从文件第 3 行开始显示内容")

选项 f ,动态显示文件内容

```
ping 127.0.0.1 > d01.log &     #创建动态任务

tail -f d01.log                #动态显示文件内容
```

![root 动态显示文件内容](/img/ubuntu/linux_command/linux_head_tail/tail_f.gif "动态显示文件内容")

选项 tail -F 功能与 tail -f 功能相同，不同的是执行此命令时文件可以不存在

## 命令 sed, 其他使用参考 -sed 整理

```
#显示文件中的指定行内容,显示index.php 中的第2行到第5行内容
sed -n '2,5p' index.php 
```



### 其他

```
#文件中前3行写人到新文件
head -3 index.php > test.php    

#文件中后5行写入到新文件中
tail -5 index.php > test2.php
```















