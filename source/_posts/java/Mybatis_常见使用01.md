---
title: Mybatis_常见使用1
date: 2022-02-07
categories: 
- Mybatis
tags:
- Mybatis
---
Mybatis_常见使用1
Mybatis_常见使用1
Mybatis_常见使用1

<!-- more -->

### 逗号分隔参数

参数为,逗号分隔字符串demo: ` String ids = "1,2,3" `

```mysql
# 常见SQL  SELECT * FROM goods where id in (1,2,3)
SELECT * FROM goods where id in
<foreach item="item" index="index" collection="ids.split(',')"  open="(" separator="," close=")">
	#{item}
</foreach>
```





