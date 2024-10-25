---
title: FullCalendar 日历插件
date: 2022-12-14
categories: 
- FullCalendar
tags:
- FullCalendar
---
`FullCalendar5.11.3`日历插件
`FullCalendar5.11.3`日历插件
`FullCalendar5.11.3`日历插件
官网地址: [fullcalendar官网](https://fullcalendar.io "fullcalendar官网")



<!-- more -->

### 官网下载demo

```html
在首页可以选择对应的语言,然后进入相应的页面下载

下载demo地址 JavaScript
https://fullcalendar.io/docs/initialize-globals
https://fullcalendar.io/docs/initialize-globals

```

### 入门demo

`resources`中的`id`要和`events`中的`resourceId`对应上,才可以在日历中显示

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'/>
  <title>
    Various Resource-Timeline Views - Demos | FullCalendar
  </title>
  <style>
    .fc .fc-button-primary {
      background: #ff6b81 !important;
      border-color: #ff6b81 !important;
    }
  </style>


  <!--<link href='https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@5.11.3/main.min.css' rel='stylesheet'/>
  <script src='https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@5.11.3/main.min.js'></script>-->

  <link href='./css/main.min.css' rel='stylesheet'/>
  <script src='./js/main.min.js'></script>
  <script src='./js/locales-all.js'></script>

  <script>

    document.addEventListener('DOMContentLoaded', function () {
      var calendarEl = document.getElementById('calendar');

      var calendar = new FullCalendar.Calendar(calendarEl, {
        // timeZone: 'UTC',
        timeZone: 'Asia/Shanghai',
        locale: 'zh-cn',
        initialView: 'resourceTimelineDay',
        aspectRatio: 1.5,
        headerToolbar: {
          left: 'today,prev,next',
          center: 'title',
          right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
        },
        editable: true,
        resourceAreaHeaderContent: '左侧标题',
        resources: [
          {
            id: 'fei_01',
            title: '标题01'
          },
          {
            id: 'fei_02',
            title: '标题02',
            eventColor: 'green'
          },
          {
            id: 'fei_03',
            title: '标题03',
            children: [
              {
                id: 'fei_03-1',
                title: '标题03_1',
              },
              {
                id: 'fei_03-2',
                title: '标题03_2',
              }
            ]
          },
        ],
        events: [
          {
            "resourceId": "fei_01",
            "title": "日历fei01",
            "start": "2022-12-14 08:00:00",
            "end": "2022-12-14 12:00:00"
          },
          {
            "resourceId": "fei_02",
            "title": "日历fei01",
            "start": "2022-12-14 08:00:00",
            "end": "2022-12-14 12:00:00"
          },
          {
            "resourceId": "fei_03-1",
            "title": "日历fei01",
            "start": "2022-12-14 08:00:00",
            "end": "2022-12-14 12:00:00"
          },
        ]
      });

      calendar.render();
    });

  </script>

</head>
<body>
<!-- 官方: https://fullcalendar.io/demos   -->
<div id='calendar'></div>
</body>

</html>
```

### 调用接口显示数据

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'/>
  <title>
    Various Resource-Timeline Views - Demos | FullCalendar
  </title>
  <style>
    .fc .fc-button-primary {
      background: #ff6b81 !important;
      border-color: #ff6b81 !important;
    }
  </style>


  <!--<link href='https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@5.11.3/main.min.css' rel='stylesheet'/>
  <script src='https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@5.11.3/main.min.js'></script>-->

  <link href='./css/main.min.css' rel='stylesheet'/>
  <script src='./js/main.min.js'></script>
  <script src='./js/locales-all.js'></script>
  <script src='./js/jquery-1.8.2.min.js'></script>

  <script>

    document.addEventListener('DOMContentLoaded', function () {
      var calendarEl = document.getElementById('calendar');

      var calendar = new FullCalendar.Calendar(calendarEl, {
        // timeZone: 'UTC',
        timeZone: 'Asia/Shanghai',
        locale: 'zh-cn',
        initialView: 'resourceTimelineDay',
        aspectRatio: 1.5,
        headerToolbar: {
          left: 'today,prev,next',
          center: 'title',
          right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
        },
        editable: true,
        resourceAreaHeaderContent: '左侧标题',
        resources: function (info, successCallback, failureCallback) {
          // info 中是参数信息
          let dataParams = {
            fei: "请求参数",
            start: info.startStr,
          }
          $.ajax({
            type: "GET",  // POST
            async: false,
            dataType: "json",
            url: `https://api.github.com/repos/vuejs/vue`,
            data: dataParams,
            success: function (res) {
              successCallback([
                {
                  id: 'fei_01',
                  title: '标题01'
                },
                {
                  id: 'fei_02',
                  title: '标题02',
                  eventColor: 'green'
                },
                {
                  id: 'fei_03',
                  title: '标题03',
                  children: [
                    {
                      id: 'fei_03-1',
                      title: '标题03_1',
                    },
                    {
                      id: 'fei_03-2',
                      title: '标题03_2',
                    }
                  ]
                },
              ])
            }
          })
        },
        events: function (info, successCallback, failureCallback) {
          // info 中是参数信息
          let dataParams = {
            fei: "请求参数",
            start: info.startStr,
          }
          $.ajax({
            type: "GET", // POST
            async: false,
            dataType: "json",
            url: `https://api.github.com/repos/vuejs/vue`,
            data: dataParams,
            success: function (res) {
              successCallback([
                {
                  "resourceId": "fei_01",
                  "title": "日历fei01",
                  "start": "2022-12-14 08:00:00",
                  "end": "2022-12-14 12:00:00"
                },
                {
                  "resourceId": "fei_02",
                  "title": "日历fei01",
                  "start": "2022-12-14 08:00:00",
                  "end": "2022-12-14 12:00:00"
                },
                {
                  "resourceId": "fei_03-1",
                  "title": "日历fei01",
                  "start": "2022-12-14 08:00:00",
                  "end": "2022-12-14 12:00:00"
                },
              ])
            }
          })
        }
      });

      calendar.render();
    });

  </script>

