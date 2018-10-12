---
title: Ubuntu -git
---
### 前言：  

本地:  windows7   ip: 192.168.1.105                                                        
服务器Ubuntu ： Ubuntu 15.10     ip: 192.168.1.113  【cat /etc/issue】 

### Ubuntu中git安装

```
git --version  【检测当前环境是否安装git】

sudo apt-get install git  【安装git】
```

![git install](/img/ubuntu/git/git_install.png "git install")

### 新增用户

```
新增用户(用户名为git_dafei),用于运行git服务，回车后输入密码
adduser git_dafei
```

![git adduser](/img/ubuntu/git/git_adduser.png "git adduser")

### 初始git仓库，

```
我在 /home/git_dafei/code ( mkdir -p /home/git_dafei/code 注意创建这个目录后的所有者，权限)
这个目录下，使用 git init 这个--bare 选项为它设置一个空的存储库，
一般服务器上的 Git 仓库是以 .git 结尾的空仓库

git init --bare test.git
```

![git init](/img/ubuntu/git/git_init.png "git init")

![git init02](/img/ubuntu/git/git_init02.png "git init02")

开始本地(windows)操作

### 本地生成公钥,位置  C:\Users\Administrator\\.ssh 或者  ~/.ssh 

```
ssh-keygen -t rsa ls ~/.ssh/
```

![git win ssh](/img/ubuntu/git/git_win_ssh.png "git win ssh")

### 将win用户的公钥(即 id_rsa.pub )添加到服务器上

```
 scp ~/.ssh/id_rsa.pub git_dafei@192.168.1.113:/home/git_dafei/
 
 
[扩展:使用ssh端口 ] scp -P 22 ~/.ssh/id_rsa.pub git_dafei@192.168.1.113:/home/git_dafei/
```

![git win scp](/img/ubuntu/git/git_win_scp.png "git win scp")

### 将本地用户的公钥添加到认证文件中

```
cd /home/git_dafei
mkdir .ssh
touch authorized_keys    【在 .ssh中创建 】
cat id_rsa.pub >> .ssh/authorized_keys   [如果没有 authorized_keys 请创建 touch authorized_keys
```

![git ssh](/img/ubuntu/git/git_ssh.png "git ssh")

![git id_rs](/img/ubuntu/git/git_id_rs.png "git id_rs")

### 修改文件所有者为 git_dafei 用户

```
chown -R git_dafei:git_dafei /home/git_dafei

chmod 755 /home/git_dafei/                       # 1. 用户git_dafei目录755权限
chmod 700 /home/git_dafei/.ssh                   # 2. .ssh目录700权限
chmod 600 /home/git_dafei/.ssh/authorized_keys   # 3. authorized_keys 600权限 

////////////////////效果//////////////////////////
drwxr-xr-x 2 git_dafei git_dafei 4096 Feb 14 19:39 .ssh  【修改前权限】
chmod 700 /home/git_dafei/.ssh
drwx------ 2 git_dafei git_dafei 4096 Feb 14 19:39 .ssh  【修改后权限】

【修改前权限】：
-rw-r--r-- 1 git_dafei git_dafei 401 Feb 14 19:40 /home/git_dafei/.ssh/authorized_keys 

chmod 600 /home/git_dafei/.ssh/authorized_keys

【修改后权限】
-rw------- 1 git_dafei git_dafei 401 Feb 14 19:40 /home/git_dafei/.ssh/authorized_keys  

```

![git chmod](/img/ubuntu/git/git_chmod.png "git chmod")

### 修改ssh配置文件

```
修改ssh配置文件/etc/ssh/sshd_config，取消这行(33行) AuthorizedKeysFile    %h/.ssh/authorized_keys 前面的注释
修改完重启ssh:  service ssh restart
```

![git sshd_config](/img/ubuntu/git/git_sshd_config.png "git sshd_config")

### 安全

```
为例安全，禁止 git_dafei 用户 shell登录，需要修改 /etc/passwd
将    git_dafei:x:1002:1002:,,,:/home/git_dafei:/bin/bash
改为  git_dafei:x:1002:1002:,,,:/home/git_dafei:/usr/bin/git-shell
```

![git passwd](/img/ubuntu/git/git_passwd.png "git passwd")

### 在win中clone刚才创建的test.git

```
克隆的用户有错
git clone git_dafei@192.168.1.113:/home/git_dafei/code/test.git

git clone 上面设置的用户名@服务器ip:/home/git_dafei/code/test.git
git clone ssh://git_dafei@192.168.1.113:22 /home/git_dafei/code/test.git  [指定ssh端口克隆]
```

![git win clone](/img/ubuntu/git/git_win_clone.png "git win clone")

![git win use](/img/ubuntu/git/git_win_user.png "git win use")

![git ubuntu clone](/img/ubuntu/git/git_ubuntu_clone.png "git ubuntu clone")





[Ubuntu git官方文档](https://help.ubuntu.com/lts/serverguide/git.html "Ubuntu git官方文档")
[git官方文档](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server"git官方文档")





























