---
title: Vue3 中proxy原理
date: 2013-07-04
categories: 
- Vue3
tags:
- Vue3
---
 Vue3 中proxy原理
 Vue3 中proxy原理
 Vue3 中proxy原理

<!-- more -->

```html
<body>
代理
</body>

<script type="text/javascript">
    const book={
      name: "论语",
      price: 100,
      extraInfo:{
        author: "孔子",
        info: "儒家"
      }
    }
    const proxyBook = new Proxy(book,{
      get(target, p, receiver) {
        console.log("get方法执行__获取目标对象某个属性");
        return Reflect.get(target, p);
      },
      set(target, p, value, receiver) {
        console.log('set方法执行__修改目标对象属性');
        return Reflect.set(target, p, value);
      },
      deleteProperty(target, p) {
        console.log('del方法执行__删除目标对象上某个属性');
        return Reflect.deleteProperty(target, p);
      }
    })

    console.log(proxyBook.name);
    proxyBook.name = '史记'; // 更新
    console.log(book);

    proxyBook.time = '春秋时期'; // 添加属性
    console.log(book);

    delete proxyBook.name; // 删除属性
    console.log(book);

    proxyBook.extraInfo.name = "孔子弟子"; // 更新目标对象中某个属性对象中属性值
    console.log(book);


</script>

```









