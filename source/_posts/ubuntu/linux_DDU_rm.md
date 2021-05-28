---
title: -rm  删除文件或目录
categories: 
- Linux
tags:
- Linux
- rm
---
### 命令格式

```
rm [选项] 文件…
```

### 命令参数

​    -d：   直接把欲删除的目录的硬连接数据删除成0，删除该目录；
​    -f, --force       忽略不存在的文件，从不给出提示。
​    -i, --interactive    进行交互式删除
​    -r, -R, --recursive       指示rm将参数中列出的全部目录和子目录均递归地删除。
​    -v, --verbose        详细显示进行的步骤
​       --help               显示此帮助信息并退出
​       --version          输出版本信息并退出

### 选项  i  交互式删除

```
rm -i aaa.txt baa.txt
```

![linux rm 交互式删除](/img/ubuntu/linux_command/linux_rm/rm_i.png "linux rm 交互式删除")

### 选项  r  递归删除目录及子目录中文件

```
rm -r aaa/
```

![linux rm 递归删除](/img/ubuntu/linux_command/linux_rm/rm_r.png "linux rm 递归删除")

### 选项  f  直接删除没有任何提示

```
rm -f bbaa.txt
```

![linux rm 直接删除](/img/ubuntu/linux_command/linux_rm/rm_f.png "linux rm 直接删除")

### 选项  v  详细显示进行的步骤

```
rm -v bbb.txt
```

![linux rm  详细显示进行的步骤](/img/ubuntu/linux_command/linux_rm/rm_v.png "linux rm  详细显示进行的步骤")

### 选项  i  交互式删除，某一类文件

```
rm -i *aa.txt
```

![linux rm 交互式删除](/img/ubuntu/linux_command/linux_rm/rm_i_regex01.png "linux rm 交互式删除")

### 排除指定文件删除

```
删除所有 txt 结尾的文件，除了 aaa.txt 

rm `ls *.txt|egrep -v aaa.txt`

rm `ls *.txt|egrep -v '(aaa.txt|bbb.txt|ccc.txt)'`

rm `ls *.txt|egrep -v '(aaa.*)'`

rm `ls *.txt|egrep -v '(*.md)'`
```

![linux rm 排除指定文件删除](/img/ubuntu/linux_command/linux_rm/rm_other_01.png "linux rm 排除指定文件删除")

![linux rm 排除指定文件删除](/img/ubuntu/linux_command/linux_rm/rm_other_02.png "linux rm 排除指定文件删除")

![linux rm 排除指定文件删除](/img/ubuntu/linux_command/linux_rm/rm_other_04.png "linux rm 排除指定文件删除")

rm命令可以用 -i 选项，这个选项在使用文件扩展名字符删除多个文件时特别有用



………………………………unlink 命令删除文件，不能删除目录…………………………

demo: 删除文件 test02.txt 

```
unlink test02.txt
```

![unlink 删除文件](/img/ubuntu/linux_command/linux_rm/unlink.png "unlink 删除文件")



















