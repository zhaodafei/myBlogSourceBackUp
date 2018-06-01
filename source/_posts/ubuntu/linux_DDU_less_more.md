---
title: linux-DDU  显示目录列表  -less -more
---
less 与 more 类似，但使用 less 可以随意浏览文件，而且 less 在查看之前不会加载整个文件 

### 命令格式

```
less [选项] [参数]
```

### 选项

```
/字符串：向下搜索“字符串”的功能
?字符串：向上搜索“字符串”的功能
n：重复前一个搜索（与 / 或 ? 有关）
N：反向重复前一个搜索（与 / 或 ? 有关）
b  向后翻一页
d  向后翻半页
h  显示帮助界面
q  退出less 命令
u  向前滚动半页
y  向前滚动一行
空格键 滚动一行
回车键 滚动一页
[pagedown]： 向下翻动一页
[pageup]：   向上翻动一页
```

### 参数

文件：指定要分屏显示内容的文件。 

## demo

```
less d01.txt               #查看文件
ps -ef | less              #PS查看进程信息并通过 less 分页显示
history | less             #查看历史使用记录并通过 less 分页显示


q  退出less 命令
[pagedown]： 向下翻动一页
[pageup]：   向上翻动一页

less d01.txt d02.txt d03.txt      #浏览多个文件
说明：
输入 :n后,切换到  d02.txt,继续输入:n后,切换到 d03.txt
输入 :p后,切换到  d02.txt,继续输入:p后,切换到 d01.txt
```

![less](/img/ubuntu/linux_command/linux_less/less.png "less")



## 命令 more

more命令从前向后读取文件，因此在启动时就加载整个文件。 

### 命令格式

```
less [选项] [参数]
```

### 选项

```
+n      从笫n行开始显示
-n       定义屏幕大小为n行
+/pattern 在每个档案显示前搜寻该字串（pattern），然后从该字串前两行之后开始显示  
-c       从顶部清屏，然后显示
-d       提示“Press space to continue，'q' to quit（按空格键继续，按q键退出）”，禁用响铃功能
-l        忽略Ctrl+l（换页）字符
-p       通过清除窗口而不是滚屏来对文件进行换页，与-c选项相似
-s       把连续的多个空行显示为一行
-u       把文件内容中的下画线去掉
```

常用命令

```
Enter    向下n行，需要定义。默认为1行
Ctrl+F   向下滚动一屏
空格键  向下滚动一屏
Ctrl+B  返回上一屏
=       输出当前行的行号
：f     输出文件名和当前行的行号
V      调用vi编辑器
!命令   调用Shell，并执行命令 
q       退出more
```



### demo

```
more +1 d01.txt    #显示文件中从第1行器内容
more +2 d01.txt    #显示文件中从第2行器内容
```

![more](/img/ubuntu/linux_command/linux_more/mored_01.png "more")

从文件中查找第一个出现 "d01" 字符串的行，并从该处前2行显示输出
从文件中查找第一个出现 "3" 字符串的行，并从该处前2行显示输出
从文件中查找第一个出现 "hello" 字符串的行，并从该处前2行显示输出

```
more +/d01  d01.txt
more +/3  d01.txt
more +/hello  d01.txt
```

![more](/img/ubuntu/linux_command/linux_more/mored_02.png "more")

```
设定每屏显示行数
more -1 d01.txt
more -2 d01.txt

列一个目录下的文件，由于内容太多，我们应该学会用more来分页显示。这得和管道 | 结合起来
ls -l | more -1
ls -l | more -2

q 键退出，enter向下
```

![more](/img/ubuntu/linux_command/linux_more/mored_03.png "more")





