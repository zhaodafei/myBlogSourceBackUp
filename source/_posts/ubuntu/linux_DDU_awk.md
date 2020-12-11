---
title: linux -DDU  文本处理  -awk
---
### 命令格式

```shell
awk [options] 'script' var=value file(s)
awk [options] -f scriptfile var=value file(s)

-f 指定输入定界符
-v 赋值一个用户定义变量
```

### awk 脚本基本结构

```shell
awk 'BEGIN{ print "start" } pattern{ commands } END{ print "end" }' file
```

### DEMO

```shell
###测试内容如下 
001  title    author   date
002 ****      ******   *****
003 PHP        dafei_03  2015-01-01
004 HTML       dafei_04  2015-01-15
005 Java       dafei_05  2015-03-03
006 MySQL      dafei_06  2015-04-04
007 Oracle     dafei_07  2015-01-04
008 JavaScript     dafei_08  2015-12-12
```



### 没有任何参数

```shell
#显示文本所有内容
awk '{print}' fei.txt  
```

![基础命令](/img/ubuntu/linux_command/linux_awk/awk_001.png "基础命令")

### awk  print

```shell
awk '{print $2}' fei.txt    #或者
cat fei.txt  | awk '{print $2}'

cat fei.txt  | awk '{print $2}' | sort -r -n
awk '{print $2}' fei.txt | sort -r -n

awk '{print $NF}' fei.txt      #打印一行中最后1个字段
awk '{print $(NF-2)}' fei.txt  #打印一行中倒数第2个字段
awk '{print $2}' fei.txt       #打印一行中第2个字段
awk '{print $2,$3}' fei.txt    #打印一行中第2个和第3个字段

awk 'END{ print NR }' fei.txt  #统计文件中行数
awk '{ print NR }' fei.txt   #显示每一行的行号
```

![awk print ](/img/ubuntu/linux_command/linux_awk/awk_print.png "awk print")

###  `-v` 指定定界符

```shell
#默认是空白字符
awk -F: '{ print $NF }' /etc/passwd
或
awk 'BEGIN{ FS=":" } { print $NF }' /etc/passwd

head -3 /etc/passwd | awk -F: '{ print $NF }' 
head -3 /etc/passwd | awk 'BEGIN{ FS=":" } { print $NF }'  
tail -3 fei.txt | awk -F- '{ print $NF }' 
```

![awk 使用定界符 ](/img/ubuntu/linux_command/linux_awk/awk_f.png "awk 使用定界符")

###   `-V`  使用变量 

```shell
awk 'BEGIN{ print "start" } { print } END{ print "end" }' fei.txt
echo | awk '{ var1="v1"; var2="v2"; var3="v3"; print var1,var2,var3; }'  #v1 v2 v3
echo | awk '{ var1="v1"; var2="v2"; var3="v3"; print var1"="var2"="var3; }'  #双引号拼接 v1=v2=v3

#使用外部变量
##使用 `-v` 选项
VAR=10000
echo | awk -v VARIABLE=$VAR '{ print VARIABLE }'

##不使用 `-v` 选项
var1="aaa"
var2="bbb"
echo | awk '{ print v1,v2 }' v1=$var1 v2=$var2
```

![awk 使用变量 ](/img/ubuntu/linux_command/linux_awk/awk_var.png "awk 使用变量")

### 运算

```shell
[root@localhost fei_test]# awk 'BEGIN{a=1; print a++,++a;}'
1 3
[root@localhost fei_test]# awk 'BEGIN{a="b";print a=="b"?"ok":"err";}'
ok
[root@localhost fei_test]# 
```

### next 跳行

```shell
[root@localhost fei_test]# awk 'NR%2==1{next}{print NR,$0;}' fei.txt 
2 002 ****      ******   *****
4 004 HTML       dafei_04  2015-01-15
6 006 MySQL      dafei_06  2015-04-04
8 008 JavaScript     dafei_08  2015-12-12
[root@localhost fei_test]# 		
```

![awk next ](/img/ubuntu/linux_command/linux_awk/awk_next.png "awk next")

### 输出到一个文件

```shell
echo | awk '{printf("hello word") > "daFei.php"}'
或
echo | awk '{printf("hello word \n\r") >> "daFei.php"}'
```

### 其他  `awk` 和 `grep` 正则区别

```shell
[root@localhost fei_test]# awk '/^mysql/{print}' /etc/passwd
mysql:x:987:1001::/home/mysql:/bin/false
[root@localhost fei_test]# 
[root@localhost fei_test]# 
[root@localhost fei_test]# grep "^mysql" /etc/passwd
mysql:x:987:1001::/home/mysql:/bin/false
[root@localhost fei_test]# 
```

![awk grep区别 ](/img/ubuntu/linux_command/linux_awk/awk_grep.png "awk grep区别")

### `linux` 三剑客

 [grep命令](./linux_DDU_grep/ "grep命令")
 [sed命令](./linux_DDU_sed/ "sed命令")
 [sed命令](./linux_DDU_sed/ "sed命令")