</head>
<body>
<!-- 官方: https://fullcalendar.io/demos   -->
<div id='calendar'></div>
</body>

</html>

```

#### 核心代码_网络请求

```html
// 在( https://fullcalendar.io/docs )这里找 Events 和 Resources  
https://fullcalendar.io/docs

// Resources,方法类似jq的ajax
https://fullcalendar.io/docs/resources-function
//# 具体使用功能
refetchResourcesOnNavigate: true, // 设置为true后fetchInfo才可以获取到数据
resources: function(fetchInfo, successCallback, failureCallback) { }

// Events,方法类似jq的ajax
https://fullcalendar.io/docs/events-function
```

### 参数说明

```javascript
// initialDate: '2020-09-12', // 初始化日期

//注意版权

dayMaxEvents: true // 根据日历高度自动显示内容条数
```

### 按`月,周,日`显示

```js
const calendarOptions = {
  buttonText: {
    today: "今天???",
    month: "月 111",
    week: "周 111",
    day: "日 111",
  },
  headerToolbar: {
    // left: "today,dayGridMonth",
    // center: "prevYear,prev,title,next,nextYear",
    // dayGridMonth: 月, resourceTimelineWeek:周, resourceTimelineDay:日; addFei:自定义
    right: "dayGridMonth,resourceTimelineWeek,resourceTimelineDay,addFei",
  },
  customButtons: {
    addFei: {
      // addFei: 对应上面的 ↑↑↑
      text: "自定义!",
      click: function (mouseEvent, htmlElement) {
        // htmlElement.click();
      },
    },
  },
}
```

### 构建数据中对象

```js
const eventList= [{
  id: "xxx",
  backgroundColor: "#ff6b81",
  borderColor: "#00ffff",
  textColor: '#FFFFFF', // 根据类型设置
  // 日历上面准备回显的数据,要放在title中,因为日历组件只能识别 title
  title:JSON.stringify({
    id: "001",
    name: "大飞",
    age: "18",
    desc: "我是内容描述",
  })
}]
```

### 日历宽高

```wiki
#在 calendarOptions  中直接配置
height: window.screen.height - 46

