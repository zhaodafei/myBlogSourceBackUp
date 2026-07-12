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
#注意2: 新仓库中默认分支要与旧仓库中名称保持一致

# 克隆原始仓库（镜像方式）
git clone --mirror 原始仓库URL

# 进入克隆的目录
cd 原始仓库.git

# 推送到新仓库
git push --mirror 新仓库URL
```

### 合并2次提交

#### 命令行操作

```wiki
要把本地最近的两次 commit 合并成一次，可以使用 git rebase -i

#操作步骤
1)执行交互式 rebase
git rebase -i HEAD~2

2)编辑 rebase 指令
这时会打开一个编辑器，显示类似内容：
pick abc1234 第一次提交的信息
pick def5678 第二次提交的信息

将第二行的 pick 改为 squash（或简写 s）：
pick abc1234 第一次提交的信息
squash def5678 第二次提交的信息

保存并关闭编辑器。

3)合并 commit 信息
接着会弹出另一个编辑器让你编辑合并后的 commit 信息。通常保留第一行的信息，把第二行注释掉或删除。

保存并关闭即可。
```

#### 在idea中操作

```wiki
在 WebStorm 中合并最近两次未推送的提交，最简单的方法是使用图形界面中的 Squash（压缩） 功能，无需输入任何命令

#操作步骤
1)打开 Git 日志：在 IDE 底部的工具窗口栏中，找到 Git 标签页（或按快捷键 Alt + 9 / ⌘ + 9），点击打开 Log（日志）视图。

2)选择并合并提交：在提交历史列表中，按住 Ctrl 键（Mac 上为 ⌘ 键），依次点击你最早和最近的两次提交（确保它们都被高亮选中）。然后，右键单击任意一个被选中的提交，在菜单中找到并选择 Squash Commits（压缩提交）。

3)编辑提交信息：WebStorm 会弹出一个对话框，里面合并了两次提交的原始信息。你需要在这里编辑成最终想要保留的一条提交信息，然后点击 OK 按钮保存。

#完成与后续推送
操作完成后，你的本地历史中两次提交就会合并成一次，相当于完成了 git rebase -i 的操作。

如果只是暂存，还没推送过：到此就已经完成，后续正常提交即可。
```





### 底部

1.  [在哪里可以下载Wget ](https://www.gnu.org/software/wget/faq.html "这里是title")
2.  [windwos 二进制文件由JernejSimončič提供](https://eternallybored.org/misc/wget/ "windwos 二进制文件由JernejSimončič提供")





























