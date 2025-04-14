---
title: linux-DDU  -git git-bash
date: 2015-08-04
categories: 
- Git
tags:
- Git
---
git-bash  中添加 wget命令
git-bash  中添加 wget命令

<!-- more -->

### git-bash  中添加 wget命令

01) 下载weget二进制包
02) 将下载好的 wget.exe 拷贝到 git 安装目录 ...Git\mingw64\bin 下面
03)  现在可议 wget -help 查看

![git wget](/img/win/git/git_wget.png "git wget")

### 中文无法显示

```

```

### 仓库迁移

目标: 最完整的迁移方法，会保留所有分支、标签和提交历史

```bash
#注意, 在新仓库中不要设置受保护分支,否则会推送新仓库失败!!!

# 克隆原始仓库（镜像方式）
git clone --mirror 原始仓库URL

# 进入克隆的目录
cd 原始仓库.git

# 推送到新仓库
git push --mirror 新仓库URL
```



### 底部

1.  [在哪里可以下载Wget ](https://www.gnu.org/software/wget/faq.html "这里是title")
2.  [windwos 二进制文件由JernejSimončič提供](https://eternallybored.org/misc/wget/ "windwos 二进制文件由JernejSimončič提供")





























