---
title: uni-app说明
date: 2024-07-21
categories: 
- 微信uni-app
tags:
- 微信uni-app
---
`uni-app`支持`Vue2`, `uni-app x`支持的是`Vue3`,开发的时候主语区分,版本不一样用法页不一样

`uni-app`支持`Vue2`, `uni-app x`支持的是`Vue3`,开发的时候主语区分,版本不一样用法页不一样

<!-- more -->

### 查看`Vue`版本

```wiki
一把在文件 manifest.json 中最后几行代码中显示如下:
"vueVersion" : "3"
```



### 基本配置`pagee.json`

```json
{
    "pages":[
      {
        "path": "pages/home/home",
        "style": {
          "navigationBarTitleText": "页面001"
        }
      },
      {
        "path": "pages/home/home2",
        "style": {
          "navigationBarTitleText": "页面002"
        }
      }
    ],
    
    "globalStyle": {
      "navigationBarTextStyle": "black",
      "navigationBarTitleText": "uni-app",
      "navigationBarBackgroundColor": "#FFFFFF",
      "backgroundColor": "#F8F8F8",
      // "navigationStyle": "custom" // 自定义导航栏
    },
    
    "tabBar": {
      // 底部导航
      "color": "#000000",
      "borderStyle": "black",
      "backgroundColor": "#ffffff",
      "list": [
        {
          "pagePath": "pages/home/home",
          "iconPath": "static/tabbar/home.png",
          "selectedIconPath": "static/tabbar/home_selected.png",
          "text": "首页"
        }
      ]
    }
  }
```

#### 页面跳转

```js
// 关闭当前页面，返回上一页面或多级页面
uni.navigateBack({
    delta: 1
});

uni.navigateBack({
    delta: 1,
    fail(error){} // 开发阶段,热重载就会报错
});

// 跳转到指定页面
uni.navigateTo({
    url: '/pages/detail/detail?id=123'
})

// 跳转到指定的 tabBar 中页面
uni.switchTab({
    url: '/pages/index/index'
})


navigateTo： 保留当前页面，跳转到应用内的某个页面
redirectTo： 关闭当前页面，跳转到应用内的某个页面。
reLaunch： 关闭所有页面，打开到应用内的某个页面。
switchTab： 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
navigateBack： 关闭当前页面，返回上一页面或多级页面。
```

 [页面跳转](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html#navigateto)

### 生命周期

```json
onLoad(event =>{}) 	// 接受参数
onPageShow(()=>{}) // 页面显示和隐藏
onReady(()=>{}) // 页面已经准备妥当
onPageHide(()=>{}) // 页面显示和隐藏
onUnload(()=>{})

```

 [页面生命周期](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)

### uniapp-vue3 分享

```js
import { onShareAppMessage,onShareTimeline } from '@dcloudio/uni-app';

// 获取当前页面路径
const getPath = () => {
  let pages = getCurrentPages();
  let currentPage = pages[pages.length - 1];
  let path='/'+ currentPage.route;
  return path
}

// 分享给朋友
onShareAppMessage((res)=>{
  console.log("什么值????????????/",res);
  if (res.from === 'button') {
    // 来自页面内分享按钮
    console.log(res.target);
  }
  return {
    title: '我是标题', // 标题
    path: getPath(), // 分享路径demo: path:'/pages/loading/loading'
    imageUrl: 'https://cdn.uviewui.com/uview/album/1.jpg', // 分享图
    desc: '我是描述内容'
  };
})

// 分享到朋友圈
onShareTimeline((res)=>{
  console.log("ddddddddddd",res);
  return {
    title: '我是标题', // 标题
    path: getPath(), // 分享路径demo: path:'/pages/loading/loading'
    imageUrl: 'https://cdn.uviewui.com/uview/album/1.jpg', // 分享图
    desc: '我是描述内容'
  };
})
```



### 小程序跳转公众号

```wiki
一、方法

方法1: 直接放个公众号二维码, 在小程序里长按识别, 就能跳了 (最简单)

方法2:  公众号组件<official-account></official-account> 跳转 (场景有要求)

方法3:  webview内嵌的公众号链接, 可以直接跳 (需要配置下)
```

1. [小程序跳转公众号](https://developers.weixin.qq.com/community/develop/article/doc/00006c4efecd181d729fb8f7f5bc13)

2. [小程序已支持长按识别二维码](https://developers.weixin.qq.com/community/develop/article/doc/00046045ea4f28f1679d6401950813)

3.  [小程序跳转到公众号主页](https://developers.weixin.qq.com/community/develop/article/doc/00006c4efecd181d729fb8f7f5bc13)

4. xxx

   > #### 获取公众号链接
   >
   > ```wiki
   > #主要是这个值
   > biz=”后面的一串大写英文字母，这是公众号唯一标识
   > 
   > 
   > #比如12306公众号
   > https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA3NzAyMzMyMA==#wechat_redirect
   > https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA3NzAyMzMyMA==#wechat_redirect
   > 
   > #打开公众号的首页关注页面
   > 点击右上角三个点, 下面会出现复制链接
   > ```
   >
   > 1.  [如何获取公众号链接地址](https://developers.weixin.qq.com/community/develop/doc/0006ec96f08e288e9ecbb960256000)
   > 2.  [通过链接打开公众号的方法](https://mp.weixin.qq.com/s/OzGuPYyMLqqq4eXLSBSfAA)

### hello-uniapp 示例工程

```wiki
https://ext.dcloud.net.cn/plugin?id=4941
https://ext.dcloud.net.cn/plugin?id=4941

https://m3w.cn/uniapp
https://m3w.cn/uniapp
在这个项目中用微信扫码, 打开微信小程序,可以体验uniapp的功能效果
```

### webstorm支持uni语法提示

```wiki
01)安装插件  Uniapp Support
   插件地址: https://plugins.jetbrains.com/plugin/19675-uniapp-support
   
02) settings/Languages & Frameworks /JavaScript /Libraries/  
    把这个里面的配置 uni-api 勾选上就可以了
```

![uni语法提示](/img/vue/idea/web_04_uniapp.jpg "uni语法提示")


### 底部

没有了























