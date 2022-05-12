---
title: -vue_axios 文件下载
date: 2022-05-01
categories: 
- Axios
tags:
- Axios
---
`Axios` 二进制流下载
`Axios` 二进制流下载

### `Get` 方式下载

```javascript
downloadGet(){
  axios.get("/api/download", {
    params: {fileId: 123},
    responseType: "blob", // 1.首先设置responseType对象格式为 blob: // 二进制流
  }).then((res) => {
    let blob = new Blob([res.data], {
      type: ' image/png',
      // type:' image/jpeg',
      // type: "application/vnd.ms-excel",
    }); // 获取请求返回的response对象中的blob 设置文件类型

    let url = window.URL.createObjectURL(blob); // 创建一个临时的url指向blob对象
    let a = document.createElement("a");
    a.href = url;
    a.download = "自定义文件名字.png";
    a.click();
    window.URL.revokeObjectURL(url);  //释放blob对象
  })
}
```

### `Post`方式

```javascript
downloadPost(){
  axios.post("/api/download",
      {fileId: 123},
      {responseType: "blob"} // 设置responseType对象格式为 blob:
  ).then((res) => {
    let blob = new Blob([res.data], {
      type: ' image/png',
      // type:' image/jpeg',
      // type: "application/vnd.ms-excel",
    }); // 获取请求返回的response对象中的blob 设置文件类型

    let url = window.URL.createObjectURL(blob); // 创建一个临时的url指向blob对象
    let a = document.createElement("a");
    a.href = url;
    a.download = "自定义文件名字.png";
    a.click();
    window.URL.revokeObjectURL(url); //释放blob对象
  })
}
```



 [常见 MIME 类型列表](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types "常见 MIME 类型列表")





























