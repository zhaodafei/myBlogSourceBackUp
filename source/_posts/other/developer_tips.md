---
title: Chrome 和 Firefox 中 Developer 模式使用技巧tips
date: 2015-03-04
categories: 
- Browser
- Developer
- Chrome
- Firefox
tags:
- Browser
- Developer
- Chrome
- Firefox
---
Chrome 和 Firefox 中 Developer 模式使用技巧tips
`Chrome` 和 `Firefox` 中 `developer` 模式使用技巧 `tips`
`Chrome` 和 `Firefox` 中 `developer` 模式使用技巧 `tips`

本文以`Chrome`为主,以`Firefox`为辅,大致相同不在详细描述,特殊地方单独提示`tips`

<!-- more -->

### 配置网速

`Chrome`中 F12--->选择Network--->有红色圆点的最右侧

![network](/img/other/browser_dev/net_pro.png "network")

### 查看伪类样式

查看伪类:active,:hover,:focus样式
![pseudo classes](/img/other/browser_dev/pseudo_classes.png "pseudo classes")

### 截图

`chrome` 和 `Firefox`中截图 [screenshots firefox](https://screenshots.firefox.com/),`Firefox`中直接右键也可以截图
![screenshot](/img/other/browser_dev/screenshot.png "screenshot")

### 重新发起网络请求

![replay XHR](/img/other/browser_dev/replay_xhr.png "replay XHR")

### 复制变量

复制`JavaScript`变量到其他地方
![copy](/img/other/browser_dev/copy.png "copy")

### 表格展示变量

使用`console.table(xxx)`,在`Chrome`中可以直接使用`table(xxx)`,并且结果可以排序
![console_table](/img/other/browser_dev/console_table.png "table")

### 拖拽`DOM`元素

在控制台`Elements`中,选中某个元素可以自由拖拽
![drag](/img/other/browser_dev/drag.png "drag")

### 复制响应`response`信息

复制响应结果`response`数据
![response](/img/other/browser_dev/response.png "response")

### 查看绑定事件
![event listeners](/img/other/browser_dev/event_listeners.png "event listeners")



### 应用页面`DOM`

`Chrome` 和 `Firefox`中显示不一样

```javascript
$("#id")  回车可以显示dom结构,并且可以修改
```

### 火狐中的本地文件

`omni.ja`用`7Z`解压后可以看到浏览中的图片

```html
比如
chrome://branding/content/about-logo.png
chrome://branding/content/icon16.png
```

### 禁用火狐缓存

```wiki
1. 在地址栏中输入 about:config
2. 找到 network.http.use-cache ，双击把值变为false
3. 找到 browser.cache.disk.enable ，双击把值变为false
```



### 网络请求`filter`

控制台左上角`filter`中输入中划线可以看到各种过滤选项,`Vue`常用过滤选项 `-.json  -sockjs`

![filter过滤数据](/img/other/browser_dev/filter.png "filter过滤数据")



### 其他

[Firefox 开发者工具](https://developer.mozilla.org/zh-CN/docs/Toolsy)



