#动态计算
calendar.setOption('height', 700)

#高度,可以在外面套一个盒子解决,然后再配置中设置 height: '100%',
##其他
height: '100%', #设置高度 https://fullcalendar.io/docs/height
contentHeight: 'auto',
calendar.updateSize();

#指定具体
height: 800,
width: 600,
handleWindowResize: true, #随浏览器窗口变化
```

### 去掉buttonsText

```json
views: {
    resourceTimelineWeek: {
        type: 'resourceTimeline',
        buttonText: '周',
        slotDuration: { days: 1 },
        duration: { days: 7 }
    },
},

slotDuration: { days: 1 }
```

### 自定义按钮

```js
var calendar = new Calendar(calendarEl, {
  customButtons: {
    myCustomButton: { // 我的自定义
      text: 'custom!',
      // icon: 'chevron-left', // icon 会覆盖 text 显示
      click: function() {
        alert('clicked the custom button!');
      }
    }
  },
  headerToolbar: {
    left: 'prev,next today myCustomButton', // 我的自定义 myCustomButton
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  }
});
```

1. [customButtons](https://fullcalendar.io/docs/customButtons)
2. [buttonIcons](https://fullcalendar.io/docs/buttonIcons)

#### 自定义按钮模拟翻页

```js
// 页面初始化获取对象  calendarApi = refFullCalendar.value.getApi()

// 自定义按钮事件
const prevMonthCustomClick = () => {
  calendarApi.prev();
}

const nextMonthCustomClick = () => {
  calendarApi.next();
}

let fei = {
  headerToolbar: { // 顶部工具栏
    // 01)每次加一个空格会多一个空白按钮 02)每个逗号分隔一个按钮
    // left: 'prevYear,prev,next,nextYear today',
    left: 'prev,next today prevMonthCustom,nextMonthCustom',
    // left: 'today prevMonthCustom,nextMonthCustom',
    center: 'title', // 显示中间时间
    right: 'resourceTimelineMonth,resourceTimelineWeek,resourceTimelineDay'
  },
  customButtons: {
    prevMonthCustom: { // 我的自定义
      text: '上xx <',
      icon: 'chevron-left', // icon 会覆盖 text 显示
      click: function() {
        prevMonthCustomClick();
      }
    },
    nextMonthCustom: { // 我的自定义; 下一页模拟原有功能下一页
      text: '下xx >',
      icon: 'chevron-right',
      click: function() {
        nextMonthCustomClick();
      }
    }
  },
}
```

[翻页, 重新调用接口](https://blog.csdn.net/qq_34272760/article/details/120562510)

### 初始化日期

```js
initialDate: '2018-06-01' // will be parsed as local
```

[初始化日期](https://fullcalendar.io/docs/date-parsing)

### 日历表头view视图设置

```js
resourceTimelineDay: {
  // https://fullcalendar.io/docs/slotDuration
  slotDuration: '00:60:00', // 持续时间(默认30分钟, 可以设置表头分割线)
  slotMinTime: '07:00:00', // 开始时间点
  slotMaxTime: '23:00:00', // 结束时间点
  // https://fullcalendar.io/docs/slotLabelFormat
  slotLabelFormat: [
    {
      weekday: 'short'
    },
    {
      hour: '2-digit', // https://fullcalendar.io/docs/date-formatting
      minute: '2-digit',
      hour12: false
    }
  ]
}
```

[日历表头view视图设置](https://fullcalendar.io/docs/date-formatting)

### 属性介绍

1.  修改按钮为汉字

   > ```js
   > // 修改按钮为汉字
   > buttonText: {
   >   today: '今天',
   >   month: '月',
   >   week: '周',
   >   day: '日'
   > },
   > ```
   >
   > 

2. 顶部工具栏

   > ```js
   > headerToolbar: {
   >   left: 'prevYear,prev,next,today', //时间选择、月、周、日视图设置为资源时间线视图
   >   center: '', //显示中间时间
   >   right: ''
   > },
   > ```
   >
   > 

3. 语言

   > ```js
   > locale: 'zh-cn', //中文
   > ```
   >
   > 

4. 初始视图

   > ```js
   > initialView: 'resourceTimelineMonth', //初始视图为月试图,对应headerToolbar 中 right 数据
   > ```
   >
   > 

5. 资源区宽度

   > ```js
   > resourceAreaWidth: '15%', //资源区宽度( 左侧位置 )
   > ```

6. 资源区域自定义

   > ```js
   > resourceAreaColumns: [
   >   {
   >     field: 'title', // 对应resources列表项要显示的字段
   >     headerContent: '教室' // 资源的左上角的名称
   >   }
   > ],
   > resources: [], // 周视图左侧资源列表 与事件进行匹配
   > eventClick: handleEventClick // 事件
   > ```
   >
   > 

7. 高度

   > ```js
   > height: window.screen.height - 46, //设置高度
   > windowResize: handleWindowResize,
   >     
   > // 要让日历高度无论在浏览器如何缩放高度（包括调出控制台）都能和左边的内容区高度一直，
   > // 必须使用 window.screen.height
   > // 只有 window.screen.height ，在浏览器缩放时不会变
   > // 视口大小变化调整日历高度
   > const handleWindowResize = () => {
   >   fullCalendar.value.options.height = window.screen.height - 46
   > }
   > ```
   >
   > 

8. xxx



### CalendarApi

```js
01)参考文件: node_modules/@fullcalendar/common/main.d.ts 中的  declare class CalendarApi 

