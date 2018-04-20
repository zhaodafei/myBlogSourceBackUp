---
title: linux-DDU 创建文件和目录的副本  -cp
---
### 不带任何参数,运行cp

cp最基本命令，拷贝file_3.txt 从一个位置复制到另一个位置

```
ls -all     【递归展示目录本文中会多次用到】
----------------------------
cp file_3.txt /home/destination_file
或者
cp /home/soruce_file2/file_3.txt /home/destination_file
```

<img src="/img/ubuntu/linux_command/linux_cp/cp.png" alt="cp" title="cp">

### 拷贝多个文件

拷贝多个文件，我们只需将文件名字用空格隔开。或者使用*拷贝所有文件

```
cp file_3.txt file_4.txt /home/destination_file
cp *  /home/destination_file       【拷贝所有文件，注意观察截图，aaa目录没有拷贝成功，稍后解决】
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_02.png" alt="cp 多个文件" title="cp 多个文件">

### 拷贝一个目录

-r 或者 -R ，不论目录是否为空都会拷贝

```
cp -r aaa/ /home/destination_file     【这就解决上次没有拷贝aaa目录】
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_r.png" alt="cp 递归拷贝目录" title="cp 递归拷贝目录">

### 创建文件硬链接，而不是拷贝他们

拷贝文件意味着你必须使用一些存储空间来储存拷贝的文件。有时候出于某种原因，你可能想要创建“快捷方式”或者链接到文件，而不是拷贝它们。要做到这一点，我们可以使用-l选项。

```
cp -l file_3.txt /home/destination_file
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_l.png" alt="cp 拷贝硬链接" title="cp 拷贝硬链接">

### 创建文件的软连接【符号链接、快捷方式.....】

软连接（符号链接）用 -s实现

```
cp -s file_3.txt file_44.txt
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_s.png" alt="cp 拷贝软链接" title="cp 软链接">

### 文件归档

使用 -a 选项来归档文件。保留链接和文件属性，递归拷贝目录，相当于下面的d、p、r三个选项组合。

```
cp -a  * /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_a.png" alt="cp a" title="cp a">

#### 只拷贝文件属性

只拷贝文件属性，不拷贝文件内容，使用 --attributes-only 选项

```
cp --attributes-only file_3.txt /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_attributes_only.png" alt="cp --attributes-only" title="cp 拷贝文件属性，不拷贝内容">



### 显示正在做什么

默认情况下，拷贝是不会显示拷贝时发生了什么，我们可以使用 -v选项

```
cp -v  * /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_v.png" alt="cp v" title="cp v显示信息">

### 目标文件时间是最新更改，源文件时间老

拷贝时，目标文件先存着和源文件同名文件，切目标文件时间是最新更改，使用 -u,不会覆盖最新文件

```
cp -vu file_3.txt file_4.txt /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_u.png" alt="cp u" title="cp 跳过目标最新文件">

### 使用交互模式

交互模式下会询问是否覆盖目标目录下的文件。使用 -i 选项

```
cp -i file_3.txt file_4.txt /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_i.png" alt="cp i" title="cp 交互模式">

### 创建备份文件

目标文件中存在与源文件同名文件，使用 -b 选项，备份目标文件，拷贝新文件

```
 cp -bv * /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_b.png" alt="cp b" title="cp 拷贝备份">

### 强制拷贝

使用 -f 强制拷贝文件。如果目标文件不能打开，可以用 -f 尝试一下。

```
cp -f * /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_f.png" alt="cp f" title="cp 强制拷贝">

#### 在拷贝之前先删除目标

可以用，--remove-destination 选项 实现。这个选项与上面的-f选项形成对照。如果 cp 命令在目标目录下发现同名文件， cp 命令会先删除目标文件，然后再拷贝一份新的。

```
cp --remove-destination -v * /home/destination_file/
```

<img src="/img/ubuntu/linux_command/linux_cp/cp_remove_destination.png" alt="cp cp_remove_destination.png" title="cp 拷贝前删除目标">

其他：

```
一般情况下用这个命令 【参数avr】
cd /home/www/Downloads
cp -avr * /data/www/
```

























































