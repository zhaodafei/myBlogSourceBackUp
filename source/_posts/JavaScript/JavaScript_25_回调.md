---
title: js 回调
date: 2026-04-12
categories: 
- 回调
tags:
- 回调
---

js 回调
js 回调
js 回调

<!-- more -->

### 回调例子

场景描述, 以动物园喂动物举例; 

```wiki

┌─────────────────────────────────────────────┐
│  回调 = 把我的代码交给你，合适时机你来执行  │
└─────────────────────────────────────────────┘

我: "喂完饭告诉我一声"
动物园: "好，我记下了(注册回调)"
动物园: ...正在喂食...
动物园: "喂完了，通知你！(执行回调)"
我: "收到通知，开始处理"


这就是回调的本质：控制反转 — 我不主动轮询检查，而是把"后续操作"交给对方，让对方完成后通知我
```

```html
<script>
  // ============== 单文件写法 ==============
  // 1. 定义工厂函数
  function useZoo() {
    let animal = null

    const onFed = (callback) => {
      console.log('🎮 饲养员正在喂食...')
      setTimeout(() => {
        animal = { name: '大熊猫', food: '竹子' }
        console.log('✅ 喂食完成!')
        callback(animal)
      }, 1000)
    }

    return { onFed }
  }

  // 2. 使用（同一个文件中直接调用）
  const zoo = useZoo()

  zoo.onFed((result) => {
    console.log(`🎉 ${result.name} 吃到了 ${result.food}，很开心!`)
  })
</script>
```

```js
// ============== 独立文件写法( 文件名字 useFei.js ) ==============
export function useZoo() {
  let animal = null

  // 喂食完成后通知外部
  const onFed = (callback) => {
    console.log('🎮 饲养员正在喂食...')

    // 模拟喂食过程
    setTimeout(() => {
      animal = { name: '大熊猫', food: '竹子' }
      console.log('✅ 喂食完成!')

      // 执行外部注册的回调
      callback(animal)
    }, 1000)
  }

  return { onFed }
}


<script setup>
  import { useZoo } from './useFei.js'
  const zoo  = useZoo()

  // 注册回调 - 喂食完成后自动执行
  zoo.onFed((result) => {
    console.log(`🎉 ${result.name} 吃到了 ${result.food}，很开心!`)
  })
</script>
```













### 底部

没有了





















