---
title: Ubuntu -nginx配置
date: 2014-02-05
categories: 
- Nginx
tags:
- Nginx
---
Ubuntu -nginx配置
Ubuntu -nginx配置

### nginx脚本使用

以管理员身份启动这个脚本在里面可以启动nginx或者停止nginx

把这个脚本保存为一个`bat`格式文件,在windows系统中使用,可以方便管理本地的`nginx`

```bash
CHCP 65001
@echo off
chcp 65001 >nul 2>nul
setlocal enabledelayedexpansion

cd /d "%~dp0"
set NGINX_EXE=nginx.exe

:menu
cls
echo ========================================
echo         Nginx Manager v1.0
echo ========================================
echo.
echo  [1] Start Nginx
echo  [2] Stop Nginx
echo  [3] Restart Nginx
echo  [4] Reload Config
echo  [5] Check Status
echo  [6] Test Config
echo  [7] Exit
echo.
echo ========================================
set /p choice=Select option (1-7): 

if "%choice%"=="1" goto start
if "%choice%"=="2" goto stop
if "%choice%"=="3" goto restart
if "%choice%"=="4" goto reload
if "%choice%"=="5" goto status
if "%choice%"=="6" goto test
if "%choice%"=="7" goto end

echo Invalid choice, try again!
pause
goto menu

:start
cls
echo Starting Nginx...
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I "nginx.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo [WARNING] Nginx is already running!
    pause
    goto menu
)
%NGINX_EXE%
if %ERRORLEVEL%==0 (
    echo [SUCCESS] Nginx started!
) else (
    echo [FAILED] Start failed, check config!
)
pause
goto menu

:stop
cls
echo Stopping Nginx...
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I "nginx.exe">NUL
if "%ERRORLEVEL%"=="1" (
    echo Nginx is not running!
    pause
    goto menu
)
%NGINX_EXE% -s stop
if %ERRORLEVEL%==0 (
    echo [SUCCESS] Nginx stopped!
) else (
    echo Trying force kill...
    taskkill /F /IM nginx.exe /T 2>NUL
    if !ERRORLEVEL!==0 (
        echo [SUCCESS] Nginx killed!
    ) else (
        echo [FAILED] Cannot stop Nginx!
    )
)
pause
goto menu

:restart
cls
echo Restarting Nginx...
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I "nginx.exe">NUL
if "%ERRORLEVEL%"=="0" (
    %NGINX_EXE% -s stop 2>NUL
    taskkill /F /IM nginx.exe /T 2>NUL
)
timeout /t 1 /nobreak >NUL
%NGINX_EXE%
if %ERRORLEVEL%==0 (
    echo [SUCCESS] Nginx restarted!
) else (
    echo [FAILED] Restart failed!
)
pause
goto menu

:reload
cls
echo Reloading config...
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I "nginx.exe">NUL
if "%ERRORLEVEL%"=="1" (
    echo Nginx is not running!
    pause
    goto menu
)
%NGINX_EXE% -t
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Config test failed!
    pause
    goto menu
)
%NGINX_EXE% -s reload
if %ERRORLEVEL%==0 (
    echo [SUCCESS] Config reloaded!
) else (
    echo [FAILED] Reload failed!
)
pause
goto menu

:status
cls
echo ========================================
echo         Nginx Status
echo ========================================
echo.
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I "nginx.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo [STATUS] Nginx is RUNNING
    echo.
    echo Process List:
    echo ----------------------------------------
    tasklist /FI "IMAGENAME eq nginx.exe" /FO TABLE
    echo ----------------------------------------
) else (
    echo [STATUS] Nginx is NOT running
)
echo.
pause
goto menu

:test
cls
echo ========================================
echo         Testing Config
echo ========================================
echo.
%NGINX_EXE% -t
if %ERRORLEVEL%==0 (
    echo.
    echo [SUCCESS] Config syntax is OK!
) else (
    echo.
    echo [FAILED] Config has errors!
)
echo.
pause
goto menu

:end
echo Goodbye!
timeout /t 1 /nobreak >NUL
exit /b 0
```



### 底部

没有了



























