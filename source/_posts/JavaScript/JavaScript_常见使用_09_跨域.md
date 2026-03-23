---
title: JavaScript_常见使用_09
date: 2025-03-01
categories: 
- JavaScript
tags:
- JavaScript
---
跨域测试`js`版本
跨域测试`js`版本
跨域测试`js`版本

<!-- more -->

### 跨域测试

```html
<p><button onclick="fooGet()">GET 请求</button> </p>
<p>22222</p>
<p>22222</p>
<p>22222</p>
<button onclick="fooPost()">POST 请求</button>

<script type="text/javascript">
  // get 请求接口
  function fooGet() {
    let url = "http://www.xxx.com/api"
    let httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
    httpRequest.open('GET', url, true);
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        alert("get接口请求成功eeeeee")
        //获取到json字符串，还需解析
        var json = httpRequest.responseText;
        console.log(json);
      }
    };
  }

  // post 请求接口
  function fooPost() {
    let url = "http://www.xxx.com/api"
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
    httpRequest.open('POST', url, true); 
    // 设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    // var obj = { name: 'zhansgan', age: 18 };
    httpRequest.setRequestHeader("Content-type", "application/json");
    const obj = {
      foo: "123", bar: "456"
    }
    httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中

    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {//验证请求是否发送成功
        alert("post接口请求成功 33333")
        var json = httpRequest.responseText;//获取到服务端返回的数据
        console.log(json);
      }
    };
  }
</script>

```






### 底部

没有了























