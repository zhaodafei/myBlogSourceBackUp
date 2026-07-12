[TOC]

### 安装指定版本:

```
composer create-project laravel/laravel=5.6.* laravel56 --prefer-dist

cd laravel56
php artisan --version   #查看版本

// ----------------

composer create-project laravel/laravel=5.7.* laravel57 --prefer-dist
cd laravel57
php artisan --version   #查看版本

//----------------
composer create-project laravel/laravel project-name --prefer-dist "5.5.*"

// --------------
到github或者https://packagist.phpcomposer.com/packages/laravel/laravel 官网这里下载包,然后修改当前项目的 composer.json 配置为国内镜像
composer config repo.packagist composer https://packagist.phpcomposer.com
配置laravel中国镜像: composer config repo.packagist composer https://packagist.laravel-china.org
手动修改方法,在 composer.json 文件末尾添加
"repositories": {
        "packagist": {
            "type": "composer",
            "url": "https://packagist.phpcomposer.com"
        }
    }

修改composer 的全局配置文件
composer config -g repo.packagist composer https://packagist.phpcomposer.com
    
laravel框架安装完后运行
报错: No application encryption key has been specified
1、.env.example 改名使用命令 copy 修改为 .env
2、使用命令 php artisan key:generate  获取密码，自动保存到 .env
3、将密码复制到config/app.php 中的key里面
4、重新运行，OK。

官方laravel.com 这个demo下载后需要添加 .evn 和 .evn.example 再运行php artisan key:generate
    
```
### !!!!!! 配置这些

安装laravel智能提示: https://www.cnblogs.com/woider/p/6105877.html 

在 vendor/laravel/framework/src/Illuminate/Database/Eloquent/Model.php 这个类上面添加注释, 否则使用model层没有提示
```
/**
 * @mixin \Eloquent
 * @mixin \Illuminate\Database\Eloquent\Builder
 * @mixin \Illuminate\Database\Query\Builder
 */
 
 其他配置,composer [laravel 是什么版本,就要按照对应的版本]
代码自动生成:
https://laravelacademy.org/post/3712.html
https://laravelacademy.org/post/3712.html
 composer require "infyomlabs/laravel-generator"
 composer require "doctrine/dbal"
 composer require "infyomlabs/core-templates"
 composer require "laravelcollective/html"
 composer require  laravelcollective/html 5.6.3
 
 ***********
composer require doctrine/dbal ~2.3
composer require laravelcollective/html 5.6.*
composer require infyomlabs/laravel-generator 5.6.x-dev
composer require infyomlabs/adminlte-templates 5.6.x-dev      
composer require infyomlabs/swagger-generator dev-master
composer require jlapp/swaggervel dev-master

使用:
第一步:添加配置 
php artisan vendor:publish
第二步:使用
php artisan  infyom:scaffold CrudTest --fromTable --tableName=crud_test
 **************

```

### composer 项目结构简介

```
//web服务开发:
//视图:   resources/views/welcome.blade.php   
//控制器层: app/Http/Controllers/WelcomeController.php

//------------------------------
//通过配置routes/web.php中 Route::get() 使用不同可以确定是否经过controller层

// 直接视图层渲染
Route::get('/aaa', function () {
    return view('fei');
});

// 经过WelcomeController 的 index 方法
Route::get('/welcome', 'WelcomeController@index');
Route::get('/welcome/index2', 'WelcomeController@index2');    

//------------------------------
class WelcomeController extends Controller
{
    //直接返回数据
    public function index()
    {
        return "hello world";
    }
    // 渲染视图层
    public function index2()
    {
        //return view('fei');
        return view('test.testv'); //views/test/testv.blade.php
    }
}
```
### 数据库操作

