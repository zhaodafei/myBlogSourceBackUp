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



BlueLake : 主题底部的访问量统计,不显示问题; 

```
按照作者配置:
主题_config.yml               themes/BlueLake/_config.yml

busuanzi: true

这个配置完后,需要修改 themes\BlueLake\layout\_partial\after_footer.jade 这个文件
把卜算子地址改为如下:
script(src='http://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', async)

不蒜子作者提示:域名已经更换
http://busuanzi.ibruce.info/
```

































