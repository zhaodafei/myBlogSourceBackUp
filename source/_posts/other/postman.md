---
title: Postman 中设置全局变量,token
date: 2015-03-04
categories: 
- Postman
tags:
- Postman
---
`Postman`  中设置全局变量,解决token传参更新问题
`Postman`  中设置全局变量,解决token传参更新问题
`Postman`  中设置全局变量,解决token传参更新问题

背景: 使用`postman`的时候调用接口添加`token`越来越多,每次手动更新token太浪时间

<!-- more -->

### 全局添加变量

![全局添加变量](/img/other/postman/postman_01.png "全局添加变量")

### 全局变量使用

![全局变量使用](/img/other/postman/postman_02.png "全局变量使用")

### 更新全局变量`token`

```javascript
//把json字符串转化为对象
var data=JSON.parse(responseBody);

//获取data对象的access_token值。 [ access_token 看自己实际场景 ]
var token=data.data.access_token;

//设置成全局变量,可以替换刚才写的 fei_token 的值
pm.environment.set("fei_token", "Bearer "+token);
```

![更新全局变量token](/img/other/postman/postman_03.png "更新全局变量token")

![更新全局变量token](/img/other/postman/postman_token.gif "更新全局变量token")





























