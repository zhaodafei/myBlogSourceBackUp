---
title: Windows -jdk
date: 2014-02-05
categories: 
- Java
tags:
- Java
- jdk
---
Windows -jdk
`Windwos7` 中测试 `jdk`是否安装成功,并编写第一个`HelloWorld`程序,用命令行运行
`Windwos7` 中测试 `jdk`是否安装成功,并编写第一个`HelloWorld`程序,用命令行运行

<!-- more -->

### 测试 `jdk` 环境

```shell
E:\>java -version
java version "1.8.0_191"
Java(TM) SE Runtime Environment (build 1.8.0_191-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.191-b12, mixed mode)

E:\>javac -version
javac 1.8.0_191

E:\>
```

![jdk](/img/ubuntu/jdk02/java_hello1.png "jdk")

### 程序 `HelloWorld` 

```shell
#创建文件
touch HelloWorld.java

# vim HelloWorld.java 文件内容如下
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World DaFei");
    }
}

#执行命令编译代码
javac HelloWorld.java

#执行命令运行代码
java HelloWorld
```

![hello world](/img/ubuntu/jdk02/java_hello2.png "hello world")























