---
title: vuex 状态管理
categories: 
- web前端
- vue
tags:
- vue
- vuex
---
### `vuex` 状态管理

vuex 状态管理demo

####  01) 基本目录结构(自己创建)

```html
src
--vuex
------actions.js
------getters.js
------index.js
------mutations.js
```

#### 02)  `src/vuex/index.js` 内容

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state = { //demo
    count: 10
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

export default store

```

#### 03)`src/vuex/mutations.js` 内容

```javascript
const mutations = {
    increment_vuex(state) {  //demo
        state.count++
    }
};

export default mutations
```

#### 04)`src/vuex/actions.js` 内容

```javascript
const actions = {};

export default actions

```

#### `05)src/vuex/getters.js` 内容

```javascript
const getters = {};

export default getters	
```

#### 06)`src/main.js` 注册vuex

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/index'

Vue.config.productionTip = false

Vue.prototype.$dafei = "我是自定义全局变量";

new Vue({
  render: h => h(App),
  router,
  store //demo
}).$mount('#app');
```

#### 07)`src/App.vue`中使用

```html
<template>
  <div id="app">
    {{ $route.meta.title}} ---我是元数据title
    <input type="button" value="点击vuex" @click="increment()">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods:{
      increment() {
        // increment_vuex 为 src/vuex/index.js mutations中的方法
        this.$store.commit('increment_vuex');
        console.log(this.$store.state.count);
      }
    }
  }
</script>
```

![vuex](/img/vue/vue_vuex.png " vuex")



 [vuex状态管理](https://vuex.vuejs.org/zh/installation.html "vuexzh状态管理")





























