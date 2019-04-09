---
title: linux -node 编译安装, 需要配置环境变量
---

node

### 源码编译安装node

```
wget https://nodejs.org/dist/v10.15.3/node-v10.15.3.tar.gz
tar -zxvf  node-v10.15.3.tar.gz
cd node-v10.15.3
./configure --prefix=/data/server/node      [有警告,先不用管]
make                             [编译时间比较长,编译1个小时]
make install
```

![configure 忽略警告](/img/ubuntu/node/warning.png "configure 忽略警告")

安装完测试,并创建软连接

```
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

```
https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz
tar -xvf node-v10.15.3-linux-x64.tar.xz -C /data/server
解压后可以直接使用,需要配置环境变量,方法同上
```

### 其他

```
npm config list   #查看npm配置信息
npm config edit   #编辑配置信息
npm config get cache  #查看npm缓存目录
npm config set cacat  #设置缓存目录位置
npm config get registry  #获取配置使用的地址
npm config set registry https://registry.npm.taobao.org  #设为淘宝地址

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



