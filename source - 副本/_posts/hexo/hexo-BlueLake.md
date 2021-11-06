---
title: BlueLake 主题配置
categories: 
- Hexo
tags:
- Hexo
- BlueLake
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



### BlueLake : 主题底部的访问量统计,不显示问题; 

```
按照作者配置:
主题_config.yml               themes/BlueLake/_config.yml

busuanzi: true

这个配置完后,需要修改 themes\BlueLake\layout\_partial\after_footer.jade 这个文件
把卜算子地址改为如下:
script(src='https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', async)

不蒜子作者提示:域名已经更换
http://busuanzi.ibruce.info/
```

### 标签显示

01)   hexo new page categories

```
01-1) hexo new page categories
成功后提示: source\categories\index.md
打开 index.md 添加  type: "categories" ,添加完后为:
---
title: categories
type: "categories"
---
保存关闭文件
01-2) 给文章添加 categories 属性,随便打开一个md文章,添加
---
title: 这里是title  
categories: 
- 这是分类categories
---

```

02) hexo new page tags

```
02-1) hexo new page tags
成功后提示: source\tags\index.md
打开 index.md 添加  type: "tags" ,添加完后为:
---
title: tags
type: "tags"
---
保存关闭文件
02-2) 给文章添加 tags 属性,随便打开一个md文章,添加
---
title: 这里是title  
categories: 
- 这是分类categories 
tags:
- 这是分类tags
---
```



































