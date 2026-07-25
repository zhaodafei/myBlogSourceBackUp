---
title: Cursor
date: 2026-07-19
categories: 
- Cursor
tags:
- Cursor
---
`Cursor_编辑器`基本使用
`Cursor_编辑器`基本使用
`Cursor_编辑器`基本使用

<!-- more -->

### 基础配置

```wiki
#设置编辑器颜色
头像 / 编辑器设置 / 主题(搜索) / 常用设置( 选择: Qoder Light )

#设置编辑器字体
右上角设置 / VS Code Settings / Commonly Used / Font Size(16)
## webstorm 中
File / Setting / Editor / Font / size(16)

#设置单击打开新页签打开文件
通过设置界面操作（最直观）
打开设置，或者点击左下角齿轮图标，选择“设置”。
在搜索框里输入 preview。
找到 Workbench(工作台) › Editor: Enable Preview 这个选项，取消勾选它就可以了

#设置点击文件后左侧目录停止自动展开定位( 这个不要修改, 没有和idea中alt+F1配合键 )
通过设置界面操作（最直观）
打开设置，或者点击左下角齿轮图标，选择“设置”。
在搜索框里输入 autoReveal
找到[ 功能/资源管理器/Auto Reveal ] 把这个选项改为false

#软件启动模式
cursor 每次启动后打开的不是idea模式
这是 Cursor 较新版本（约 3.11+）里的一个常见问题：启动时默认打开的是 Agent / Glass 界面，而不是传统的 IDE 编辑器界面。

Cursor 现在有两套界面：
1. Agent 窗口（Glass 界面，偏对话/Agent）
2. IDE 窗口（传统代码编辑器，类似 VS Code）

解决方法
1. 打开 Cursor Settings（不是 VS Code 的 Settings）
2. 进入 General（或 Agents）
3. 将 「Open Agents Window on Startup」 设为 Off
4. 切换到 IDE 窗口（见下方快捷方式）
5. 关闭 Agent 窗口（如果还开着）

以后使用
在软件右上角 file / New Agent window 或者是 Open IDE 

#左侧工具栏
右上角设置 / VS Code Settings / Workbench / Activity Bar ( 改为 vertical )

#在cursor内置浏览器打开访问地址
右上角设置 / Brower & Newwork / Show Localhost Links in Browser ( 改为关闭 )

```

### 配置文件

当前项目中`.vscode/settings.json`创建这个文件,常用配置如下

> 标准的 `JSON` 格式为了保持数据交换的纯粹性，设计上是不允许加注释的。但 VS Code 官方为了解决配置文件“需要解释说明”这个痛点，将自家的配置文件（如 `settings.json`、`tasks.json`）定义为 `JSONC` 格式，从而允许开发者在配置中添加注释。所以你在编辑这些文件时，VS Code 本身就能识别并支持注释语法。

```json
{
    // ==================== 编辑器外观 ====================
    "editor.fontSize": 16,
    // ==================== 搜索排除 ====================
    "search.exclude": {
        "**/node_modules": true,
        "**/.git": true,
        "dist": true,
        "dist-staging": true,
        "public": true,
        "**/build": true,
        "**/coverage": true,
        "**/.next": true,
        "**/out": true,
        "**/target": true,
        "**/__pycache__": true,
        "**/*.log": true
    }
}
```

项目级常用配置

```json
{
    // ==================== 编辑器外观 ====================
    "editor.fontSize": 16,
    "editor.fontFamily": "JetBrains Mono, Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.tabSize": 2,
    "editor.renderWhitespace": "all",

    // ==================== 工作台 ====================
    "workbench.editor.enablePreview": false,
    "workbench.activityBar.orientation": "vertical",

    // ==================== 资源管理器 ====================
    "explorer.autoReveal": false,

    // ==================== 文件 ====================
    "files.autoSave": "onFocusChange",

    // ==================== 终端 ====================
    "terminal.integrated.fontSize": 14,

    // ==================== 搜索排除 ====================
    "search.exclude": {
        "**/node_modules": true,
        "**/.git": true,
        "dist": true,
        "dist-staging": true,
        "public": true,
        "**/build": true,
        "**/coverage": true,
        "**/.next": true,
        "**/out": true,
        "**/target": true,
        "**/__pycache__": true,
        "**/*.log": true
    }
}
```



### 快捷键

| 功能                         | IDEA             | Cursor           |
| ---------------------------- | ---------------- | ---------------- |
| 搜索文件                     | shift 连续2下    | Ctrl + p         |
| 新页签打开文件               | 双击要打开的文件 |                  |
| 当前页面打开文件             | 单机要打开的文件 |                  |
| 定位到文件某一行             | Ctrl + G         | Ctrl + G         |
| 显示左侧工具栏<br />项目目录 | 暂无             | Ctrl + B         |
| 当前文件搜索                 | Ctrl + F         | Ctrl + F         |
| 全局文件搜索                 | Ctrl + Shift + F | Ctrl + Shift + F |
|                              |                  |                  |



### 底部

没有了

1. `idea`插件`CC GUI (Claude or Codex)`,可以调用`ai 的 api` 使用

   > [地址: CC GUI (Claude or Codex)](https://plugins.jetbrains.com/plugin/29342-cc-gui-claude-or-codex-)

2. xxx

