---
title: Yii2 ArrayHelp类
---

### ArrayHelper::toArray

```php
$post = User::find()->limit(2)->all();
//$post = User::find()->limit(2)->asArray()->all();
// echo "<pre>"; print_r($post);exit();  //输出所有字段 id,username,email......
$data = ArrayHelper::toArray($post,[
    'common\models\User'=>[
        'id',
        'username'
    ]
]);
echo "<pre>"; print_r($data); //输出 id username
```

![ArrayHelper::toArray](/img/Yii2/ArrayHelp/toArray.png "ArrayHelper::toArray")

### ArrayHelper::merge

```php
$array1 = [
    'name' => 'Yii',
    'version' => '1.1',
    'ids' => [
        1,
    ],
    'validDomains' => [
        'example.com',
        'www.example.com',
    ],
    'emails' => [
        'admin' => 'admin@example.com',
        'dev' => 'dev@example.com',
    ],
];

$array2 = [
    'version' => '2.0',
    'ids' => [
        2,
    ],
    // Object that represents the replacement of
    // array value while performing [[ArrayHelper::merge()]].
    'validDomains' => new \yii\helpers\ReplaceArrayValue([
        'yiiframework.com',
        'www.yiiframework.com',
    ]),
    // Object that represents the removal of
    // array value while performing [[ArrayHelper::merge()]].
    'emails' => [
        'dev' => new \yii\helpers\UnsetArrayValue(),
    ],
];

$result = ArrayHelper::merge($array1, $array2);

输出:
[
    'name' => 'Yii',
    'version' => '2.0',
    'ids' => [   //这里合并
        1,
        2,
    ],
    'validDomains' => [ //这里替换
        'yiiframework.com',
        'www.yiiframework.com',
    ],
    'emails' => [ //这里删除
        'admin' => 'admin@example.com',
    ],
]
```

###  ArrayHelper::getValue
用原生PHP从一个对象、数组、或者包含这两者的一个复杂数据结构中获取数据是非常繁琐的。 你首先得使用 `isset` 检查 key 是否存在, 然后如果存在你就获取它，如果不存在， 则提供一个默认返回值;;;;;;
Yii 提供了一个非常方便的方法来做这件事：ArrayHelper::getValue

```php
class User
{
    public $name;
    public $name_002="我是name_002";
}

$array = [
    'foo' => [
        'bar' => new User(),
        'bar_002' => new User(),
    ]
];

$value = isset($array['foo']['bar']->name) ? $array['foo']['bar']->name : null;
$value002 = isset($array['foo']['bar']->name_002) ? $array['foo']['bar']->name_002 : null;

var_dump($value);  //输出 null
var_dump($value002); //输出 我是name_002

var_dump(ArrayHelper::getValue($array,'foo.bar.name')); //输出 null
var_dump(ArrayHelper::getValue($array,'foo.bar.name_002')); //输出 我是name_002

var_dump(ArrayHelper::getValue($array, function ($array,$defaultValue) {  //输出 我是name_002
    return $array['foo']['bar']->name_002;
}));
var_dump(ArrayHelper::getValue($array, 'foo.bar.name_002'));  //输出 我是name_002
var_dump(ArrayHelper::getValue($array, ['foo','bar','name_002']));  //输出 我是name_002
```

![ArrayHelper::getValue](/img/Yii2/ArrayHelp/getValue.png "ArrayHelper::getValue")

### ArrayHelper::setValue

覆盖初始值,如果数组中不存在则被创建

```php
$array = [
    'key' => [
        'in' => ['k' => 'value']
    ]
];
ArrayHelper::setValue($array, 'key.in', ['arr' => 'val']);
// 在 `$array` 中写入值的路径可以被指定为一个数组
ArrayHelper::setValue($array, ['key', 'in'], ['arr' => 'val']);
```

####  输出

```php
[
    'key' => [
        'in' => ['arr' => 'val']
    ]
]
```

#### 如果路径中包含一个不存在的键,他将被创建

```php
// 如果 `$array['key']['in']['arr0']` 不为空，则该值将被添加到数组中
ArrayHelper::setValue($array, 'key.in.arr0.arr1', 'val');

// 如果你想完全覆盖值 `$array['key']['in']['arr0']`
ArrayHelper::setValue($array, 'key.in.arr0', ['arr1' => 'val']);
```

#### 输出

```php
[
    'key' => [
        'in' => [
            'k' => 'value',
            'arr0' => ['arr1' => 'val']
        ]
    ]
]
```

### ArrayHelper::remove

```php
$array = ['type' => 'A', 'options' => [1, 2]];
$type = ArrayHelper::remove($array, 'type');

print_r($type);   //输出 A 
print_r($array);  //输出 ['options' => [1, 2]]
//note: 与 getValue 方法不同,remove 仅支持简单的键名称,否则返回原来数组
//demo: 
$array = [
    'key' => [
        'in' => ['k' => 'value']
    ]
];
ArrayHelper::remove($array, 'key.in');
print_r($array);  //返回原来数组
```

### ArrayHelper::removeValue

```php
$array = [
    'Bob' => 'Dylan',
    'Michael' => 'Jackson',
    'Mick' => 'Jagger',
    'Janet' => 'Jackson'
];
ArrayHelper::removeValue($array, 'Jackson');
print_r($array);  //返回  ['Bob' => 'Dylan', 'Mick' => 'Jagger']
```

###  ArrayHelper::index

