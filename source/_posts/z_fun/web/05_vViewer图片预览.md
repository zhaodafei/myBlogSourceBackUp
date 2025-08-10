---
title: viewer图片预览组件
date: 2025-07-02
categories: 
- viewer
tags:
- viewer
---
`viewer`图片预览组件
`viewer`图片预览组件
`viewer`图片预览组件



<!-- more -->

### 核心配置参数

```js
viewerOptions: {
  inline: true, // 是否启用内联模式（图片直接嵌入页面，非弹窗）
  button: true, // 是否显示右上角关闭按钮
  navbar: true, // 是否显示底部导航栏（缩略图、旋转按钮等）
  title: true, // 是否显示图片标题（从 img 的 alt 或 data-title 获取
  toolbar: true, // 是否显示顶部工具栏（缩放、旋转、翻转等）
  tooltip: true, // 是否显示操作提示
  movable: true, // 是否允许拖拽图片
  zoomable: true, // 是否允许缩放
  rotatable: true, // 是否允许旋转
  scalable: true, // 是否允许翻转
  transition: true, // 是否启用过渡动画
  fullscreen: true, // 是否允许全屏
  zoomOnWheel: true // 是否允许鼠标滚轮缩放
}
```



以下是 `v-viewer` 支持的 **所有配置选项**（对应 viewer.js 的配置）：

| **参数**       | **类型** | **默认值** | **说明**                                                   |
| -------------- | -------- | ---------- | ---------------------------------------------------------- |
| `inline`       | Boolean  | `false`    | 是否启用内联模式（图片直接嵌入页面，非弹窗）               |
| `button`       | Boolean  | `true`     | 是否显示右上角关闭按钮                                     |
| `navbar`       | Boolean  | `true`     | 是否显示底部导航栏（缩略图、旋转按钮等）                   |
| `title`        | Boolean  | `true`     | 是否显示图片标题（从 `img` 的 `alt` 或 `data-title` 获取） |
| `toolbar`      | Boolean  | `true`     | 是否显示顶部工具栏（缩放、旋转、翻转等）                   |
| `tooltip`      | Boolean  | `true`     | 是否显示操作提示                                           |
| `movable`      | Boolean  | `true`     | 是否允许拖拽图片                                           |
| `zoomable`     | Boolean  | `true`     | 是否允许缩放                                               |
| `rotatable`    | Boolean  | `true`     | 是否允许旋转                                               |
| `scalable`     | Boolean  | `true`     | 是否允许翻转                                               |
| `transition`   | Boolean  | `true`     | 是否启用过渡动画                                           |
| `fullscreen`   | Boolean  | `true`     | 是否允许全屏                                               |
| `keyboard`     | Boolean  | `true`     | 是否启用键盘快捷键（← → 导航，ESC 关闭）                   |
| `interval`     | Number   | `5000`     | 幻灯片播放的间隔时间（毫秒）                               |
| `zoomRatio`    | Number   | `0.1`      | 每次点击缩放按钮的缩放比例                                 |
| `minZoomRatio` | Number   | `0.01`     | 最小缩放比例                                               |
| `maxZoomRatio` | Number   | `100`      | 最大缩放比例                                               |
| `zIndex`       | Number   | `2015`     | 查看器的 CSS `z-index` 值                                  |
| `zoomOnWheel`  | Boolean  | `true`     | 是否允许鼠标滚轮缩放                                       |
| `viewed`       | Function | -          | 图片查看后的回调（参数：`index` 当前图片索引）             |
| `ready`        | Function | -          | 查看器初始化完成的回调                                     |



### 底部

1. 官网地址: [viewer图片预览组件](https://mirari.cc/posts/v-viewer)
2. 























