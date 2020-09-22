---
title: vue中main.js文件解析 
categories: 
- web前端
- Vue
tags:
- Vue
- main.js
---
入口文件`mian.js` 中 `render`函数

### 01) 入口文件 `mians.js` 中 `render` 函数

```javascript
import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render: h => h(App),

  // render:function (h) {
  //   return h(App);
  // }

  // render:function (createdElement) {
  //   return createdElement(App)
  // }

  // render: function (createdElement) {
  //   return createdElement('h2', {class: 'fei_foo'}, ['hello world'])
  // }

  // 用h2标签替换掉App.vue中的内容
  render: function (createdElement) {
    return createdElement(
        'h2',
        {class: 'fei_foo'},
        [
          'hello world',
          createdElement('button', ['点击'])
        ])
  }
}).$mount('#app');

```

![vue main.js](/img/vue/vue_main_js.png "vue main.js")

### 02) `render` 传入组件对象

```javascript
// main.js 内容如下
import Vue from 'vue'
// import App from './App.vue'
import Fei from './components/Fei.vue'

Vue.config.productionTip = false

new Vue({
  render: function (createdElement) {
    // return createdElement(App)
    return createdElement(Fei)
  }
}).$mount('#app');

```

```vue
// components/Fei.vue 中文件如下
<template>
    <div>我是组件Fei.vue</div>
</template>

<script>
    export default {
        name: "Fei"
    }
</script>

<style scoped>

</style>
```

###  runtime-compiler 和 runtime-only 

runtime-compiler:

```
template(解析)-->ast(abstract syntax tree 抽象语法树)-->render-->virtual dom-->UI

```

runtime-only: 直接使用render渲染

```
template(解析)-->render-->virtual dom-->UI
```































