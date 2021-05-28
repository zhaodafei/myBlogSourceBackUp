---
title: YII2搭建后台并实现rbac权限控制
categories: 
- PHP
- Yii
tags:
- PHP
- Yii
---

### 安装Yii2 

参考官网安装文档
<a href="http://www.yiiframework.com/download"><font color="red">yiiframework</font></a>
<a href="http://www.yiichina.com/download"><font color="red">yiichina</font></a>

### 配置数据库

``` bash
创建数据库： create database yii2advanced default charset utf8;

修改common/config/main-local.php数据库配置

        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=yii2advanced',
            'username' => 'root',
            'password' => 'root',
            'charset' => 'utf8',
        ],
```
<img src="/img/Yii2/mysql_config.png" alt="数据配置">

### 使用composer安装yii2-admin

```
composer require mdmsoft/yii2-admin "~2.0"

!!!温馨提示：建议安装 1.0 版本不安装 2.0 版本!!!
composer require mdmsoft/yii2-admin "~1.0"
```

### 配置yii2-admin运行环境

```
权限控制在后台，所以在 backend/config/main.php 中配置以下内容：
return [
    'modules' => [
        'admin' => [
            'class' => 'mdm\admin\Module',
             'layout' => 'left-menu',//yii2-admin的导航菜单
        ]
        ...
    ],
    ...
    'components' => [
        ...
        'authManager' => [
            'class' => 'yii\rbac\DbManager', // 使用数据库管理配置文件
        ]
    ],
    'as access' => [
        'class' => 'mdm\admin\components\AccessControl',
        'allowActions' => [
            'site/*',//允许访问的节点，可自行添加
            'admin/*',//允许所有人访问admin节点及其子节点
        ]
    ],
];
```

### 创建数据表

``` bash
php yii migrate --migrationPath=@mdm/admin/migrations

执行sql：（自带的rbac）  
修改配置文件console/config/main-local.php
return [
    'bootstrap' => ['gii'],
    'modules' => [
        'gii' => 'yii\gii\Module',
    ],
    'components' => [
        "authManager" => [
            "class" => 'yii\rbac\DbManager',
            "defaultRoles" => ["guest"],
        ],
    ],
];
cd到advance目录下面执行
yii migrate --migrationPath=@yii/rbac/migrations
```

### 中文显示

```
在 common\config\main.php 中配置

return [
    'language' => 'zh-CN', //中文显示
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
    ],
];

现在可以查看后台：
<Your domain name>/index.php?r=admin/user
<Your domain name>/index.php?r=admin
<Your domain name>/index.php?r=admin/route
<Your domain name>/index.php?r=admin/permission
<Your domain name>/index.php?r=admin/menu
<Your domain name>/index.php?r=admin/role
<Your domain name>/index.php?r=admin/assignment
```

<img src="/img/Yii2/yii2_admin_install_end.png" alt="yii2-admin 安装完成">

### 配置授权demo

```
以一个自定义的节点books为例，节点books下共有index 图书列表，view 查看图书，create创建图书，update 更新图书，delete 删除图书这个5个节点，，可以通过gii生成这些代码。

配置目标：
未登录用户仅能访问index节点
一般用户能访问index，view，create三个节点
管理员能访问所有节点
---------------------------
在 backend/config/main.php 中修改配置以下内容：
    'as access' => [
        'class' => 'mdm\admin\components\AccessControl',
        'allowActions' => [
            //'site/*',//允许访问的节点，可自行添加
            //'admin/*',//允许所有人访问admin节点及其子节点
            "*"//不配置这个是访问不到gii，使用完记得修改回来，否则权限会出问题
        ]
    ],
 
```

### 添加可分配权限列表

在路由列表中，添加book各个节点路由由表添加至右侧可分配路由列表中，如下:

<img src="/img/Yii2/book_route.png" alt="路由列表 图书">

在权限列表=》新增权限，填好后提交，然后填的路由规则即可，如下：

<img src="/img/Yii2/authority_add_01.png" alt="权限列表 新增权限">

<img src="/img/Yii2/authority_add_03.png" alt="权限列表 新增权限的对应路由">

<img src="/img/Yii2/authority_add_04.png" alt="权限列表">

### 添加角色并分配权限

<img src="/img/Yii2/role_add_01.png" alt="角色列表 新增角色">

<img src="/img/Yii2/role_add_02.png" alt="角色列表 新增角色对应的权限">

<img src="/img/Yii2/role_add_03.png" alt="角色列表">

### 分配角色

手动注册用户，我这里注册admin和test进行测试。其中admin为管理员，test为一般用户

<img src="/img/Yii2/register_user.png" alt="分配列表 00">

<img src="/img/Yii2/assignments_list_01.png" alt="分配列表 list 01">

