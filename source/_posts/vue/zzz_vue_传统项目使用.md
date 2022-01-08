---
title: 传统项目项目引入Vue
date: 2021-12-04
categories: 
- Vue
tags:
- Vue
---
传统项目项目引入`Vue`
传统项目项目引入`Vue`
传统项目项目引入`Vue`
下面more是分隔符

<!-- more -->

## Vue

```vue
<div id="app">
    {{ message }}
    <button type="button" @click="foo()">提交</button>
</div>
<script src="./vue-2.6.14.js"></script>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello C#!',
      visible: false
    },
    methods:{
      foo() {
        console.log('我是vue');
      },
    }
  })
</script>
```

## jQ和Vue

```html
<button type="button" onclick="foo()">提交</button>
<script>
  function foo() {
    console.log('ok');
    app.foo() // 调用Vue 中的方法
  }
</script>
```



## axios

```html
// tip: 在 axios-0.24.0.min.js 同级目录下需要下载好 axios.min.map
<script src="./axios-0.24.0.min.js"></script>

// 使用方法参考官网 https://www.npmjs.com/package/axios
```



## element-ui

```html
// 下载链接地址 https://unpkg.com/browse/element-ui@2.15.6/lib/theme-chalk/fonts/
// https://unpkg.com/browse/element-ui@2.15.6/lib/theme-chalk/fonts/
// tip: 在同级目录下需要有 
/font/element-icons.woff 
/font/
<link rel="stylesheet" href="./element-ui-2.15.6.css">

<script src="../common/js/element-ui-2.15.6.js"></script>
<script>
    // 使用
    ELEMENT.Message("消息提示")
    
    ELEMENT.MessageBox({
      type: 'alert',
      title: "标题",
      message: "我是弹窗",
      callback:()=>{
        console.log('回调ok');
      }
    })
</script>
```







