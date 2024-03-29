---
title: -vuex 状态管理
date: 2020-07-04
categories: 
- Vuex
tags:
- Vuex
---
### `vuex` 状态管理

vuex 状态管理demo

`vuex` 5个属性 `state`, `getters`, `mutations`, `actions`, `modules`

<!-- more -->

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

const state = { //demo ,定义需要的属性
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
// mutations 同步函数
const mutations = {
    increment_vuex(state) {  //demo
        state.count++
    }
};

export default mutations
```

#### 04)`src/vuex/actions.js` 内容

```javascript
// actions 异步函数;提交使用dispatch
const actions = {};

export default actions

```

#### `05)src/vuex/getters.js` 内容

```javascript
// 相当于计算属性 computed
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

#### Module 模块化

这里暂时不做介绍

### 辅助函数

辅助函数 `mapState` `mapGetters` `mapMutations` `mapActions`

```javascript
const book={
    state:{
        bookState:"001",
        bookStateName:"大飞",
        foo: "123",
        bar: "456"
    },
    getters: {
      bookFoo: state => state.bookStateName + '123',
    },
    mutations: {
      SET_FOO: (state, newVal) => {
        state.foo = newVal;
      },
      SET_BAR: (state, newVal) => {
        state.bar = newVal;
      }
    },
    actions: {
      update({commit}, info) {
        commit('SET_BAR', info);
      }
    },

}

export { book }
```

```javascript
// vue文件中使用
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['book']),
    ...mapGetters(['bookFoo']),
  },
  created() {
    this.SET_FOO('abc')
    this.update('xyz')
  },
  methods: {
    ...mapMutations(['SET_FOO']),
    ...mapActions(['update']),
  },
};
```



 [vuex状态管理](https://vuex.vuejs.org/zh/installation.html "vuex状态管理")





























