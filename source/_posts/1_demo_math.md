---
title: 模板之数学公式
date: 2013-01-04
categories: 
- 计算机
tags:
- math
---

模板之数学公式
模板之数学公式
模板之数学公式

<!-- more -->

### 设置行内数学公式

file--->Preferences--->Markdown 然后在 `Inline Math(e.g:$\LaTeX$)` 前面勾选
主要使用符号 `$`1个是行内,`$$`2个是块级

demo:
作者`daFei`,这是行内数学公式  $A+B=C$
$$
这里是块级书序公式:  A+B=C
$$

### `ESC` 键

输入`$`,按下`ESC`会在后面自动添加一个`$`
输入2个`$`按下`ESC`会在后面自动添加2个`$`

### 其他

LaTex 语法

 [在线公式编辑](https://latex.codecogs.com/eqneditor/editor.php)

1. 上标`^`  下标`_`    demo:   $C_n^2$
2. 上标  x²
3. 导数`{'}`   demo:   $y{'}$ 
4. 分数`\frac`  demo:  $\frac{2}{3}$
5. 求和  $\sum$
6. xxx
7. xxx
8. $f^{\prime}(x)=\frac{1}{x \ln a}(a>0 \text { 且 } a \neq 1)$
9. 换行 ` \\`
10. 空格 `\qquad`
11. 空格 `\quad `
12. 根号 `\sqrt`    $\sqrt{x}$

### html写特殊符号

1. 2<sup>K</sup>
2. n<sub>2</sub>
3. n<sup>2</sup>=n+1
4. a=log<sub>2</sub>b

### demo
换行和空格
$$
y=\sin(x) \\
y=\sin(x) \\
y=\sin(x) \\
y=\sin(x) \qquad
y=\sin(x) \qquad
y=\sin(x) \qquad
y=\sin(x)
$$

$$
\lim_{x \to 0} f(x) = 8
$$

$$
\int \frac{1}{x} dx = \ln \left| x \right| + C
$$

$$ {demo}
\\  \lim _{x \rightarrow 0} \frac{\sin x}{x}=1

\\  \lim _{x \rightarrow \infty}\left(1+\frac{1}{x}\right)^{x}=e

\\ f^{\prime}(x)=\frac{1}{x \ln a}(a>0 \text { 且 } a \neq 1)

\\ y=\frac{1}{x}

\\ a^{x}-\ln a

\\ \frac{1}{x \ln a}(a>0 \text { 且 } a \neq 1)

\\ y=\sin x
$$

$$
\\ [f(x) \pm g(x)]^{\prime}=f^{\prime}(x) \pm g^{\prime}(x)

\\  [f(x) \cdot g(x)]^{\prime}=f^{\prime}(x) \cdot g(x)+f(x) \cdot g^{\prime}(x)

\\ \left[\frac{f(x)}{g(x)}\right] \cdot=\frac{f^{\prime}(x) \cdot g(x)-f(x) \cdot g^{\prime}(x)}{g^{2}(x)}


\\ \left[\frac{1}{g(x)}\right]^{\prime}=-\frac{g^{\prime}(x)}{g^{2}(x)}

\\ \frac{f^{\prime}(x) g(x)-f(x) g^{\prime}(x)}{g^{2}(x)}

\\ \left[\frac{f(x)}{g(x)}\right]^{\prime}=\frac{f^{\prime}(x) g(x)-f(x) g^{\prime}(x)}{g^{2}(x)}
$$

### demo

$$
\\ y=\sqrt{x}
\\ y=\sqrt[7]{x^{3}}
$$

$$
\tan x=\frac{\sin x}{\cos x}(\cos x \neq 0)
$$

$$
y=\sqrt{u}, y=\sqrt[2 \pi]{u} \quad u \geqslant 0
$$

$$
\text { (3) } y=2 n+\sqrt{x} \quad x \in(-\infty,+\infty)
$$

$$
y=\log _{a} x
$$

$$
\text { (5) } \text {abc}
$$

$$
x \in[-1,1]
$$


$$

$$

