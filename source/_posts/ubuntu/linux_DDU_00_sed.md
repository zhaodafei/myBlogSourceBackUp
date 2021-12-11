---
title: -sed 自动编辑一个或多个文件；简化对文件的反复操作；编写转换程序
date: 2014-01-04
categories: 
- Linux
tags:
- Linux
---
介绍：sed 是实现对流的编辑。要修改原文件记得用参数 i 。
介绍：sed 是实现对流的编辑。要修改原文件记得用参数 i 。
介绍：sed 是实现对流的编辑。要修改原文件记得用参数 i 。

<!-- more -->

###  sed命令格式

```
sed [options] 'command' file(s)
sed [options] -f scriptfile file(s)

sed 选项 '参数/文本中内容/新内容' file(s)
```

### 选项

```
-e<script>或--expression=<script>：以选项中的指定的script来处理输入的文本文件；
-h或--help：显示帮助；
-n或--quiet或——silent：仅显示script处理后的结果；
-V或--version：显示版本信息。
```

### 命令

```
a\ 在当前行下面插入文本。  没有特殊字符直接写 a 即可
i\ 在当前行上面插入文本。  没有特殊字符直接写 i 即可
d 删除，删除选择的行。
D 删除模板块的第一行。
s 替换指定字符
n 读取下一个输入行，用下一个命令处理新的行而不是用第一个命令。
p 打印模板块的行。
q 退出Sed。  
```

### sed 替换标记

```
g 表示行内全面替换。  
p 表示打印行。    
\1 子串匹配标记
& 已匹配字符串标记
```

### sed 元字符集

```
^ 匹配行开始，如：/^sed/匹配所有以sed开头的行。
$ 匹配行结束，如：/sed$/匹配所有以sed结尾的行。
. 匹配一个非换行符的任意字符，如：/s.d/匹配s后接一个任意字符，最后是d。
* 匹配0个或多个字符，如：/*sed/匹配所有模板是一个或多个空格后紧跟sed的行。
[] 匹配一个指定范围内的字符，如/[ss]ed/匹配sed和Sed。  
[^] 匹配一个不在指定范围内的字符，如：/[^A-RT-Z]ed/匹配不包含A-R和T-Z的一个字母开头，紧跟ed的行。
\(..\) 匹配子串，保存匹配的字符，如s/\(love\)able/\1rs，loveable被替换成lovers。
& 保存搜索字符用来替换其他字符，如s/love/**&**/，love这成**love**。
\< 匹配单词的开始，如:/\<love/匹配包含以love开头的单词的行。
\> 匹配单词的结束，如/love\>/匹配包含以love结尾的单词的行。
x\{m\} 重复字符x，m次，如：/0\{5\}/匹配包含5个0的行。
x\{m,\} 重复字符x，至少m次，如：/0\{5,\}/匹配至少有5个0的行。
x\{m,n\} 重复字符x，至少m次，不多于n次，如：/0\{5,10\}/匹配5~10个0的行。
```

## demo

### 选项  i 、n ,    s  ， p 替换文本中指定字符串

```
 sed -i 's/原内容/新内容/g' 文件    #!!!注意这里 g 是全文替换
 !!!注意这个参数并没有实际修改文件的内容
 sed 's/d01.txt/dd0011.txt/' d01.txt      #对流的修改，没有真实修改文件内容
 sed -i 's/d01.txt/dd0011.txt/' d01.txt    # 真实修改文件内容
 
 选项 n 仅显示script处理后的结果 , p 打印模板块的行
 sed -n 's/d01.txt/dd0011.txt/p' d01.txt    #打印发生修改的行，没有真实修改文件
 
 sed 's/d01.txt/dd0011.txt/' d01.txt > d01.txt.tmp   #保存为临时文件
 mv d01.txt.tmp d01.txt   #确认临时文件修改内容争取后替换原文件
```

![sed 参数s](/img/ubuntu/linux_command/linux_sed/sed_s.png "sed 参数s")

![sed 参数n](/img/ubuntu/linux_command/linux_sed/sed_s.png "sed 参数n")

### 定界符

以上命令字符串中使用 / 在 sed 中作为定界符使用，也可以使用任意的定界符

```
 sed 's:d01.txt:dd0011.txt:' d01.txt      #对流的修改，没有真实修改文件内容
 
 在对文本中含有特殊字符的时候可以考虑使用其他定界符，比如，原内容或者新内容中包含（"/" "#"）
 sed -i 's:原内容:新内容:g' 文件名字  sed 's:d01.txt:dd0011.txt:' d01.txt
 sed -i 's,原内容,新内容,g' 文件名字  sed 's,d01.txt,dd0011.txt,' d01.txt
 sed -i 's#原内容#新内容#g' 文件名字  sed 's#d01.txt#dd0011.txt#' d01.txt
 sed -i 's~原内容~新内容~g' 文件名字  sed 's~d01.txt~dd0011.txt~' d01.txt
 
 
```

![sed 定界符](/img/ubuntu/linux_command/linux_sed/sed_01.png "sed 定界符")

### 命令 d  删除操作

```
删除空白行
sed '/^$/d' d01.txt     [ 对流的删除 ]
sed -i '/^$/d' d01.txt  [ 真实删除空白行后，保存 ]

删除文件的第2行
sed '2d' d01.txt

删除文件的第2行到末尾所有行：
sed '2,$d' d01.txt 

删除文件的最后一行
sed '$d' d01.txt

删除文件中所有开头是 hello  的行
sed '/^hello/d' d01.txt

```

