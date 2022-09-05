---
title: uni-app基本使用02
date: 2022-08-20
categories: 
- uni-app
tags:
- uni-app
---
uni-app基本使用02
uni-app基本使用02
uni-app基本使用02

<!-- more -->

### 基本常见

### 生命周期

uniapp 使用Vue3 setup组合式API 引入 uniapp 的 页面生命周期

```html
<template>
  <view class="content">
    <image class="logo" @click="handleFei" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title" :class="title">{{ title }}</text>
    </view>

    <view>
      <text class="title"> 启动遇到报错,就是你的版本有问题,或者少依赖 </text>
    </view>
  </view>
</template>

<script setup>
import {ref} from 'vue'
import {onLaunch, onShow, onHide, onLoad} from '@dcloudio/uni-app'

const title = ref('大飞Vue3,uni-appddd启动成功了');

const handleFei = () => {
  console.log('handleFei点击事件=====');
}

onLaunch(()=>{
  console.log('App Launch ========')
})

onShow(()=>{
  console.log('App Show =====');
})

onHide(()=>{
  console.log('App Hide =======')
})

onLoad(()=>{
  setTimeout(()=>{
    console.log('App onload =======')
  },500)
})
</script>


<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

```

[uniapp 生命周期](https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle)

##### 生命周期分类

1. 应用生命周期

   ```javascript
   <script setup>
   import {onLaunch, onShow, onHide} from '@dcloudio/uni-app'
   
   onLaunch(()=>{
     console.log('App Launch ========应用初始化完成执行,全局只执行一次')
   })
   
   onShow(()=>{
     console.log('App Show =====, 应用显示的时候执行,或者从后台进入前台');
   })
   
   onHide(()=>{
     console.log('App Hide =======, 应用隐藏的时候执行,或者从前台进入后台')
   })
   </script>
   ```

   

2. 页面生命周期
   ```javascript
   import {onLoad, onShow, onReady} from '@dcloudio/uni-app'
   
   onLoad(()=>{
     setTimeout(()=>{
       console.log('App onload =======,页面加载的时候触发')
     },500)
   })
   
   onReady(()=>{
     console.log('App onReady =====,页面初次渲染完成触发 ');
   })
   onShow(()=>{
     console.log('App Show =====, 页面显示的时候触发');
   })
   
   
   ```

   

3. 组件生命周期
   这里的生命周期和Vue3中一样

   ```javascript
   beforeCreate(()=>{
        console.log('App beforeCreate=====, 在实例初始化之后,数据观测');
   })
   
   mounted(()=>{
       
   })
   
   ```

   

### 其他

```shell

```

[Vue3 和 uniapp](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)















