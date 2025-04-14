---
title: JavaScript_常见使用_04
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---

 JavaScript常用使用_0
 JavaScript常用使用_404
 JavaScript常用使用_04

<!-- more -->

### 超链接

`a`标签调用`js`方法

```html
<a href="javascript:fei('https://github.com')"></a>
<script>
    function fei(params) {
        console.log(params);
    }
</script>
```

### `map`数组中值类型转换

`JS` 数组中`String`类型转为`Number`

```javascript
// 字符数组转数字数组
let strArr = ["1", "2", "3"];
let numArr = strArr.map(Number)
console.log(numArr)
```

`JS` 数组中`Number`类型转为`String`

```javascript
// number数组转为string数组
let numArr1 = [1, 2, 3]
let strArr1 = numArr1.map(String)

console.log(strArr1)
```

### 网页中右键和选取功能

```javascript
document.oncontextmenu = new Function('event.returnValue=false;')
document.onselectstart = new Function('event.returnValue=false;')
```

```html
<div @contextmenu.prevent="event => (event.returnValue = false)">
    这个是Vue最外层
</div>
```

### 复制网页链接

```js
const onSelect = () => {
  // let url = 'https://www.baidu.com'
  let url = window.location.href
  let oInput = document.createElement('input')
  oInput.value = url
  document.body.appendChild(oInput)
  oInput.select() // 选择对象;
  console.log(oInput.value)
  document.execCommand('Copy') // 执行浏览器复制命令
  oInput.remove()
}
```

### 复制文本内容

```js
  // 复制文本(在有些情况下可能会失效)
  const copyText = text => {
    try {
      var copyDom = document.createElement('div')
      copyDom.innerText = text
      copyDom.style.position = 'absolute'
      copyDom.style.top = '0px'
      copyDom.style.right = '-9999px'
      document.body.appendChild(copyDom)
      //创建选中范围
      var range = document.createRange()
      range.selectNode(copyDom)
      //移除剪切板中内容
      window.getSelection().removeAllRanges()
      //添加新的内容到剪切板
      window.getSelection().addRange(range)
      //复制
      var successful = document.execCommand('copy')
      copyDom.parentNode.removeChild(copyDom)
      alert('复制成功')
    } catch (err) {
      alert('复制失败')
    }
  }
```

```html
<h1 id="content">被复制的内容</h1>
<button id="button">点击复制</button>

<script>
  (function(){
    button.addEventListener('click', function(){
      var copyDom = document.querySelector('#content');
      //创建选中范围
      var range = document.createRange();
      range.selectNode(copyDom);
      //移除剪切板中内容
      window.getSelection().removeAllRanges();
      //添加新的内容到剪切板
      window.getSelection().addRange(range);
      //复制
      var successful = document.execCommand('copy');

      try{
        var msg = successful ? "successful" : "failed";
        alert('Copy command was : ' + msg);
      } catch(err){
        alert('Oops , unable to copy!');
      }
    })
  })()
</script>

```

### 复制文本内容2

```js
//创建输入框元素
let input = document.createElement('input')
//给输入框赋 需要复制的 值
input.value = "123456789"
//页面底部追加输入框
document.body.appendChild(input)
//选中输入框
input.select()
//制定浏览器复制命令
document.execCommand('Copy')
//复制后移除输入框
input.remove()


//=========== 另一种写法同一种思路
//创建输入框元素
const input = document.createElement('input')
input.setAttribute('readonly', 'readonly')
input.setAttribute('value', '123456789') //给输入框赋 需要复制的 值
document.body.appendChild(input)
input.setSelectionRange(0, 9999)
input.select()
document.execCommand('copy')
document.body.removeChild(input)
```

### 下载文件

```html
<div>
    <img id="img" src="./logo.png" alt="">
    <div><a href="./logo.png" download="fei_01.png">download_01</a></div>
    <div><button onclick="foo()">download_02</button></div>
</div>

<script>
    function foo() {
        const a = document.createElement('a')
        a.download = 'fei_02.png'; // 下载名字
        a.href = './logo.png' // 图片地址(tip:不要带https http)
        a.click();
        a.remove()
    }
</script>
```

```js
  
const downloadTemplate = () => {
    const link = document.createElement('a')
    link.href = '/files/文件名称.xlsx'
    link.download = '文件名称.xlsx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
```



### 地址参数

#### 获取地址中某个参数值

```javascript
/***
 * 获取地址中某个参数值
 * @param variable 参数名字
 * @returns {string} 参数值
 */
function GetQueryVariable(variable) {
    // ?foo=123&bar=456
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === variable) {
            return String(pair[1]);
        }
    }
    return "";
}
```

#### 获取地址栏参数转为json格式

