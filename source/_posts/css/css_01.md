---
title: 选择器 -css
---
### 伪类选择器 `nth-child`

```css
ul>li:nth-child(2) { /* 第二行 */
    background-color: yellowgreen;
}
ul>li:nth-child(even) {  /* 偶数 */
    background-color: yellowgreen;
}
ul>li:nth-child(odd) { /* 奇数 */
    background-color: yellowgreen;
}
ul>li:nth-child(2n+1) { /* 奇数 */
    background-color: yellowgreen;
}

<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
```

### 选择器 `:not`

```css
h2:not([data-fei]){  /* 不含data-fei 属性 */
    color: yellowgreen;
}

<h2 data-fei="da">1111111</h2>
<h2>2222222222</h2>
<h2>333333333333</h2>
```































