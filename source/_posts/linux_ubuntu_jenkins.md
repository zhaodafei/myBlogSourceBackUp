---
title: linux ubuntu jenkins 
---
### 下载war 包

#### 第一种安装方式：

前提：系统中必须安装好jdk，我的 jdk 是1.8

将下载好的war包放到linux中；切换到 jenkins.war　存放目录，输入命令： java -jar jenkins.war　
然后在浏览器中输入localhost:8080,就可以打开Jenkins

![Jenkins 安装](/img/linux_ubuntu_jenkins/01_install01 "Jenkins 安装")

![Jenkins 安装](/img/linux_ubuntu_jenkins/01_install02 "Jenkins 安装")

这种方式安装好后命令窗口会一直保持打开状态，不太实用；

#### 第二种安装方式，在 tomcat 中启动

![Jenkins war包](/img/linux_ubuntu_jenkins/01.png "Jenkins war包")

![Jenkins](/img/linux_ubuntu_jenkins/02.png "Jenkins")

![Jenkins](/img/linux_ubuntu_jenkins/03.png "Jenkins")

![Jenkins](/img/linux_ubuntu_jenkins/04.png "Jenkins")

![Jenkins](/img/linux_ubuntu_jenkins/05.png "Jenkins")

![Jenkins](/img/linux_ubuntu_jenkins/windows.png "Jenkins")

不管用那种方法，安装后登录时空白，现在没有时间弄了，有知道的请留言

![Jenkins error](/img/linux_ubuntu_jenkins/06_error.png "Jenkins error")



### 安装

```
wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins

如果是升级，直接使用一下命令
sudo apt-get update
sudo apt-get install jenkins
```

![jenkins 用户](/img/linux_ubuntu_jenkins/jenkins_user.png "Jenkins 用户")

### 卸载

```
//服务
sudo apt-get remove jenkins

//安装包，注意这里如果不是ubuntu那就yum
sudo apt-get remove --auto-remove jenkins

//配置和数据
sudo apt-get purge jenkins

sudo apt-get purge --auto-remove jenkins
```