#Vue3 获取api
onMounted(()=>{
	// 获取操作日历的 API
    calendarApi = fullCalendar.value.getApi()
})

02)继承接口 node_modules/@fullcalendar/core/main.d.ts 这里具体的功能实现
calendarApi.currentData
```

#### api 中获取当前信息

```wiki
#开始时间 calendarApi.currentData.viewApi.currentStart
#结束时间 calendarApi.currentData.viewApi.currentEnd
#当前日期(中间标题) calendarApi.currentData.viewTitle

#当前视图所有信息  calendarApi.currentData.viewSpec
## 当前所处的视图类型(month,week,day) viewSpec.buttonTextDefault
```

#### api 中一些方法

```js
calendarApi.render();//刷新日历
//立即切换到不同的视图,这个功能实现的是点击月或者周视图的时候，跳转到这一天的日视图
calendarApi.changeView('timeGridDay', '2024-04-18');
calendarApi.gotoDate('2024-04-18') //跳转到指定日期
calendarApi.unselect(); // 取消所有选中日期  
calendarApi.select('2024-04-18'); // 高亮选中选中日期
calendarApi.prev(); //跳转上一月、周、日，取决于视图  
calendarApi.today(); //回到今天
calendarApi.next(); //跳转下一月、周、日，取决于视图 
calendarApi.changeView('timeGridDay'); // 切换视图
```



## 实操

### 配置选项demo_01

```js
let calendarOptions = {
    nowIndicator: true, // 是否显示当前时间轴
    allDaySlot: false,  // 是否显示全天: (注: 针对start和end, 不是全天有时间段的处理)
    slotEventOverlap: true, // 事件是否可重叠
    editable: false,  // 能否编辑事件。如果需要拖拽事件，必须开启它
    droppable: true,   // 是否把其它日历上的事件拖拽到这个日历上
    selectOverlap: false, // 用户选择时能否重叠到事件上, selectable必须为true才生效
    unselectAuto: true, // 选中时，点击页面其它位置是否取消选中
    selectable: true, // 允许用户点击或拖拽选中
    dayHeaders: true, // 是否显示日期标题
    dayMinWidth: 'auto',  // 日最小宽度，如果日期单元格没办法满足，会出现水平滚动条
    refetchResourcesOnNavigate: true, // 当用户切换不同视图时，是否重新加载数据
    resourceOrder: 'index', // 资源按照index属性排序
    locale: 'zh-cn', // 中英文 en , zh-cn
    initialView: "dayGridMonth", // 默认视图
    schedulerLicenseKey: "", // key,需要花钱
    height: bodyHeight - 68, // 日历整体高度
    eventSources: [], // 事件列表
    resources: [], // 资源列表
    plugins: [   // 用到的插件
      momentPlugin,
      dayGridPlugin,
      timeGridPlugin,
      resourceTimelinePlugin,
      interactionPlugin,
      resourceTimeGridPlugin,
      scrollgridPlugin
    ],
    headerToolbar: { // 标题显示的按钮和文本。
      left: 'prev,title,mothTitle,next,today',
      center: '',
      right: 'timeGridDay,timeGridWeek,dayGridMonth,timeline'
    },
    buttonText: { // 按钮的文本设置
      today: '今日',
      dayGridMonth: '月',
      week: '周',
      day: '日'
    },
    customButtons: {
      // 自定义button，如果想显示页面上，把timeline放到headerToolbar对象里。
      timeline: {
        text: '自定义',
        click: "timelineEvent_fei 自己定义一个方法"
      }
    },
    slotLabelFormat: 'HH:mm', // 资源视图的事件格式
    eventTimeFormat: 'HH:mm', // 事件事件格式
    dayMaxEvents: true,  // 在dayGrid视图中如果每个单元格事件超出单元格会出现'+more'
    resourceAreaWidth: '280px', // 横轴资源视图的左侧列表宽度
    // 每个视图不同显示的日期格式
    views: {
      timeGridDay: {
        titleFormat: {year: 'numeric', month: 'short', day: 'numeric'},
      },
      timeGridWeek: {
        titleFormat: {year: 'numeric', month: 'short'},
      },
      dayGridMonth: {
        titleFormat: {year: 'numeric', month: 'short'},
        displayEventTime: true
      },
      timeline: {
        titleFormat: {year: 'numeric', month: 'short', day: 'numeric'},
      },
      resourceTimeGrid: {
        titleFormat: {year: 'numeric', month: 'short', day: 'numeric'},
        duration: {days: 1}
      }
    },
    eventShortHeight: 15, // 具有最小事件的样式
    slotDuration: "00:15", // 事件轴以15分钟为一刻度
    eventMinHeight: "15", // 事件最小高度
                          // 出现+more会调用该回调。返回值为：文字或者DOM
    moreLinkContent: (info) => this.$t('schedule.more') + info.num + this.$t('schedule.item'),
    // 点击+more触发该回调
    moreLinkClick: this.eventLimitClickFun,
    // title标题文本回调。返回值为：文本和DOM
    dayHeaderContent: this.columnHeaderHtmlFun,
    // 取消选择回调
    unselect: this.unselectCallback,
    // 日期切换回调。注意：切换视图也会调用该回调。
    datesSet: this.handleDatesRender,
    // 点击事件
    eventClick: this.handleEventClick,
    // 切换视图
    viewDidMount: this.handleViewSkeletonRender,
    // 月视图每个单元格回调。返回值：文字或DOM
    dayCellContent: (info) => {
      return {html: `<a class="fc-daygrid-day-number">${info.dayNumberText.replace('日', '')}</a>`}
    },
    // 现在指示器(nowIndicator)回调
    nowIndicatorDidMount: this.nowIndicatorDidMount,
    // 到当前时间指示器时间显示。如果有返回值（文本或DOM）：则显示返回值
    nowIndicatorContent: this.setNowIndicatorTime,
    // 日历尺寸发生改变
    windowResize: (arg) => {
      this.fullcalendarResize(arg.view.type)
    }
  }
```

### 官方demo下载

```wiki
下载地址: https://github.com/fullcalendar/fullcalendar
下载地址: https://github.com/fullcalendar/fullcalendar
```



### 其他

1. [插件地址](https://fullcalendar.io/docs/plugin-index)
2. xx

### 其他02__收集的资源

1. [FullCalendar Timeline View 使用](https://www.cnblogs.com/bzhy/p/10784879.html)
2. [vue FullCalendar (日历插件)](https://www.cnblogs.com/moguzi12345/p/14620459.html)

### 底部

没有了























