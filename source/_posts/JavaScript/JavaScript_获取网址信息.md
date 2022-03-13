---
title: -JavaScript_获取网址信息
date: 2013-07-04
categories: 
- JavaScript
tags:
- JavaScript
---
JavaScript_获取网址信息
JavaScript_获取网址信息
JavaScript_获取网址信息

<!-- more -->
###  获取 `URL` 主机部分

```javascript
// 获取 URL 主机部分
window.location.host
```

### 获取整个 `URL`

```javascript
// 获取整个 URL
window.location.href
```
### 获取与` URL` 路径部分

```javascript
// 获取与 URL 路径部分
window.location.pathname

let pathname = window.location.pathname;
let pathnameArr = pathname.match(/(\/.*\/)/g);
```

### 获取问号后面的部分

```javascript
// 获取问号后面的部分
window.location.search
```

### 获取 `#` 后面的部分

```javascript
// 获取 # 后面的部分
window.location.hash
```


### 获取`URL`协议部分

```javascript
// 获取 URL 协议部分
window.location.protocol
```

### 获取 `URL` 端口

```javascript
// 获取 URL 端口
window.location.port
```



















