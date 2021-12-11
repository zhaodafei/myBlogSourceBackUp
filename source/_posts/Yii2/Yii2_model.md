---
title: Yii2  -model层不为人知的秘密
date: 2015-09-04
categories: 
- PHP
- Yii
tags:
- Yii
---

Yii2  -model层不为人知的秘密
Yii2  -model层不为人知的秘密
Yii2  -model层不为人知的秘密

<!-- more -->

###  属性

在 PHP 中，类的成员变量也被称为*属性*。它们是类定义的一部分， 用来表现一个实例的状态（也就是区分类的不同实例）。 在具体实践中，常常会想用一个稍微特殊些的方法实现属性的读写

```php
//demo, 场景举例:有一个 int 型时间戳,需要显示为格式化的时间,每次格式化太麻烦
//在 model 层中
class Book extends \yii\db\ActiveRecord
    public function getTimeText()
    {
        return date('Y/m/d', $this->time);
    }

    public function setTimeText($value)
    {
        return $this->time = strtotime($value);
    }
}

//在 controller 层中
class BookController extends Controller{
    public function actionView($id)
    {
        $model = Book::findOne($id);  
        print_r($model->TimeText); //格式化的时间
         print_r($model->time);  //原来的 int 时间
      
    }
}
```

[官网 zh-cn]: https://www.yiiframework.com/doc/guide/2.0/zh-cn/concept-properties	"官网-zh-cn"