<img src="/img/Yii2/assignments_list_02.png" alt="分配列表 add 02">

<img src="/img/Yii2/assignments_list_03.png" alt="分配列表 add 03">

## <font color="red">！！！测试权限之前</font>

```
！！！ 测试权限之前，把这里注释掉
在 backend/config/main.php 中修改配置以下内容：
    'as access' => [
        'class' => 'mdm\admin\components\AccessControl',
        'allowActions' => [
            //'site/*',//允许访问的节点，可自行添加
            //'admin/*',//允许所有人访问admin节点及其子节点
            //"*"//把这个注释掉！！！
        ]
    ],
```

### 开始测试

```
1、以管理员身份登录时，可以进行所有操作。ok
2、如果不登录，在访问book首页的时候会跳转到登录页面。预期结果是未登录时能访问book首页，就是说当前系统默认不认可我们配置给未登录用户的权限。
有2中办法
第一种 在 backend/config/main.php 中加一行指定默认规则的代码即可，如下：

'authManager'=> [
    'class' => 'yii\rbac\DbManager',
    'defaultRoles' => ['未登录用户'],//添加此行代码，指定默认规则为 '未登录用户'
],

或者在 backend/config/main.php 修改为：
    'as access' => [
        'class' => 'mdm\admin\components\AccessControl',
        'allowActions' => [
            //'site/*',//允许访问的节点，可自行添加
            //'admin/*',//允许所有人访问admin节点及其子节点
            //"*"//不配置这个是访问不到gii，使用完记得修改回来，否则权限会出问题
            "book/index",//未登录用户也可以访问图书列表
        ]
    ],
```



### ......

------



### 安装yii2 AdminLTE后台主题

```
composer require dmstr/yii2-adminlte-asset "^2.1"

安装过程中可能需要输入github的token
```

### 引入主题

```
方式一：(建议使用这种方式)
复制整个vendor/dmstr/yii2-adminlte-asset/example-views/yiisoft/yii2-app目录下的layouts目录和site目录到backend/views，覆盖原始文件。

方式二：
'components' => [
    'view' => [
         'theme' => [
             'pathMap' => [
                '@app/views' => '@vendor/dmstr/yii2-adminlte-asset/example-views/yiisoft/yii2-app'
             ],
         ],
    ],
],

现在可以查看后台：
<Your domain name>/index.php?r=admin%2Fuser
！！！如果访问权限相关的路径，如/admin/route/index并不是上面看到的样式，请将配置文件中的modules数组中配置的layouts的值删掉即可。如下：
        'admin' => [
            'class' => 'mdm\admin\Module',
            //'layout' => 'left-menu',//yii2-admin的导航菜单
        ]
```

<img src="/img/Yii2/yii2_adminlte_install_end.png" alt="yii2-adminlte 安装完成">

### 配置数据库，登录

```
1、修改common/config/main-local.php数据库配置

        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=yii2advanced',
            'username' => 'root',
            'password' => 'root',
            'charset' => 'utf8',
        ],
2、注册后台账户，登录     

3、在 common\config\main.php 中配置
return [
    'language' => 'zh-CN', //中文显示
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
    ],
];

```

### 配置简短路由

```
在 backend/config/main.php文件的compontents加上下面的配置
"urlManager" => [    
    //用于表明urlManager是否启用URL美化功能，在Yii1.1中称为path格式URL，    
    // Yii2.0中改称美化。   
    // 默认不启用。但实际使用中，特别是产品环境，一般都会启用。   
    "enablePrettyUrl" => true,    
    // 是否启用严格解析，如启用严格解析，要求当前请求应至少匹配1个路由规则，    
    // 否则认为是无效路由。    
    // 这个选项仅在 enablePrettyUrl 启用后才有效。    
    "enableStrictParsing" => false,    
    // 是否在URL中显示入口脚本。是对美化功能的进一步补充。    
    "showScriptName" => false,    
    // 指定续接在URL后面的一个后缀，如 .html 之类的。仅在 enablePrettyUrl 启用时有效。    
    "suffix" => "",    
    "rules" => [        
        "<controller:\w+>/<id:\d+>"=>"<controller>/view",  
        "<controller:\w+>/<action:\w+>"=>"<controller>/<action>"    
    ],
],

配置web server
Apache作为服务器，在应用的目录 backend/web下面创建.htaccess文件并添加如下内容：
Options +FollowSymLinks
IndexIgnore  */*
RewriteEngine on
# if a directory or a file exists, use it directly
RewriteCond  %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
# otherwise forward it to index.php
RewriteRule . index.php

nginx用户，修改server部分，如下：
server {
    listen       80;
    server_name  yourdomain;
    root yourdirectory/backend/web;
    index  index.php index.html;
    charset utf-8;
    location / {
        index  index.php;
        if (!-e $request_filename) {
            rewrite  ^(.*)$  /index.php/$1  last;
            break;
        }
    }
    location ~ .+\.php($|/) {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        include fastcgi.conf;
    }
}
```

