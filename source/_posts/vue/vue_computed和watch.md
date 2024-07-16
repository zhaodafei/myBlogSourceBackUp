---
title: -computed 和 -watch
date: 2020-07-04
categories: 
- Vue
tags:
- Vue
---
`computed` 和 `watch` 计算属性和监听属性
`computed` 和 `watch` 计算属性和监听属性
`computed` 和 `watch` 计算属性和监听属性

<!-- more -->

> computed:
>
> 1. 它支持***缓存***，只有依赖的数据发生了变化，才会重新计算
> 2. computed的值会默认走**缓存**，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data声明过，或者父组件传递过来的props中的数据进行计算的。
> 3. ***不支持异步***，当Computed中有异步操作时，无法监听数据的变化
> 4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他的属性，一般会使用computed
> 5. 如果computed属性的属性值是函数，那么默认使用get方法，函数的返回值就是属性的属性值；在computed中，属性有一个get方法和一个set方法，当数据发生变化时，会调用set方法。

>watch:
>
>1. 支持***异步监听***
>
>2. 它不支持缓存，数据变化时，它就会触发相应的操作
>
>3. 监听的函数接收***两个参数***，第一个参数是最新的值，第二个是变化之前的值
>
>4. 当一个属性发生变化时，就需要执行相应的操作
>
>5. 监听数据必须是data中声明的或者父组件传递过来的props中的数据，当发生变化时，会触发其他操作，函数有两个的参数：
>
>6. 
>
>7. - immediate：组件加载立即触发回调函数
>   - deep：***深度监听***，发现数据内部的变化，在复杂数据类型中使用，例如数组中的对象发生变化。需要注意的是，deep无法监听到数组和对象内部的变化

### demo:

```html
<div id="app">
    <span>app.price=6    app.price=12   app.price=50</span>
    <div>{{computedPrice}} {{price}}  {{vipPrice}}</div>
</div>

<script src="vue.js"></script>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                price: 5,
                price2: 5,
                vipPrice: 0,
            }
        },
        computed:{
            // computedPrice: function () {
            //     console.log("仅读取,不做修改");
            // }
            computedPrice:{
                // 不能使用异步操作
                // setTimeout(() => {
                //     return this.price * 0.8;
                // }, 2000);
                //
                // return "fei";
                get: function () {
                    console.log("get方法");
                    return this.price + 1
                },
                set: function (v) {
                    console.log("set方法");
                    this.price = v - 1
                }
            }
        },
        watch: { // 默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
            price(current, pre) { // 最新值, 之前值
                // 异步操作/
                setTimeout(()=>{
                    this.vipPrice = current * 0.5;
                },2000)
            },
            price2: {
              handler(newValue, oldValue) {
          		//.........
              },
              deep: true, // 深度监听
              immediate: true // 第一次要执行
            }
        }
    });
</script>
```



























