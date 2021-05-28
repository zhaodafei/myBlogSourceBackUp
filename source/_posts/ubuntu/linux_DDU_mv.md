---
title:  -mv   移动或重命名文件/目录
categories: 
- Linux
tags:
- Linux
- mv
---
### 移动文件

移动文件时需要注意的是文件的源地址和目标地址必须不同。这里有个例子，想要将file_1.txt文件从当前目录移动到其它目录，以/home/destination_file为例，语法应该如下：

```
mv file_1.txt /home/destination_file/
```
<img src="/img/ubuntu/linux_command/linux_mv/mv.png" alt="linux mv">
### 移动多个文件

如果想一次移动多个文件，我们可以将他们放在一行并用空格分开。

```
mv file_2.txt file_3.txt file_4.txt /home/destination_file/
或者
mv file_{2,3,4}.txt /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_mv/mv_much.png" alt="linux mv 移动多个文件夹">

如果你的文件夹有规律可循那么你就可以使用通配符，比如，为了移除所有以.txt为扩展名的文件夹，我们可以使用下面的命令：

```
mv *.txt /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_mv/mv_much02.png" alt="linux mv 移动多个文件夹">

### 移动目录

不同于复制命令，用mv命令移动目录相当于直接。移动目录你可以使用不带选项的mv命令。

```
mv /soruce_file/ /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_mv/mv_directory.png" alt="linux mv 移动目录">

### 重命名文件或目录

我们也用mv命令来重命名文件或目录，不过目标位置必须相同才可以。然后文件名字必须不同。假定我们当前做所在目录为/home/soruce_file

```
mv file_1.txt file_new1.txt
如果是绝对路径，应该像下面这样：
mv /home/soruce_file/file_2.txt /home/soruce_file/file_new2.txt
```

<img src="/img/ubuntu/linux_command/linux_mv/mv_re_directory.png" alt="linux mv 重命名文件或目录">

### 重命名目录

```
上一段的规则同样适用于目录。
mv /home/soruce_file/ /home/soruce_file2/
```

<img src="/img/ubuntu/linux_command/linux_mv/mv_re_directory02.png" alt="linux mv 重命名文目录">

### 打印移动信息

当你移动或重命名一大堆文件或目录时，你可能会想在不去目标位置去查看的情况下知道自己的命令是否成功地执行了。这就用到-v选项了。

```
mv -v  /home/soruce_file2/*.txt /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_mv/mv_v.png" alt="linux mv 打印移动信息">

### 使用交互模式

当你将文件移动到其他位置，而那个位置恰好有同样的文件，这时mv命令会覆盖掉原来的文件，对于mv的这一行为一般不会有什么提示。如果想产生一个关于覆盖文件的提示，我们可以使用-i选项。

```
mv -i /home/soruce_file2/file_3.txt /home/destination_file/

```

这个提示会让我们知道目标位置处file_3.txt的存在。如果我们按y键，那么那个文件将会被删除，否则不会

<img src="/img/ubuntu/linux_command/linux_mv/mv_i.png" alt="linux mv 移动文件是否覆盖">

### 使用更新选项

-i 选项会提示我们关于覆盖文件的提示，而 -u 则只在源文件比目标文件新时才执行更新，如果目标文件比源文件新，则不会执行。让我们看一看下面的例子：

```
mv -uv /home/soruce_file2/*.txt /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_mv/mv_u.png" alt="linux mv 移动文件最新是否覆盖">

### 不要覆盖任何已存在的文件

如果-i选项询问我们是否覆盖文件，那么-n选项将不会允许我么覆盖任何已存在的文件，

```
mv -vn /home/soruce_file2/file_new_time2.txt  /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_mv/rm_n.png" alt="linux mv 移动文件最新是否覆盖">

### 复制时创建备份

默认情况下，移动文件将会覆盖已存在的目标文件。但是如果我们移动错了文件而目标文件已经被新的文件覆盖了，这时应该怎么办才好呢？-b选项可以办到，该选项会在新文件覆盖旧文件时将旧文件做备份。

```
 mv -bv /home/soruce_file2/file_new_time2.txt  /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_mv/mv_b.png" alt="linux mv 移动文件并备份">

### 无条件覆盖已经存在的文件

覆盖已经存在的文件或目录，使用-f选项。如果同时指定了 -f 选项和 -i 或 -n 选项，则 -f 选项会覆盖它们——即不进行任何提示而覆盖。所以在使用此参数的时候，你要保持头脑清醒，知道自己在做什么。

```
mv -f /home/soruce_file2/file_new_time2.txt  /home/destination_file/
```

### 总结

移动文件和目录命令是Linux系统的基本命令。通常你可以通过man mv 或者 mv –help显示mv的手册页以了解更多详细信息。

























