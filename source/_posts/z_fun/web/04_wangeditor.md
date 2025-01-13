---
title: wangeditor富文本编辑器
date: 2025-01-11
categories: 
- wangeditor
tags:
- wangeditor
---
`wangeditor`富文本编辑器
`wangeditor`富文本编辑器
`wangeditor`富文本编辑器
官网地址: [wangeditor富文本编辑器](https://www.wangeditor.com/ "wangeditor富文本编辑器")



<!-- more -->

### 安装在`Vue3`中

```shell
npm install @wangeditor/editor --save
npm install @wangeditor/editor-for-vue@next --save
```

### 配置项总体

```js
const customConfig = {
    excludeKeys:[], // 排除工具栏
    MENU_CONF:{}, // 菜单配置
}
```



### 排除工具栏

```js
// 需要排查那个就在excludeKeys中写那个

let excludeKeys = [
  'group-image',
  'blockquote',
  'bgColor',
  'color',
  'group-more-style',
  'fontFamily',
  'bulletedList',
  'numberedList',
  'lineHeight',
  'todo',
  'emotion',
  'insertLink',
  'group-video',
  'insertTable',
  'codeBlock',
  'divider',
  'fullScreen',
  // 'group-image',
  // 排除菜单组，写菜单组 key 的值即可
]
```

### 菜单配置

```js
MENU_CONF: {
  // 行高
  lineHeight: {
    lineHeightList: ['2', '2.5', '3', '3.5']
  },
  // 字体
  fontFamily: {
    fontFamilyList: ['黑体', '楷体']
  },
  //  单个文件的最大体积限制，默认为 2M
  uploadImage: {
    maxFileSize: 2 * 1024 * 1024 // 1M
  },
  // 文字颜色
  color: {
    colors: ['#000', '#333', '#666']
  }
},
```

### 在`avue`框架中使用

```js
const option = {
  column: [
    {
      label: '内容',
      prop: 'content',
      type: 'input',
      span: 12,
      component: 'avue-ueditor',
      action: '/blade-resource/oss/endpoint/put-file',
      propsHttp: {res: 'data', url: 'link'},
      hide: true,
      minRows: 4,
      customConfig: {
        // placeholder: '22222222',
        MENU_CONF: {
          // 行高
          lineHeight: {
            lineHeightList: ['2', '2.5', '3', '3.5']
          },
          // 字体
          fontFamily: {
            fontFamilyList: ['黑体', '楷体']
          },
          //  单个文件的最大体积限制，默认为 2M
          uploadImage: {
            maxFileSize: 2 * 1024 * 1024 // 1M
          },
          // 文字颜色
          color: {
            colors: ['#000', '#333', '#666']
          }
        },
        excludeKeys: [
          // 'group-image',
          'blockquote',
          'bgColor',
          'color',
          'group-more-style',
          'fontFamily',
          'bulletedList',
          'numberedList',
          // 'lineHeight',
          'todo',
          'emotion',
          'insertLink',
          'group-video',
          'insertTable',
          'codeBlock',
          'divider',
          'fullScreen'
        ]
      },
    }
  ]
}
```





### 底部

没有了