```php
https://jingyan.baidu.com/article/19192ad8d131cae53f570756.html
https://jingyan.baidu.com/article/19192ad8d131cae53f570756.html
// $users = DB::select('select * from student_01');
// $users = DB::table('student_01')->get();
// $users = DB::table('student_01')->pluck('name');
$users = DB::table('student_01')
    ->select(['name', 'kecheng', 'score'])
    ->where([
        ['score', '>', '80'],
        ['name', '张三']
    ])
    ->get();
//查询一条数据
Student01::where('mr_id', '=', $mr_id)->first();
//修改
$user = UserModel::find($id);
$user->title = $_POST['title'];
$user->content= $_POST['content'];
return $user->save() ? 'OK' : 'fail';

//修改2
Student01::where('m_id', '=', '12')
->update([
    'field1'=>'ttt',
    'field2'=>'uuuuuuuu'
]);

//count
DB::table('student_01')->count();

```

### model 层

```php
自动生成 Models/Student01
php artisan make:model Models/Student01

//使用model层
// model 中指定表名 public $table = 'student_01';
// $users = Student01::all();
// $users = Student01::where('id','>','2')->get();
$users = Student01::where('id','>','1')->first();

//关联查询
$model = Student01::where('id', '=', 1)
    ->join('table2','table1.id','=','c_id')
    ->orderBy('time','desc')
    ->get();
    
// 禁止使用自动更新,创建时间
public $timestamps = false;
// const CREATED_AT = 'create_time';
// const UPDATED_AT = 'update_time';

```

### 快速生成CRUD

```shell
#model层生成
php artisan infyom:model 模型名称 --fromTabel --tableName=表名(需要表前缀)
php artisan infyom:model DicRegion --fromTable --tableName=jyt_dic_region

https://laravelacademy.org/post/3716.html

安装这个包
laravel-generator
laravel-generator
"infyomlabs/laravel-generator": "5.6.x-dev",

http://labs.infyom.com/laravelgenerator/docs/5.6/installation
http://labs.infyom.com/laravelgenerator/docs/5.6/installation
```

### 命令行 console 
```
https://blog.csdn.net/lovemyself196221/article/details/79464801
https://blog.csdn.net/lovemyself196221/article/details/79464801

创建文件 php artisan make:command test
命令名字  protected $signature = 'command:name';
执行 php artisan command:name

```

### view 层
```
#前端引入js,css
<script src="{{ URL::asset('/pu_css_js/jquery-1.8.2.min.js') }}"></script>

<script src="{{ asset('/pu_css_js/jquery-1.8.2.min.js') }}"></script>
```

