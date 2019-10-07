---
title: linux-DDU  -git基本使用
---
### git基本使用

git常用分支：master主分支、dev开发分支、bug分支、feature临时功能分支

origin：默认远程分支；

```
初始化一个Git仓库，使用git init命令。
git add <file>   注意，可反复多次使用，添加多个文件【 git add .】【git commit readme.md -m"readme备注信息"】
git commit       完成。 git commit -m"备注"
git status       掌握工作区的状态
git diff         可以查看修改内容。
git reset --hard commit_id    在版本的历史之间穿梭
###  git reset --hard 远程覆盖本地
###  git pull origin dev  从dev分支获取最新提交
git log                     （git log --pretty=oneline）可以查看提交历史
git reflog                    查看命令历史
git checkout -- file          把文件在工作区的修改全部撤销    命令中的--很重要
git rm                       用于删除一个文件

git remote add origin git@server-name:path/repo-name.git  要关联一个远程库，使用命令
git push -u origin master      关联后，使用命令git push -u origin master第一次推送master分支的所有内容

git clone   克隆一个仓库
git clone -b name(分支名称)   克隆一个分支仓库

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
git push origin --tags                     可以推送全部未推送过的本地标签
git tag -d <tagname>                       可以删除一个本地标签
git push origin :refs/tags/<tagname>       可以删除一个远程标签
git ls-files                            如何知道目录里的文件是否在git仓库里
```

### 





























