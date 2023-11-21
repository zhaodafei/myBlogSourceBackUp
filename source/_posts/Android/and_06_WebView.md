---
title: Android入门WebView
date: 2023-09-16
categories: 
- Android
tags:
- Android
---
Android入门之`WebView`
Android入门之`WebView`
Android入门之`WebView`

<!-- more -->

使用`WebView`必须设置允许`APP`可以上网

### 让`APP`可以上网

```html
01) 修改配置文件 app/src/main/AndroidManifest.xml 添加上网权限

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">
    <!-- 访问网络 -->
    <uses-permission android:name="android.permission.INTERNET" />
</manifest>


02) 添加配置:  android:usesCleartextTraffic="true", 可以考虑石头添加

    <application
        android:label="@string/app_name"
        android:usesCleartextTraffic="true" />
```



### WebView 的demo

```java
package com.fei.myfei;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.net.http.SslCertificate;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class Fei04Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fei04);

        findViewById(R.id.fei04_btn1);


        WebView webView = findViewById(R.id.my04_webView);
        // webView.getSettings().setJavaScriptEnabled(true);

        //访问网页
        webView.loadUrl("http://www.baidu.com");
        webView.setWebViewClient(new WebViewClient(){

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                // tip: Android7.0 以后用这个 WebResourceRequest request
                //使用WebView加载显示url
                view.loadUrl(request.getUrl().toString());
                //返回true
                return true;
            }
        });
    }
}
```



```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <Button
        android:id="@+id/fei04_btn1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:gravity="center"
        android:text="我是04页面"/>

    <WebView
        android:id="@+id/my04_webView"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
    
   <!--  ========== WebView 模块 ==========  -->
    <!-- <LinearLayout
        android:layout_width="400dp"
        android:layout_height="430dp"
        android:background="#ff6b81">

        <WebView
            android:id="@+id/my04_webView"
            android:layout_width="350dp"
            android:layout_height="400dp"
            android:layout_marginLeft="10dp"
            android:layout_marginRight="10dp"
            android:layout_marginTop="15dp"
            android:layout_marginBottom="10dp"/>

    </LinearLayout> -->

</LinearLayout>
```

### WebView 的demo2

这个`demo`主要是配置`andrioid` 中运行`webview`可以使用的权限配置

```java
package com.fei.myfei;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class Fei04Activity extends AppCompatActivity {

    private final String TAG = "Fei04Activity_webView";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fei04);

        WebView webView = findViewById(R.id.my04_webView);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        // 允许运行Dom缓存数据(比如js的: localStorage.setItem("key_fei","value_fei"))
        settings.setDomStorageEnabled(true); 
        //设置自适应屏幕，两者合用
        settings.setUseWideViewPort(true); // 将图片调整到适合webview的大小
        settings.setLoadWithOverviewMode(true); // 缩放至屏幕的大小
        //其他细节操作
        settings.setCacheMode(WebSettings.LOAD_NO_CACHE); // 关闭webview中缓存
        settings.setAllowFileAccess(true); // 设置可以访问文件
        settings.setJavaScriptCanOpenWindowsAutomatically(true); // 支持通过JS打开新窗口
        settings.setLoadsImagesAutomatically(true); // 支持自动加载图片
        settings.setDefaultTextEncodingName("utf-8");// 设置编码格式

        webView.setWebViewClient(new WebViewClient() {

            /* @Override
            public boolean shouldOverrideUrlLoading(WebView webView, String url) {
                Log.e(TAG , "执行_ shouldOverrideUrlLoading  " + url);

                webView.loadUrl(url);
                return true;
            } */
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                // tip: Android7.0 以后用这个 WebResourceRequest request
                // 使用 WebView 加载显示 url
                view.loadUrl(request.getUrl().toString());
                // 返回true
                return true;
            }

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                Log.e(TAG , "执行__加载开始  " + url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                Log.e(TAG , "执行__加载完成  " + url);
            }

            @Override
            public void onLoadResource(WebView view, String url) {
                super.onLoadResource(view, url);
                Log.e(TAG , "执行__加载资源  " + url);
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, 
                                        WebResourceError error) {
                super.onReceivedError(webView, request, error);
                Log.e(TAG,"执行__错误了");
            }
        });

        webView.loadUrl("http://www.baidu.com");
        // webView.loadUrl("https://developer.android.google.cn/docs?hl=zh-cn");
        // webView.loadUrl("https://support.github.com/features/rest-api");
        // webView.loadUrl("https://developer.mozilla.org/zh-CN/docs/Web");
        // webView.loadUrl("https://www.runoob.com/w3cnote/android-tutorial-intro.html");

    }
}
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">


    <TextView
        android:id="@+id/fei04_tv1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="#c0c0c0"
        android:gravity="center"
        android:text="我是04首页"
        android:textSize="25sp" />

    <!--  ========== WebView 模块 ==========  -->
    <LinearLayout
        android:layout_width="400dp"
        android:layout_height="430dp"
        android:background="#ff6b81">

        <WebView
            android:id="@+id/my04_webView"
            android:layout_width="350dp"
            android:layout_height="400dp"
            android:layout_marginLeft="10dp"
            android:layout_marginRight="10dp"
            android:layout_marginTop="15dp"
            android:layout_marginBottom="10dp"/>

    </LinearLayout>

    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="20dp"
        android:background="#ff6b81"
        android:gravity="center"
        android:text="我是04底部"
        android:textSize="30sp" />

</LinearLayout>
```

