---
title: laravel 添加一个V1 接口模块 -api
---
###  app/Providers/RouteServiceProvider.php  中添加

```php
public function map()
{
    $this->mapApiRoutes();

    $this->mapWebRoutes();

    $this->mapTestRoutes(); //新增接口模块
}


//--------------------------------------
protected function mapApiRoutes()   //API 接口模块
{
    Route::prefix('api')   //访问地址前缀
        ->middleware('api')   //中间件
        ->namespace($this->namespace.'\\Api')  //接口模块目录,命名空间
        ->group(base_path('routes/api.php'));  //接口路由
}

public function mapTestRoutes()  //V1接口模块
{
    Route::prefix('test')
        //->middleware('fei')  //自定义中间件
        ->namespace($this->namespace.'\\V1')
        ->group(base_path('routes/test.php'));
}
```

### routes/test.php   路由

```php
Route::get('foo', 'FooController@index');
```

### app/Http/Controllers/V1/FooController.php  模块

```php
<?php
namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;

class FooController extends Controller
{
    // 访问地址 http://demo.laravel.com/test/foo
    public function index()
    {
        echo "FooController  foo";
    }
}
```

### app/Http/Middleware/fei.php 自定义中间件   app/Http/Kernel.php  加载中间件

```php
<?php
//---------- app/Http/Middleware/fei.php  --------
namespace App\Http\Middleware;
use Closure;
class fei
{
    public function handle($request, Closure $next)
    {   exit('使用自定义文件中间件');
        return $next($request);
    }
}


//----------------  app/Http/Kernel.php -----
protected $middlewareGroups = [
    'web' => [
        \App\Http\Middleware\EncryptCookies::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        // \Illuminate\Session\Middleware\AuthenticateSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \App\Http\Middleware\VerifyCsrfToken::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
    'api' => [
        'throttle:60,1',
        'bindings',
    ],
    'fei'=>[
        fei::class
    ]
];
```

![v1 api](/img/laravel/v1_api.png "v1 api")































