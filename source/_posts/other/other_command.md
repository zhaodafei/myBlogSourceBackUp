---
title: -other -command 其他命令
---
###  `explorer ` 直接打开可视化目录

```shell
#执行后可以打开弹出当前路径的目录

#windows中
start explorer .  #注意这里有个点
或者
explorer .    #注意这里有个点
#linux 中
nautilus  .      #注意这里有个点
```

![explorer 可视化目录](/img/other/explorer.gif "explorer 可视化目录")

###   `tracert` 路由跟踪命令

```shell
#路由跟踪命令,用于确定IP数据访问目标所经过的路径
tracert  www.baidu.com
tracert  php.net
```

### route  显示和操作IP路由表

```shell
route
route -n
route add
route del
```































