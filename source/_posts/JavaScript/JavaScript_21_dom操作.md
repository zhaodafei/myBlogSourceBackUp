---
title: DOM操作
date: 2013-07-04
categories: 
- HTML
tags:
- HTML
---
DOM操作,

<!-- more -->

### 基本常见

在`body`后面插入内容

```html
添加到这里之前
<button onclick="myFunction()">xxx</button>
<script>
  function myFunction() {
    let htm = `<span style="color: #ff6b81">在body标签后面插入内容</span>`;

    let tempNode = document.createElement('div');
    tempNode.id = 'insert-body'
    tempNode.className = 'insert-body'
    tempNode.innerHTML = htm
    tempNode.style.display = 'flex'
    tempNode.style.justifyContent = 'center'

    let bodyDom = document.body;
    let theFirstChild = bodyDom.firstChild
    document.body.insertBefore(tempNode, theFirstChild)

    if (document.getElementById('insert-body')) {
      console.log('添加成功');
    }else{
      console.log('添加失败');
    }
  }

</script>
```


### 底部

没有了























