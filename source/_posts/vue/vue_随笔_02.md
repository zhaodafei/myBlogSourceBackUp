---
title: -vue 随笔02
date: 2020-07-04
categories: 
- Vue
tags:
- Vue
---
-vue 随笔02
-vue 随笔02

<!-- more -->

### vue  组件名字使用

```html
# 组件使用
<loginLikeBtn style="margin-left: 0;">我是组件</loginLikeBtn>
<loginCloseBtn style="margin-left: 10px;">我是组件</loginCloseBtn>
<br /><br />
<login-like-btn style="margin-left: 0;">我是组件</login-like-btn>
<login-close-btn style="margin-left: 10px;">我是组件</login-close-btn>

#组件引入
<script>
    import likeBtn from '../components/like-btn.vue'   
    import closeBtn from '../components/close-btn.vue'
    export default {
        components: {
            loginLikeBtn: likeBtn,
            loginCloseBtn: closeBtn
        }
    }
</script>

```

![vue components](/img/vue/other/components_name.png "vue components")

### vue 打断点debug

![vue debug](/img/vue/other/vue_debug.png "vue debug")

### vue -router 打开新页面

#### 方法01

```javascript
//打开新页面
let routeUrl = this.$router.resolve({
    name: 'HelloWorld',
    query: {username: "dafei_name"}
});
window.open(routeUrl.href, '_blank')

// 接受参数
{{this.$route.query.username}}
```

#### 方法02

```html
<router-link :to="{ path: '/404',query: {username:'我是大飞'} }">404</router-link> 
```

### `mixins` 选项合并

```html
<div id="app">
    {{message}}  <br />
    {{message22}}
</div>

<script src="vue.js"></script>
<script type="module">
    const mixin = {
        data(){
            return {message22: 'hello world index.js',}
        }
    }
    const app = new Vue({
        el: '#app',
        mixins: [mixin],
        data() {return {message: 'Hello Vue!',}}
    });
</script>
```

### 引入图片Vue3

```vue
<template>
  <div>
    <!-- Vue3中图片引入： -->
    <!-- 图1 -->
    <div class="img1"></div>
    <!-- 图2 -->
    <div class="img2"
         :style="{backgroundImage: 'url(' + BgFei + ')',width:'100px',height:'100px' }">
    </div>
    <!-- 图3 -->
    <img :src="BgFei" width="100" />
  </div>
</template>

<script setup>
import BgFei from '@/assets/images/logo.svg'
</script>

<style scoped>
.img1{
  width: 100px;
  height: 100px;
  background-image: url('@/assets/images/logo.svg');
  background-size: 100px auto;
  /*background-size: cover;*/
  background-repeat: no-repeat;
  background-position: center;
}
</style>

```

### 网站置灰

```html
#直接在index.html页面中加入以下代码,尽量按照这个注释结构写,方便恢复
<!--
  <style> html{filter:grayscale(100%);}</style>
-->
```

方式二: 在`App.vue`文件中

```html
<html id="index-global-id"> 在index.html中添加一个id</html>

<script setup>
  onMounted(() => {
    // 这里可以调用接口,通过接口来调整开关
    let htmlEl = document.getElementById('index-global-id')
    htmlEl.style.filter = 'grayscale(100%)'
      
    // 恢复正常颜色
    // let htmlEl = document.getElementById('index-global-id')
    // htmlEl.style.filter = 'grayscale(0)'
  })
</script>
```

### 内联事件

有时我们需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 `$event` 变量，或者使用内联箭头函数

```html
<!-- 使用特殊的 $event 变量 -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- 使用内联箭头函数 -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>

<script setup>
function warn(message, event) {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>
```

[在内联事件处理器中访问事件参数](https://cn.vuejs.org/guide/essentials/event-handling.html#calling-methods-in-inline-handlers)

#### 下拉框多个参数`$event`

```html
<el-select v-model="paramsFei" @change="onSelectFei($event, 'fei_其他参数')">
  <el-option v-for="item in WEB_fei_arr" :key="item.value" :label="item.label" :value="item.value" />
</el-select>

使用 $event 可以穿多个参数

```

### table中输入框传值

```vue
在element 中举例子
<el-table :data="dataSource">
  <el-table-column label="名字" prop="name" />
  <el-table-column label="价格" prop="costPrice">
    <template #default="{ row, $index }">
      <el-form-item
          :prop="'dataSource.' + $index + '.price'"
          :rules="rules.price"
          :inline-message="true"
      >
        <el-input-number
            v-model="row.price"
            :min="0"
            :max="999999"
            :precision="2"
            :step="1"
            controls-position="right"
            @input="val => handleInput(val, row)"
        />
      </el-form-item>
    </template>
  </el-table-column>
</el-table>

```



### vite 打包ES5

`vite` 打包后支持`ES5`语法, 需要安装 ` "@vitejs/plugin-legacy": "^4.1.1"`,具体如下

```wiki
场景描述, 有些浏览器或者其他系统,不支持ES6语法,出现报错:  Uncaught SyntaxError: Unexpected token ?

01) npm i @vitejs/plugin-legacy
安装后:     "@vitejs/plugin-legacy": "^4.1.1",

02) 在 vite.config.js 文件中配置

import legacy from '@vitejs/plugin-legacy';
plugins:[
  legacy({
    targets:['defaults','not IE 11']
    }),
   vue()
]

03) 这样就可以打包出ES5的语法
```

### 国际化

```js
// 使用依赖 vue-i18n

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {Locale} from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'
import zhCN from 'vant/lib/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {...enUS, ...enLocale},
  cn: {...zhCN, ...zhLocale}
}

const i18n = new VueI18n({
  locale: 'cn', // 设置默认语言
  messages: messages // 设置资源文件对象
})

// 更新vant组件库本身的语言变化，支持国际化
function vantLocales(lang) {
  if (lang === 'en') {
    Locale.use(lang, enUS)
  } else if (lang === 'zh') {
    Locale.use(lang, zhCN)
  }
}

export {
  i18n,
  vantLocales
}

```





























