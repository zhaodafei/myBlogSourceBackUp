---
title: Vue3 -ref 家族
date: 2022-08-04
categories: 
- Vue3
tags:
- Vue3
---
`toRefs` 、`ref`、

<!-- more -->

### toRefs 响应式

使用一个`hooks`做测试

`reactive` 对象取出的所有属性值都是非响应式的,
利用` toRefs` 可以将一个响应式 `reactive` 对象的所有原始属性转换为响应式的 ref 属性

```vue
<template>
  <h3>toRefs</h3>
  <p>
    这个值现在是响应式的
    {{firstName}}
  </p>
</template>

<script setup>
import {reactive,toRefs} from "vue";

// hooks 测试toRefs 功能
const useFeiHooks = () => {
  const user = reactive({
    firstName: '孔',
    lastName: '仲尼'
  })

  setInterval(() => {
    user.firstName += "**"
    user.lastName += "**"
    console.log("执行了");
  }, 1000)

  // return user  这样出去的是非响应式
  // 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性
  return toRefs(user)
}

const {firstName, lastName} = useFeiHooks();
</script>

```

### ref

`ref` 的另一个作用,获取页面元素

```vue
<template>
  <h3>ref</h3>
  <input type="text" ref="feiRef">
</template>

<script setup>
import {ref, onMounted} from "vue";

// 可以获取到页面元素
const feiRef = ref(null);

onMounted(() => {
  // 光标定位到输入框
  feiRef.value && feiRef.value.focus()
})
</script>

```

### readonly 只读

```vue
<template>
  <h3>readonly 只读</h3>
  <button @click="updateFei">xx</button>
</template>

<script setup>
import {readonly} from "vue";

const objRead = readonly({
  name: '孔丘',
  period: "春秋末期"
})

const updateFei = () => {
  // waring: 这里会直接报错,不让修改
  objRead.name = "xxxxxxxxx";
}
</script>

```

### toRaw 普通对象

把响应式数据还原为普通对象

```vue
<template>
  <h3>toRaw 把响应式数据还原为普通对象</h3>
  <p>{{user}}</p>
  <button @click="handleFei">DaFei</button>
</template>

<script setup>
import {reactive, toRaw} from "vue";

const user = reactive({
  name: '孔丘',
  period: '春秋时期'
})
const handleFei = () => {
  const newUser = toRaw(user)
  console.log("newUser 为普通对象",newUser);
}
</script>

```

### customRef

`customRef` 创建一个自定义的 `ref`，并对其依赖项跟踪和更新触发进行显式控制

```vue
<template>
  <h3>customRef 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制</h3>
  <p> 输入数字,遇到偶数才显示 </p>
  <input v-model.number="keyword" placeholder="搜索关键字"/>
  <p>{{keyword}}</p>
</template>

<script setup>
import {customRef} from "vue";

const keyword = useDebouncedRef(null)
function useDebouncedRef(val) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track();   // 告诉Vue追踪数据
        return val
      },
      set(newValue) {
        if (newValue % 2 === 0) { // 遇到偶数才触发
          val = newValue
          trigger(); // 告诉Vue去触发界面更新
        }
      }
    }
  })
}
</script>

```

#### demo2

自定义一个防抖函数

```vue
<template>
  <h3>customRef</h3>
  <input v-model.number="keyword" placeholder="搜索关键字"/>
  <p>{{keyword}}</p>
</template>

<script setup>
import {customRef} from "vue";

const keyword = useDebouncedRef('', 500)
function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track() // 告诉Vue追踪数据
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()  // 告诉Vue去触发界面更新
        }, delay)
      }
    }
  })
}
</script>

```





















