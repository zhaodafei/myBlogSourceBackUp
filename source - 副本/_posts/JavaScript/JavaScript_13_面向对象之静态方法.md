---
title: -- JavaScript -面向对象之静态方法
categories: 
- JavaScript
tags:
- JavaScript
---
JS 面向对象中的静态方法
1: 构造函数通过 new 来制造对象
2: 函数本身也是对象

比如一台豆浆机,转动 (new 调用)时,能返回一杯豆浆(制造出的对象)
但反观豆浆机本身,也是台机器,也是个对象
豆浆机身上也有属性---如开关,进水口等




```javascript
/**
 *  JS 面向对象中的静态方法
 *  1: 构造函数通过 new 来制造对象
 *  2: 函数本身也是对象
 *
 *  比如一台豆浆机,转动 (new 调用)时,能返回一杯豆浆(制造出的对象)
 *  但反观豆浆机本身,也是台机器,也是个对象
 *  豆浆机身上也有属性---如开关,进水口等
 */
// var Hashiqi = function () {
//     this.bark=function () {
//         console.log('www');
//     }
// }
//上面这个 等效 下面这个
function Hashiqi(){
    this.bark= function () {
        console.log('www');
    }
}

Hashiqi.ajax = function () {
    console.log('ajax');
};

// var h = new Hashiqi(); //h方法有没有ajax方法?? 答:没有,豆浆机上的开关会跑到豆浆里面吗?
// console.log(h);
console.log(Hashiqi.ajax);
/**
 *  即:
 *  1: ajax() 方法是属于"函数"本省的,和返回的对象没有关系
 *  2: bark要调用,必须 new Hashiqi()得到对象,切由返回对象才能调用,
 *  3: ajax()方法要调用,不需要 new 对象,直接用 Hashiqi 来调用.
 */
// h.bark();
Hashiqi.ajax();

/**
 * 我们之前有没有接触过静态方法?
 * 答: 有
 *
 * 1: Math.random(); 静态方法
 * 2:$.ajax();  静态方法
 * 3:写 jQuery 插件,2种办法
 *      3.1: 通过闭包,把方法写到 jQuery 上的原型上( 稍复杂)
 *      3.3; 直接增加 $ 对象的静态方法
 */
```

### demo

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.js"> </script>
<script type="text/javascript">
    //---------------- demo ------------
    //通过静态方法给 jQuery 增加唱歌插件
    $.sing = function () {
        alert('人生最大的悲剧莫过于失去自由 人生最大的痛苦莫过于失去亲人和朋友');
    };
    $.sing();
</script>
```

