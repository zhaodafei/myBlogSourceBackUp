---
title: Nuxt随笔01
date: 2022-08-31
categories: 
- Nuxt
tags:
- Nuxt
---
`Nuxt`随笔01

<!-- more -->

### 常见安装包

```shell
npm install @nuxtjs/axios -S
npm install @nuxtjs/proxy -S
npm i --save cookie-universal-nuxt
```



### 项目安装

```shell
npx create-nuxt-app temp_nuxt
#一路默认

#Successfully created project temp_nuxt
#To get started:
cd temp_nuxt
yarn dev

#To build & start for production:
cd temp_nuxt
yarn build
yarn start

#项目后期安装依赖包axios ---强烈推荐这种方式
npm install @nuxtjs/axios -S
##然后配置文件nuxt.config.js中配置
modules: [
	'@nuxtjs/axios',
],
###页面中使用
  asyncData({$axios}) {
    console.log("axios 网络请求_sssssssssssss", $axios);
  },
##02,使用npm 安装 axions--- 这个方式安装后,每个页面需要单独引入 axios
npm install axios -S
```



### 路由

自动识别路由文件夹位置

### 生命周期-服务端

#### nuxtServerInit

`nuxtServerInit` 只会在 `store/index.js`应用初始化的时候执行***一次***

```javascript
// 文件位置 store/index.js ---nuxtServerInit 生命周期
const state = () => {
  return {
    token:"hello_token"
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  // nuxtServerInit 生命周期
  nuxtServerInit(store, content) {
    store.commit('setToken','nuxtServerInit_token')
    console.log('nuxtServerInit 执行了',store);
  },
}

```

####  middleware中间件
```javascript
// 文件位置 nuxt.config.js --- router middleware 生命周期
  build: {},
  router: {
    middleware: 'auth'
  }
// 文件位置 middleware/auth.js --- 如下---全局的
export default function ({store, route, redirect, params, query}) {
  console.log('middleware__执行了');
}
// 文件位置 pages/index.vue --- 如下--- 局部的
/*** 
    <template><div>首页</div></template>

    <script>
    export default {
      name: 'IndexPage',
      middleware:'auth'
    }
    </script>
***/
```

#### validate
```vue
// 文件位置 pages/index.vue --- 如下 ----- validate 生命周期
<template><div>首页</div></template>

<script>
    export default {
       name: 'IndexPage',
       validate({params, query}) {
        console.log('validate 执行了');
        return true
      }
    }
</script>
```

#### asyncData
`asyncData`方法会在组件（**限于页面组件**）每次加载之前被调用。它可以在服务端或路由更新之前被调用。在这个方法被调用的时候，第一个参数被设定为当前页面的**上下文对象**，你可以利用 `asyncData`方法来获取数据并返回给当前组件。

***主要用在主页面中获取接口数据***

```vue
<!--  注意:
	在asyncData中没有this
-->

// 文件位置 pages/index.vue --- 如下 ----- asyncData 生命周期
// https://www.nuxtjs.cn/api
<template><div>首页</div></template>

<script>
    export default {
      name: 'IndexPage',
      asyncData(context) {
        console.log("asyncData 执行了. 在这里你可以发送网络请求");
        return { project: 'nuxt' }
      }
    }
</script>
```

```vue
<template>
  <div>
    这里是详情页面-- asyncData 通过data也赋值
    <p>
      从Github查看Vue项目的信息
    </p>
    <p>{{ username }}</p>
    <p>{{ age }}</p>
    <p>{{ url }}</p>
  </div>
</template>

<script>
export default {
  name: "id",
  async asyncData({$axios}) {
    // console.log("axios 网络请求_sssssssssssss", $axios);

    let res = await $axios.get('https://api.github.com/repos/vuejs/vue')
    // console.log("??????",res.data);
    let dataSource = res.data
    return {
      username: dataSource.name, //****************
      age:dataSource.html_url,
      url:dataSource.url,
    }
  },
  data() {
    return {
      id:0,
      username: "初始化_username", //****************
      age: "初始化_age",
      url: "初始化_url",
    }
  },
  created() {
    console.log(this.$route.params);
  }
}
</script>
<style scoped></style>

```



#### fetch

*fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。*

也可以用在***组件中获取数据***渲染到页面上,--注意不能使用在非组件页面上(这样数据渲染不出来)

```html
// 文件位置 pages/index.vue --- 如下 ----- asyncData 生命周期
// https://www.nuxtjs.cn/api/pages-fetch
<template>
  <div>首页</div>
  <h1>Stars: {{ $store.state.stars }}</h1>
</template>

<script>
  export default {
    fetch({ store, params }) {
      return axios.get('http://my-api/stars').then(res => {
        store.commit('setStars', res.data)
      })
    }
  }
</script>
```

```vue
<template>
  <div>
    这里是详情页面
    <p>
      <NuxtLink :to="{path:'/user/list'}">返回列表页面</NuxtLink>
    </p>
      注意观察这个组件 Fei
    <Fei />
  </div>
</template>

<script>
import Fei from '~/components/Fei'
export default {
  name: "id",
  components: {
    Fei
  },
}
</script>

<style scoped></style>
<!--  *******************组件页面 fei*******************  -->
<template>
  <div style="color: #ff6b81;margin-top: 30px;font-size: 20px;font-weight: 700">
    我是组件
    <p>{{ username }}</p>
    <p>{{ age }}</p>
    <p>{{ url }}</p>
  </div>
</template>

<script>
export default {
  // { store, params,$axios }
  async fetch() {
    // fetch 方法中有this
    console.log('fetch__________start');
    let res = await this.$axios.get('https://api.github.com/repos/ant-design/ant-design')
    // console.log("fetch___________-",res.data);
    let dataSource = res.data
    this.username = dataSource.name
    this.age = dataSource.html_url
    this.url = dataSource.url
  },
  data() {
    return {
      id:0,
      username: "初始化_username",
      age: "初始化_age",
      url: "初始化_url",
    }
  },
}
</script>

<style scoped>

</style>

```



