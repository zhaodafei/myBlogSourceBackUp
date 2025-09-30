---
title: linux-DDU  -git基本使用
date: 2015-08-04
categories: 
- Git
tags:
- Git
---
Git基本使用
Git基本使用
Git基本使用

<!-- more -->

### Git基本使用

git常用分支：master主分支、dev开发分支、bug分支、feature临时功能分支

origin：默认远程分支；

```shell
初始化一个Git仓库，使用git init命令。
git add <file>   注意，可反复多次使用，添加多个文件【 git add .】【git commit readme.md -m"readme备注信息"】
git commit       完成。 git commit -m"备注"
git status       掌握工作区的状态
git diff         可以查看修改内容。
git reset --hard commit_id    在版本的历史之间穿梭
###  git reset --hard 远程覆盖本地
###  git pull origin dev  从dev分支获取最新提交
git log                     （git log --pretty=oneline）可以查看提交历史
git log --oneline  #查看简洁历史
git reflog                    查看命令历史
git checkout -- file          把文件在工作区的修改全部撤销    命令中的--很重要
git rm                       用于删除一个文件

git remote add origin git@server-name:path/repo-name.git  要关联一个远程库，使用命令
git push -u origin master      关联后，使用命令git push -u origin master第一次推送master分支的所有内容

git clone   克隆一个仓库
git clone -b name(分支名称)   克隆一个分支仓库
#demo
git clone 地址  自定义名字 -b name(分支名称)   克隆一个分支仓库
git clone https://gihub.com/dafei4/vue.git zzz_dafei -b springBoot

////////分支修改后，分支提交了，切换到master后才会看不到内容，分支不提交，master可以看到修改内容///////
git branch   查看分支
git branch <name>             创建分支
git checkout <name>           切换分支
git checkout -b <name>        创建+切换分支
git merge <name>              合并某分支到当前分支   
git branch -d <name>          删除分支
git branch -D <name>          强行删除分支（不需要合并）
git log --graph               看到分支合并图
git merge --no-ff -m "merge with no-ff" dev   加上--no-ff参数就可以用普通模式合并
git stash                     储藏
git stash list                
git stash pop                  恢复储藏并删除储藏

git fetch origin master        获取远程分支到本地
git merge origin/master        合并到本地仓库
git pull                       获取最新提交【git pull = git fetch + git merge】

git tag <name>                             用于新建一个标签，默认为HEAD，也可以指定一个commit id
git tag <name> <commit id>                 新建一个标签在commit id上
git tag -a <tagname> -m "blablabla..."     可以指定标签信息
git tag -s <tagname> -m "blablabla..."     可以用PGP签名标签
git tag                                    可以查看所有标签
git push origin <tagname>                  可以推送一个本地标签
git push --tags                            可以推送全部未推送过的本地标签
git push origin --tags                     可以推送全部未推送过的本地标签
git tag -d <tagname>                       可以删除一个本地标签
git push origin :refs/tags/<tagname>       可以删除一个远程标签

git pull   #获取所有远程的tag标签 ---或者用下面
#git fetch  #获取所有远程的tag标签

git ls-files                            如何知道目录里的文件是否在git仓库里

```

### 设置提交用户名

#### 本项目用户名

修改的文件位置为 `项目名称/.git/config`

```bash
git config user.name "dafei"
git config user.email "123333333@qq.com"
```

#### 全局用户名  

```bash
git config --global user.name "dafei"
git config --global user.email "123333333@qq.com"
```

#### 查看用户名

```ba
git config user.name
git config user.email
```

![git 用户名](/img/win/git/git_username.jpg "git 用户名")



###  回滚代码

4 个时期回滚代码

#### 在工作区的代码

```shell
git checkout  文件名　　#丢弃某个文件
git checkout  .　　　　 #丢弃全部[ 注意有个点 ]
```

#### 添加到缓存区的代码回滚

