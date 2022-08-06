---
title: Windows中bat脚本
date: 2022-07-30
categories: 
- Win
tags:
- Win
---
Windows中bat脚本
Windows中bat脚本
Windows中bat脚本

<!-- more -->

### 编码

在bat开头加上这行：

```basic
CHCP 65001
echo 哈哈哈
:: 冒号这是注释
```

![这是一张本地图片](/img/linux/root_passwd.png "这是一张本地图片")

### Jetbrain 支持 bat

安装插件`Batch Scripts Support` 

[官方链接 Batch Scripts Support](https://plugins.jetbrains.com/plugin/265-batch-scripts-support/versions)

### 注释

```powershell
:: bat 中的注释是两个冒号
:: dir
```

```powershell
REM 注释2使用REM这个单词
REM 我是注释
```



### 获取用户输入

使用 set /p 命令来获取用户的输入

```powershell
@echo off
set /p fei=your name: 
echo %fei%
```

### 条件判断

```powershell
@echo off
set "str=this is a test string DaFei"
:: 检测变量%str%是否等于fei，如果相等，显示OK，否则显示NO
if "%str%"=="fei" (echo OK) else echo NO
pause>nul
```

```powershell
@echo off
set "foo=fei"
if "%foo%"=="bar" (
    echo %foo% is foo
    echo A111
) else if "%foo%"=="fei" (
    echo %foo% is fei
    echo B222
) else (
    echo %foo% is other
    echo C333
)
pause>nul
```

### 写入操作

```powershell
:: 把当前屏幕内容写入到文件
ping 127.0.0.1 > fei.txt
```

### 回车换行

```powershell
echo.
echo.
```

### Demo

根据`nvm`切换`node`版本

```powershell
CHCP 65001
@echo off
echo.
echo +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo ++        选择node版本,请使用管理员身份运行该程序                             ++
echo ++        作者:赵大飞, QQ:1097625354                                     ++
echo +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo.

%~d0
cd %~dp0

echo 请选择你需要的node版本
echo ++     1、node版本 8.17.0  使用于A项目      ++
echo ++     2、node版本 16.16.0 使用于B项目      ++
echo ++     3、node版本 14.18.0 使用于C项目      ++
echo ++     4、node版本 13.9.0  使用于D项目      ++
echo ++     5、其他                             ++
echo.

set /p versionFei=你选择的版本:
echo %versionFei%
echo.

if "%versionFei%"=="1" (
    nvm use 8.17.0
) else if "%versionFei%"=="2" (
    nvm use 16.16.0
) else if "%versionFei%"=="3" (
    nvm use 14.18.0
) else if "%versionFei%"=="4" (
    nvm use 13.9.0
) else (
    echo 没有对应的版本
)

nvm ls


echo.
pause

```




### 底部

没有了























