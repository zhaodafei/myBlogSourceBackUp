---
title: -JavaScript_获取图片base64
date: 2013-07-04
categories: 
- JavaScript
tags:
- JavaScript
---
JavaScript_获取图片base64
JavaScript_获取图片base64
JavaScript_获取图片base64

<!-- more -->

### demo

```html
BASE64图片：
<input type="file" id="image"><br/>
<button id="up">上传</button>


<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script>
  $("#up").click(function(){
    var reader = new FileReader();
    var file = $("#image")[0].files[0];
    var imgUrlBase64;
    if (file) {
      //将文件以Data URL形式读入页面
      imgUrlBase64 = reader.readAsDataURL(file);
      reader.onload = function (e) {
        console.log(reader.result); // 打印base64
      }
    }
  });
</script>

```



















