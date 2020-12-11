---
title: -单例模式
---

### 单例模式( 三私一公 )

1. 私有的构造方法( 防止类被多次实例化 )
2. 私有的克隆方法( 防止类被多次克隆 )
3. 私有的静态属性( 保存类的实例 )
4. 公有的静态方法( 访问这个类 )

```php
// 单例模式 singleton

class singleton
{
    private static $ins = null;

    public static function getIns()
    {
        if (self::$ins == null) {
            self::$ins = new self();
        }
        return self::$ins;
    }

    // 封锁多次 new
    private function __construct()
    {
    }

    // 封锁克隆 clone
    private function __clone()
    {
    }
}

$s1 = singleton::getIns();
$s2 = singleton::getIns();
if ($s1 === $s2) {  //是一个对象
    echo "是一个对象";
} else {
    echo "不是一个对象";
}
```

