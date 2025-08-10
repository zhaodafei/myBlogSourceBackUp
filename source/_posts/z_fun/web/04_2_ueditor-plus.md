---
title: ueditor-plus富文本编辑器
date: 2025-01-11
categories: 
- ueditor-plus
tags:
- ueditor-plus
---
`ueditor-plus`富文本编辑器
`ueditor-plus`富文本编辑器
`ueditor-plus`富文本编辑器
官网地址: [UEditorPlus 富文本编辑器](https://open-doc.modstart.com/ueditor-plus/)



<!-- more -->

### 安装在`Vue3`中

```shell
# 第一步:安装插件支持
npm i --save vue-ueditor-wrap@3.x
# 或
yarn add --save vue-ueditor-wrap@3.x

#第二步: 解压 UEditorPlus 到静态资源目录
复制 dist-min 到项目 public/static/UEditorPlus/ 目录

这里的 dist-min 从git上下载,地址如下:
github: https://github.com/modstart-lib/ueditor-plus.git
gitee:  https://gitee.com/modstart-lib/ueditor-plus.git

#第三步: 引入组件并使用
在 main.js中

import {createApp} from 'vue'
import App from './App.vue'
import VueUeditorWrap from 'vue-ueditor-wrap';

createApp(App).use(VueUeditorWrap).mount('#app')
```

### 安装完毕基本使用

```vue
<template>
  <div>
    <vue-ueditor-wrap
      v-model="content"
      editor-id="editor"
      :config="editorConfig"
      :editorDependencies="['ueditor.config.js', 'ueditor.all.js']"
      style="height: 80%; width: 80%"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const content = ref('<p>Hello UEditorPlus</p>')
  const editorConfig = {
    // 后端服务地址，后端处理参考
    // https://open-doc.modstart.com/ueditor-plus/backend.html
    serverUrl: '/api/path/to/server',
    UEDITOR_HOME_URL: '/static/UEditorPlus/',
    UEDITOR_CORS_URL: '/static/UEditorPlus/',
  }
</script>
```

### 工具栏配置`toolbars`

```js
toolbars: [
  // 自定义工具栏（可选）
  [
    'fullscreen', // 全屏
    'source', // 源代码
    '|',
    'undo', // 撤销
    'redo', // 重做
    '|',
    'bold', // 加粗
    'italic', // 斜体
    'underline', // 下划线
    'fontborder', // 字符边框
    'strikethrough', // 删除线
    'superscript', // 上标
    'subscript', // 下标
    'removeformat', // 清除格式
    'formatmatch', // 格式刷
    'autotypeset', // 自动排版
    'blockquote', // 引用
    'pasteplain', // 纯文本粘贴模式
    '|',
    'forecolor', // 字体颜色
    'backcolor', // 背景色
    'insertorderedlist', // 有序列表
    'insertunorderedlist', // 无序列表
    'selectall', // 全选
    'cleardoc', // 清空文档
    '|',
    'rowspacingtop', // 段前距
    'rowspacingbottom', // 段后距
    'lineheight', // 行间距
    '|',
    'customstyle', // 自定义标题
    'paragraph', // 段落格式
    'fontfamily', // 字体
    'fontsize', // 字号
    '|',
    'directionalityltr', // 从左向右输入
    'directionalityrtl', // 从右向左输入
    'indent', // 首行缩进
    '|',
    'justifyleft', // 居左对齐
    'justifycenter', // 居中对齐
    'justifyright',
    'justifyjustify', // 两端对齐
    '|',
    'touppercase', // 字母大写
    'tolowercase', // 字母小写
    '|',
    'link', // 超链接
    'unlink', // 取消链接
    'anchor', // 锚点
    '|',
    'imagenone', // 图片默认
    'imageleft', // 图片左浮动
    'imageright', // 图片右浮动
    'imagecenter', // 图片居中
    '|',
    'simpleupload', // 单图上传
    'insertimage', // 多图上传
    'emotion', // 表情
    'scrawl', // 涂鸦
    'insertvideo', // 视频
    'attachment', // 附件
    'insertframe', // 插入Iframe
    'insertcode', // 插入代码
    'pagebreak', // 分页
    'template', // 模板
    'background', // 背景
    'formula', // 公式
    '|',
    'horizontal', // 分隔线
    'date', // 日期
    'time', // 时间
    'spechars', // 特殊字符
    'wordimage', // Word图片转存
    '|',
    'inserttable', // 插入表格
    'deletetable', // 删除表格
    'insertparagraphbeforetable', // 表格前插入行
    'insertrow', // 前插入行
    'deleterow', // 删除行
    'insertcol', // 前插入列
    'deletecol', // 删除列
    'mergecells', // 合并多个单元格
    'mergeright', // 右合并单元格
    'mergedown', // 下合并单元格
    'splittocells', // 完全拆分单元格
    'splittorows', // 拆分成行
    'splittocols', // 拆分成列
    'contentimport', // 内容导入（支持Word、Markdown）
    '|',
    'ai', // AI智能
    '|',
    'print', // 打印
    'preview', // 预览
    'searchreplace', // 查询替换
    'help' // 帮助
  ]
]
```





### 底部

1. 官网地址: [UEditorPlus 富文本编辑器](https://open-doc.modstart.com/ueditor-plus/)
2. xxx























