---
title: -Webpack 优化
date: 2015-08-04
categories: 
- Webpack
tags:
- Webpack
- 优化
---
`Webpack` 优化
`Webpack`优化
待续 ...

<!-- more -->

>Webpack具有四个核心的概念，分别是Entry（入口）、Output（输出）、loader和Plugins
>
>**核心概念**：
>
>- [入口(entry)](https://webpack.docschina.org/concepts/#entry)
>- [输出(output)](https://webpack.docschina.org/concepts/#output)
>- [loader](https://webpack.docschina.org/concepts/#loaders)
>- [插件(plugin)](https://webpack.docschina.org/concepts/#plugins)
>- [模式(mode)](https://webpack.docschina.org/concepts/#mode)
>- [浏览器兼容性(browser compatibility)](https://webpack.docschina.org/concepts/#browser-compatibility)
>- [环境(environment)](https://webpack.docschina.org/concepts/#environment)



#### ！优化配置总结大纲

1. 开发环境优化
   * 优化打包构建速度
     * HRM
   * 优化代码调试
     * source-map
2. 生产环境性能优化
   * 优化打包构建速度
     * oneOf
     * 对babel缓存
     * 多进程打包
     * externals使用cdn
     * dll使用独立打包
   * 优化代码运行的性能
     * 资源缓存（contenthash）
     * tree shaking 
     * code split：分为单入口和多入口
     * js懒加载和预加载
     * PWA离线访问

### 简单demo

```wiki
这里是一个简单的webpack demo
入口,出口,打包后结果ok, htmlwebpackPlugin(打包后自动生成html首页)
webpack-dev 自动刷新()---webpack-dev-serve
clean-webpack-plugin  自动删除原来的打包文件重新生成新的
bable  语法转化(支持各种浏览器--兼容性)
```







[官方文档](https://v4.webpack.docschina.org/concepts/)





