---
title: VueRouter4.x 基本使用
date: 2022-03-23
categories: 
- VueRouter4.x
tags:
- VueRouter4.x
---
VueRouter4.x 简单使用
VueRouter4.x 简单使用
VueRouter4.x 简单使用

<!-- more -->

### ### 组合式API

```javascript
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {...route.query,},
      })
    }
  },
}

```



[官方地址: Vue Router 和 组合式 API](https://router.vuejs.org/zh/guide/advanced/composition-api.html)