#### 常见配置清单

1. setJavaScriptEnabled(boolean flag):是否支持 Js 使用。
2. setCacheMode(int mode):设置 WebView 的缓存模式。
3. setAppCacheEnabled(boolean flag):是否启用缓存模式。
4. setAppCachePath(String appCachePath):Android 私有缓存存储，如果你不调用setAppCachePath方法，WebView将不会产生这个目录。
5. setSupportZoom(boolean support):是否支持缩放。
6. setTextZoom(int textZoom):Sets the text zoom of the page in percent. The default is 100。
7. setAllowFileAccess(boolean allow):是否允许加载本地 html 文件/false。
8. setDatabaseEnabled(boolean flag):是否开启数据库缓存
9. setDomStorageEnabled(boolean flag):是否开启DOM缓存。
10. setUserAgentString(String ua):设置 UserAgent 属性。
11. setLoadsImagesAutomatically(boolean flag):支持自动加载图片
12. setAllowFileAccessFromFileURLs(boolean flag：:允许通过 file url 加载的 Javascript 读取其他的本地文件,Android 4.1 之前默认是true，在 Android 4.1 及以后默认是false,也就是禁止。
13. setAllowUniversalAccessFromFileURLs(boolean flag):允许通过 file url 加载的 Javascript 可以访问其他的源，包括其他的文件和 http，https 等其他的源，Android 4.1 之前默认是true，在 Android 4.1 及以后默认是false,也就是禁止如果此设置是允许，则 setAllowFileAccessFromFileURLs 不起做用。
14. boolean getLoadsImagesAutomatically():是否支持自动加载图片。

```java
WebSettings webSettings = mWebView.getSettings();
if (webSettings == null) return;
// 支持 Js 使用
webSettings.setJavaScriptEnabled(true);
// 开启DOM缓存,默认状态下是不支持LocalStorage的
webSettings.setDomStorageEnabled(true);
// 开启数据库缓存
webSettings.setDatabaseEnabled(true);
// 支持自动加载图片
webSettings.setLoadsImagesAutomatically(hasKitkat());
// 设置 WebView 的缓存模式
webSettings.setCacheMode(WebSettings.LOAD_DEFAULT);
// 支持启用缓存模式
webSettings.setAppCacheEnabled(true);
// 设置 AppCache 最大缓存值(现在官方已经不提倡使用，已废弃)
webSettings.setAppCacheMaxSize(8 * 1024 * 1024);
// Android 私有缓存存储，如果你不调用setAppCachePath方法，WebView将不会产生这个目录
webSettings.setAppCachePath(getCacheDir().getAbsolutePath());
// 数据库路径
if (!hasKitkat()) {
    webSettings.setDatabasePath(getDatabasePath("html").getPath());
}
// 关闭密码保存提醒功能
webSettings.setSavePassword(false);
// 支持缩放
webSettings.setSupportZoom(true);
// 设置 UserAgent 属性
webSettings.setUserAgentString("");
// 允许加载本地 html 文件/false
webSettings.setAllowFileAccess(true);
// 允许通过 file url 加载的 Javascript 读取其他的本地文件,Android 4.1 之前默认是true，在 Android 4.1 及以后默认是false,也就是禁止
webSettings.setAllowFileAccessFromFileURLs(false);
// 允许通过 file url 加载的 Javascript 可以访问其他的源，包括其他的文件和 http，https 等其他的源，
// Android 4.1 之前默认是true，在 Android 4.1 及以后默认是false,也就是禁止
// 如果此设置是允许，则 setAllowFileAccessFromFileURLs 不起做用
webSettings.setAllowUniversalAccessFromFileURLs(false);
```

### `Vue` 打包,显示日志

`Vue` 使用 `vconsole`

```wiki
npm install vconsole

在 main.js 中如下代码:
import VConsole from 'vconsole';
const vConsole = new VConsole()
app.use(vConsole)

到这里,在h5上已经可以显示 vConsole按钮了, 下面是测试代码
try {
  localStorage.setItem("key_2222","value_2222222")
  console.info("我输出一下")
}catch (e) {
  console.log(e);
  console.info("vconsole-info-测试 22222222222")
}


======================== 单文件使用 ================
01)新建vconsole.js
    import VConsole from 'vconsole';
    let vconsole = new VConsole();
    export default vconsole;
02) main.js引入
	import vConsole from './vconsole'
```



### 黑屏现象

```wiki
01) js 有报错,引起的 WebView 黑屏(白屏)
01-2) 报错是ES6 语法引起的
```

### 打包异常

> 1. AS运行安装失败，真机提示“软件包似乎无效”问题
>
> 2. AS问题处理 - VIVO手机APK安装失败
>
>    > 解决办法:
>    >
>    > 在你的 `gradle.properties` 文件添加一句 `android.injected.testOnly = false `



![第一个程序](/img/Android/Android_01.png "hello wolrd")


### 底部

没有了

[调试 Web 应用](https://developer.android.google.cn/guide/webapps/debugging?hl=zh-cn)