![sed 删除](/img/ubuntu/linux_command/linux_sed/sed_d.png "sed 删除")

### 已匹配字符串标记  & ，注意这个符号

```
正则表达式 \w\+ 匹配每一个单词，使用 [&] 替换它，& 对应于之前所匹配到的单词
sed 's/\w\+/[&]/g' d01.txt   [ 使用 & 替换]
sed 's/\w\+/[]/g' d01.txt    [ 空白 ]

sed -i 's/\w\+/[&]/g' d01.txt    [真是替换，并保存]

所有以 hello 开头的行都会被替换成他自己加 hi 
sed 's/^hello/&hi/' d01.txt
```

![sed 替换](/img/ubuntu/linux_command/linux_sed/sed_&.png "sed 替换")

![sed 替换](/img/ubuntu/linux_command/linux_sed/sed_&02.png "sed 替换")

### 字符串匹配标记   \1

```
echo this is digit 6 in a number | sed 's/digit \([0-9]\)/\1/'
echo this is digit 6 in a number | sed 's/digit \([0-9]\)/\1test/'

echo this is test 6 | sed 's/test \([0-9]\)/\1/'
echo this is test 6 | sed 's/test \([0-9]\)/\1test/'
```

命令中 digit 6，被替换成了 6。样式匹配到的子串是 7，\(..\) 用于匹配子串，对于匹配到的第一个子串就标记为 \1，依此类推匹配到的第二个结果就是 \2，例如：

```
echo aaa BBB | sed 's/\([a-z]\+\) \([A-Z]\+\)/\2 \1/'
echo aaa BBB | sed 's/\([a-z]\+\) \([A-Z]\+\)/\1 \2/'
```

![sed 字符串标记](/img/ubuntu/linux_command/linux_sed/sed_str_mark.png "sed 字符串标记")

```
hi 被标记为 1 ,所有 hiLinux 会被替换成 hiUbuntu, 并打印出来
sed -n 's/\(hi\)Linux/\1Ubuntu/p' d01.txt
```

![sed 字符串标记](/img/ubuntu/linux_command/linux_sed/sed_str_mark02.png "sed 字符串标记")

### 选项 e 允许在同一行里执行多条命令

```
sed -e '1,2d' -e 's/d01.txt/dd0011.txt/'  d01.txt   

第一条命令，删除1到2行，第二条命令用 dd0011.txt 替换 d01.txt。 这两条命令的前后顺序有影响，如果两个命令都是替换命令，那么第一个替换命令将影响第二个替换命令的结果
```

![sed 多条命令执行](/img/ubuntu/linux_command/linux_sed/sed_e.png "sed 多条命令执行")

### 退出  命令： q

```
打印挖第3行后，退出sed
sed '3q' d01.txt
```

![sed 退出](/img/ubuntu/linux_command/linux_sed/sed_q.png "sed 退出")

### 打印奇数行或偶数行

```
sed -n 'p;n' d01.txt  #奇数行
sed -n 'n;p' d01.txt  #偶数行

或者
sed -n '1~2p' d01.txt  #奇数行
sed -n '2~2p' d01.txt  #偶数行
```

![sed 奇数偶数行](/img/ubuntu/linux_command/linux_sed/sed_pn.png "sed 奇数偶数行")

### 插入新一行内容

```
 sed '4a\我是新添加行内容' d01.txt    #在第4行后插入下一行
 sed '4a我是新添加行内容' d01.txt     #在第4行后插入下一行,[没有特殊字符不用加 \ 也行]
 sed '/hello/a\我是新添加行内容' d01.txt  #在所有包含 hello 行后面插入下一行
 
 sed '4i\我是新添加行内容' d01.txt    #在第4行前插入下一行
 sed '4i我是新添加行内容' d01.txt     #在第4行前插入下一行,[没有特殊字符不用加 \ 也行]
 sed '/hello/i\我是新添加行内容' d01.txt  #在所有包含 hello 行前面面插入下一行
```

![sed 插入下一行](/img/ubuntu/linux_command/linux_sed/sed_insert.png "sed 插入下一行")

### 替换某一行内容

```
sed  "1s/.*/第一行全部替换新内容/" d01.txt    #把第一行内容全部替换
sed  "2s/.*/第二行全部替换新内容/" d01.txt    #把第二行内容全部替换
```

![sed 替换具体的某一行](/img/ubuntu/linux_command/linux_sed/sed_line_replace.png "sed 替换具体的某一行")

## 其他

```
sed -i 's/d01.txt/dd0011.txt/' d01.txt    # 真实修改文件内容 用参数 i

某些转义符
\n  表示新的一行
\r  表示回车
\t  表示水平制表符
\v  表示垂直制表符
\b  表示后退符
\a  表示"alert"(蜂鸣或者闪烁)
\0xx 转换为八进制的ASCII码

#显示文件中的指定行内容,显示index.php 中的第2行到第5行内容
sed -n '2,5p' index.php 
```



### `linux` 三剑客

 [grep命令](../linux_DDU_00_grep/ "grep命令")
 [sed命令](../linux_DDU_00_sed/ "sed命令")
 [awk命令](../linux_DDU_00_awk/ "awk命令")











