---
title: tinymce富文本编辑器
date: 2025-01-11
categories: 
- tinymce
tags:
- tinymce
---
`tinymce`富文本编辑器
`tinymce`富文本编辑器
`tinymce`富文本编辑器
官网地址: [tinymce 富文本编辑器](https://www.tiny.cloud/tinymce/)

<!-- more -->

开源项目依赖于其社区的热情和专业知识。`TinyMCE`也不例外 - 我们依靠一个充满活力和忠诚的开发人员社区,他们为项目的持续创新和成功做出了贡献。`TinyMCE`开源项目是[免费使用](https://www.tiny.cloud/blog/category/open-source/)的,从一开始就是。

### 安装在`Vue3`中

```shell
"@tinymce/tinymce-vue": "5.1.1",
"tinymce": "7.3.0",

npm install tinymce@7.3.0
npm install @tinymce/tinymce-vue@5.1.1
```

### 安装完毕基本使用

```vue
<template>
  <div>
    <Editor v-model="content" ref="editorRef" :init="TinyMCEInitConfig" tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7.9.1/tinymce.min.js" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import tinymce from 'tinymce/tinymce'
const content = ref('');

const TinyMCEInitConfig = computed(() => {
  return {
    // 去除tinyMCE的logo
    branding: false,
    // 去除右上角的按钮
    promotion: false,
    toolbar_mode: 'wrap',
    height: 500,
    // 一些插件
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
  };
});
</script>

<style lang="scss" scoped></style>
```

### 工具栏配置`toolbars`

```js
设置 tinymceScriptSrc 的链接
```

### 注意点

1. 设置 `tinymceScriptSrc` 的链接

   > 有兴趣的可以看看这个，官网详细解释了为什么要使用api-key，为什么会有1000限制，以及怎么处理 [点击跳转](https://github.com/tinymce/tinymce/discussions/9207)

   ```wiki
   TinyMCE is (and always will be) available for free as an open source product. Our cloud service, however, is strictly limited - and that is what requires an API key.
   
   There are plenty of free CDN options available, such as:
   https://cdnjs.com/libraries/tinymce
   https://www.jsdelivr.com/package/npm/tinymce
   https://unpkg.com/browse/tinymce/
   
   Or you can download the community edition and host it yourself.
   ```

2. License key
   ```wiki
   	
   TinyMCE 7 is licensed under the GNU General Public License Version 2 or later. A new configuration option called 'license_key' requires developers to make a conscious decision to use TinyMCE with the GPLv2+ license or with a commercial license.
   
   If you are using TinyMCE in a self-hosted environment, a console log warning message will display if the license key config option is missing or invalid. This message aims to ensure compliance with licensing requirements and provide transparency during the evaluation period.
   
   This message will not be shown when loading TinyMCE from Tiny Cloud, as it is already under a commercial license.
   ```

   ```js
   tinymce.init({
     selector: 'textarea',  // change this value according to your HTML
     license_key: 'gpl'
   });
   
   tinymce.init({
     selector: 'textarea',  // change this value according to your HTML
     license_key: '<your-license-key>',
     //api_key:''
   });
   ```

   

3. xx



### 底部

1. 官网地址: [tinymce 富文本编辑器](https://www.tiny.cloud/tinymce/)
1. [官网地址License key](https://www.tiny.cloud/docs/tinymce/latest/license-key/)
1. [官方语言包](https://www.tiny.cloud/get-tiny/language-packages/)
2. [vue3使用tinymce](https://www.cnblogs.com/pavetr/p/17238625.html)
2. [vue3项目中使用tinyMCE](https://juejin.cn/post/7519121073544495139)























