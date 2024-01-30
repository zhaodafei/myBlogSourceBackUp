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



### 底部

没有了























