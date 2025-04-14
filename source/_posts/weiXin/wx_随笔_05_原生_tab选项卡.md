---
title: 微信小程序01
date: 2022-08-10
categories: 
- 微信
tags:
- 微信
---

微信开发`tab`选项卡
微信开发`tab`选项卡
微信开发`tab`选项卡

<!-- more -->

### 简单选显卡01

#### wxml部分

```html
<view class="container">
  <!--Tab布局-->
  <view class="tab-title">
    <view class="{{currentIndex==0?'titleSel':'titleUnSel'}}" bindtap="titleClick" data-idx="0">
      <text>第一个选项</text>
    </view>

    <view class="{{currentIndex==1?'titleSel':'titleUnSel'}}" bindtap="titleClick" data-idx="1">
      <text>第二个选项</text>
    </view>

    <view class="{{currentIndex==2?'titleSel':'titleUnSel'}}" bindtap="titleClick" data-idx="2">
      <text>第三个选项</text>
    </view>
  </view>

  <!--内容布局-->
  <view>
    <swiper class="swiper" bindchange="pageChange" current="{{currentIndex}}">
      <swiper-item class="swiper">
        <view wx:for="{{firstList}}" wx:key="index" class="recordItem">
          <view class="name">第一个：{{item}}</view>
        </view>
      </swiper-item>
      <swiper-item class="swiper">
        <view wx:for="{{secondList}}" wx:key="index" class="recordItem">
          <view class="name">第二个：{{item}}</view>
        </view>
      </swiper-item>
      <swiper-item class="swiper">
        <view wx:for="{{secondList}}" wx:key="index" class="recordItem">
          <view class="name">第3个：{{item}}</view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</view>
```

#### scss部分

```scss
.container {
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.tab-title {
  width: 100%;
  height: 88rpx;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .titleUnSel {
    color: #858fab;
    font-size: 26rpx;
  }

  .titleSel {
    color: #ff6b81;
    font-size: 32rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 80rpx;
    line-height: 80rpx;
  }
  .titleSel:after {
    // 选中
    content: '';
    display: block;
    height: 8rpx;
    width: 52rpx;
    position: absolute;
    bottom: 0;
    left: 50%;
    background: #ff6b81;
    border-radius: 16rpx;
    transform: translate(-50%, 0%);
  }
}

.swiper {
  width: 100%;
  flex: 1;
  height: 100vh;
  overflow: scroll;

  .recordItem {
    background-color: white;
    margin-top: 10rpx;
    padding: 20rpx;
  }
}

```

#### js部分

```js
Page({
  data: {
    currentIndex: 0,
    firstList: ['foo', 'foo', 'foo', 'foo', 'foo', 'foo'],
    secondList: ['bar', 'bar', 'bar', 'bar', 'bar', 'bar', 'bar', 'bar']
  },
  //用户点击tab时调用
  titleClick: function (e) {
    this.setData({
      //拿到当前索引并动态改变
      currentIndex: e.currentTarget.dataset.idx
    })
  },
  //swiper切换时会调用
  pageChange: function (e) {
    if ('touch' === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 2
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  }
})

```

![简单选项卡01](/img/vue/wx/wx_05.gif "简单选项卡01")

### 简单选项卡02

#### wxml部分