### 启动更多分配路由

我们先访问路由页面 /admin/route ，尽可能的把左侧的全部选中，然后移动到右侧，并记得给当前用户分配相关的可访问权限。

<img src="/img/Yii2/adminLTE_route_all.png" alt="yii2-adminlte 所有路由">



### 添加菜单

```
访问菜单列表 admin/menu 点击添加菜单admin/menu/create按钮。
> 如果这个时候你没有权限访问了，需要在配置文件（backend/config/main.php）的 as access数组暂时允许当前用户访问任意权限，并在我们添加完权限的时候去掉as access的设置，切记。
    'as access' => [
        'class' => 'mdm\admin\components\AccessControl',
        'allowActions' => [
            //'site/*',//允许访问的节点，可自行添加
            //'admin/*',//允许所有人访问admin节点及其子节点
            "*"//不配置这个是访问不到gii，使用完记得修改回来，否则权限会出问题
            //"book/index",//未登录用户也可以访问图书列表
        ]
    ],
    
？？？？？？？？？父级一直添加不上？？？先手动修改数据库？？？？最后解决这个问题？？？？    
添加界面如下：
```

<img src="/img/Yii2/adminLTE_menu_add_01.png" alt="yii2-adminlte 添加菜单01">

```
一、例如添加一级菜单"权限管理"，按照如下填写：
名称：权限管理
父级名称：不填
路由：/admin/default/index
排序：1
数据：暂不填写

二、添加一个二级菜单"角色列表"，如下：
名称：角色列表
父级名称：权限管理
路由：/admin/role/index
排序：2
数据：暂不填写

三、添加一个二级菜单"权限列表"，如下：
名称：权限列表
父级名称：权限管理
路由：/admin/permission/index
排序：3
数据：暂不填写

四、添加一个二级菜单"路由列表"，如下：
名称：路由列表
父级名称：权限管理
路由：/admin/route/index
排序：4
数据：暂不填写

五、添加一个二级菜单"规则管理"，如下：
名称：规则管理
父级名称：权限管理
路由：/admin/rule/index
排序：5
数据：暂不填写

六、添加一个二级菜单"分配用户到角色"，如下：
名称：分配用户到角色
父级名称：权限管理
路由：/admin/assignment/index
排序：6
数据：暂不填写

七、添加一个二级菜单"菜单列表"，如下：
名称：菜单列表
父级名称：权限管理
路由：/admin/menu/index
排序：7
数据：暂不填写

八、添加一个二级菜单"用户列表"，如下：
名称：用户列表
父级名称：权限管理
路由：/admin/user/index
排序：8
数据：暂不填写

九、添加一个二级菜单"图书列表"，如下：
名称：图书列表
父级名称：权限管理
路由：/book/index
排序：9
数据：暂不填写

具体如下
```

<img src="/img/Yii2/adminLTE_menu_add_02.png" alt="yii2-adminlte 添加菜单02">

### 左侧菜单展示

``` bash
修改
<project>/backend/views/layouts/left.php
文件（保证这个文件是从
<project>/vendor/dmstr/yii2-adminlte-asset/example-views/yiisoft/yii2-app/views/layouts/left.php
地方复制过来的，否则去修改源文件），添加如下代码：
侧菜单上把权限的栏目加上,代码可直接复制，放置于 <section class="sidebar"></section>标签内即可

        //第一种显示方式
        $callback = function($menu){
            return [
                'label' => $menu['name'],
                'url' => [$menu['route']],
                'icon' => $menu['data'],
                'items' => $menu['children']
            ];
        };
        use mdm\admin\components\MenuHelper;
        $items = MenuHelper::getAssignedMenu(Yii::$app->user->id, null, $callback, true);
        echo dmstr\widgets\Menu::widget([
            'options' => ['class' => 'sidebar-menu', 'data-widget'=> 'tree'],
            'items' => $items
        ]);


        //第二种显示方式
        //use mdm\admin\components\MenuHelper;
        use yii\bootstrap\Nav;
        echo Nav::widget(
            [
                //"encodeLabels" => false,
                "options" => ["class" => "sidebar-menu", 'data-widget'=> 'tree'],
                "items" => MenuHelper::getAssignedMenu(Yii::$app->user->id),
            ]
        );
```

<img src="/img/Yii2/adminLTE_left.png" alt="yii2-adminlte 左侧菜单">

### 整合完毕后存在问题（原因是 yii2-admin 2.0版本）