```javascript
/**
 * 获取地址栏参数转为json格式
 * @param url    demo:    www.demo.com/index.html?foo=123&bar=789
 * @returns {{}} demo:    {"foo": "123", "bar": "789"}
 * @constructor
 */
function GetQueryVariable_to_json(url) {
    let obj = {};
    let keyValue = [];
    let key = "", value = "";
    let paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    for (let i in paraString) {
        keyValue = paraString[i].split("=");
        key = keyValue[0];
        value = keyValue[1];
        obj[key] = value;
    }
    return obj;
}
```

#### 把json转为get请求参数

```js
/**
 * 把json转为get请求参数
 * @param requestParams demo: {id: 111, name: '大飞', age: 18}
 * @returns {string}    demo: id=111&name=大飞&age=18
 */
const convertToUrl = requestParams => {
  let params = [];
  Object.entries(requestParams).forEach(([key, value]) => {
    let param = key + '=' + value;
    params.push(param);
  });
  return params.join('&');
}

let params = {id: 111, name: '大飞', age: 18}
let urlParams = convertToUrl(params)

console.log(urlParams); // 输出; id=111&name=大飞&age=18
```

#### 替换字符中所有花括号

```js
  /**
   * 替换地址URL中特殊参数{{}}
   * @param template demo1: www.demo.com/#/myOrder/{{bar}}/{{openId}}
   * @param template demo2: www.demo.com?token={{token}}&openId={{openId}}
   * @param data  demo: {"foo": "123", "bar": "789"}
   * @returns  返回替换后的字符串
   */
  const parseUrl = (template, data) => {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      return data[key] !== undefined ? data[key] : `{{${key}}}` // 替换占位符为对象值，未匹配则保留原样
    })
  }

  const urlTemp = 'www.demo.com/#/myOrder/{{bar}}/{{openId}}'
  const param = {
    bar:'val_111',
    openId:'val_222',
  }
  // 输出: http://www.demo.com/#/myOrder/val_111/val_222
  const newUrl = parseUrl(urlTemp,param)
  console.log(newUrl);

  const urlTemp2 = 'www.demo.com?token={{token}}&openId={{openId}}'
  const param2 = {
    token:'val_111',
    openId:'val_222',
  }
  // 输出: http://www.demo.com?token=val_111&openId=val_222
  const newUrl2 = parseUrl(urlTemp2,param2)
  console.log(newUrl2);
```



### 获取当前文件目录位置

```javascript
/**
 * 在windows系统中获取当前文件目录位置
 * @param newFilename 新文件名字
 * @returns {string|string} 目录 或者 目录+文件地址
 */
function getWinDir(newFilename) {
  const pathName = window.document.location.pathname;
  let arr = pathName.split('/')
  let filename = arr[arr.length - 1]
  let pos = pathName.indexOf(filename)
  let dirName = pathName.substring(0, pos).substring(1)
  return newFilename ? dirName + newFilename : dirName;
}
```





### 秒转为小时分钟秒

```javascript
  /**
   * 秒转为小时
   * @param value  秒
   * @returns {string}
   */
  const timeFormat = value => {
    let theTime = parseInt(value) // 需要转换的时间秒
    let theTime1 = 0 // 分
    let theTime2 = 0 // 小时
    let theTime3 = 0 // 天
    if (theTime > 60) {
      theTime1 = parseInt(theTime / 60)
      theTime = parseInt(theTime % 60)
      if (theTime1 > 60) {
        theTime2 = parseInt(theTime1 / 60)
        theTime1 = parseInt(theTime1 % 60)
        if (theTime2 > 24) {
          //大于24小时
          theTime3 = parseInt(theTime2 / 24)
          theTime2 = parseInt(theTime2 % 24)
        }
      }
    }
    let result = ''
    if (theTime > 0) {
      result = '' + parseInt(theTime) + '秒'
    }
    if (theTime1 > 0) {
      result = '' + parseInt(theTime1) + '分' + result
    }
    if (theTime2 > 0) {
      result = '' + parseInt(theTime2) + '小时' + result
    }
    if (theTime3 > 0) {
      result = '' + parseInt(theTime3) + '天' + result
    }
    return result
  }
  
// 36000000 毫秒
// 36000 秒
// 600 分
// 10 小时
timeFormat(36000000 / 1000); // 10个小时
```

### 格式化时间

```javascript
// 格式化时间 demo:  parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s}')
function parseTime(time, pattern) {
    if (arguments.length === 0 || !time) {
        return null;
    }
    const format = pattern || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === "object") {
        date = time;
    } else {
        if (typeof time === "string" && /^[0-9]+$/.test(time)) {
            time = parseInt(time);
        } else if (typeof time === "string") {
            time = time
                .replace(new RegExp(/-/gm), "/")
                .replace("T", " ")
                .replace(new RegExp(/\.[\d]{3}/gm), "");
        }
        if (typeof time === "number" && time.toString().length === 10) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === "a") {
            return ["日", "一", "二", "三", "四", "五", "六"][value];
        }
        if (result.length > 0 && value < 10) {
            value = "0" + value;
        }
        return value || 0;
    });
    return time_str;
}

// demo
parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s}')
```









