---
title: 标题demo模板
date: 2013-07-04
categories: 
- 计算机
tags:
- 编程
---
demo模板
demo模板
demo模板
下面more是分隔符

<!-- more -->

### 个人偏好设置

1. 单行注释挨着代码,并添加个空格

   > phpstorm
   >
   > > 是在Preferences->Editor->Code Style->PHP->Other里面取消Line comment at first column之前的勾选就行了！
   > >  是在file->settings->Editor->Code Style->php->other 里面取消Line comment at first column之前的勾选就行了！
   >
   > webstorm:
   >
   > > 是在file->settings->Editor->Code Style->JavaScript->Code Generation里面取消Line comment at first column之前的勾选就行了！
   >
   > idea:
   >
   > > 是在file->settings->Editor->Code Style->java->Code Generation里面取消Line comment at first column之前的勾选就行了！
   >
   > 
   >
   > 添加个空格
   >
   > Add a space at line comment start

2. 字体大小

   > 是在file->settings->Editor->Font->(  Size:16, Line height:1.2  )

3. xx

4. xx

### 基本快捷键

1. Ctrl+Shift+J：将选中的行合并成一行 (也可以把多行注释前面的*去掉)

   ```javascript
   /**
    * Ctrl+Shift+J 可以把这里多行注释前面的*号去掉,合并到一行
    * daFei第一行
    * daFei第二行
    * daFei第三行
    * daFei第四行
    * */
   ```

2. ctrl + 回车： 自动添加连接符换行

2. Ctrl+G：定位到文件某一行

3. Ctrl+D:复制当前行

4. Ctrl+Y：删除当前行

5. Ctrl+Alt+L：格式化代码

6. Ctrl+Shift+U：切换大小写

7. Ctrl+/：使用//注释

8. Ctrl+Shift+/：使用/**/注释\

9. Alt+Enter：自动提示完成，抛出异常

10. Ctrl+F：在当前文件中查找

11. Ctrl+R：替换字符串

12. Ctrl+Shift+F:在全局文件中查找字符串

13. Ctrl+Shift+R：在全局中替换字符串

14. Ctrl+Z：撤销

15. Ctrl+Shift+Z：反撤销

17. 在项目文件上右键`Compare With`,对比文件

    > 1. 同时选中一个,在后面对话框中可以选择 **项目外文** 件对比
    > 2. 同时选中多哥,可以直接对比

18. 数字书签

    > 数字书签
    >
    > `ctrl + shift + 数字` 标记后,可以用 `ctrl + 数字` 快速回到标记地方

19. `Java 开发中`局部变量改为公用 `Ctrl + Alt + f`

20. `Java` 开发中,`Ctrl + o`显示复写方法

21. `Java`开发中, `Ctrl + p`,显示这个调用的参数

    > `new ArrayList();` 鼠标放到括号上,然后`Ctrl+p`可以显示出参数都有啥

22. `Java`中写for循环

    > 遍历for循环
    >
    > ```java
    > HashMap map = new HashMap();
    > map.put("1", "s");
    > 
    > Set keys = map.keySet();
    > // 先写 keys然后点for
    > for (Object key : keys) {
    > }
    > ```
    >
    > 

15. xxx

### 配置

1. 配置自己的模板---快捷键字母

   > Settings-->Editor-->Live Templates 在这里添加自己的的快捷字母和模板

2. xxx

3. xxx

4. xxx

### Recent Project 清空

清空最近打开项目历史记录`Recent Project`

```wiki
#AndroidStudio2022 的 Recent Project 位置
C:\Users\fei\AppData\Roaming\Google\AndroidStudio2022.3\options\recentProjects.xml

#IDEA2021.3 的 Recent Project 位置
C:\Users\fei\AppData\Roaming\JetBrains\IntelliJIdea2021.3\options\recentProjects.xml
#WebStorm2022.2 的 Recent Project 位置
C:\Users\fei\AppData\Roaming\JetBrains\WebStorm2022.2\options\recentProjects.xml
```

`webstorm`由于打开太多项目奔溃后,再次打开,好多功能不能正常使用

```wiki
#WebStorm2024.3 的 project 位置
C:\Users\fei\AppData\Local\JetBrains\WebStorm2024.3\projects
在这个目录下找到那个项目不正常删掉,重新打开项目即可
```



### IDEA社区版本

```wiki
#IntelliJ IDEA Ultimate  旗舰版
#IntelliJ IDEA Community Edition  社区版

用社区版本当记事本是个不错的选择
```

[IntelliJ IDEA Community Edition 社区版本](https://www.jetbrains.com/idea/download/?section=windows)

### IDEA安装插件位置

场景描述: `webstorm`安装了插件`element`,那么安装后的插件位置在电脑的哪里

```wiki
#C:\Users\用户名\AppData\Roaming\JetBrains\WebStorm2022.2\plugins

我的实际位置为:
C:\Users\fei\AppData\Roaming\JetBrains\WebStorm2022.2\plugins

这个目录下面的所有文件就是已经安装的插件
```





## WebStorm专题

### WebStorm开发uni-app项目

背景: 有些项目使用`HBuilder`创建后需要使用`HBuilder`软件工具开发,本人习惯了`WebStorm`,现在使用`WebStorm`来开发`HBuilder`的`uni-app`项目

目前我这里用有点卡

### 常用插件

1. element
2. Nuxt.js
3. uniapp Tool
4. wechat-mini-program-support
5. xxx

## 通用插件

1. changefile export
2. xxx















