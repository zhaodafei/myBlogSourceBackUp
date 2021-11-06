---
title: php -函数
categories: 
- PHP
tags:
- PHP
---

### http_build_query  

```php
 生成 URL-encode 之后的请求字符串：数组array('foo', 'bar', 'baz''); 转为  foo=bar&baz=boom
```

### 程序执行函数

```php
system("php -v");
passthru("php -v");
exec("php -v");
shell_exec("php -v");
```

### 数学函数

数学函数进行四则运算

```php
echo bcmul("3", "3.3",2); // 输出 9.9
echo bcadd('1.234', '5', 4);  // 输出 6.2340
```

[BC 数学 函数](https://www.php.net/manual/zh/ref.bc.php)