一、菜单小图标并控制菜单显示： 
我们在创建菜单的时候，没填写的"数据"一栏，我们填写 <a href="http://www.runoob.com/font-awesome/fontawesome-tutorial.html"><font color="red">Font Awesome</font></a> 从这里面选择图标，例如在品牌图标中 使用这个是	fa fa-android  ；我们在 菜单“数据”一栏应该写 android，如图：
<img src="/img/Yii2/bug_menu_icon.png" alt="bug 图标填写错误">

二、菜单列表中父级一直添加不上 ，父级名意图提示样式会跑到最左侧，路由意图样式会跑到最左侧（yii2-admin 版本1.0没有此问题）
<img src="/img/Yii2/bug_menu_add_menu.png" alt="bug 新增菜单样式错误">

解决办法：

```
一、解决父级添加不上：
修改<project>/vendor/mdmsoft/yii2-admin/models/Menu.php中
原来：
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['parent_name'], 'in',
                'range' => static::find()->select(['name'])->column(),
                'message' => 'Menu "{value}" not found.'],
            [['parent', 'route', 'data', 'order'], 'default'],
            [['parent'], 'filterParent', 'when' => function() {
                return !$this->isNewRecord;
            }], 
            [['order'], 'integer'],
            [['route'], 'in',
                'range' => static::getSavedRoutes(),
                'message' => 'Route "{value}" not found.']
        ];
    }
    修改后：
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['parent_name'], 'in',
                'range' => static::find()->select(['name'])->column(),
                'message' => 'Menu "{value}" not found.'],
            [['parent', 'route', 'data', 'order'], 'default'],
            /*[['parent'], 'filterParent', 'when' => function() {
                return !$this->isNewRecord;
            }],*/
            [['parent_name'], 'filterParent'],//修改此方法
            [['order'], 'integer'],
            [['route'], 'in',
                'range' => static::getSavedRoutes(),
                'message' => 'Route "{value}" not found.']
        ];
    }
    
    原来：
    public function filterParent()
    {
        $parent = $this->parent;
        $db = static::getDb();
        $query = (new Query)->select(['parent'])
            ->from(static::tableName())
            ->where('[[id]]=:id');
        while ($parent) {
            if ($this->id == $parent) {
                $this->addError('parent_name', 'Loop detected.');
                return;
            }
            $parent = $query->params([':id' => $parent])->scalar($db);
        }
    }
    
    修改后：
    public function filterParent()
    {
        //修改此方法
        $value = $this->parent_name;
        $parent = self::findOne(['name' => $value]);
        if ($parent) {
            $id = $this->id;
            $parent_id = $parent->id;
            while ($parent) {
                if ($parent->id == $id) {
                    $this->addError('parent_name', 'Loop detected.');

                    return;
                }
                $parent = $parent->menuParent;
            }
            $this->parent = $parent_id;
        }
    }
    
二、解决意图提示样式
下载 yiisoft/yii2-jui
php composer.phar require --prefer-dist yiisoft/yii2-jui

现在已经可以上试试效果，完全没有问题，如果不想用form中原来的书写方式可以按下面的办法；
修改 <project>/vendor/mdmsoft/yii2-admin/views/menu/_form.php中parent_name和route表单：
修改之前：
            <?= $form->field($model, 'parent_name')->textInput(['id' => 'parent_name']) ?>
            <?= $form->field($model, 'route')->textInput(['id' => 'route']) ?>
修改之后：
            <?= $form->field($model, 'parent_name')->widget('yii\jui\AutoComplete',[
                'options'=>['class'=>'form-control'],
                'clientOptions'=>[
                    'source'=>  Menu::find()->select(['name'])->column()
                ]
            ]) ?>

            <?= $form->field($model, 'route')->widget('yii\jui\AutoComplete',[
                'options'=>['class'=>'form-control'],
                'clientOptions'=>[
                    'source'=> Menu::getSavedRoutes()
                ]
            ]) ?>
三、在 <project>/vendor/mdmsoft/yii2-admin/views/role/_form.php 同样会有样式问题，按照二的步骤修改即可
   使用到的时候再改就可以。
   修改后的：
   <?=
    $form->field($model, 'ruleName')->widget('yii\jui\AutoComplete', [
        'options' => [
            'class' => 'form-control',
        ],
        'clientOptions' => [
            'source' => array_keys(Yii::$app->authManager->getRules()),
        ]
    ])
    ?>
```

<img src="/img/Yii2/bug_menu_add_menu_ok_01.png" alt="bug 新增菜单父级改好1">

<img src="/img/Yii2/bug_menu_add_menu_ok_02.png" alt="bug 新增菜单父级改好2">

<img src="/img/Yii2/bug_menu_add_menu_ok_03.png" alt="bug 新增菜单父级改好3">