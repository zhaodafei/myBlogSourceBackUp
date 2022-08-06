---
title: Vue3 -computed 和 -watch
date: 2022-08-04
categories: 
- Vue3
tags:
- Vue3
---
计算属性`(computed)`与监视 `(watch函数 watchEffect函数)`
计算属性`(computed)`与监视 `(watch函数 watchEffect函数)`
计算属性`(computed)`与监视 `(watch函数 watchEffect函数)`

<!-- more -->

> computed:
>
> 1. 它支持***缓存***，只有依赖的数据发生了变化，才会重新计算
> 2. computed的值会默认走**缓存**，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data声明过，或者父组件传递过来的props中的数据进行计算的。
> 3. ***不支持异步***，当Computed中有异步操作时，无法监听数据的变化
> 4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他的属性，一般会使用computed
> 5. 如果computed属性的属性值是函数，那么默认使用get方法，函数的返回值就是属性的属性值；在computed中，属性有一个get方法和一个set方法，当数据发生变化时，会调用set方法。

>watch:
>
>1. 支持***异步监听***
>
>2. 它不支持缓存，数据变化时，它就会触发相应的操作
>
>3. 监听的函数接收***两个参数***，第一个参数是最新的值，第二个是变化之前的值
>
>4. 当一个属性发生变化时，就需要执行相应的操作
>
>5. 监听数据必须是data中声明的或者父组件传递过来的props中的数据，当发生变化时，会触发其他操作，函数有两个的参数：
>
>6. 
>
>7. - immediate：组件加载立即触发回调函数
>   - deep：***深度监听***，发现数据内部的变化，在复杂数据类型中使用，例如数组中的对象发生变化。需要注意的是，deep无法监听到数组和对象内部的变化

### demo:

### computed

### cmoputed--set

```html
<template>
  <h3>计算属性(computed) 只有getter的计算属性</h3>
  <p>
    fistName: <input v-model="user.firstName"/><br>
    lastName: <input v-model="user.lastName"/><br>
    fullName1: <input v-model="fullName1" disabled/>  只是获取 <br>
  </p>
</template>

<script setup>
import {reactive, computed} from "vue";

const user = reactive({
  firstName: '孔',
  lastName: '仲尼'
})

// 只有getter的计算属性
const fullName1 = computed(() => {
  console.log('fullName1')
  return user.firstName + '-' + user.lastName
})

</script>

```

### computed--set-get

```html
<template>
  <h3>计算属性(computed) 有getter与setter的计算属性</h3>
  <p>
    fistName: <input v-model="user.firstName"/><br>
    lastName: <input v-model="user.lastName"/><br>
    fullName2: <input v-model="fullName2"> 获取到,自己修改其他地方也改<br>
  </p>
</template>

<script setup>
import {reactive, computed} from "vue";

const user = reactive({
  firstName: '孔',
  lastName: '仲尼'
})

// 有getter与setter的计算属性
const fullName2 = computed({
  get () {
    console.log('fullName2 get')
    return user.firstName + '-' + user.lastName+'-'+'把我返回给set方法'
  },

  set (value) { // 获取到get方法的返回值,
    console.log('fullName2 set',value)
    const names = value.split('-')
    user.firstName = names[0]
    user.lastName = names[1]
  }
})

</script>

```

### watch

```html
<template>
  <h3>watch</h3>
  <p>
    fistName: <input v-model="user.firstName"/><br>
    lastName: <input v-model="user.lastName"/><br>
    fullName3: <input v-model="fullName3"><br>
  </p>
</template>

<script setup>
import {ref,reactive, watch} from "vue";

const user = reactive({
  firstName: '孔',
  lastName: '仲尼'
})

const fullName3 = ref('')

/**
 * 使用watch的2个特性:
 *   01)深度监视
 *   02)初始化立即执行
 */
watch(user, () => {
  console.log("ddddd");
  fullName3.value = user.firstName + '-' + user.lastName
}, {
  immediate: true,  // 是否初始化立即执行一次, 默认是false
  deep: true, // 是否是深度监视, 默认是false
})


/**
 * watch一个数据
 *   默认在数据发生改变时执行回调
 */
watch(fullName3, (value) => {
  // 这个例子不太好,让人误解为死循环,---该例子只是说明功能而已
  console.log('watch__fullName3改变后,我就执行')
  const names = value.split('-')
  user.firstName = names[0]
  user.lastName = names[1]
})

</script>

```

### watch 多个值

```html
<template>
  <h3>watch</h3>
  <h4> 只要用到就监听 </h4>
  <p>
    fistName: <input v-model="user.firstName"/><br>
    lastName: <input v-model="user.lastName"/><br>
    fullName3: <input v-model="fullName3"><br>
  </p>
</template>

<script setup>
import {ref,reactive, watch} from "vue";

const user = reactive({
  firstName: '孔',
  lastName: '仲尼'
})

const fullName3 = ref('')

/**
 * watch多个数据:
 *   01)使用数组来指定
 *   02)如果是ref对象, 直接指定
 *   03)如果是reactive对象中的属性,  必须通过函数来指定
 */
watch([user, () => user.firstName, () => user.lastName, fullName3], (values) => {
  console.log('监视多个数据', values)
})

</script>

```



### watchEffect

```html
<template>
  <h3>watchEffect: 监视所有回调中使用的数据,</h3>
  <h4> 只要用到就监听 </h4>
  <p>
    fistName: <input v-model="user.firstName"/><br>
    lastName: <input v-model="user.lastName"/><br>
    fullName3: <input v-model="fullName3" disabled><br>
  </p>
</template>

<script setup>
import {ref,reactive, watchEffect} from "vue";

const user = reactive({
  firstName: '孔',
  lastName: '仲尼'
})

const fullName3 = ref('')

// watchEffect: 监视所有回调中使用的数据
watchEffect(() => {
  console.log('watchEffect,这个方法中使用到了谁,就监听谁')
  fullName3.value = user.firstName + '-' + user.lastName
})

</script>

```



























