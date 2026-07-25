---
title: vscode_debug
date: 2026-07-19
categories: 
- vscode
tags:
- vscode
---
`vscode_debug`基本使用
`vscode_debug`基本使用
`vscode_debug`基本使用

<!-- more -->

### 准备工作

配置一个本地`nginx`可以访问`html`项目

```nginx
#我的一个配置
server {
    listen       80;
    #这个名称在后面要和vscode 配置保持一致
    server_name  demo.pro_xpo.com;
    charset utf-8;
    root E:/web/aaa_ef/aa3_ai_fei/ai_test01/;
    autoindex on;
}
```

### vscode 配置

在项目根目录创建文件`.vscode/launch.json`, 内容如下

> 开始调试:  `F5` → 打开 Chrome → 访问 nginx 页面 → 断点调试。

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "fei调试debug",
            "url": "http://demo.pro_xpo.com/fei-test.html",
            "webRoot": "${workspaceFolder}"
        }
    ]
}

```

## vue中配置

和上面基本一致

在项目根目录创建文件`.vscode/launch.json`, 内容如下

> 开始调试:  `F5` → 打开 Chrome → 访问 nginx 页面 → 断点调试。

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "vue调试debug",
            "url": "http://localhost:8000",
            "webRoot": "${workspaceFolder}"
        }
    ]
}

```





### 底部

没有了

