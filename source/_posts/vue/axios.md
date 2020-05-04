---
title: vue_axios 
categories: 
- web前端
- vue
tags:
- vue
- axios
---
### `vue` 和 `axios`

`vue` 和 `axios`

### 目录结构

```html
src
--networkAxios
----axios_instance.js
----home.js
```

### src/networkAxios/axios_instance.js 文件内容

```javascript
// axios 封装............
import Axios from 'axios'
// import Qs from 'qs'

// qs 对请求的参数进行序列化
export default function axios_instance(option) {
    return new Promise((resolve, reject) => {
        // 创建 axios 实例
        const instance = Axios.create({
            baseURL: 'http://demo.yizheng_fei.com/api',
            // baseURL: 'https://gank.io/api',
            timeout: 300000,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        // 配置请求
        instance.interceptors.request.use(config => {
            // 判断token,用于登录
            // 请求数据序列号
            // config.data = Qs.stringify(config.data)
            return config;
        }, error => {
            // 网络请求失败
            return error;
        });

        // 配置响应拦截
        instance.interceptors.response.use(response => {
            return response.data;
        }, error => {
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        error.message = '请求错误';
                        break;
                    case 401:
                        error.message = '未授权的访问';
                        break;
                    case 403:
                        error.message = '没有权限';
                        break;
                    case 500:
                    case 501:
                    case 503:
                    default:
                        error.message = '服务器出问题';
                        break;
                }
            }
            return error;
        });

        // 传入对象进行网络访问
        instance(option).then(res => {
            resolve(res);
        }).catch(error => {
            reject(error)
        });
    });
}

```

### src/networkAxios/home.js 文件内容

```javascript
import axios_instance from './axios_instance'

export function getWeatherData() {
    return axios_instance({
        url: '/user/detail?id=3'
        // url: '/v2/categories/GanHuo'
    })
}
```

### src/views/Home.vue 文件内容

```html
<template>
    <div id="home">
        <div>我是home <input type="button" value="点击请求数据" @click="fetch_data()">点击请求数据</div>
    </div>
</template>

<script>
    import {getWeatherData} from "../networkAxios/home"

    export default {
        name: "Home",
        methods:{
            fetch_data() {
                getWeatherData().then(res=>{
                    console.log(res.data);
                })
            }
        }
    }
</script>

<style scoped>

</style>
```

![axios](/img/vue/axios.png "axios")

 [axios](http://www.axios-js.com/zh-cn/docs/index.html#axios-create-config "axios")





























