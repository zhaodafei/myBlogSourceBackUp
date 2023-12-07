---
title: Android入门WebView参数交互
date: 2023-09-16
categories: 
- Android
tags:
- Android
---
Android入门之`WebView`参数交互
Android入门之`WebView`参数交互
Android入门之`WebView参数交互`

<!-- more -->

### Vue 中代码

```vue
<template>
  <div>
    <h3>WebView与 JS 的参数交互方式</h3>

    <div style="margin-top: 10px">
      <button type="button" @click="btnAnd"> 调用安卓中代码(无参数)</button>
    </div>

    <div style="margin-top: 10px">
      <button type="button" @click="btnAnd2"> 调用安卓中代码(有参数1)</button>
    </div>

    <div style="margin-top: 10px">
      <button type="button" @click="btnAnd3"> 调用安卓中代码(有参数2)</button>
    </div>

  </div>
</template>

<script setup>
import {onBeforeMount} from 'vue'

// 暴露出去,留给安卓调用==========================================
// Vue界面接收Android传递过来的值操作如下：
const callJsFunction = (receiveAndData) => {
  console.log('vue3我执行了,接受到安卓传递过来的数据了', receiveAndData);

  return '我执行成功了,在安卓中看到了吗?'
}
onBeforeMount(() => {
  // 将要给原生调用的方法挂载到 window 上面，方便原生直接调用
  window.callJsFunction = callJsFunction
})


// 调用安卓中方法==========================================
const btnAnd = () => {
  console.log("vue3我执行了---调用安卓成功了")
  // 注意: window.android 这里的android需要在安卓代码中声明一下
  console.log(window.android);
  window.androidFei.saveFei(); // 调用安卓中方法
}
const btnAnd2 = () => {
  window.androidFei.saveFeiArgs1("第一个参数:name"); // 调用安卓中方法
}
const btnAnd3 = () => {
  let params = {name: '我的名字是大飞vue', age: "年龄18"} // 解析: JSON.parse()
  console.log(JSON.stringify(params));
  window.androidFei.saveFeiArgs2(JSON.stringify(params)); // 调用安卓中方法
}

</script>

<style scoped lang="scss">
</style>

```

### WebView 的demo

留个`vue`调用的方法要在`java`方法上面加注解`@JavascriptInterface`

```java
package com.fei.bh.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.util.Log;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.fei.bh.R;
import org.json.JSONException;
import org.json.JSONObject;

public class StarActivity extends AppCompatActivity {

    // 参考文章如下
    // https://blog.csdn.net/weixin_62350313/article/details/129664743
    // https://www.jianshu.com/p/b649c3c241a6
    // 延伸: https://www.jianshu.com/p/345f4d8a5cfa
    private static final String TAG = "StarActivity";

    private String url;
    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_star);

        webView = findViewById(R.id.star_webView);
        WebSettings settings = webView.getSettings();
        // 运行运行js
        settings.setJavaScriptEnabled(true);
        // // 允许运行Dom缓存数据(比如js的: localStorage.setItem("key_fei","value_fei"))
        settings.setDomStorageEnabled(true);
        // 设置自适应屏幕，两者合用
        settings.setUseWideViewPort(true); // 将图片调整到适合webview的大小
        settings.setLoadWithOverviewMode(true); // 缩放至屏幕的大小
        // 其他细节操作
        settings.setCacheMode(WebSettings.LOAD_NO_CACHE); // 关闭webview中缓存
        settings.setAllowFileAccess(true); // 设置可以访问文件
        settings.setJavaScriptCanOpenWindowsAutomatically(true); // 支持通过JS打开新窗口
        settings.setLoadsImagesAutomatically(true); // 支持自动加载图片
        settings.setDefaultTextEncodingName("utf-8");// 设置编码格式

        // ===== 给HTML中js 一个变量名字 androidFei ====
        webView.addJavascriptInterface(StarActivity.this, "androidFei");

        webView.setWebViewClient(new WebViewClient() {
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
                Log.e(TAG, "执行__加载开始  " + url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                Log.e(TAG, "执行__加载完成  " + url);

                // 安卓调用Vue
                webView.post(new Runnable() {
                    @Override
                    public void run() {
                        webView.evaluateJavascript("javascript:callJsFunction('hello js')", new ValueCallback<String>() {

                            @Override
                            public void onReceiveValue(String s) {
                                Log.d(TAG, "js返回的结果: " + s);
                            }
                        });
                    }
                });
            }

            @Override
            public void onLoadResource(WebView view, String url) {
                super.onLoadResource(view, url);
                Log.e(TAG, "执行__加载资源  " + url);
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                super.onReceivedError(webView, request, error);
                Log.e(TAG, "执行__错误了");
            }
        });


        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
                super.onConsoleMessage(consoleMessage);
                Log.e(TAG, "执行__输出js中的console.log 的内容  " + consoleMessage.message());
                return true;
            }
        });


        // 这里注意: 用本地的HTML文件需要穿件文件: app/src/main/assets
        //  在 app 上右键 New=>Folder=>Assets Folder 
        // url = "file:///android_asset/star_index.html";
        // url = "file:///android_asset/h5/vue_index.html";
        url = "file:///android_asset/h5/index.html#/home";
        // webView.loadUrl("http://www.baidu.com");
        webView.loadUrl(url);

    }

    // vue调用,无参数
    @JavascriptInterface
    public void saveFei() {
        System.out.println(TAG + "andFei: 安卓我收到了vue中请求了");
        Log.d(TAG, "andFei: 安卓我接受到vue中的值了");
    }

    // vue调用,参数为一个普通字符串
    @JavascriptInterface
    public void saveFeiArgs1(String args) {
        Log.d(TAG, "andFei: 安卓我接受到vue中的值了" + args);
    }

    // vue调用,参数为JSON
    @JavascriptInterface
    public void saveFeiArgs2(String json) throws JSONException {
        Log.d(TAG, "andFei: 安卓我接受到vue中的所有值了" + json);
        JSONObject jsonObject = new JSONObject(json);
        String name = jsonObject.getString("name");
        String age = jsonObject.getString("age");

        Log.d(TAG, "andFei: 安卓我接受到vue中的值了: " + name);
        Log.d(TAG, "andFei: 安卓我接受到vue中的值了: " + age);
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
    tools:context=".activity.StarActivity"
    android:orientation="vertical">

    <TextView
        android:id="@+id/star_title"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="#c0c0c0"
        android:gravity="center"
        android:text="主功能页面"
        android:textSize="25sp" />

    <!--  WebView 使用 -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:background="#ff6b81">

        <WebView
            android:id="@+id/star_webView"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:layout_marginLeft="10dp"
            android:layout_marginRight="10dp"
            android:layout_marginTop="15dp"
            android:layout_marginBottom="10dp"/>

    </LinearLayout>

</LinearLayout>
```

![WebView 和js参数交互](/img/Android/and_06_1.png "WebView 和js参数交互")

### 返回键盘

```java
    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        if (event.getKeyCode() == 4) {
            // 从webView页面点击返回键,回到指定页面
            Intent intent = new Intent();
            intent.setClass(StarActivity.this, HomeActivity.class);
            startActivity(intent);
            return false;// 拦截事件
        }else{
            return super.dispatchKeyEvent(event);
        }
    }
```




### 底部

没有了

[调试 Web 应用](https://developer.android.google.cn/guide/webapps/debugging?hl=zh-cn)























