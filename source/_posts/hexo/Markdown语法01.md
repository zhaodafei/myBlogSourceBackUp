---
title: Markdown语法01
categories: 
- Markdown
tags:
- Markdown
---
### 在头部显示大纲

使用 [TOC]  可以在顶部显示目录，在Markdown中写如下 demo：

```html
[TOC]

## 1.创建大纲和目录的必要性
### 大纲
### 目录
## 2.使用的软件
### typora
### markdown语法
##3.怎么创建大纲和目录
### 怎么创建大纲
### 怎么创建目录
```



### 这里是标题

内容start

### 代码和代码块

代码分为行内代码和代码块
行内代码使用`<p>这里使用代码块</p>`    <p>这里没有代码块</p>

### 代码语法高亮

``` php
 echo "dddddd";
```


``` javascript
var abc = "123";
alert(abc);

```

### 图片语法

```
![这是一张图片](https://github.githubassets.com/images/icons/emoji/octocat.png "这是一张图片")
```



![一张图片](https://github.githubassets.com/images/icons/emoji/octocat.png "图片")

### 超链接语法

 [这是一个超链接](https://github.com/ "这是一个超链接")

### 折叠和收起

details：折叠语法标签 
summary：折叠语法展示的摘要 
pre：以原有格式显示元素内的文字是已经格式化的文本  ------保持空格换行
code：指定代码范例
blockcode：表示程序的代码块       
<font color="#f00"> 行与行之间不能有多余的空行</font>


#### 基本效果01
```html
<details>
    <summary>我是Title</summary>    
    我是content!!!
</details>
```

<details>
    <summary>我是Title</summary>    
    我是content!!!
</details>

#### 效果02 `pre`

```html
<details>
    <summary>我是pre</summary>
    <p> 我是pre__content,我可以保留空格,代码的格式化效果</p>
    <pre>
        public class HelloWorld {
            public static void main(String[] args) {
                System.out.println("Hello World");
            }
        }
    </pre>
</details>
```

<details>
    <summary>我是pre</summary>
    <p> 我是pre__content</p>
    <pre>
        public class HelloWorld {
            public static void main(String[] args) {
                System.out.println("Hello World");
            }
        }
    </pre>
</details>

#### 效果03 `code`

```html
<details>
    <summary>我是pre_code</summary>
    <p> 我是pre_code__content</p>
    <pre><code>
            public class HelloWorld {
                public static void main(String[] args) {
                    System.out.println("Hello World");
                }
            }
        </code></pre>
</details>
```

<details>
    <summary>我是pre_code</summary>
    <p> 我是pre_code__content</p>
    <pre><code>
            public class HelloWorld {
                public static void main(String[] args) {
                    System.out.println("Hello World");
                }
            }
        </code></pre>
</details>

#### 效果04 `blockcode`

```html
<details>
    <summary>我是pre_blockcode</summary>
    <p> 我是pre_blockcode__content</p>
    <pre><blockcode>
            public class HelloWorld {
                public static void main(String[] args) {
                    System.out.println("Hello World");
                }
            }
        </blockcode></pre>
</details>
```

<details>
    <summary>我是pre_blockcode</summary>
    <p> 我是pre_blockcode__content</p>
    <pre><blockcode>
            public class HelloWorld {
                public static void main(String[] args) {
                    System.out.println("Hello World");
                }
            }
        </blockcode></pre>
</details>

















