---
title: -Yii2 验证器
---
### required : 必须值验证属性

```php
[['字段名'],required,'requiredValue'=>'必填值','message'=>'提示信息'];
#说明:CRequiredValidator 的别名, 确保了特性不为空.
```

### 指定场景

```php
[['title', 'content'], 'required', 'on' => ['create', 'update']],
```

### email : 邮箱验证

```php
['email', 'email'];
#说明:CEmailValidator的别名,确保了特性的值是一个有效的电邮地址. 
```

### match : 正则验证

```php
[['字段名'],match,'pattern'=>'正则表达式','message'=>'提示信息'];    
[['字段名'],'match','pattern'=>'/^[1-9]d*|0$/','message'=>'必须为正整数'];
[['字段名'],match,'not'=>ture,'pattern'=>'正则表达式','message'=>'提示信息'];
/*正则取反*/ #说明:CRegularExpressionValidator 的别名, 确保了特性匹配一个正则表达式. 
```

### safe : 安全

```php
['description', 'safe'];
```

### compare : 比较

```php
['age', 'compare', 'compareValue' => 30, 'operator' => '>='];
#说明:compareValue(比较常量值) - operator(比较操作符)  
#说明:CCompareValidator 的别名,确保了特性的值等于另一个特性或常量. 
```

### default : 默认值

```php
['age', 'default', 'value' => null];
#说明:CDefaultValueValidator 的别名, 为特性指派了一个默认值. 
```

### file : 文件

```php
['primaryImage', 'file', 'extensions' => ['png', 'jpg', 'gif'], 'maxSize' => 1024*1024*1024]; 
#说明:CFileValidator 的别名, 确保了特性包含了一个上传文件的名称. 
```

### filter : 滤镜

```php
[['username', 'email'], 'filter', 'filter' => 'trim', 'skipOnArray' => true]; 
#说明:CFilterValidator 的别名, 使用一个filter转换属性. 
```

### in : 范围

```php
['level', 'in', 'range' => [1, 2, 3]]; 
#说明:CRangeValidator 的别名,确保了特性出现在一个预订的值列表里. 
```

### unique : 唯一性

```php
['username', 'unique'] 
#说明:CUniqueValidator 的别名,确保了特性在数据表字段中是唯一的.
```

### integer : 整数

```php
['age', 'integer'];
```

### number : 数字

```php
['salary', 'number'];
```

### double : 双精度浮点型

```php
['salary', 'double'];
```

### date : 日期

```php
[['from', 'to'], 'date'];
```

### string : 字符串

```php
['username', 'string', 'length' => [4, 24]];
```

### boolean : 是否为一个布尔值

```php
['字段名', 'boolean', 'trueValue' => true, 'falseValue' => false, 'strict' => true]; 
#说明:CBooleanValidator 的别名 
```

### when条件：

```php
['name2', 'required', 'when' => function ($model) {    return empty($model->name1);}],#说明: 
```

### 行内验证器--

```php
 // password is validated by foo()
 ['password', 'foo']
 
 public function foo(){
 	$this->addError('password', '调用这个方法了.');
 }

----------------
['password', 'validatePassword'],

public function validatePassword()
{
    $user = User::findByUsername($this->username);

    if (!$user || !$user->validatePassword($this->password)) {
        $this->addError('password', 'Incorrect username or password.');
    }
}
```



 [核心验证器 en](https://www.yiiframework.com/doc/guide/2.0/en/input-validation "核心验证旗 en")

 [核心验证器 zh-cn](https://www.yiiframework.com/doc/guide/2.0/zh-cn/tutorial-core-validators "核心验证旗 zh-cn")

 [输入验证](https://www.yiiframework.com/doc/guide/2.0/zh-cn/input-validation "输入验证")