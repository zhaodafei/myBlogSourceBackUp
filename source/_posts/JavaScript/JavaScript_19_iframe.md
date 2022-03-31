---
title: iframe 简单使用
date: 2022-03-26
categories: 
- iframe
tags:
- iframe
---
`iframe` 简单使用
`iframe` 简单使用
`iframe` 简单使用

<!-- more -->

### 刷新页面

```javascript
// 一般刷新页面
window.location.reload();

// iframe框架内的页面刷新
document.getElementById('iFrameMain').contentWindow.location.reload(true); 

// 刷新打开的新页面
1: 刷新包含该框架的页面用：parent.location.reload();
2: 子窗口刷新父窗口：self.opener.location.reload();
3: 刷新另一个框架的页面：parent.另一FrameID.location.reload();

// 刷新父页面地址
parent.window.location.href="url";
```

### 刷新父页面地址

```javascript
parent.window.location.href="url";
parent.window.location.reload();
top.location.reload();
```



### 获取父元素

```javascript
parent.document.getElementById('iFrameMain').contentWindow.document
parent.document.getElementById('iFrameMain').contentWindow.document.location
```

### 自动计算高度

```javascript
(function foo() {
    function setIframeHeight(iframe) {
      if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
          iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
      }
    }
    window.onload = function () {
      setIframeHeight(document.getElementById('xxx'));
      // setIframeHeight(document.getElementsByName('xxx')[0]);
    };
  }());
```

























