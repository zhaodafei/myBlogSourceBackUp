---
title: laravel -Command
date: 2015-09-04
categories: 
- PHP
- Laravel
tags:
- Laravel
---
laravel `command`  简单使用
laravel `command`  简单使用
laravel `command`  简单使用

<!-- more -->

### `command`  简单使用

```php
php artisan make:command foo  //创建文件   
protected $signature = 'foo'; //命令名字   
protected $description = 'foo class Command description'; //描述
php artisan foo    //执行,可以调用到 public function handle() 方法

php artisan list #这时候执行这个可以在Available commands 中看到 foo  foo class Command description
    
//--------- demo -----    
<?php
namespace App\Console\Commands;
use Illuminate\Console\Command;

class foo extends Command
{
    protected $signature = 'foo';
    protected $description = 'foo class Command description';

    public function __construct()
    {
        parent::__construct();
    }

    //php artisan foo  执行这条命令
    public function handle()
    {
        echo "hello foo ";
    }
}    
```

### 在一个 `commands`  文件中执行对应的方法

```php
protected $signature = 'command {foo}';   //注意这里写法即可
php artisan command bar  //执行命令
    
//--------- demo -----  
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class foo extends Command
{
    // protected $signature = 'foo';
    protected $signature = 'command {foo}';
    protected $description = 'foo class Command description';

    public function __construct()
    {
        parent::__construct();
    }

    //php artisan foo
    public function handle()
    {
        // echo "hello foo "; //sb 的laravel调用对应的方法,需要用判断写
        $method = $this->argument('foo');
        if (method_exists($this, $method)) {
            $this->$method();
            echo "执行完成\n";
        }else{
            echo "${method} is not exists\n";
        }
    }

    //php artisan command bar
    public function bar()
    {
        echo "bar";
    }
}
    
```

![command](/img/laravel/command_01.png "command")

###  `confirm`

```php
if ($this->confirm("确认要执行吗?")) {
	exit("开始执行");
}else{
	exit('停止执行');
}
```



 [官方commands](https://laravel.com/docs/5.8/artisan "官方 commands")





























