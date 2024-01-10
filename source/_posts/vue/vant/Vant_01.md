---
title: Vant 入门
date: 2023-12-04
categories: 
- Vant
tags:
- Vant
---
Vant 入门
Vant 入门
Vant 入门

<!-- more -->

### 表单校验

```html
<template>
  <div>
    <van-form ref="formRef">
      <van-cell-group inset>
        <!-- 表单中属性 name 不能少了-->
        <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>

      <van-button type="primary" @click="saveFei">主要按钮</van-button>
    </van-form>
  </div>
</template>

<script setup>
import {ref} from "vue";

const formRef = ref();
const username = ref('');
const password = ref('');

const saveFei = () => {

  // 获取表单中所有值
  console.log("获取表单中所有值", formRef.value.getValues());

  // 校验表单,validate 中不写校验所有
  formRef.value.validate().then((result) => {
    console.log("校验通过", result);
  }).catch(err => {
    console.log("校验没有通过", err);
  })
}
</script>

```



### 文件上传

```vue
<template>
  <van-uploader
      v-model="fileList"
      :before-read='beforeRead'
      :after-read="afterRead" />
</template>

<script setup>
import {ref} from "vue";
import {UploadFile} from "@/api/commonFei.js" // 接口

// 上传文件
const fileList = ref([
  // {
  //   url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg'
  // }
])

const beforeRead = (file) => {
  console.log('这里做一些校验');
  return true
}
const afterRead = (file) => {
  console.log('这里开始上传文件',file);

  const formData = new FormData();
  formData.append("file", file.file);
  formData.append("bucketName", "pvenue");
  
  // 注意这个接口中header头要改成: application/x-www-form-urlencoded
  UploadFile(formData).then(res=>{})
}
</script>

<style scoped>

</style>

```













