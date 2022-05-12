---
title: springBoot -文件上传
date: 2022-02-07
categories: 
- springBoot
tags:
- springBoot
---
springBoot -文件上传
springBoot -文件上传

<!-- more -->

### 文件上传

实现工具类`FileUtil`

```java
package com.example.fei.common.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.*;

//文件上传工具类
public class FileUtil {
    public static void uploadFile(byte[] file,String filePath,String fileName) throws IOException {
        File targetFile = new File(filePath);
        if (!targetFile.exists()) { // 创建目录
            targetFile.mkdirs();
        }

        FileOutputStream  out = new FileOutputStream(filePath + fileName);
        out.write(file);
        out.flush();
        out.close();
    }

    public static void uploadFile2(InputStream fileStream, String filePath, String fileName) throws IOException {
        File targetFile = new File(filePath);
        if (!targetFile.exists()) { // 创建目录
            targetFile.mkdirs();
        }

        FileOutputStream  out = new FileOutputStream(filePath + fileName);
        //开始复制
        int i = 0;
        byte[] bytes = new byte[1024];
        while((i = fileStream.read(bytes))!=-1) {
            out.write(bytes, 0, i);
        }
        out.close();
        fileStream.close();
    }

    // 采用MultipartFile的transfer() 实现上传
    public static void uploadFile3(MultipartFile uploadFile, String filePath, String fileName) throws IOException {
        File targetFile = new File(filePath + fileName);
        uploadFile.transferTo(targetFile);
    }


}

```



在 `Controller` 中写方法

```java
package com.example.fei.controller;

import com.example.fei.common.utils.FileUtil;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/file")
public class FileController {

    // 上传文件
    @PostMapping("upload")
    public void upload(@RequestParam("file") MultipartFile file) {

        // String contentType = file.getContentType(); // 获取文件类型
        String fileName = file.getOriginalFilename(); // 图片名字
        String filePath  = "E:\\self_web\\git_dev\\vue\\zFei_springBoot\\target\\";

        try {
            FileUtil.uploadFile(file.getBytes(), filePath, fileName);
        } catch (Exception e) {
            // TODO: 处理异常信息
        }
    }
    // 上传文件2
    @PostMapping("upload2")
    public void upload2(@RequestParam("file") MultipartFile uploadFile) {

        String fileName = uploadFile.getOriginalFilename();
        String filePath  = "E:\\self_web\\git_dev\\vue\\zFei_springBoot\\target\\";

        try {
            FileUtil.uploadFile2(uploadFile.getInputStream(), filePath, fileName);
        } catch (Exception e) {
            // TODO: 处理异常信息
        }

    }

    // 上传文件3
    @PostMapping("upload3")
    public void upload3(@RequestParam("file") MultipartFile uploadFile) {

        String fileName = uploadFile.getOriginalFilename();
        String filePath  = "E:\\self_web\\git_dev\\vue\\zFei_springBoot\\target\\";

        try {
            FileUtil.uploadFile3(uploadFile, filePath, fileName);
        } catch (Exception e) {
            // TODO: 处理异常信息
        }

    }

    // 下载文件
    @GetMapping("download")
    public void download() {
    }
}

```

用`postman`测试接口

```wi
http://localhost:8080/api/file/upload
http://localhost:8080/api/file/upload2
http://localhost:8080/api/file/upload3

post 方式选择form-data
```

![文件上传](/img/java/springBoot/upload_file.png "文件上传")

### 文件下载

...loading

### 底部

xxx没有了



