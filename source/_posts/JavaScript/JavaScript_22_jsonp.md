---
title: jsonp数据请求
date: 2023-03-16
categories: 
- jsonp
tags:
- jsonp
---
jsonp数据请求
jsonp数据请求
jsonp数据请求

<!-- more -->

在`vue`中测试用例

依赖

```json
"axios": "^0.25.0",
"jquery": "^3.6.4",
"jsonp": "^0.2.1",
```

### 测试用例demo

后端php代码

```php
<?php

header('Content-type: application/json');
//获取回调函数名
$jsoncallback = htmlspecialchars($_REQUEST ['jsoncallback']);

//json数据
//$json_data = '["customername1","customername2"]';
$json_data = json_encode(['foo' => "foo111", 'fei' => 'fei222']);

//输出jsonp格式的数据
echo $jsoncallback . "(" . $json_data . ")";
```



前端代码

```html
<template>
<div>
  <h3>axios 与 jsonp</h3>
  <p>官网说明: https://github.com/axios/axios/blob/main/COOKBOOK.md#jsonp </p>

  <div>
    <details>
      <summary> 后端PHP代码 </summary>
      <pre>
        header('Content-type: application/json');
        //获取回调函数名
        $jsoncallback = htmlspecialchars($_REQUEST ['jsoncallback']);

        //json数据
        //$json_data = '["customername1","customername2"]';
        $json_data = json_encode(['foo' => "foo111", 'fei' => 'fei222']);

        //输出jsonp格式的数据
        echo $jsoncallback . "(" . $json_data . ")";
      </pre>
    </details>
  </div>

  <div style="width: 300px;margin-top: 20px; display: flex;justify-content: space-around;">
    <button type="button" @click="getAxios"> 点击请求,Axios </button>
    <button type="button" @click="getAjax"> 点击请求,ajax </button>
    <button type="button" @click="getJsonp"> 点击请求,jsonp </button>
  </div>
</div>
</template>

<script setup>
import axios from 'axios'

import $ from 'jquery'

import jsonp  from 'jsonp';
import querystring  from 'querystring';

const getAxios = () => {
  console.log('这个会跨域调用不到数据');
  // tip:这个会跨域调用不到数据
  // axios({
  //   method: 'get',
  //   url: 'http://demo.pro_fei.com/fei.php?jsoncallback=?',
  //   params: {foo1: 'p111', foo2: 'p222'},
  //   // responseType: 'stream' // stream, json
  // }).then(res => {
  //   console.log(res);
  // }).finally(() => {
  //   console.log('最后执行');
  // })
}

const getAjax = () => {
  $.support.cors = true
  $.ajax({
    type: 'GET',
    url: 'http://demo.pro_fei.com/fei.php?jsoncallback=?',
    dataType: 'jsonp',
    async: true,
    params: {foo1: 'p111', foo2: 'p222'},
    success: function (res) {
      console.log('调用成功 ajax_jsonp');
      console.log(res);
    },
    error: function (data) {
      console.log('出错了 ajax_jsonp');
    }
  })
}

const getJsonp = () => {
  let obj = {foo1: 'p111', foo2: 'p222'};
  let q = querystring.encode(obj);

  jsonp('http://demo.pro_fei.com/fei.php?'+q, {param:'jsoncallback'}, (err, data) => {
    if (err) {
      console.error("出错了");
      console.error(err.message);
    } else {
      console.log("调用成功 jsonp");
      console.log(data);
    }
  });
}

</script>


```






### 底部

其他参考地址jsonp:

 [axios jsonp](https://github.com/axios/axios/blob/main/COOKBOOK.md#jsonp "axios jsonp")

 [php jsonp](https://www.runoob.com/json/json-jsonp.html "php jsonp")





















