---
title: 美化表单form
date: 2015-03-04
categories: 
- form
tags:
- form
---
美化表单`form`
美化表单`form` 
美化表单`form`

<!-- more -->

### 输入框 `input`

```html
<style type="text/css">
  .input-wrapper{
    width: 20%;
    border: 2px solid #ff6b81;
  }
  input{
    outline: none;
    color: #90ee90;
    border: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: transparent;
  }
</style>
<div>
  <div class="input-wrapper">
    <input type="text" value="daFei" />
  </div>
</div>
```

### 输入框 `input`

```html
<style type="text/css">
  .input-wrapper{
    width: 20%;
  }
  input{
    outline: none;
    box-shadow: none;
    display: inline-block;
    border: 2px solid #ff6b81;
    background-color: transparent;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    color: #90ee90;
  }
</style>
<div>
  <div class="input-wrapper">
    <input type="text" value="daFei_foo" />
  </div>
</div>

```





