```php
$array = [
    ['id' => '123', 'data' => 'abc', 'device' => 'laptop'],
    ['id' => '345', 'data' => 'def', 'device' => 'tablet'],
    ['id' => '345', 'data' => 'hgi', 'device' => 'smartphone'],
];
$result = ArrayHelper::index($array, 'id');
$result2 = ArrayHelper::index($array, function ($element) {
    return $element['id']; //匿名函数作为key传递,返回值结果相同
});
print_r($result); 
print_r($result2); 
//输出
[
    '123' => ['id' => '123', 'data' => 'abc', 'device' => 'laptop'],
    '345' => ['id' => '345', 'data' => 'hgi', 'device' => 'smartphone']
    // 原始数组的第二个元素由于相同的 ID 而被最后一个元素覆盖
]
```

```php
//*******避免第一种的覆盖*****
$result = ArrayHelper::index($array, null, 'id'); //第一级id
$result = ArrayHelper::index($array, 'device','id'); //第一级id,第二级 device
//结果分别是
[
    '123' => [
        ['id' => '123', 'data' => 'abc', 'device' => 'laptop']
    ],
    '345' => [ // all elements with this index are present in the result array
        ['id' => '345', 'data' => 'def', 'device' => 'tablet'],
        ['id' => '345', 'data' => 'hgi', 'device' => 'smartphone'],
    ]
]

--------------------------------------------------------------------------------------
    [
    '123' => [
        'laptop' => [
            'abc' => ['id' => '123', 'data' => 'abc', 'device' => 'laptop']
        ]
    ],
    '345' => [
        'tablet' => [
            'def' => ['id' => '345', 'data' => 'def', 'device' => 'tablet']
        ],
        'smartphone' => [
            'hgi' => ['id' => '345', 'data' => 'hgi', 'device' => 'smartphone']
        ]
    ]
]
note: 第三个参数会增加数组的子分组多维数组
$result = ArrayHelper::index($array, 'device',['id','device']); //输出
[
    '123' => [
        'laptop'=>[
            'laptop' => [
                'abc' => ['id' => '123', 'data' => 'abc', 'device' => 'laptop']
            ]
        ]

    ],
    '345' => [
        'tablet'=>[
            'tablet' => [
                'def' => ['id' => '345', 'data' => 'def', 'device' => 'tablet']
            ],
        ],
        'smartphone'=>[
            'smartphone' => [
                'hgi' => ['id' => '345', 'data' => 'hgi', 'device' => 'smartphone']
            ]
        ]
    ]
];
```

### ArrayHelper::getColumn

```php
$data = [
    ['id' => '123', 'data' => 'abc'],
    ['id' => '345', 'data' => 'def'],
];
$ids = ArrayHelper::getColumn($array, 'id');  //输出 ['123', '345']
//如需要额外的转换或者取值的方法比较复杂,第二个参数可以指定一个匿名函数
```

### ArrayHelper::map 

```php
$array = [
    ['id' => '123', 'name' => 'aaa', 'class' => 'x'],
    ['id' => '124', 'name' => 'bbb', 'class' => 'x'],
    ['id' => '345', 'name' => 'ccc', 'class' => 'y'],
];
$result1 = ArrayHelper::map($array, 'id', 'name');
$result2 = ArrayHelper::map($array, 'id', 'name', 'class');
//结果分别是
[
    '123' => 'aaa',
    '124' => 'bbb',
    '345' => 'ccc',
]
------- map($array, 'id', 'name', 'class')这里面的键逆向--------------
[
    'x' => [
        '123' => 'aaa',
        '124' => 'bbb',
    ],
    'y' => [
        '345' => 'ccc',
    ],
]    
```
### ArrayHelper::keyExists  只能是一维数组

```php
$data1 = [
    'userName' => 'Alex',
];

$data2 = [
    'username' => 'Carsten',
];

var_dump(ArrayHelper::keyExists('username',$data1,true));//输出 false
var_dump(ArrayHelper::keyExists('username',$data2,false));//输出 true
```

### ArrayHelper::multisort  多维数组排序

```php
$data = [
    ['age' => 30, 'name' => 'Alexander'],
    ['age' => 30, 'name' => 'Brian'],
    ['age' => 19, 'name' => 'Barney'],
];

ArrayHelper::multisort($data,['age','name'],[SORT_ASC,SORT_DESC]);
//输出, age 排序, name 排序
[
    ['age' => 19, 'name' => 'Barney'],
    ['age' => 30, 'name' => 'Brian'],
    ['age' => 30, 'name' => 'Alexander'],
];
```

### ArrayHelper::isIndexed  ArrayHelper::isAssociative 检测数组是索引数组还是联合数组

```php
// 不指定键名的数组
$indexed = ['Qiang', 'Paul'];
echo ArrayHelper::isIndexed($indexed);  //true

// 所有键名都是字符串
$associative = ['framework' => 'Yii', 'version' => '2.0'];
echo ArrayHelper::isAssociative($associative); //true
```

### ArrayHelper::isIn   ArrayHelper::isSubset  测试阵列

```php
// true
ArrayHelper::isIn('a', ['a']);
// true
ArrayHelper::isIn('a', new \ArrayObject(['a']));
// true
ArrayHelper::isSubset(new \ArrayObject(['a','c']),new \ArrayObject(['a','b','c']));
```

### ArrayHelper::filter  过滤

```php
$array = [
    'A' => [1, 2],
    'B' => [
        'C' => 1,
        'D' => 2,
    ],
    'E' => 1,
];

$result1 = ArrayHelper::filter($array,['A']);
$result2 = ArrayHelper::filter($array,['A','B.C']);
$result3 = ArrayHelper::filter($array,['B','!B.C']);
//输出
['A' => [1, 2]];
//输出
[
    'A' => [1, 2], 
    'B' => ['C' => 1]
]
//输出
[
    'B' => ['D' => 2],
]
```



 [官网 zh-cn](https://www.yiiframework.com/doc/guide/2.0/zh-cn/helper-array "官网 zh-cn")

[官网 en]: https://www.yiiframework.com/doc/guide/2.0/en/helper-array	"官网 en"

