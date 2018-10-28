---
title: wind -Yii2 添加扩展
---

### 安装完 Yii2 没有vendor目录

```
在 yii 跟目录下执行,首次添加最新扩展包
composer update
```

![vendor](/img/win/vendor.png)

### 添加 redis 扩展

```
在根目录执行 
 composer require yiisoft/yii2-redis
 
 这时在 composer.json 中会自动添加  yiisoft/yii2-redis": "^2.0"
 在 vendor/yiisoft/extension.php 中会自动添加
'yiisoft/yii2-redis' =>
    array(
        'name' => 'yiisoft/yii2-redis',
        'version' => '2.0.9.0',
        'alias' =>
            array(
                '@yii/redis' => $vendorDir . '/yiisoft/yii2-redis/src',
            ),
    ),
```

![redis](/img/win/redis_01.png)

![redis 2](/img/win/redis_02.png)

![composer.json](/img/win/composer_json.png)

### !!!添加 redis 扩展02

```
在composer.json 文件中添加 redis扩展     "yiisoft/yii2-redis": "~2.0.0"
"require": {
    "php": ">=5.4.0",
    "yiisoft/yii2": "~2.0.6",
    "yiisoft/yii2-bootstrap": "~2.0.0",
    "yiisoft/yii2-swiftmailer": "~2.0.0 || ~2.1.0",
    "yiisoft/yii2-redis": "~2.0.0"
},

然后在根目录执行 composer update,这时候会自动升级 composer.lock 文件,
redis 扩展添加成功,[ !!!这种方法会自动升级扩展!!! ]
```



### !!!  install  , update  , require


添加一个新的扩展包建议使用 composer require

另外2个会更新所有扩展到最新版本

composer install 命令从当前目录读取 composer.json 文件，处理了依赖关系，并把其安装到 vendor 目录下。如果当前目录下存在 composer.lock 文件，它会从此文件读取依赖版本，而不是根据 composer.json 文件去获取依赖。这确保了该库的每个使用者都能得到相同的依赖版本。如果没有 composer.lock 文件，composer 将在处理完依赖关系后创建它.

composer update  为了获取依赖的最新版本，并且升级 composer.lock 文件，你应该使用 update 命令。


### 扩展 

扩展: 这里配置 reids 后,使用 phpstorm 写代码的时候,redis是没有提示的,比如 Yii::$app->redis->set("hello","world");,这里的reids在phpstorm中是跟踪不到的,解决这个问题,在 \vendor\yiisoft\yii2\base\Application.php 中的上面注释中添加如下:

* @property \yii\redis\Connection $redis  

这样 phpstorm 就可以跟踪代码,并且 Yii::$app->redis->set("hello","world");  这个set 也会有提示;



![redis 2](/img/win/redis_phpstorm.png)

官方解释

https://docs.phpcomposer.com/03-cli.html#init

https://docs.phpcomposer.com/03-cli.html#init