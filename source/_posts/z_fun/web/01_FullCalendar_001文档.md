#                 [     FullCalendar 日历插件中文说明文档       ](https://www.cnblogs.com/ymnets/p/7052818.html)             

FullCalendar提供了丰富的属性设置和方法调用，开发者可以根据FullCalendar提供的API快速完成一个日历日程的开发，本文将FullCalendar的常用属性和方法、回调函数等整理成中文文档，以供参阅

#### 普通显示设置

| 属性                  | 描述                                                         | 默认值                                                   |
| --------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| header                | 设置日历头部信息。 如果设置为false，则不显示头部信息。包括left，center,right左中右三个位置，每个位置都可以对应以下不同的配置： title: 显示当前月份/周/日信息 prev: 用于切换到上一月/周/日视图的按钮 next: 用于切换到下一月/周/日视图的按钮 prevYear：用于切换到上一年视图的按钮 nextYear：用于切换到下一年视图的按钮 | { left: 'title', center: '', right: 'today prev,next' }  |
| theme                 | 是否允许使用jquery的ui主题，如果设置为true，则需要加载jquery ui相关css和js文件。 [查看演示](http://www.helloweba.com/demo/fullcalendar/themes.html) | false                                                    |
| buttonIcons           | 设置header中使用的prev, next等变量对应按钮的样式，只有当theme为true时才有效，如果你调用了jQuery ui样式但又不想使用它的图标样式，可以将此属性设置为false | { prev: 'circle-triangle-w', next: 'circle-triangle-e' } |
| firstDay              | 设置一周中显示的第一天是哪天，周日是0，周一是1，类推。       | 0                                                        |
| isRTL                 | 设置为ture时则日历从右往左显示，貌似是针对阿拉伯人设计的。   | false                                                    |
| weekends              | 是否显示周末，设为false则不显示周六和周日。                  | true                                                     |
| hiddenDays            | 隐藏一周中的某一天或某几天，数组形式，如隐藏周二和周五：[2,5]，默认不隐藏，除非weekends设置为false。 | []                                                       |
| weekMode              | 在月视图里显示周的模式，因为每月周数可能不同，所以月视图高度不一定。 fixed：固定显示6周高，日历高度保持不变 liquid：不固定周数，高度随周数变化 variable：不固定周数，但高度固定 | 'fixed'                                                  |
| weekNumbers           | 是否在日历中显示周次(一年中的第几周)，如果设置为true，则会在月视图的左侧、周视图和日视图的左上角显示周数。 | false                                                    |
| weekNumberCalculation | 周次的显示格式。                                             | "iso"                                                    |
| height                | 设置日历的高度，包括header日历头部，默认未设置，高度根据aspectRatio值自适应。 |                                                          |
| contentHeight         | 设置日历主体内容的高度，不包括header部分，默认未设置，高度根据aspectRatio值自适应。 |                                                          |
| aspectRatio           | 设置日历单元格宽度与高度的比例。                             | 1.35                                                     |
| handleWindowResize    | 是否随浏览器窗口大小变化而自动变化。                         | true                                                     |
| windowResize          | callback，当浏览器窗口变化时触发function，使用： $('#calendar').fullCalendar({ windowResize: function(view) { alert('The calendar has adjusted to a window resize'); } }); |                                                          |
| render                | method，绑定日历到id上。 $('#id').fullCalendar('render');    |                                                          |
| destroy               | method，销毁id日历，把日历回复到初始化前状态。 $('#id').fullCalendar('destroy'); |                                                          |

#### 视图

FullCalendar提供五种可用视图，包括month（月视图），basicWeek（基本周视图，左侧不显示具体时间），basicDay（基本日视图，左侧不显示具体时间），agendaWeek（周视图），agendaDay（日视图）。

View视图对象的属性：

| 属性     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| name     | 包括month,basicWeek,basicDay,agendaWeek,agendaDay            |
| title    | 标题内容(例如"2013年9月" or "Sep 7 - 13 2013")               |
| start    | Date类型, 该view下的第一天                                   |
| end      | Date类型, 该view下的最后一天. 由于是一个闭合的值, 所以, 比如在month view下, 10月这个月份, 那么end对应的应该是11月的第一天 |
| visStart | Date类型. 在该view下第一个可以访问的day. month view下, 该值是当月的第一天, week view下, 则通常和start一致 |
| visEnd   | Date类型, 最后一个可访问的day                                |

View其他属性和方法

| 属性        | 描述                                                         | 默认值  |
| ----------- | ------------------------------------------------------------ | ------- |
| defaultView | 日历初始化时默认视图                                         | 'month' |
| getView     | method，取得视图对象信息，如获取当前视图的标题内容： var view = $('#calendar').fullCalendar('getView'); alert("The view's title is " + view.title); |         |
| changeView  | method，切换视图 .fullCalendar('changeView',viewName) viewName为5种视图中的一种 |         |

#### 日程选项

以下选项设置适用于agendaWeek和agendaDay视图里。

| 属性                | 描述                                                         | 默认值     |
| ------------------- | ------------------------------------------------------------ | ---------- |
| allDaySlot          | 在agenda视图模式下，是否在日历上方显示all-day(全天)          | true       |
| allDayText          | 定义日历上方显示全天信息的文本                               | 'all-day'  |
| axisFormat          | 设置日历agenda视图下左侧的时间显示格式，默认显示如：5:30pm   | 'h(:mm)tt' |
| slotMinutes         | 在agenda的视图中, 两个时间之间的间隔(分钟)                   | 30         |
| defaultEventMinutes | 事件默认的时间执行长度，如果事件对象没有指定执行多长时间，则默认执行两个小时 | 120        |
| firstHour           | 当切换到agenda时，初始滚动条滚动到的时间位置，默认在6点钟的位置 | 6          |
| minTime             | 设置显示的时间从几点开始                                     | 0          |
| maxTime             | 设置显示的时间从几天结束                                     | 24         |
| slotEventOverlap    | 设置视图中的事件显示是否可以重叠覆盖                         | true       |

#### 当前日期设置

| 属性          | 描述                                                         | 默认值 |
| ------------- | ------------------------------------------------------------ | ------ |
| year          | 设置日历年份，必须为4位如：2013，如果不设置则默认为当前年份  |        |
| month         | 设置初始化日历的月份，从0开始，如果年份和月份都未指定，则从一月开始。 |        |
| date          | 设置日历初始化时的日期，只有在周视图和日视图中有效           |        |
| prev          | method，进入到上一月（周、天）视图 $('#calendar').fullCalendar('prev'); |        |
| next          | method，进入到下一月（周、天）视图 $('#calendar').fullCalendar('next'); |        |
| prevYear      | method，进入上一年视图                                       |        |
| nextYear      | method，进入下一年视图                                       |        |
| today         | method，进入当天                                             |        |
| gotoDate      | method，指定进入日历中的某一天 $('#calendar').fullCalendar( 'gotoDate', year [, month, [ date ]] ) |        |
| incrementDate | method， 以当前时间为轴, 将日历向前, 或向后移动指定长度的时间, 比如:  $('#calendar').fullCalendar(‘incrementDate’, -3, 2, -5)就表示将日历年份向前移动3年,  月份向后移动2月, day(天数)向前移动5天。 |        |
| getDate       | method，返回当前日历中的日期                                 |        |

#### 文本与时间定制

你可以根据项目需求设置日历显示的文本信息，如中文的月份等。

| 属性            | 描述                                                         | 默认值                   |
| --------------- | ------------------------------------------------------------ | ------------------------ |
| timeFormat      | 设置显示的日程事件的时间格式，如timeFormat: 'H:mm' 则显示24小时制的像10:30 | {agenda: ‘h:mm{ - h:mm}} |
| columnFormat    | 设置显示日历每列表头信息的格式文本，默认： { month: 'ddd', // Mon week: 'ddd M/d', // Mon 9/7 day: 'dddd M/d' // Monday 9/7 } | 见描述                   |
| titleFormat     | 设置用于显示日历头部的文本信息，默认： { month: 'MMMM yyyy', // September 2013 week: "MMM d[ yyyy]{ '—'[ MMM] d yyyy}", // Sep 7 - 13 2013 day: 'dddd, MMM d, yyyy' // Tuesday, Sep 8, 2013 } | 见描述                   |
| buttonText      | 设置日历头部各按钮的显示文本信息，默认： { prev: '‹', // ‹ next: '›', // › prevYear: '«', // « nextYear: '»', // » today: 'today', month: 'month', week: 'week', day: 'day' } | 见描述                   |
| monthNames      | 月份全称，默认： ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] | 见描述                   |
| monthNamesShort | 月份名称简写，默认：['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] | 见描述                   |
| dayNames        | 星期全称，默认：['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] | 见描述                   |
| dayNamesShort   | 星期名称简写，默认：['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] | 见描述                   |
| weekNumberTitle | 周次，即一年中的第几周                                       | "W"                      |

#### 鼠标单击和滑过

以下列出的是当鼠标单击或者滑过日历中的某个元素时，回调的函数callback。

| 属性                         | 描述                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| dayClick                     | 当单击日历中的某一天时，触发callback，用法： $('#calendar').fullCalendar({ dayClick: function(date, allDay, jsEvent, view) { do something... } }); date是点击的day的时间(如果在agenda view,  还包含时间)，在月view下点击一天时，allDay是true，在agenda模式下，点击all-day的窄条时，allDay是true，点击其他的agenda view下的day则为false，jsEvent就是一个普通的javascript事件，包含的是click事件的基础信息。 |
| eventClick                   | 当点击日历中的某一日程（事件）时，触发此操作，用法： $('#calendar').fullCalendar({ dayClick: function(event, jsEvent, view) { do something... } }); event是日程（事件）对象，jsEvent是个javascript事件，view是当前视图对象。 |
| eventMouseover eventMouseout | 鼠标划过和离开的事件，用法和参数同上                         |

#### 选择操作

| 属性           | 描述                                                         | 默认值 |
| -------------- | ------------------------------------------------------------ | ------ |
| selectable     | 是否允许用户通过单击或拖动选择日历中的对象，包括天和时间。   | false  |
| selectHelper   | 当点击或拖动选择时间时，显示默认加载的提示信息，该属性只在周/天视图里可用。 | false  |
| unselectAuto   | 当点击页面日历以外的位置时，是否自动取消当前的选中状态。     | true   |
| unselectCancel | 指定哪些元素不会清空当前的选中，以JQUERY选择器的方式指定 '#someId'。 | ''     |
| select         | callback，被选中的函数回调，使用方法： function( startDate, endDate, allDay, jsEvent, view ) startDate：被选中区域的开始时间 endDate：被选中区域的结束时间 allDay：是否为全天事件 startDate：jascript对象 startDate：当前视图对象 |        |
| unselect       | callback，选中被取消时的回调，使用方法： function( view, jsEvent ) |        |
| select         | method，选中某个时间，使用方法： $('#calendar').fullCalendar( 'select', startDate, endDate, allDay ) |        |
| unselect       | method，取消选中，使用方法： $('#calendar').fullCalendar( 'unselect' ) |        |

#### 日程事件数据

FullCalendar最重要的部分，设置用于日程事件相关信息。

Event Object，事件对象，用来存储一个日历事件信息的标准对象，只有title和start是必须的

| 属性            | 描述                                             |
| --------------- | ------------------------------------------------ |
| id              | 可选，事件唯一标识，重复的事件具有相同的id       |
| title           | 必须，事件在日历上显示的title                    |
| allDay          | 可选，true or false，是否是全天事件。            |
| start           | 必须，事件的开始时间。                           |
| end             | 可选，结束时间。                                 |
| url             | 可选，当指定后，事件被点击将打开对应url。        |
| className       | 指定事件的样式。                                 |
| editable        | 事件是否可编辑，可编辑是指可以移动, 改变大小等。 |
| source          | 指向次event的eventsource对象。                   |
| color           | 背景和边框颜色。                                 |
| backgroundColor | 背景颜色。                                       |
| borderColor     | 边框颜色。                                       |
| textColor       | 文本颜色。                                       |

事件源对象

事件源即日历中的数据来源，FullCalendar提供了数组、函数调用、以及JSON数据的形式，当然也可以通过Google  Calendar feed获取数据接口。helloweba.com后面会有文章专门介绍事件数据的操作，包括数据的查询、写入、更新和删除操作。

以下是Event事件相关的参数属性说明。

| 属性               | 描述                                                         | 默认值  |
| ------------------ | ------------------------------------------------------------ | ------- |
| eventSources       | 事件源，存储数组对象，可以是Arrays/Functions/URLs。          |         |
| allDayDefault      | 是否为全天日程事件，显示这一天中所做的事情。                 | true    |
| ignoreTimezone     | 是否忽略时区。                                               | true    |
| startParam         | 在使用URL方式获取events数据源的时候, 自动插入到URL中的参数, 表示当前需要抓取的日程事件的起始时间。 | 'start' |
| endParam           | 和startParam参数意义相同, 表示要抓取的日程事件的终止时间。   | 'end'   |
| lazyFetching       | 是否从缓存信息获取event。比如从月视图切换到周视图。          | true    |
| eventDataTransform | callback，将外部数据源转换成Fullcalendar可以处理的数据       |         |
| loading            | callback，日历开始加载的时候，isLoading参数为true触发一次，日历加载完毕，isLoading参数为false触发一次，用法： function(isLoading, view) |         |
| updateEvent        | method，更新日历空间中的一个日程事件，如果是重复的日程事件，则都更新。用法： $('#calendar').fullCalendar( 'updateEvent', event ) |         |
| clientEvents       | method，返回FullCalendar已经存储到客户端的CalEvents对象数组， 第二个参数和removeEvents方法的第二个参数意义相同， 只不过在过滤器中， 如果返回true， 则该CalEvent对象将被加入到返回的数组中。 |         |
| removeEvents       | method，从日历中删除一个日程事件. 第二个参数可以不填， 可以填id， 可以是一个过滤器(一个函数， 接受CalEvent对象作为参数)。用法： $('#calendar').fullCalendar( 'removeEvents' [, idOrFilter ] ) |         |
| refetchEvents      | method，重新抓取所有的日程事件源上的日程事件并渲染它们。     |         |
| addEventSource     | method，添加一个日程事件源，添加之后， FullCalendar会马上从该源获取日程事件， 并加载到日历中。第二个参数和定义Calendar时候使用的url参数一致。 |         |
| removeEventSource  | method，移除一个日程事件源，该源上获取得到的日程时间也将被马上从日历中移除。 |         |

#### 事件渲染

 

| 属性                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| eventColor eventBackgroundColor eventBorderColor eventTextColor | 设置日程事件的背景色和边框色，以及文本颜色。可以使用任意支持css的颜色方式，如 #f00, #ff0000, rgb(255,0,0), or red。 |
| eventRender                                                  | callback，当日程事件渲染时触发，用法： function(calEvent, element, view) |
| eventAfterRender                                             | callback，当日程事件被渲染后触发，用法： function( event, element, view ) { } |
| eventDestroy                                                 | callback，当日程事件移出时触发，用法： function( event, element, view ) { } |
| renderEvent                                                  | method，一旦日历重新取得日程源，则原有日程将消失，当指定stick为true时，日程将永久的保存到日历上。 |
| rerenderEvents                                               | method，重新渲染所有事件。                                   |

#### 日程事件拖动和缩放

拖动和缩放功能依赖于jQuery ui的draggable和resizable，所以在使用时要提前加载[jQuery ui](http://jqueryui.com/)相关插件。

| 属性                               | 描述                                                         | 默认值 |
| ---------------------------------- | ------------------------------------------------------------ | ------ |
| editable                           | 是否可编辑，即进行可拖动和缩放操作。                         | false  |
| eventStartEditable                 | 是否让事件在开始时就可以拖动。                               | true   |
| dragRevertDuration                 | 如果拖拽不成功，多久回复原状，毫秒                           | 500    |
| dragOpacity                        | 拖动时候的不透明度。 { agenda:.5 //对于agenda试图 '':1.0 //其他视图 } | 见描述 |
| eventDragStart, eventDragStop      | callback，日程事件被拖动之前和之后触发。这里的拖动不一定是一个有效的拖动，只要日程事件的控件被拖着动了，事件就触发。 可以从该对象中获取位移，位置等数据。用法： function( event, jsEvent, ui, view ) { } |        |
| eventDrop                          | callback，当拖拽完成并且时间改变时触发，用法： function( event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view ) { } ayDelta 保存日程向前或者向后移动了多少天 minuteDelta 这个值只有在agenda视图有效，移动的时间 allDay 如果是月视图，或者是agenda视图的全天日程，此值为true,否则为false |        |
| eventResizeStart,  eventResizeStop | callback，在一个日程事件改变大小之前之后发生(不一定要改变成功)，用法： function( event, jsEvent, ui, view ) { } |        |
| eventResize                        | callback，在日程事件改变大小并成功后调用, 参数和eventDrop参数用法一致。用法： function( event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ) { } |        |

#### 日期工具

| 函数         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| formatDate   | 格式化日期，通过指定的格式格式化一个日期，返回一个字符串。options选项是一个对象，其中设置本地化变量支持的属性值. 比如{ monthNames : ['一月'，'二月'，……]，dayNames: ['周日'，'周一'，…..]}，用法： $.fullCalendar.formatDate( date，formatString [,options ] ) |
| formatDates  | 一次格式化两个日期，和上一个格式化日期类似，只不过，这里在formatString中使用大括号{…}来描述第二个日期的格式化方式。用法： $.fullCalendar.formatDates( date1，date2，formatString [,options ] ) |
| parseDate    | 解析日期，将一个字符串格式成一个javascript的Date对象，这个string可以是ISO8601，IETF，UNIX时间戳三种格式。用法: $.fullCalendar.parseDate( string ) |
| parseISO8601 | 将一个ISO8601字符串转换成一个javascript 的Date对象。用法： $.fullCalendar.parseISO8601( string [,ignoreTimezone ] ) |



### 参考文献：

官方文档：http://arshaw.com/fullcalendar/docs/

FullCalendar 官方文档翻：http://www.cnblogs.com/mycoding/archive/2011/05/20/2052152.html

最新FullCalendar中文文档： https://www.helloweba.net/javascript/445.html
