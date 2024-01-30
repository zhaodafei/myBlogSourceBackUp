---
title:  -Java入门基础之文件操作
date: 2024-01-14
categories: 
- Java
tags:
- Java
---

Java基础入门值文件操作

<!-- more -->

### 常见文件操作

```java
String filePath = "E:\\home\\feiTest";
File file = new File(filePath);
file.isFile(); // 判断当前文件对象是否为文件
file.isDirectory(); // 判断当前文件夹对象是否为文件
file.exists(); // 判断文件对象是否存在
file.mkdirs(); // 创建多级文件目录
file.createNewFile(); // 创建新文件
file.getName(); // 获取文件名字
file.length(); // 文件大小
file.lastModified(); // 文件最后修改时间
```



