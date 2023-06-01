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

### cmoputed--set--只读

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

### computed--set-get--读和写

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

常用1和4

#### 简单使用

```html
<template>
  <h3>监听 ref 定义的响应式数据</h3>
  <div>
    <p>{{ sum }}</p>
    <button @click="sum++">点击我fei</button>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from "vue";

const sum = ref(0);
// 01) 监听 ref 定义的响应式数据
watch(sum,(newVal,oldVal)=>{
  console.log(newVal, oldVal);
}, {immediate: true, deep: true})
// immediate 第一次执行
// deep 深度监听
</script>

```

#### 监听ref多个数据

```vue
<template>
  <h3>监听 ref 多个数据</h3>
  <div>
    <p>{{ sum }} __ {{ msg }}</p>
    <button @click="sum++">点击我fei</button>
    <button @click="msg+='!'">点击我fei</button>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from "vue";

const sum = ref(0);
const msg = ref('daFei')
// 01) 监听 ref 定义的多个响应式数据
watch([sum, msg], (newVal, oldVal) => {
  console.log(newVal, oldVal);
})

//02) 监听多个值 === 根据实际情况写
// watch(
//     () => [props.aaa, props.bbb],
//     (newVal, oldVal) => {
//       console.log('校验开始', newVal)
//     }
// )
</script>

```

#### 小坑,监听reactive对象

无法获取到oldVal

```vue
<template>
  <h3>监听 reactive 对象,无法获取到oldVal</h3>
  <div>
    <p>{{person.name}} ___ {{person.period}}</p>
    <button @click="person.name+='!'">点击我name</button>
    <button @click="person.period+='!'">点击我period</button>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from "vue";

const sum = ref(0);
const msg = ref('daFei')
const person = reactive({
  name: "孔丘",
  period: "春秋末期"
})
// 监听reactive所定义的响应式数据,此出无法获取到oldVal
watch(person, (newVal, oldVal) => {
  console.log("newVal 和 oldVal都是新值",newVal, oldVal);
})
</script>

```

#### 小坑,监听reactive对象2

可以监听全部深层对象,无法关闭

```vue
<template>
  <h3>监听reactive所定义的响应式数据,强制开启了深度监视(deep配置无效)</h3>
  <div>
    <p>{{person.name}} ___ {{person.period}}</p>
    <p>{{person.extra.info1.name}}</p>
    <button @click="person.name+='!'">点击我name</button>
    <button @click="person.period+='!'">点击我period</button>
    <button @click="person.extra.info1.name+='!'">点击我info1.name</button>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from "vue";

const sum = ref(0);
const msg = ref('daFei')
const person = reactive({
  name: "孔丘",
  period: "春秋末期",
  extra:{
    info1:{
      name: '颜回',
    }
  }
})
// 监听reactive所定义的响应式数据,强制开启了深度监视(deep配置无效)
watch(person, (newVal, oldVal) => {
  console.log("deep配置无效", newVal, oldVal);
}, {deep: false})
</script>

```

#### !!!注意点,监听reactive某个属性

监视reactive所定义的一个响应式数据中的某个属性,要用函数

```vue
<template>
  <h3>监视reactive所定义的一个响应式数据中的某个属性,要用函数</h3>
  <div>
    <p>{{person.name}} ___ {{person.period}}</p>
    <p>{{person.extra.info1.name}}</p>
    <button @click="person.name+='!'">点击我name</button>
    <button @click="person.period+='!'">点击我period</button>
    <button @click="person.extra.info1.name+='!'">点击我period</button>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from "vue";

const sum = ref(0);
const msg = ref('daFei')
const person = reactive({
  name: "孔丘",
  period: "春秋末期",
  extra:{
    info1:{
      name: '颜回',
    }
  }
})
// 监视reactive所定义的一个响应式数据中的某个属性,要用函数
watch(() => person.period, (newVal, oldVal) => {
  console.log("监视reactive某个属性,要用函数", newVal, oldVal);
})
</script>

```

#### 特殊情况

```vue
<template>
  <h3>监视reactive所定义的一个响应式数据中的某个属性中对象,要开启deep</h3>
  <div>
    <p>{{person.name}} ___ {{person.period}}</p>
    <p>{{person.extra.info1.name}}</p>
    <button @click="person.name+='!'">点击我name</button>
    <button @click="person.period+='!'">点击我period</button>
    <button @click="person.extra.info1.name+='!'">点击我info1.name</button>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from "vue";

const sum = ref(0);
const msg = ref('daFei')
const person = reactive({
  name: "孔丘",
  period: "春秋末期",
  extra:{
    info1:{
      name: '颜回',
    }
  }
})
// 监视reactive所定义的一个响应式数据中的某个属性中对象,要开启deep
watch(() => person.extra, (newVal, oldVal) => {
  console.log("监视reactive某个属性中对象", newVal, oldVal);
},{deep:true})
</script>

```

#### 不常用监听,但是有坑ref

```vue
<template>
  <h3>不常用,但是有坑</h3>
  <div>
    <p>{{person.name}} ___ {{person.period}}</p>
    <p>{{person.extra.info1.name}}</p>
    <button @click="person.name+='!'">点击我name</button>
    <button @click="person.period+='!'">点击我period</button>
    <button @click="person.extra.info1.name+='!'">点击我info1.name</button>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from "vue";

const sum = ref(0);
const msg = ref('daFei')
const person = ref({
  name: "孔丘",
  period: "春秋末期",
  extra:{
    info1:{
      name: '颜回',
    }
  }
})

// 这时候,ref定义的为复杂对象,里面有个value,深度监听
// 下面2中写法都可以
watch(person, (newVal, oldVal) => {
  console.log("监视reactive某个属性中对象", newVal, oldVal);
},{deep:true})

watch(person.value, (newVal, oldVal) => {
  console.log("监视reactive某个属性中对象", newVal, oldVal);
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

