### 必备的实用技巧
```
来自: https://zhuanlan.zhihu.com/p/35807856
```
> 
>
> # 20 个 Laravel Eloquent 必备的实用技巧
>
> Eloquent ORM 看起来是一个简单的机制，但是在底层，有很多半隐藏的函数和鲜为人知的方式来实现更多功能。在这篇文章中，我将演示几个小技巧。
>
> ## 1. 递增和递减
>
> 要代替以下实现：
>
> ```text
> $article = Article::find($article_id);
> $article->read_count++;
> $article->save();
> ```
>
> 你可以这样做：
>
> ```text
> $article = Article::find($article_id);
> $article->increment('read_count');
> ```
>
> 以下这些方法也可以实现：
>
> ```text
> Article::find($article_id)->increment('read_count');
> Article::find($article_id)->increment('read_count', 10); // +10
> Product::find($produce_id)->decrement('stock'); // -1
> ```
>
> ------
>
> ## 2. 先执行 X 方法，X 方法执行不成功则执行 Y 方法
>
> Eloquent 有相当一部分函数可以把两个方法结合在一起使用, 例如 『 请先执行 X 方法， X 方法执行不成功则执行 Y 方法 』。
>
> 实例 1 -- `findOrFail()`:
>
> 要替代以下代码的实现：
>
> ```text
> $user = User::find($id);
> if (!$user) { abort (404); }
> ```
>
> 你可以这样写：
>
> ```text
> $user = User::findOrFail($id);
> ```
>
> 实例 2 -- `firstOrCreate()`:
>
> 要替代以下代码的实现：
>
> ```text
> $user = User::where('email', $email)->first();
> if (!$user) {
>   User::create([
>     'email' => $email
>   ]);
> }
> ```
>
> 这样写就可以了：
>
> ```text
> $user = User::firstOrCreate(['email' => $email]);
> ```
>
> ------
>
> ## 3. 模型的 boot() 方法
>
> 在一个 Eloquent 模型中，有个神奇的地方，叫 `boot()`，在那里，你可以覆盖默认的行为：
>
> ```text
> class User extends Model
> {
>     public static function boot()
>     {
>         parent::boot();
>         static::updating(function($model)
>         {
>             // 写点日志啥的
>             // 覆盖一些属性，类似这样 $model->something = transform($something);
>         });
>     }
> }
> ```
>
> 在创建模型对象时设置某些字段的值，大概是最受欢迎的例子之一了。 一起来看看在创建模型对象时，你想要生成 [UUID 字段](https://link.zhihu.com/?target=https%3A//github.com/webpatser/laravel-uuid) 该怎么做。
>
> ```text
> public static function boot()
> {
>   parent::boot();
>   self::creating(function ($model) {
>     $model->uuid = (string)Uuid::generate();
>   });
> }
> ```
>
> ------
>
> ## 4. 带条件与排序的关联关系
>
> 定义[关联关系](https://zhida.zhihu.com/search?content_id=6513583&content_type=Article&match_order=2&q=关联关系&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODA5MjQ0NjksInEiOiLlhbPogZTlhbPns7siLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo2NTEzNTgzLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjIsInpkX3Rva2VuIjpudWxsfQ.WmXtTBJPFYPrzQujmXlCiP95b_NwDGUdFlwK5nBBVj0&zhida_source=entity)的一般方式：
>
> ```text
> public function users() {
>     return $this->hasMany('App\User');
> }
> ```
>
> 你知道吗？也可以在上面的基础上增加 `where` 或者 `orderBy`?\
> 举个例子，如果你想关联某些类型的用户，同时使用 email 字段排序，你可以这样做：
>
> ```text
> public function approvedUsers() {
>     return $this->hasMany('App\User')->where('approved', 1)->orderBy('email');
> }
> ```
>
> ------
>
> ## 5. 模型特性：时间、追加等
>
> Eloquent模型有些参数，使用类的属性形式。最常用是：
>
> ```text
> class User extends Model {
>     protected $table = 'users';
>     protected $fillable = ['email', 'password']; // 可以被批量赋值字段，如 User::create() 新增时，可使用字段
>     protected $dates = ['created_at', 'deleted_at']; // 需要被Carbon维护的字段名
>     protected $appends = ['field1', 'field2']; // json返回时，附加的字段
> }
> ```
>
> 不只这些，还有：
>
> ```text
> protected $primaryKey = 'uuid'; // 更换主键
> public $incrementing = false; // 设置 不自增长
> protected $perPage = 25; // 定义分页每页显示数量（默认15）
> const CREATED_AT = 'created_at';
> const UPDATED_AT = 'updated_at'; //重写 时间字段名
> public $timestamps = false; // 设置不需要维护时间字段
> ```
>
> 还有更多,我只列出了一些有意思的特性，具体参考文档 [abstract Model class](https://link.zhihu.com/?target=https%3A//github.com/laravel/framework/blob/5.6/src/Illuminate/Database/Eloquent/Model.php) 了解所有特性.
>
> ------
>
> ## 6. 通过 ID 查询多条记录
>
> 所有人都知道 `find()` 方法，对吧？
>
> ```text
> $user = User::find(1);
> ```
>
> 我十分意外竟然很少人知道这个方法可以接受多个 ID 的数组作为参数：
>
> ```text
> $users = User::find([1,2,3]);
> ```
>
> ------
>
> ## 7. WhereX
>
> 有一种优雅的方式能将这种代码：
>
> ```text
> $users = User::where('approved', 1)->get();
> ```
>
> 转换成这种：
>
> ```text
> $users = User::whereApproved(1)->get();
> ```
>
> 对，你没有看错，使用字段名作为后缀添加到 `where` 后面，它就能通过魔术方法运行了。
>
> 另外，在 Eloquent 里也有些和时间相关的预定义方法：
>
> ```text
> User::whereDate('created_at', date('Y-m-d'));
> User::whereDay('created_at', date('d'));
> User::whereMonth('created_at', date('m'));
> User::whereYear('created_at', date('Y'));
> ```
>
> ------
>
> ## 8. 通过关系排序
>
> 一个复杂一点的「技巧」。你想对论坛话题按最新发布的帖子来排序？论坛中最新更新的主题在最前面是很常见的需求，对吧？
>
> 首先，为主题的最新帖子定义一个单独的关系：
>
> ```text
> public function latestPost()
> {
>     return $this->hasOne(\App\Post::class)->latest();
> }
> ```
>
> 然后，在控制器中，我们可以实现这个「魔法」：
>
> ```text
> $users = Topic::with('latestPost')->get()->sortByDesc('latestPost.created_at');
> ```
>
> ------
>
> ## 9. Eloquent::when() -- 不再使用 if-else
>
> 很多人都喜欢使用"if-else"来写查询条件，像这样：
>
> ```text
> if (request('filter_by') == 'likes') {
>     $query->where('likes', '>', request('likes_amount', 0));
> }
> if (request('filter_by') == 'date') {
>     $query->orderBy('created_at', request('ordering_rule', 'desc'));
> }
> ```
>
> 有一种更好的方法 -- 使用 `when()`
>
> ```text
> $query = Author::query();
> $query->when(request('filter_by') == 'likes', function ($q) {
>     return $q->where('likes', '>', request('likes_amount', 0));
> });
> $query->when(request('filter_by') == 'date', function ($q) {
>     return $q->orderBy('created_at', request('ordering_rule', 'desc'));
> });
> ```
>
> 它可能看上去不是很优雅，但它强大的功能是传递参数：
>
> ```text
> $query = User::query();
> $query->when(request('role', false), function ($q, $role) {
>     return $q->where('role_id', $role);
> });
> $authors = $query->get();
> ```
>
> ------
>
> ## 10. 一对多返回默认模型对象
>
> 假设现在有种情况是要显示文章的作者，然后模板代码是：
>
> ```text
> {{ $post->author->name }}
> ```
>
> 但是如果作者的信息被删除或者因为某些原因没有被设置。代码会返回一个错误，诸如 "property of non-object"。
>
> 当然你可以这样处理：
>
> ```text
> {{ $post->author->name ?? '' }}
> ```
>
> 你可以通过 Eloquent 关系这样做:
>
> ```text
> public function author()
> {
>     return $this->belongsTo('App\Author')->withDefault();
> }
> ```
>
> 在此示例中，如果文字没有作者的信息， `author()` 会返回一个空的 `App\Author` [模型对象](https://zhida.zhihu.com/search?content_id=6513583&content_type=Article&match_order=4&q=模型对象&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODA5MjQ0NjksInEiOiLmqKHlnovlr7nosaEiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo2NTEzNTgzLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjQsInpkX3Rva2VuIjpudWxsfQ.t-4qfwWMEWKhRRp7gKLlMsh-8W-IAXe85UBh7wOC94I&zhida_source=entity)。
>
> 再者，我们也可以给默认的模型对象里面的属性赋默认值。
>
> ```text
> public function author()
> {
>     return $this->belongsTo('App\Author')->withDefault([
>         'name' => 'Guest Author'
>     ]);
> }
> ```
>
> ------
>
> ## 11. 通过[赋值函数](https://zhida.zhihu.com/search?content_id=6513583&content_type=Article&match_order=1&q=赋值函数&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODA5MjQ0NjksInEiOiLotYvlgLzlh73mlbAiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo2NTEzNTgzLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.W1s2Wyf2_otjoLoTBDu-YvZ6U80DdmlCKpDCm4U2CtY&zhida_source=entity)进行排序
>
> 想象一下你有这样的代码:
>
> ```text
> function getFullNameAttribute()
> {
>   return $this->attributes['first_name'] . ' ' . $this->attributes['last_name'];
> }
> ```
>
> 现在,你想要通过 "full_name" 进行排序? 发现是没有效果的:
>
> ```text
> $clients = Client::orderBy('full_name')->get(); //没有效果
> ```
>
> 解决办法很简单.我们需要在获取结果后对结果进行排序.
>
> ```text
> $clients = Client::get()->sortBy('full_name'); // 成功!
> ```
>
> 注意的是方法名称是不相同的 -- 它不是orderBy,而是sortBy
>
> ------
>
> ## 12. [全局作用域](https://zhida.zhihu.com/search?content_id=6513583&content_type=Article&match_order=1&q=全局作用域&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODA5MjQ0NjksInEiOiLlhajlsYDkvZznlKjln58iLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo2NTEzNTgzLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.VAYJsHCrR1PZKCT7bmnqeHePB_2mfgK67ksneRZR39g&zhida_source=entity)下的默认排序
>
> 如果你想要 `User::all()` 总是按照 `name` 字段来排序呢？ 你可以给它分配一个全局作用域。让我们回到 `boot()` 这个我们在上文提到过的方法：
>
> ```text
> protected static function boot()
> {
>     parent::boot();
> 
>     // 按照 name 正序排序
>     static::addGlobalScope('order', function (Builder $builder) {
>         $builder->orderBy('name', 'asc');
>     });
> }
> ```
>
> 扩展阅读 [查询作用域](https://link.zhihu.com/?target=https%3A//laravel.com/docs/5.6/eloquent%23query-scopes) 。
>
> ------
>
> ## 13. 原生查询方法
>
> 有时候，我们需要在 Eloquent 语句中添加原生查询。 幸运的是，确实有这样的方法。
>
> ```text
> // whereRaw
> $orders = DB::table('orders')
>     ->whereRaw('price > IF(state = "TX", ?, 100)', [200])
>     ->get();
> 
> // havingRaw
> Product::groupBy('category_id')->havingRaw('COUNT(*) > 1')->get();
> 
> // orderByRaw
> User::where('created_at', '>', '2016-01-01')
>   ->orderByRaw('(updated_at - created_at) desc')
>   ->get();
> ```
>
> ------
>
> ## 14. 复制：复制一行的副本
>
> 很简单。说明不是很深入，下面是复制数据库实体（一条数据）的最佳方法：
>
> ```text
> $task = Tasks::find(1);
> $newTask = $task->replicate();
> $newTask->save();
> ```
>
> ------
>
> ## 15. Chunk() 方法之大块数据
>
> 与 Eloquent 不完全相关,它更多的关于 Collection (集合),但是对于处理[大数据](https://zhida.zhihu.com/search?content_id=6513583&content_type=Article&match_order=1&q=大数据&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODA5MjQ0NjksInEiOiLlpKfmlbDmja4iLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo2NTEzNTgzLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.ixrXChsLDgXyfdYG1VylI_ISxXC81lzMkzosLjJZ6AI&zhida_source=entity)集合,仍然是很有用的。你可以使用 chunk() 将这些[数据分割](https://zhida.zhihu.com/search?content_id=6513583&content_type=Article&match_order=1&q=数据分割&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODA5MjQ0NjksInEiOiLmlbDmja7liIblibIiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo2NTEzNTgzLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.MmxkYPqYpV1DGXVDG8s1dYrskmrVHswOK5j262bI6Wk&zhida_source=entity)成小数据块
>
> 修改前:
>
> ```text
> $users = User::all();
> foreach ($users as $user) {
>     // ...
> ```
>
> 你可以这样做:
>
> ```text
> User::chunk(100, function ($users) {
>     foreach ($users as $user) {
>         // ...
>     }
> });
> ```
>
> ------
>
> ## 16. 创建模型时创建额外的东西
>
> 我们都知道Artisan命令：
>
> ```text
> php artisan make:model Company
> ```
>
> 但是，你知道有三个有用的标记可以为模型生成相关文件吗？
>
> ```text
> php artisan make:model Company -mcr
> ```
>
> 
>
> - -m 将创建一个迁移文件
> - -c 将创建一个控制器
> - -r 表示控制器应该是一个资源控制器
>
> ------
>
> ## 17. 调用 save 方法的时候指定 updated_at
>
> 你知道 `->save()` 方法可以接受参数吗? 我们可以通过传入参数阻止它的默认行为：更新 `updated_at` 的值为当前[时间戳](https://zhida.zhihu.com/search?content_id=6513583&content_type=Article&match_order=1&q=时间戳&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODA5MjQ0NjksInEiOiLml7bpl7TmiLMiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo2NTEzNTgzLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.jzzl5SEgBAc705ix03bM2H6lWRDmzJ7hfu0NK9Cw7xc&zhida_source=entity)。
>
> ```text
> $product = Product::find($id);
> $product->updated_at = '2019-01-01 10:00:00';
> $product->save(['timestamps' => false]);
> ```
>
> 这样，我们成功在 `save` 时指定了 `updated_at` 的值。
>
> ------
>
> ## 18. update() 的结果是什么？
>
> 你是否想知道这段代码实际上返回什么？
>
> ```text
> $result = $products->whereNull('category_id')->update(['category_id' => 2]);
> ```
>
> 我是说，更新操作是在数据库中执行的，但 `$result` 会包含什么？
>
> 答案是受影响的行。 因此如果你想检查多少行受影响， 你不需要额外调用其他任何内容 -- `update()` 方法会给你返回此数字。
>
> ------
>
> ## 19. 把括号转换成 Eloquent 查询
>
> 如果你有个 `and` 和 `or` 混合的 SQL 查询，像这样子的：
>
> ```text
> ... WHERE (gender = 'Male' and age >= 18) or (gender = 'Female' and age >= 65)
> ```
>
> 怎么用 Eloquent 来翻译它呢？ 下面是一种错误的方式：
>
> ```text
> $q->where('gender', 'Male');
> $q->orWhere('age', '>=', 18);
> $q->where('gender', 'Female');
> $q->orWhere('age', '>=', 65);
> ```
>
> 顺序就没对。正确的打开方式稍微复杂点，使用闭包作为[子查询](https://zhida.zhihu.com/search?content_id=6513583&content_type=Article&match_order=1&q=子查询&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODA5MjQ0NjksInEiOiLlrZDmn6Xor6IiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo2NTEzNTgzLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.c1ArvAWD7qfkKqGrm9Q7INy40-sr0CvhTLHN5G0p62Q&zhida_source=entity)：
>
> ```text
> $q->where(function ($query) {
>     $query->where('gender', 'Male')
>         ->where('age', '>=', 18);
> })->orWhere(function($query) {
>     $query->where('gender', 'Female')
>         ->where('age', '>=', 65);
> })
> ```
>
> ------
>
> ## 20. 复数参数的 orWhere
>
> 终于，你可以传递[阵列](https://zhida.zhihu.com/search?content_id=6513583&content_type=Article&match_order=1&q=阵列&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3ODA5MjQ0NjksInEiOiLpmLXliJciLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo2NTEzNTgzLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.xtcKUHjzUltupg74lZw-goWTaCciziDZFQGbUsV6gYw&zhida_source=entity)参数给 `orWhere()`。平常的方式：
>
> ```text
> $q->where('a', 1);
> $q->orWhere('b', 2);
> $q->orWhere('c', 3);
> ```
>
> 你可以这样做：
>
> ```text
> $q->where('a', 1);
> $q->orWhere(['b' => 2, 'c' => 3]);
> ```

