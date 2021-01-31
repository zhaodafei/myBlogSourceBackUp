---
title: vue_webstorm _模板
categories: 
- web前端
- Vue
tags:
- Vue
- webstorm
---
### `webstrom` 和 `vue`

webstorm 设置 vue 模板快捷方式

```html
<div id="app">
    {{ message }}
</div>

<script src="vue.js"></script>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                message: 'Hello Vue!'
            }
        }
    });
</script>
```

![webstrom vue tab](/img/vue/vue_tab.png "webstrom vue tab")

































