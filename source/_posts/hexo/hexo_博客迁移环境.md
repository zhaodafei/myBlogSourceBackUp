---
title: hexo 迁移环境
date: 2014-01-04
categories: 
- Hexo
tags:
- Hexo
---
hexo  迁移环境
hexo  迁移环境
hexo  迁移环境
迁移后为了确保 `node` 版本一致,这里采用 `nvm` 管理 `node`方式

<!-- more -->

### 安装环境`nvm`

安装 `nvm`, 配置 `node ` 环境

1. 下载 `nvm`

   ```wiki
   在 github 上下载
   https://github.com/coreybutler/nvm-windows/releases  
   选择 nvm-setup.zip 版本
   ```

   [nvm-setup.zip 1.1.8](https://github.com/coreybutler/nvm-windows/releases/download/1.1.8/nvm-setup.zip)

2. 查看 `nvm` 版本

   ```wiki
   #安装完 nvm 后查看版本
   nvm version  #查看版本 
   ```

3. 修改配置

   ```wiki
   #修改配置文件settings.txt,设置下载源
   node_mirror: https://npm.taobao.org/mirrors/node/ 
   npm_mirror: https://npm.taobao.org/mirrors/npm/
   ```

4. 安装 `node` 版本

   ```wiki
   nvm install 8.17.0  #本文只安装这个即可
   nvm install 14.18.0
   
   #出已经安装的node版本 
   nvm ls
   
   #选择使用 `node` 版本
   nvm use 8.17.0
   nvm use 14.18.0
   
   #查看node 版本
   node -v
   npm -v
   
   #看远程所有可以用的node版本
   nvm ls available (windows中命令)
   ```

###  环境 node8.17.0 使用

本文采用局部安装使用,所以用的命令带 `npx hexo`,如果是全局安装的可以直接使用 `hexo` 命令
比如:  `npx hexo g`   ;   `hexo g`

1. 局部安装 hexo 包
   `npm install hexo`

2. 查看 hexo 版本
   `npx hexo -v `

3. 开始使用 

   ```wiki
   npx hexo g #生成静态文件
   npx hexo d #部署
   npx hexo b #部署
   npx hexo s -p5000 #启动本地服务,开始预览
   ```

4) xxx





[Hexo 官网](https://hexo.io/zh-cn/docs/)





