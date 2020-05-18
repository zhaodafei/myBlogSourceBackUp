---
title: -MyEclipse导入其他人的MyEclipse项目
categories: 
- MyEclipse
tags:
- MyEclipse
---
`MyEclipse`导入其他人的`MyEclipse`项目

`MyEclipse`导入其他人的`MyEclipse`项目

### 01) 开始导入项目

![MyEclipse 导入项目](/img/java/MyEclipse/MyEclipse_01.gif "MyEclipse导入项目")

### 02)  重新添加 libraries 和 JRE

```
Referenced libraries 重新添加
添加 JRE System Library 

在项目上右键-->Properties-->Java Build Path --> Libraries(删掉原来的)-->Add Library-->Alternate JRE(选择自己的jdk)
```

![MyEclipse 导入项目](/img/java/MyEclipse/MyEclipse_02.gif "MyEclipse导入项目")

### 03) 运行项目

```
在项目上右键-->Properties-->Run as --> MyEclipse Server Application
```

![MyEclipse 导入项目](/img/java/MyEclipse/MyEclipse_03.gif "MyEclipse导入项目")

### 其他

#### a-01) 使用自己的jdk

```
Window-->Preferences-->Java-->Installed JREs-->添加自己的jdk
```

![MyEclipse配置jdk](/img/java/MyEclipse/MyEclipse_jdk.png "MyEclipse配置jdk")

#### a-02) 使用自己的Tomcat

```
Window-->Preferences-->MyEclipse-->Servers-->Tomcat--> 配置tomcat
```

![MyEclipse配置自己的Tomcat](/img/java/MyEclipse/MyEclipse_Tomcat.png "MyEclipse配置自己的Tomcat")

#### b-01)  创建一个 Hello world 的web项目

```
01) 创建项目
File-->New--> Web Project, 输入项目名字HelloWorld
02) 运行项目
在项目上右键:
Run as --> MyEclipse Server Application, 
03) 在浏览器输入
http://localhost:8080/HelloWorld/index.jsp 就可以访问了
```



























