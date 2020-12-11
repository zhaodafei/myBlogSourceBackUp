title:    -grep  查找文件里符合条件的字符串

### 命令格式

```
grep  [选项]  [文件]
```

### 命令参数

```
-a 不要忽略二进制数据。
-A<显示列数> 除了显示符合范本样式的那一行之外，并显示该行之后的内容。
-b 在显示符合范本样式的那一行之外，并显示该行之前的内容。
-c 计算符合范本样式的列数。
-C<显示列数>或-<显示列数>  除了显示符合范本样式的那一列之外，并显示该列之前后的内容。
-d<进行动作> 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep命令将回报信息并停止动作。
-e<范本样式> 指定字符串作为查找文件内容的范本样式。
-E 将范本样式为延伸的普通表示法来使用，意味着使用能使用扩展正则表达式。
-f<范本文件> 指定范本文件，其内容有一个或多个范本样式，让grep查找符合范本条件的文件内容，格式为每一列的范本样式。
-F 将范本样式视为固定字符串的列表。
-G 将范本样式视为普通的表示法来使用。
-h 在显示符合范本样式的那一列之前，不标示该列所属的文件名称。
-H 在显示符合范本样式的那一列之前，标示该列的文件名称。
-i 忽略字符大小写的差别。
-l 列出文件内容符合指定的范本样式的文件名称。
-L 列出文件内容不符合指定的范本样式的文件名称。
-n 在显示符合范本样式的那一列之前，标示出该列的编号。
-q 不显示任何信息。
-R/-r 此参数的效果和指定“-d recurse”参数相同。
-s 不显示错误信息。
-v 反转查找。
-w 只显示全字符合的列。
-x 只显示全列符合的列。
-y 此参数效果跟“-i”相同。
-o 只输出文件中匹配到的部分。
```

### 在文件中搜索一个单词，命令会返回一个包含 PHP 的文本【行或者段落】

```
grep PHP aaa.txt
grep php aaa.txt
```

![grep 文件中搜索单词](/img/ubuntu/linux_command/linux_grep/grep.png "grep 搜索")

### 多个文件中搜索，命令会返回一个包含 PHP 的文本【行或者段落】

```
grep php aaa.txt bbb.txt
```

![grep 文件中搜索单词](/img/ubuntu/linux_command/linux_grep/grep_02.png "grep 搜索")

### 选项 -v 输出除 xxxxxx  之外的所有行或者段落

```
grep -v php aaa.txt
```

![grep 文件中搜索单词](/img/ubuntu/linux_command/linux_grep/grep_03.png "grep 搜索")

### 选项 -E  使用正则表达式

```
grep -E "[1-9]+" aaa.txt  或者
egrep "[1-9]+" aaa.txt
```

![grep 正则](/img/ubuntu/linux_command/linux_grep/grep_E.png "grep 正则")

### 选项  -o 只输出文件中匹配到的部分

```
grep -o php aaa.txt
grep -o PHP aaa.txt
```

![grep 输出匹配部分](/img/ubuntu/linux_command/linux_grep/grep_o.png "grep 输出匹配部分")

### 选项  -c  统计文本或者文本中包含匹配字符串的行数[  选项 -n   ]

```
统计
grep -c "PHP" aaa.txt

选项 -n 输出包含匹配字符串的行数
grep -n "PHP" aaa.txt
grep -n "php" aaa.txt
```

![grep 统计匹配行数](/img/ubuntu/linux_command/linux_grep/grep_c.png "grep 统计匹配行数")

![grep 输出匹配行数](/img/ubuntu/linux_command/linux_grep/grep_n.png "grep 输出匹配行数")

### 选项 -l  搜索多个文件并查找匹配文本在那个文件中

```
grep -l php aaa.txt bbb.txt
grep -l php *.txt
grep -l PHP *.txt
```

![grep 文件中搜索](/img/ubuntu/linux_command/linux_grep/grep_l.png "grep 文件中搜索")

### 选项  -r 递归搜索文件

```
grep PHP . -r         [ . 表示当前目录]
grep PHP . -r -n
grep PHP /home/www/test -r -n     [ 指定目录 ]
```

![grep 递归搜索](/img/ubuntu/linux_command/linux_grep/grep_r.png "grep 递归搜索")

### 选项 -i 忽略大小写搜索文件

```
grep -i php  aaa.txt
```

![grep 忽略大小写搜索](/img/ubuntu/linux_command/linux_grep/grep_i.png "grep 忽略大小写搜索")

### 选项 -e 扩展多个匹配样式

```
grep -e php -e The aaa.txt  [ 搜索 PHP、搜索 The ]
```



### 选项 -q  静默输出，一般配合 if  逻辑判断

```
if  grep -q hello aaa.txt ; then echo yes;else echo no; fi
if  grep -q php aaa.txt ; then echo yes;else echo no; fi

grep -q php aaa.php
grep -q hello aaa.php

不会输出任何内容，命令运行成功返回 0 ，失败返回非 0 值，一般配合逻辑判断使用
```

![grep 一般配合逻辑判断](/img/ubuntu/linux_command/linux_grep/grep_q.png "grep 一般配合逻辑判断")

### 选项   -A   -B   -C   显示匹配结果之后行、之前行、之前之后行

```
测试文件 aaa.php 内容如下，注意看行号：
  1 I am aaa.php
  2 222
  3 hello world 3 line
  4 444
  5 hello  php  grep_test
  6 666
  7 hello world 7 line
  8 888
  9 hello world


grep -A1 -n  php aaa.php   [ 1代表显示多少行，-n 表示显示行号]
显示匹配结果之后 1 行
grep -A1 -n  php aaa.php   [ 匹配结果之后的1行 ]
grep -B1 -n  php aaa.php   [ 匹配结果之前的1行 ]
grep -C1 -n  php aaa.php   [ 匹配结果之前的1行和之后一行]

grep -C1 -n  php aaa.php 
```

![grep 前后](/img/ubuntu/linux_command/linux_grep/grep_ABC.png "grep 前后")



### 其他：

grep家族总共有三个：grep，egrep，fgrep。

### `linux` 三剑客

 [grep命令](./linux_DDU_grep/ "grep命令")
 [sed命令](./linux_DDU_sed/ "sed命令")
 [sed命令](./linux_DDU_sed/ "sed命令")





