### 生命周期-服务端和客户端共有

```vue
created, fetch, mounted
// 文件位置 pages/index.vue --- 如下 ----- created, fetch, mounted 生命周期
// https://www.nuxtjs.cn/api/pages-fetch
<template>
  <div>首页</div>
</template>

<script>
  export default {
      beforeCreate() {
        console.log("beforeCreate 执行了");
      },
      created() {
        console.log("created 执行了");
      }
  }
</script>
```

### 客户端生命周期

和`vue`中一样

```vue
<template>
  <div>首页</div>
</template>

<script>
  export default {
      beforeMount() {},
      mounted() {}, 
      beforeUpdate() {}, 
      updated() {},
      beforeDestroy() {}, 
      destroyed() {}
  }
</script>
```



[生命周期 nuxt-lifecycle](https://www.nuxtjs.cn/guides/concepts/nuxt-lifecycle)

![生命周期](https://www.nuxtjs.cn/guides/nuxt-lifecycle.png "生命周期")



### 路由

```vue
<NuxtLink to="/">Home page</NuxtLink>
<NuxtLink :to="{name:'list',query:{id:111},params:{id:222}}">Home page</NuxtLink>

<script>
  export default {
     methods:{
         btnFei(){
              this.$router.push('/list')
              this.$router.push({
                path: "/user/list",
                query: {id: 111},
              })
         }
     }
  }
</script>
```

嵌套路由注意:

**Warning:** 别忘了在父组件(`.vue`文件) 内增加 `<nuxt-child/>` 用于显示子视图内容。

[nuxt 路由](https://www.nuxtjs.cn/guide/routing)

### 配置文件

`nuxt.config.js` 配置文件

#### header 头

```javascript
// head 信息配置(全局和局部)
  head: {
    title: 'nuxt_fei',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
// css 
css: [ '~/static/css/fei.css' ],
```

```vue
<template>
<div>
  这里是详情页面--动态显示title
  <p><NuxtLink :to="{path:'/user/list'}">返回列表页面</NuxtLink></p>
</div>
</template>

<script>
export default {
  name: "id",
  head() {
    return {
      title: '用户首页' + this.id,
      meta: [
        {
          hid: '个人用户详情',
          name: '个人用户详情',
          content: '个人用户详情'
        }
      ]
    }
  },
  data() {
    return {
      id:0
    }
  },
  created() {
    console.log(this.$route.params);
    this.id=this.$route.params.id
  }
}
</script>
```

#### axios跨域

设置代理,接口使用

```shell
#安装代理 @nuxtjs/proxy
npm install @nuxtjs/proxy -S
```

```javascript
// nuxt.config.js 配置文件配置代理

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8072/', // 本地 Java
      // changeOrigin: true,
      pathRewrite: {
          '^/api': '/api'
      }
    }
  },
```

### cookie

使用`cookie-universal-nuxt`持久化

```shell
npm i --save cookie-universal-nuxt
```

使用

```javascript
// nuxt.config.js进行配置
modules: [
    'cookie-universal-nuxt',
    // ['cookie-universal-nuxt', { parseJSON: true }],
],
    
// 使用
this.$cookies.set('user_cookie', '我是数据值')
this.$cookies.get('user_cookie');
this.$cookies.remove('user_cookie');
```

### vuex

在安装`nuxt`的时候,已经内置了`vuex`,所以在`package.json`中看不到

```javascript
// xxx.vue 页面中使用 
import { mapMutations } from 'vuex' 
  methods: {
    ...mapMutations({
      handleFoo: 'user/GET_TOKEN'
    }),
    fei(){
      this.handleFoo(); // 这里就可以调用到 store/user.js 中的方法
      this.$store.commit('user/SET_TOKEN')  // 这样也可以
      console.log('我获取到了数据',this.$store.state.user.feiStoreStr);
    }
}


// ------------ store/user.js 中的方法 ----------------------
const state = () => ({
  feiStoreStr: '我是store中的数据', // 页面中使用 this.$store.state.user.feiStoreStr
})
const mutations = {
   SET_TOKEN(state, token) {
    console.log('commit 方法也执行了');
  },
  GET_TOKEN(state) {
    console.log('store/user.js 我执行了');
  }
}

export default {
  state
  mutations,
}

```

[nuxt Vuex-store](https://www.nuxtjs.cn/guide/vuex-store)

### 打包上线

```wiki
#01)执行打包命令
npm run build

#02将打包好的文件
    .nuxt
    static
    nuxt.config.js
    package.json
这四个文件丢到服务器的某个文件夹中，在服务器上安装node环境

#03)在服务器上面执行npm install

#04)在服务器上面执行npm run start

使用nginx做代理到localhost:3000上面
```

代理

```nginx
server {
  listen 80;
  server_name  www.fei.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
  }
  error_page 404 = http://www.fei.com/404.html;
}
```





### 底部

xxx

























