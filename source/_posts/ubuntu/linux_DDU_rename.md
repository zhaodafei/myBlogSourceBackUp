---
title: linux-DDU  文件重命名  -rename
---
### 命令格式，文件重命名

```
rename [-v] [-n] [-f] perlexpr[files]

-v 打印被重命名的文件
-n 只显示被重命名的文件，而不实际重命名
-f 覆盖已经存在的文件

perlexpr 语言格式的正则表达式
```

### demo 

### 把 test02.txt 重命名为 test03.txt

```
 rename 's/test02.txt/test03.txt/' test02.txt
```

![rename](/img/ubuntu/linux_command/linux_rename/rename_01.png "重命名")

### 参数 -v 打印被重命名的文件

```
rename -v 's/test03.txt/test02.txt/' test03.txt
```

![rename v](/img/ubuntu/linux_command/linux_rename/rename_v.png "重命名参数v")

### 参数 -n 只显示被重命名的文件，而不实际重命名

```
 rename -n 's/test02.txt/test03.txt/' test02.txt   [实际没有重命名]
```

![rename n](/img/ubuntu/linux_command/linux_rename/rename_n.png "重命名参数n")

### 参数 -f 覆盖已经存在的文件

```
rename -f 's/test02.txt/test08.txt/' test02.txt
rename -f 's/test02.txt/test08.txt/' *.txt    [也可以] 
```

![rename f](/img/ubuntu/linux_command/linux_rename/rename_f.png "重命名参数f")

![rename f](/img/ubuntu/linux_command/linux_rename/rename_f_2.png "重命名参数f")

## 表达式中 替换用 s ,转化用 y 或者tr

### demo ： 将文件名改为大写

```
rename 'y/a-z/A-Z/' *.txt
rename 'tr/a-z/A-Z/' *.txt
```

![rename 转化](/img/linux_command/linux_rename/rename_zhuanhua.png "重命名 转化")







