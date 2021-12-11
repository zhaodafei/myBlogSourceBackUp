---
title: Yii2 杂项整理
date: 2015-09-04
categories: 
- PHP
- Yii
tags:
- Yii
---

 Yii2 杂项整理
 Yii2 杂项整理
 Yii2 杂项整理

<!-- more -->

### JavaScript 引入

```php
<?php $this->beginBlock('page_end') ?>
//这里写你想要的东西
<?php $this->endBlock() ?>
<?php
$this->registerJs($this->blocks['page_end'], \yii\web\View::POS_END);
?>
    
    
--------------------
<?php 
AppAsset::addCss($this,"@web/js/map/fei.css");
AppAsset::addScript($this,"@web/js/map/AmapControl.js");
?>
```

### css z-index

```
[z-index:导致浏览器之间的显示不一样；优先于行内样式]
z-index: 9999 !important;
```

### 获取登录人个人信息

```php
Yii::$app->user->identity->username
Yii::$app->user->id
```

### Yii2的Alert组件（消息提示）

```
//Yii2的Alert组件（消息提示）
\Yii::$app->getSession()->setFlash('warning', "头像设置成功！");
```

### 控制器中调用方法：

```
控制器中调用方法：
Yii::$app->runAction('directory/lead-pano-hot',['panoHotProvider'=>json_encode($panoHotProvider)])
```

### 表单失去焦点验证

```
http://www.yii-china.com/post/detail/50.html
http://www.yii-china.com/post/detail/50.html
```

### gii

```

gii生成model层【Model Generator】： 
    Table Name： tg_project    【表名】
    Model Class：Project    【类名】
·   Namespace    backend\models

controller层【Controller Generator】
    Controller Class： backend\controllers\ProjectController

CRUD Generator操作【CRUD Generator】 【注意重写、否则控制器不刷新】
    Model Class： backend\models\Project
    Search Model Class: backend\models\search\ProjectSearch
    Controller Class: backend\controllers\ProjectController

Modules层 【Module Generator】 【Modules模块使用】
    Module Class ： frontend\modules\Admin\admin          【注意大小写】
    Module ID ： admin    【自动生成】
访问路径：http://self.yii0.com/index.php?r=admin/default/index
                http://self.yii0.com/index.php?r=admin
自动生成后注意命名空间大小写
```

### 美化 alert  ;  

```
美化alert
    https://segmentfault.com/a/1190000002638322
yii中pajax的使用
    http://www.kuitao8.com/20150505/3729.shtml
    
    
Yii2.0 模态弹出框+ajax提交表单  【使用bootstrps也可以？？】
   ( 
     注意问题：bootstrap2和3在模态对话框代码上是一样的，但必须引入相应的js， 
     必须引入< script src= "test/js/bootstrap-modal.js" >!! 否则就会黑屏
   )
   
   
    http://www.jb51.net/article/84802.htm    【V 注意最后ajax】
    http://www.thinksaas.cn/topics/0/585/585569.html
    http://www.cnsecer.com/7150.html
    http://www.aspku.com/kaifa/php/162477.html
    http://www.manks.top/yii2_modal_baseuse.html
    http://www.manks.top/yii2_modal_baseuse.html [注意js冲突引起模态消失]
   -----------弹窗、模态、提示、浮层-------------
```

###  yii2三级联动

```
http://www.yiichina.com/tutorial/468   【yii2三级联动】
http://www.yiichina.com/tutorial/468   【yii2三级联动】
```

### yii2扩展搜索站点：

```
http://demos.krajee.com/
http://demos.krajee.com/
```





### CKEDITOR配置（编辑器工具栏某些内容显示与否）

```
编译器：
http://blog.sina.com.cn/s/blog_af8fb8650102we3a.html
编译器：
http://blog.sina.com.cn/s/blog_af8fb8650102we3a.html

http://www.cnblogs.com/tylerdonet/archive/2013/04/27/3046170.html
http://www.cnblogs.com/tylerdonet/archive/2013/04/27/3046170.html
```

### 其他

```
/etc/rc.local以及/etc/init.d
/etc/rc.local以及/etc/init.d

https://www.zhihu.com/question/26635323/answer/33812516
https://www.zhihu.com/question/26635323/answer/33812516
```

## Web开发基本准则-55实录-Web访问安全

```
http://www.cnblogs.com/zhengyun_ustc/p/rule1.html
http://www.cnblogs.com/zhengyun_ustc/p/rule1.html
```



