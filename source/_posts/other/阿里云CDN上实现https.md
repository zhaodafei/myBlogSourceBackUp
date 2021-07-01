---
title: 阿里云CDN上实现https
categories: 
- HTTP
tags:
- HTTP
- HTTPS
---
### SSL证书管理

对于静态资源的请求，由于存储在阿里OSS上，并在前端使用了阿里云CDN,因此将相关SSL证书的信息在阿里云CDN上配置一下就ok。

```
客户端-------请求（js,img，css）------>CDN---->云存储OSS
```

### 从阿里云CA证书服务下载证书

<img src="/img/ali/ali_CDN_https/CA.png" alt="ali CA">

下载解压后得到2个文件：  xxx.pem   xxx.key

### 在阿里云CDN管理控制台找到 HTTPS设置

点击域名中的配置,然后找到HTTPS设置，修改配置

<img src="/img/ali/ali_CDN_https/HTTPS_config_01.png" alt="ali https1">

打开之前下载好的xxx.pem 和 xxx.key ,将里面的内容分别复制到证书对应位置,建议跳转类型设置为默认，保存之后用HTTPS访问你的静态资源，测试一下

<img src="/img/ali/ali_CDN_https/HTTPS_config_02.png" alt="ali https2">





























