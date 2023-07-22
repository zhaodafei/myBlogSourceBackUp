---
title: -Pinia 存储库
date: 2020-07-04
categories: 
- Pinia
tags:
- Pinia
---
### `Pinia ` 存储库

Pinia 是 Vue 的存储库

`Pinia ` 属性 `state`, `getters`, `actions`

<!-- more -->

####  基本示例

```js
// 在这里定义 stores/counter.js
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})

// 使用=================================
import { useCounterStore } from '@/stores/counter'
export default {
  setup() {
    const counter = useCounterStore()

    counter.count++
    // 带自动补全
    counter.$patch({ count: counter.count + 1 })
    // 或使用 action 代替
    counter.increment()
  },
}
```



### 其他

 [pinia状态管理](https://pinia.web3doc.top/introduction.html "pinia状态管理")





