```html
<view>
  <scroll-view scroll-x="true" class="tab-h" scroll-left="{{scrollLeft}}">
    <view class="tab-item {{currentTab==0?'active':''}}" data-current="0" bindtap="switchNav">健康</view>
    <view class="tab-item {{currentTab==1?'active':''}}" data-current="1" bindtap="switchNav">情感</view>
    <view class="tab-item {{currentTab==2?'active':''}}" data-current="2" bindtap="switchNav">职场33333</view>
    <view class="tab-item {{currentTab==3?'active':''}}" data-current="3" bindtap="switchNav">育儿</view>
    <view class="tab-item {{currentTab==4?'active':''}}" data-current="4" bindtap="switchNav">纠纷</view>
    <view class="tab-item {{currentTab==5?'active':''}}" data-current="5" bindtap="switchNav">青葱</view>
    <view class="tab-item {{currentTab==6?'active':''}}" data-current="6" bindtap="switchNav">全部</view>
    <view class="tab-item {{currentTab==7?'active':''}}" data-current="7" bindtap="switchNav">其他</view>
  </scroll-view>

  <swiper
    class="tab-content"
    current="{{currentTab}}"
    duration="300"
    bindchange="switchTab"
    style="height:{{winHeight}}rpx"
  >
    <swiper-item wx:for="{{[0,1,2,3,4,5,6,7]}}" wx:key="*this">
      <scroll-view scroll-y="true" class="scoll-h">
        <block wx:for="{{[1,2,3,4,5,6,7,8]}}" wx:key="*this">
          <view class="item-ans">
            <view class="avatar">
              <image class="img" src="{{avatar}}"></image>
              <image class="doyen" src="{{avatar}}"></image>
            </view>
            <view class="expertInfo">
              <view class="name">大飞</view>
              <view class="tag">前端-小菜鸟</view>
              <view class="answerHistory">134个问题，2234次回复解答 </view>
            </view>
            <navigator url="/pages/index/index" class="askBtn">详情</navigator>
          </view>
        </block>
      </scroll-view>
    </swiper-item>
  </swiper>
</view>

```

#### scss部分

```scss
// tab区域
.tab-h {
  height: 80rpx;
  line-height: 80rpx;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  background: #f7f7f7;
  font-size: 16px;
  white-space: nowrap;
  position: fixed;
  //top: 0;
  left: 0;
  z-index: 99;
  .tab-item {
    margin: 0 36rpx;
    display: inline-block;
  }
  .tab-item.active {
    color: #ff6b81;
    position: relative;
  }
  .tab-item.active:after {
    content: '';
    display: block;
    height: 8rpx;
    width: 52rpx;
    position: absolute;
    bottom: 0;
    //left: 5rpx;
    left: 50%;
    transform: translate(-50%, 0%); // 居中
    background: #ff6b81;
    border-radius: 16rpx;
  }
}

// 内容区域
.tab-content {
  //margin-top: 80rpx;
  padding-top: 80rpx;
}
.scoll-h {
  height: 100%;
}
.item-ans {
  width: 100%;
  display: flex;
  //flex-grow: row no-wrap;
  justify-content: space-between;
  padding: 30rpx;
  box-sizing: border-box;
  height: 180rpx;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
}
.avatar {
  width: 100rpx;
  height: 100rpx;
  position: relative;
  padding-right: 30rpx;
  .img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .doyen {
    width: 40rpx;
    height: 40rpx;
    position: absolute;
    bottom: -2px;
    right: 20rpx;
  }
}

.expertInfo {
  font-size: 12px;
  flex-grow: 2;
  color: #b0b0b0;
  line-height: 1.5em;

  .name {
    font-size: 16px;
    color: #000;
    margin-bottom: 6px;
  }
}

.askBtn {
  width: 120rpx;
  height: 60rpx;
  line-height: 60rpx;
  text-align: center;
  font-size: 14px;
  border-radius: 60rpx;
  border: 1px solid #ff6b81;
  color: #ff6b81;
}

```

#### js部分

```js
Page({
  data: {
    avatar: 'https://pic.cnblogs.com/avatar/1551357/20200522184107.png', // 页面显示
    winHeight: '', //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0 //tab标题的滚动条位置
  },
  onLoad: function () {
    var that = this
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth
        var calc = clientHeight * rpxR - 180
        console.log(calc)
        that.setData({ winHeight: calc })
      }
    })
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    var that = this
    that.setData({ currentTab: e.detail.current })
    that.checkCor()
  },
  // 点击标题切换当前页时改变样式 switchNav
  switchNav: function (e) {
    var that = this
    var cur = e.target.dataset.current
    if (that.data.currentTab == cur) {
      return false
    } else {
      that.setData({ currentTab: cur })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    var that = this
    if (that.data.currentTab > 4) {
      that.setData({ scrollLeft: 300 })
    } else {
      that.setData({ scrollLeft: 0 })
    }
  }
})

```

![简单选项卡02](/img/vue/wx/wx_06.gif "简单选项卡02")

### 底部

没有了



















