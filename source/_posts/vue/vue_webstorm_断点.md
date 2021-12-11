---
title: vue_webstorm_debug
date: 2020-07-04
categories: 
- WEB
- Vue
tags:
- Vue
- WebStorm
- debug
---
vue 和 debug 断点调试
vue 和 debug 断点调试

vue 和 debug 断点调试

<!-- more -->

### vue 打断点debug [ 普通断点]

![vue debug](/img/vue/other/vue_debug.png "vue debug")

### 在webstorm中断点调试

#### 01) 在chrome中安装插件 [JetBrains IDE Support](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji) [ 想办法自己下载 ]

#### 02) 创建demo项目 vue init webpack vuejs-webpack-project-dafei

#### 03) 在config/index.js 中 修改 devtool: 'source-map' , [ 不配置这项,后面断点的时候会显示不出结果 ]

#### 04-01) 先使用npn 正常启动vue项目,可以使用  http://localhost:8080/#/ 访问到项目 
#### 04-02) 配置debug启动 Edit Configurations -->JavaScript Debug--> Name自己随便写, URL:[ http://localhost:8080/#/ 注意要he04-01中端口保持一致 ]

```
http://localhost:8080/#/ 
选中src 目录,在右侧写 
webpack:///src 
```

![vue debug](/img/vue/debug/debug_01.png "vue debug")

#### 05) 测试代码,在  src/components/HelloWorld.vue 中写测试代码,在test方法上打上断点,点击虫子启动debug 

![vue debug](/img/vue/debug/debug_02.png "vue debug")





























