---
title: Linux -node 编译安装, 需要配置环境变量
date: 2014-02-05
categories: 
- Linux
tags:
- Linux
- Node
---

Linux -node 编译安装, 需要配置环境变量
Linux -node 编译安装, 需要配置环境变量
Linux -node 编译安装, 需要配置环境变量

<!-- more -->

`nodejs`所有版本下载地址`https://nodejs.org/dist/`

### 源码编译安装node

```shell
wget https://nodejs.org/dist/v10.15.3/node-v10.15.3.tar.gz
tar -zxvf  node-v10.15.3.tar.gz
cd node-v10.15.3
./configure --prefix=/data/server/node      [有警告,先不用管]
make                             [编译时间比较长,编译1个小时]
make install
```

![configure 忽略警告](/img/ubuntu/node/warning.png "configure 忽略警告")

安装完测试,并创建软连接

```shell
/data/server/node/bin/node -v   #查看node版本
/data/server/node/bin/npm -v    #查看npm版本
这时候输出 npm -v 没有,原因npm需要通过node来执行,所以解决方法有2种
01) 创建软连接
ln -sv /data/server/node/bin/node /usr/local/bin/node
ln -sv /data/server/node/bin/npm /usr/local/bin/npm

02) 修改 vim /etc/profile 添加环境变量
PATH=$PATH:/data/server/node/bin
export PATH
然后执行source /etc/profile 或者 ./profile 使其生效; 执行完后可以通过 echo $PATH  命令查看环境变量
```

![npm  创建软连接](/img/ubuntu/node/npm_ln.png "npm  创建软连接")

### 二进制安装node

```shell
https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz
tar -xvf node-v10.15.3-linux-x64.tar.xz -C /data/server
解压后可以直接使用,需要配置环境变量,方法同上
```

### 其他常见命令

```shell
#npm命令文档 https://nodejs.cn/npm/cli/v6/commands/npm/

npm init #初始化一个package.json
npm init -y  #初始化一个package.json 全部使用默认值
npm config list   #查看npm配置信息
npm config edit   #编辑配置信息
npm config get cache  #查看npm缓存目录
npm config set cacat  #设置缓存目录位置
npm config get registry  #获取配置使用的地址
#npm config set registry https://registry.npm.taobao.org  #设为淘宝地址(过期了)
npm config set registry https://registry.npmmirror.com #设为淘宝地址(新源:2024年1月25日)
npm config set registry https://registry.npmjs.org   #设置为官方地址

windows中显示配置文件位置: C:\Users\Administrator\.npmrc 
ubuntu图中在用户: /home/fei/.npmrc

原文件内容:
registry=http://registry.cnpmjs.org/
修改淘宝地址:
registry=https://registry.npm.taobao.org

----------
淘宝nmp网址:  https://npm.taobao.org/
npm install -g cnpm --registry=https://registry.npm.taobao.org   #安装配置cnpm
```

 [npm中文文档](https://nodejs.cn/npm/cli/v6/commands/npm/ "npm中文文档")
 [npm英文文档](https://docs.npmjs.com/cli/v6/commands/npm "npm英文文档")

### 多个node环境共存

```shell
windows中多个node环境共存,使用二进制包(以node14为例子)
下载地址: https://nodejs.org/dist/v14.17.1/node-v14.17.1-win-x64.zip
解压后即可使用
D:/soft_position_not/node14/node.exe -v
D:/soft_position_not/node14/npm -v
D:/soft_position_not/node14/npm init vite-app feiVuexxx
```

### 升级版本npm-check-updates

npm update，只能按照package.json中标注的版本号进行更新，升级后不会修改package.json中的版本号，需要自己手动修改，比较麻烦。
npm-check-updates 升级插件升级后会自动修改package.json里的版本号，简单方便。

```shell
#安装
npm install -g npm-check-updates
#当前项目下检查依赖版本,输入ncu命令检查包最新版本
ncu
#更新package.json
ncu -u
#然后就可以重新安装自己的依赖
npm install
```



### 底部

没有了

[npmjs 依赖包查看网站](https://www.npmjs.com/)
[npmjs 依赖包查看网站](https://www.npmjs.com/)

[nodejs所有版本下载地址](https://nodejs.org/dist/)
[nodejs所有版本下载地址](https://nodejs.org/dist/)
