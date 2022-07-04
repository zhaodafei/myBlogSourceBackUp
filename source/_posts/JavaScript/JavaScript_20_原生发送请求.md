---
title: JavaScript原生GET,POST请求
date: 2022-06-14
categories: 
- 计算机
tags:
- 编程
---
JavaScript原生GET,POST请求
JavaScript原生GET,POST请求
JavaScript原生GET,POST请求

<!-- more -->

```html
<p><button onclick="fooGet()">GET 请求 大飞</button> </p>
<p>22222</p>
<p>22222</p>
<p>22222</p>
<button onclick="fooPost()">POST 请求 DaFei</button>
```

JavaScript

```javascript
// get 请求接口
function fooGet() {
let url = "http://www.dafei.com/api/testGet.php?name=dafei"
//第一步：建立所需的对象
let httpRequest = new XMLHttpRequest();
//第二步：打开连接  将请求参数写在url中
httpRequest.open('GET', url, true);
//第三步：发送请求  将请求参数写在URL中
httpRequest.send();

httpRequest.onreadystatechange = function () {
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    alert("get接口请求成功 ok")
    var json = httpRequest.responseText; //获取到json字符串，还需解析
    console.log(json);
  }
};
}
```



```javascript
// post 请求接口
function fooPost() {
let url = "http://www.dafei.com/api/testPost.php"
//第一步：创建需要的对象
var httpRequest = new XMLHttpRequest();
//第二步：打开连接 /***发送json格式文件必须设置请求头 ；如下 - */
httpRequest.open('POST', url, true); 
//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
httpRequest.setRequestHeader("Content-type", "application/json");
const obj = {
  foo: "123", bar: "456", name: "dafei"
}
httpRequest.send(JSON.stringify(obj)); //发送请求 将json写入send中sss

httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {//验证请求是否发送成功
    alert("post接口请求成功 ok")
    var json = httpRequest.responseText;//获取到服务端返回的数据
    console.log(json);
  }
};
}
```



















