---
title: 添加ssh key 到 GitHub
categories: 
- Git
tags:
- Git
- GitHub
---
添加ssh key 到 GitHub
添加ssh key 到 GitHub
添加ssh key 到 GitHub

### 检查本机是否有ssh设置

```bash
$ cd ~/.ssh
$ ls
known_hosts    #显示这个说明没有ssh
```

![GitHub ssh 01](/img/win/git/github_ssh_01.png "GitHub ssh 01")

### 生成ssh

```bash
ssh-keygen -t rsa -C "xxx@@qq.com"   #使用自己的邮箱账号(随便一个就可以)
#然后一路回车
#最后 id_rsa.pub 这个文件就是我们这次需要的
```

![GitHub ssh 02](/img/win/git/github_ssh_02.png "GitHub ssh 02")

### 添加到GitHub

将上面生成的 `id_rsa.pub` 内容添加到 `GitHub` 上

> 右上角头像三角--->Settings--->SSH and GPG keys--->New SSH key

![GitHub ssh 03](/img/win/git/github_ssh_03.png "GitHub ssh 03")

### 测试

```bash
ssh -T git@github.com

#出现下面这句话说明成功了
Hi xxx! You've successfully authenticated, but GitHub does not provide shell access.
```

![GitHub ssh 04](/img/win/git/github_ssh_04.png "GitHub ssh 04")

























