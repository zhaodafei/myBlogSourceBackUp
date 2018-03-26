---
title: BlueLake 主题配置
---
### 添加本地搜索

安装插件[hexo-generator-json-content](https://github.com/alexbruno/hexo-generator-json-content)来创建JSON数据文件

```
npm install hexo-generator-json-content@2.2.0 --save
```

在根配置  _config.yml  添加配置

```
jsonContent:
  meta: false
  pages: false
  posts:
    title: true
    date: true
    path: true
    text: true
    raw: false
    content: false
    slug: false
    updated: false
    comments: false
    link: false
    permalink: false
    excerpt: false
    categories: false
    tags: true
```

在主题 _config.yml 中添加

```
local_search: true      #安装好 BlueLake主题后，会有这个配置
```

![站内搜索](/img/hexo/BlueLake_config/search_01.png "站内搜索")

![站内搜索](/img/hexo/BlueLake_config/search_02.png "站内搜索")

![站内搜索](/img/hexo/BlueLake_config/search_03.png "站内搜索")



 [我是a里面的内容](http://example.com/ "这里是title")





