```bash
git add 到了缓存区，没有git commit -m
git reset HEAD   #从缓存区回滚[ 仅仅改变缓存区,工作区不变也不会丢 ]
```

#### 提交到本地分支没有推送远端

[ git reset 三种模式 ]
git reset --mixed : 代码回到工作区  [  默认这种模式 ]
git reset --soft: 代码回到缓存区
git reset --hard: 代码丢掉

```shell
git commit -m 到本地分支，没有git push 远端
git log  --oneline        #查看版本信息,版本号
git reset --hard 版本号　　#回到想要的版本 [ 这个版本之后的提交信息和数据都会丢掉 ]
git reset --hard HEAD^　　 #回到上一个版本提交  [ 这个版本之后的提交信息和数据都会丢掉 ]
git reset --soft HEAD^    #回到上一个版本提交[ 回都上一个版本的缓存区,  这个版本之后的提交信息和数据都会丢掉 ]
git reset HEAD^　　　　　  #此时代码保留，回到git add操作之前[表示需要重新add] [ 使用了默认参数--mixed]
git reset --mixed HEAD^   #效果同上一条命令[ git reset HEAD^ ]
```

#### 远端仓库代码回滚

这种回滚有点麻烦, 有2中方式

```shell
01)先把本地代码还原到指定版本,然后强制推送
git reset --hard 版本号　　
git push --force  #[ 本地版本比远程版本低,加上--force这个参数就可以强制推送到远程 ]

02) 备份当前分支到新分支,先把本地代码还原到指定版本,然后删除远程仓库,用回退的代码推送到远程
git branch backup_备份         #备份当前分支到新分支
git push origin backup_备份    #把新分支推送到远程
git reset --hard 版本号        #把本地代码还原到指定版本
git push origin  --delete 远程分支  #删除远程分支
git push origin 本地回退分支上代码    #把本地回退分支上代码推送到远程
```

### 标签功能

记住一点: 本地和远程可以理解为单独的2类tag

```shell
git tag   #查看所有标签
git tag v1.0.0 #新建一个标签 git tag <name>  
git tag v1.0.1
git tag v1.1.0
git show v1.0.1  #查看某个标签做了什么操作

git push origin v1.0.1 #推送具体某个tag到远程
git push --tags #推送所有tag标签到远程服务端 ---或者用下面
#git push origin --tags #推送所有tag标签到远程服务端
git pull   #获取所有远程的tag标签 ---或者用下面
#git fetch  #获取所有远程的tag标签

git tag -d v1.0.1 #删除一个本地标签
git push origin :refs/tags/v1.0.2  #可以删除一个远程标签(注意这样删除后拉取不到远程删除信息)
git push origin --delete v1.0.2 #可以删除一个远程标签(注意这样删除后拉取不到远程删除信息)
git tag -l | xargs git tag -d  #删除本地所有tag

#实战demo
git tag 
git tag v1.0.0
##修正bug1
git add .
git commit -m "fei bug1"
git tag v1.0.1
git tag
##修正bug2
git add .
git commit -m "fei bug2"
git tag v1.0.2
git tag
##添加新业务功能
git add .
git commit -m "添加新业务功能added feature1."
git tag v1.1.0
git tag

```

### 通过标签创建分支

功能描述: 创建`tag`标签后,基于这个标签创建新分支

场景描述: 在生产分支中需要回退某些功能

方案: 在生产分支中找到某个节点创建`tag`标签, 在基于这个标签创建个新的分支

![tag步骤01](/img/win/git/git_tag_01.jpg "tag步骤01")

![tag步骤02](/img/win/git/git_tag_02.jpg "tag步骤02")

![tag步骤03](/img/win/git/git_tag_03.jpg "tag步骤03")

![tag步骤04](/img/win/git/git_tag_04.jpg "tag步骤04")

### Git 下载

1. [git Download 国内镜像](http://npm.taobao.org/mirrors/git-for-windows/)
2. [git 官方下载](https://github.com/git-for-windows/git/releases)

































