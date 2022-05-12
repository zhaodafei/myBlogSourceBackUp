---
title: springBoot -文件下载
date: 2022-05-01
categories: 
- springBoot
tags:
- springBoot
---
springBoot -文件下载,使用二进制流
springBoot -文件下载,使用二进制流

<!-- more -->

### 文件下载

在 `Controller` 中写方法

`PostMapping` 和 `GetMapping` 都可以

***方法一***   通过`ResponseEntity<InputStreamResource>`实现

```java
// 下载文件 PostMapping 和 GetMapping 都可以
@PostMapping("download")
// @GetMapping("download")
public ResponseEntity<InputStreamResource> download() throws IOException {

    // String filePath  = "E:\\self_web\\git_dev\\vue\\zFei_springBoot\\target\\001.png";
    String filePath  = "E:\\self_web\\git_dev\\vue\\zFei_springBoot\\target\\02.jpg";

    FileSystemResource file = new FileSystemResource(filePath);
    HttpHeaders headers = new HttpHeaders();
    headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
    headers.add("Content-Disposition", String.format("attachment; filename=\"%s\"", file.getFilename()));
    headers.add("Pragma", "no-cache");
    headers.add("Expires", "0");

    return ResponseEntity
            .ok()
            .headers(headers)
            .contentLength(file.contentLength())
            .contentType(MediaType.parseMediaType("application/octet-stream"))
            .body(new InputStreamResource(file.getInputStream()));
}
```

***方法二***    通过`HttpServletResponse的OutputStream`实现

```java
// 方法二
// 文件下载2  PostMapping 和 GetMapping 都可以
@PostMapping("download2")
// @GetMapping("download2")
public String download2(HttpServletRequest request, HttpServletResponse response) throws IOException {
    System.out.println("ddddddddd");

    String filePath = "E:\\self_web\\git_dev\\vue\\zFei_springBoot\\target\\";
    // String fileName = "001.png";
    String fileName = "02.jpg";
    response.setContentType("application/octet-stream");
    response.setHeader("content-type", "application/octet-stream");
    // 设置文件名  URLEncoder.encode(fei_name, "utf-8")
    response.setHeader("Content-Disposition", "attachment;fileName=" + "fei_name");
    response.setHeader("Access-Control-Allow-Origin", "*");
    // response.setHeader("fei-file-type", "image/jpeg"); // 自定义文件类型

    FileInputStream fis = null;
    BufferedInputStream bis = null;
    try {
        File file = new File(filePath, fileName);
        byte[] buffer = new byte[1024];
        fis = new FileInputStream(file);
        bis = new BufferedInputStream(fis);
        ServletOutputStream os = response.getOutputStream();
        int i = bis.read(buffer);
        while (i != -1) {
            os.write(buffer, 0, i);
            i = bis.read(buffer);
        }
        System.out.println("success");
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        if (bis != null) {
            try {
                bis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        if (fis != null) {
            try {
                fis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    return null;

}
```

### 底部

xxx没有了



