---
title: linux-DDU  显示目录列表  -cat
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

![root 输出行编号](/img/linux_command/linux_cat/cat_n.png "输出行编号")

### 参数 b  输出行数编号，忽略空白行

```
cat -b d01.txt
```

![root 输出行编号,忽略空白行](/img/linux_command/linux_cat/cat_b.png "输出行编号,忽略空白行")

### 输出多个文件内容

```
cat d01.txt d02.txt
```

![root 输出多个文件内容](/img/linux_command/linux_cat/cat_file.png "输出多个文件内容")

### demo 2  把文件内容写入到新文件中

```
cat d01.txt > new.txt           #将文件 d01.txt 内容放入文件 new.txt 中
cat d01.txt d02.txt > new.txt   #将文件 d01.txt 和 d02.txt 内容放入文件 new.txt 中
```

![root 把文件内容写入到新文件中](/img/linux_command/linux_cat/cat_new_file.png "把文件内容写入到新文件中")

![root 把文件内容写入到新文件中02](/img/linux_command/linux_cat/cat_new_file02.png "把文件内容写入到新文件中02")



























