---
title:  -cat  连接文件并打印到标准输出设备上 -split 切割文件
categories: 
- Linux
tags:
- Linux
- cat
- split
---
### 命令格式

```
cat [选项] [参数]
```

### 选项

```
-n或-number：有1开始对所有输出的行数编号；
-b或--number-nonblank：和-n相似，只不过对于空白行不编号；
```

### 参数  n  输出行数编号

```
cat -n d01.txt
```

![cat 输出行编号](/img/linux_command/linux_cat/cat_n.png "输出行编号")

### 参数 b  输出行数编号，忽略空白行

```
cat -b d01.txt
```

![cat 输出行编号,忽略空白行](/img/linux_command/linux_cat/cat_b.png "输出行编号,忽略空白行")

### 输出多个文件内容

```
cat d01.txt d02.txt
```

![cat 输出多个文件内容](/img/linux_command/linux_cat/cat_file.png "输出多个文件内容")

### demo 2  把文件内容写入到新文件中

```
cat d01.txt > new.txt           #将文件 d01.txt 内容放入文件 new.txt 中
cat d01.txt d02.txt > new.txt   #将文件 d01.txt 和 d02.txt 内容放入文件 new.txt 中
```

![cat 把文件内容写入到新文件中](/img/linux_command/linux_cat/cat_new_file.png "把文件内容写入到新文件中")

![cat 把文件内容写入到新文件中02](/img/linux_command/linux_cat/cat_new_file02.png "把文件内容写入到新文件中02")

## split 切割文件

```
#参数
# -a 指定长度
# -d 指定数字
# -l 按行数切割文件
# -b 按大小切割文件

split -l 7 test.txt  # l 选项根据文件行数切割,每7行切割为一个文件
```

![split -l 按行数切割文件](/img/linux_command/linux_cat/split_l.png "按行数切割文件")

### 指定为数字后缀切割

```
#-d 指定为数字后缀, -a 指定数字长度
split -l 7 test.txt -d -a 4
#-a 指定长度  
split -l 7 -a 4 test.txt
#前缀为fei_
split -l 7 -a 4 test.txt fei_
```

![split -lda](/img/linux_command/linux_cat/split_lda.png "lda")

![split -la](/img/linux_command/linux_cat/split_la.png "la")

![split 前缀](/img/linux_command/linux_cat/split_pre.png "前缀")

### 按大小切割文件

```
split -b 100 test.txt  #每100kb切割文件
```

![split -b 按大小切割文件](/img/linux_command/linux_cat/split_b.png "按大小切割文件")

### 当用split 分割好文件后,使用cat可以把文件合并为原来的文件

```
split -l 7 -a 4 test.txt fei_   #分割文件
cat fei_a* > bbb.txt            #合并文件
```

![分割文件&&合并文件](/img/linux_command/linux_cat/split_cat.png "分割文件&&合并文件")



















