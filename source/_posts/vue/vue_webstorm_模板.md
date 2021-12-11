---
title: vue_webstorm _模板
date: 2020-07-04
categories: 
- WEB
- Vue
tags:
- Vue
- WebStorm
---
### `webstrom` 和 `vue`

<!-- more -->

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

































