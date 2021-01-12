---
title: -JavaScript   防抖和节流
categories: 
- JavaScript
tags:
- JavaScript
---
`JavaScript`   防抖和节流
`JavaScript`   防抖和节流
`JavaScript`   防抖和节流

防抖:

所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间

节流:

所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数

### 防抖

```html
<input type="text" id="fei_input">

<script>
    const feiInput = document.getElementById('fei_input');
    let timer = null;
    feiInput.addEventListener('keyup', function () {
        if (timer) {
            clearTimeout(timer); // ---------------- 清除定时器
        }
        timer = setTimeout(() => {
            console.log(feiInput.value);
            timer = null;
        }, 500);
    });
</script>
```

简单封装一下

```html
<input type="text" id="fei_input">

<script>
    function debounce(fn, delay) {
        let timer = null;

        return function () {
            if (timer) {
                clearTimeout(timer); // ---------------- 清除定时器
            }
            timer = setTimeout(() => {
                fn.apply(this, arguments); // ***********
                timer = null;
            }, delay);
        };
    }

    const feiInput = document.getElementById('fei_input');
    feiInput.addEventListener('keyup',
        debounce(() => {
            console.log(feiInput.value);
        }, 500)
    );
</script>
```

### 节流

```html
<div id="fei_div" draggable="true" style="width: 50px;height: 50px;border: 2px solid #ff6b81"></div>

<script>
    const feiDiv = document.getElementById('fei_div');
    let timer = null;
    feiDiv.addEventListener('drag', function (e) {
        if (timer) {
            return;  // ---------------- 阻止运行
        }
        timer = setTimeout(() => {
            console.log(e.offsetX, e.offsetY);
            timer = null;
        }, 2000);
    });
 </script>
```

简单封装一下

```html
<div id="fei_div" draggable="true" style="width: 50px;height: 50px;border: 2px solid #ff6b81"></div>

<script>
   function throttle(fn, delay = 100) {
       let timer = null;
       return function () {
           if (timer) {
               return; // ---------------- 阻止运行
           }
           timer = setTimeout(() => {
               fn.apply(this, arguments); // ***********
               timer = null;
           }, delay);
       };
   }
   const feiDiv = document.getElementById('fei_div');
   feiDiv.addEventListener('drag',
       throttle(function (e) {
           console.log(e.offsetX, e.offsetY);
       }, 2000)
   );
</script>
```

































