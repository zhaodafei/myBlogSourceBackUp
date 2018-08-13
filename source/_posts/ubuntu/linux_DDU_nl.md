---
title: linux-DDU  显示目录列表  -nl
---
### 命令格式

```
nl [选项] [参数]
```

### 选项

```
-b ：指定行号指定的方式，主要有两种：
    -b a ：表示不论是否为空行，也同样列出行号(类似 cat -n)；
    -b t ：如果有空行，空的那一行不要列出行号(默认值)；

-n ：列出行号表示的方法，主要有三种：
    -n ln ：行号在萤幕的最左方显示；
    -n rn ：行号在自己栏位的最右方显示，且不加 0 ；
    -n rz ：行号在自己栏位的最左方显示，且加 0 ；

-w ：行号栏位的占用的位数。
```

### 参数

-b 指定行号列出 test01.txt 的内容【-b a ;     -b t】

demo

```
nl -b a test01.txt    【空行显示行号】

nl -b t test01.txt    【空行不显示行号】
```

![root passwd](/img/linux_command/linux_nl/nl_b.png "-b 指定行号")

### 参数

-n  显示行号列出test01.txt 的内容【-n ln ;  -n ln; -n rz】

demo

```
 nl -n ln test01.txt  【行号在左】
 
 nl -n rn test01.txt  【行号在右】
 
 nl -n rz test01.txt  【行号在左，且加零】
```

![root passwd](/img/linux_command/linux_nl/nl_n.png "-n 显示行号")

### 参数

-w  列出行号占用的位数

demo

```
nl -n rz -w 3 test01.txt
nl -n rz -w 5 test01.txt
```

![root passwd](/img/linux_command/linux_nl/nl_w.png "-w 列出行号占用位数")

























