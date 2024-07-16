---
title: Sourcetree
date: 2024-07-16
categories: 
- Sourcetree
tags:
- Sourcetree
---

`Sourcetree`常见问题

`Sourcetree`常见问题

<!-- more -->

### `Sourcetree`闪退打不开

1. 找到`Sourcetree`安装位置

2. `C:\Users\fei\AppData\Local\Atlassian\SourceTree` 找到`sourcetree.log`这个文件

   > ```wiki
   > 报错内容:
   > ERROR [2024-07-16 20:38:04,346] [1] [Sourcetree.Composition.VSMef.Net471.VSMefCompositionManager] [Log] - Unable to load MEF components
   > ```
   >
   > 

3. 找到`C:\Users\fei\AppData\Local\Atlassian\SourceTree.exe_Url_xxx\3.4.6.0`目录下面

   > ```wii
   > Assemblies.cache
   > Composition.cache
   > 
   > 找到这2个文件删掉
   > ```
   >
   > 

01) 重新点击软件运行

### 其他

[win10突然打不开sourcetree](https://zhuanlan.zhihu.com/p/637566727)



























