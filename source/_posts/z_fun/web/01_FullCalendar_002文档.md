---
title: FullCalendar 官方文档翻译
date: 2024-05-25
categories: 
- FullCalendar
tags:
- FullCalendar
---

FullCalendar 官方文档翻译
1. 使用方式, 引入相关js, css后, $(‘#div_name’).fullCalendar({//options});  接受的是一个option对象

2. 普通属性

2.1. year, month, date: 整数, 初始化加载时的日期.

2.2. defaultView: 字符串类型, 默认是’month;

2.2.1. 允许的views:

2.2.1.1. month   一页显示一月, 日历样式

2.2.1.2. basicWeek   一页显示一周, 无特殊样式

2.2.1.3. basicDay    一页显示一天, 无特殊样式

2.2.1.4. agendaWeek   一页显示一周, 显示详细的24小时安排(也就是议事日程)

2.2.1.5. agendaDay    一页显示一天, 显示详细的24小时安排

2.3. header: 定义按钮/文本在日历的顶部, false说明不使用header., 使用left, center, right三个属性来进行布局, 默认是{left: ‘title’, center: ‘’, right: ‘today prev, next’}, 支持使用的属性按钮:

2.3.1. title: 一个包含当前日期的文本

2.3.2. prev: 根据view的不同, 返回上一月/周/天

2.3.3. next: 根据view的不同, 返回下一月/周/天

2.3.4. prevYear: 使日历返回到上一年

2.3.5. nextYear: 使日历返回下一年

2.3.6. today: 将日历移动到当天.

2.3.7. view name: 上面列举的支持views名称, 用来切换views

2.4. buttonText: 定义header中使用的按钮的显示文本:  接受的属性名: prev, next, prevYear等等

2.5. aspectRatio: 接受一个浮点参数, 调整宽高比例.

2.6. allDayDefault: 布尔类型, 默认true, 决定每个CalEvent的allDay属性的默认值.  allDay标明一个日程事件是否是整天的, 也就是忽略具体的时间, 只计算天数.  默认情况下, 所有的新添加的日程时间不加说明, 都是allDay的, 可以通过设置allDayDefault, 使得新创建的日程时间, 默认情况下就是关注时间的.

2.7. weekends: 布尔类型, 默认为true, 标识是否显示周六和周日的列.

2.7.1. finxed: 每月固定显示6周.

2.7.2. liquid:  可能会显示4, 5, 6周, 依赖于月份, 每周的高度会拉长到填充可变高度,   视aspectRatio而定,   这里月份的高度是定的.

2.7.3. vairiable: 可能会显示4, 5, 6周, 依赖于月份, 每周的高度会有一个固定值, 也就是说, 整个月份的高度会随着有几周的行数而变化.

2.8. allDaySlot: 布尔值, 默认是true, 标明在agenda views模式下的时候, 上面的all-day小块是否显示.

2.9. allDayText: allDay区域的文本内容.

2.10. firstHour: 整型, 默认值为6. 表示在agenda的views中, 刚打开的时候显示的是第n小时, 该table用scroll控制.

2.11. slotMinutes: 整型, 默认值30, 表示在agenda的views中, 两个时间之间的间隔.  也就是没一个小时所在一行中另外分出来的每一个小行代表多少分钟.

2.12. defaultEventMinutes: 整型, 默认值120, 和事件有关, 功能不确定.

3. 日程编辑

3.1. editable: Boolean类型, 默认值false, 用来设置日历中的日程是否可以编辑.  可编辑是指可以移动, 改变大小等.

3.2. disableDragging: Boolean类型, 默认false, 所有的event可以拖动, 必须editable = true

3.3. diableResizing: Boolean, 默认false, 所有的event可以改变大小, 必须editable = true

3.4. dragRevertDuration: 拖动恢复的时间, 默认500毫秒, 表示一个不成功的拖动之后, 控件回复到原始位置的时间.

3.5. dragOpacity: Float类型, 表示拖动时候的不透明度.  指定一个float数值, 表示所有的views下都使用该不透明度, 也可以赋值为一个对象, 通过views hash来指定特定的views中的不透明度, 在以对象通过views hash指定不透明度时, 可以指定一部分, 然后, 其他的用’’: float的方式来标明其他的所有的views下都使用该不透明度.

3.5.1. month

3.5.2. week: basicWeek和agendaWeek

3.5.3. day: basicDay和agendaDay

3.5.4. agenda: agendaDay和agendaWeek

3.5.5. agendaDay

3.5.6. agendaWeek

3.5.7. basic: basicWeek和basicDay

3.5.8. basicWeek

3.5.9. basicDay

3.5.10. ‘’: 空的字符串, 表明所有其他的views

4. 时间和日期的格式化

4.1. 支持的格式化占位符

4.1.1. s: 秒

4.1.2. ss: 秒, 两位

4.1.3. m: 分钟

4.1.4. mm: 分钟, 两位

4.1.5. h: 小时, 12小时制

4.1.6. hh: 小时, 12小时制, 两位

4.1.7. H: 小时, 24小时制

4.1.8. HH: 小时, 24小时制, 两位

4.1.9. d: 日期数字

4.1.10. dd: 日期数字, 两位

4.1.11. ddd: 日期名称, 缩写

4.1.12. dddd: 日期名称, 全名

4.1.13. M: 月份数字

4.1.14. MM: 月份数字, 两位

4.1.15. MMM: 月份名称, 缩写

4.1.16. MMMM: 月份名称, 全名

4.1.17. yy: 两位的年份

4.1.18. yyyy: 4位的年份

4.1.19. t: 上下午加 a或者p

4.1.20. tt: 上下午加am或pm

4.1.21. T: 上下午加A 或者P

4.1.22. TT: 上下午加AM或PM

4.1.23. u: ISO8601格式

4.1.24. S: 给日期加上st, nd, rd, th等后缀, 表明是第几天

4.1.25. 特殊字符:

4.1.25.1. ‘…’ 原意输出文本

4.1.25.2. ‘’  表示一个单引号

4.1.25.3. (…), 括号内的占位符表示的格式化日期中, 至少有一个不为空, 才显示括号内的这一组格式化字符串

4.2. titleFormat: string/object: 确定header中的title展示日期的格式, 这里也可以使用view hash的方式通过对象进行配置, 如果使用view hash的方式, 配置, 则每种view中的title的格式都是不一样的.

4.3. columnFormat: string/object, 和titleFormat配置方式一样, 影响各种view中的每列的表头显示文本.  文档中关于allDay为false时的解释不明白.

4.4. timeFormat: 默认是{agenda: ‘h:mm{ - h:mm}}, 影响的是添加的具体的日程上显示的时间格式.

4.5. axisFormat: string, 默认h(:mm)tt, 影响agenda views下的最左的一列的时间显示方式.

4.6. views hash: 现在支持view hashes的选项有: dragOpacity, titleFormat, columnFormat, timeFormat

5. formatDates: $.fullCalendar.formatDates(date1, date2, formatString, [options]): 和formatDate类似, 但是接受两个date, 在格式化字符串中, 使用{…}来格式化第二个date

6. Event sources:

6.1. events: array/string/function:

6.1.1. 配置事件源

6.1.1.1. 数组是硬编码的日程事件.

6.1.1.2. 提供一个URL, 该URL返回一个json或数组的日程事件组, GET参数视startParam和endParam选项而定.

6.1.1.3. 提供一个函数, 以自定义的方式抓取数据, 该函数需要接受参数start, end, callback, 分别表示抓取的日程事件的开始时间, 结束时间, 抓取结束后的回调比如:
events: function(start, end, callback) {$.getJSON(“/myscript”, {start: start.getTime(), end: end.getTime()}, function(result) {callback(result);})}

6.2. eventSources: Array, 就像events选项一样, 但是, 这个用来配置多个日程事件数据来源.

6.3. startParam: string, 默认值: start, 这个就是在使用URL方式获取events数据源的时候, 自动插入到URL中的参数, 表示当前需要抓取的日程事件的起始时间

6.4. endParam: string, 默认值: end, 和startParam参数意义相同, 表示要抓取的日程事件的终止时间

6.5. cacheParam: 当使用JSON url方式获取日程事件时, 为了防止ajax自身的缓存带来的数据不同步问题, 加入的鉴别参数名, 值是由full calendar控制加入的当前时间.  不懂可以查询ajax缓存解决方案.

7. CalEvent对象: 标准的当前使用的日程事件源(请注意区分这里的日程事件和计算机领域的事件之间的区别, 这里的事件是业务上的, 表明在某个时间做某事的一个记录, 而计算机领域的事件则是用户对计算机的一个动作)

7.1. id: Integer/String: 日程事件的标识, repeat型的日程事件拥有相同的id

7.2. title: string, 日程事件的标题

7.3. allDay: Boolean, 默认true, 标明一个日程事件是否是关注具体时间的, 如果是true, 表明该日程事件不关注具体时间, 是当天所有时间都有的, 所以, 该日程事件的日期会被忽略, 在agenda view中通过专门的allDay区域显示, 如果是false, 则是关注开始时间和结束时间的.

7.4. date: Date类型, 是start属性的别名

7.5. start: Date类型, 一个javascript的Date对象, 方便起见, 可以使用IETF格式, ISO8601格式以及UNIX时间戳等多种方式的字符串表示.

7.6. end: Date(可选的): 和start一样, 不过表示日程时间的结束时间.

7.6.1. 如果对应的日程事件是allDay的, 那么10月1日8时到10月3日8时就表示跨度是3天

7.6.2. 如果对应的日程时间不是allDay的, 那么10月1日8时10月3日8时则表示跨度是48个小时.

7.6.3. url: string, 设置一个url, 该日程事件被点击的时候使用, 新的页面默认在当前窗口打开, 如果使用更复杂的事件处理, 要使用eventClick触发动作(这份文档中使用了Triggered Action来描述计算机领域的事件, 防止了和该插件所在领域的日程事件冲突.)

8. 方法:  方法调用的方式: $(‘.selector’).fullCalendar(‘method_name’)首先使用一个jquery选择器获取日历控件对象, 然后, 调用fullCalendar(), 参数是字符串形式的方法名

8.1. prev, 跳转到前一月/周/天, 根据当前的view决定

8.2. next, 同prev, 是后一月/周/天

8.3. today, 跳转到今天.

8.4. gotoDate: 调用方式: $(‘.selector’).fullCalendar(‘gotoDate’, year[, month[, date]])调用方法名为gotoDate, 后面三个参数传递年, 月, 日, 年是必选, 其他两个可选.   其中的月month参数, 是以0开始计算的, 也就是说一月对应0.   该方法也可以使用单参数的方式调用, 传递一个javascript的Date对象.

8.5. incrementDate: $(‘.selector’).fullCalendar(‘incrementDate’, years[, months[, days]])  以当前时间为轴, 将日历向前, 或向后移动指定长度的时间, 比如: $(‘.selector’).fullCalendar(‘incrementDate’, -3, 2, -5)就表示将日历年份向前移动3年, 月份向后移动2月, day(天数???呵呵)向前移动5天.

8.6. changeView: $(‘.selector’).fullCalendar(‘changeView’, viewName) 切换日历的view, viewName必须是允许的views

8.7. updateEvent: $(‘.selector’).fullCalendar(‘updateEvent’, calEvent)  更新日历空间中的一个日程事件, 如果是repeat的日程事件, 则都更新.   这里更新的calEvent对象必须是Triggered Action(触发事件)中作为参数传递的或clientEvents方法中返回的CalEvent实例, 也就是说必须是合法的, 在日历中可检索的.

8.8. renderEvent: $(‘.selector’).fullCalendar(‘renderEvent’, calEvent, [stick])  将一个新的CalEvent对象渲染到日历中, 该对象至少要有title和start属性.   默认情况下, 新渲染的这个CalEvent对象在日历重新获取日程事件源(比如prev, 或next调用)的时候, 会消失, 如果设置stick参数为true, 则会保证新渲染的CalEvent对象永久保留.

8.9. removeEvents: $(‘.selector’).fullCalendar(‘removeEvents’, [idOrFilter]): 从日历中删除一个日程事件.  第二个参数可以不填, 可以填id, 可以是一个过滤器(一个函数, 接受CalEvent对象作为参数)

8.9.1. 不填: 所有的日程事件被移除

8.9.2. id: 指定id匹配的所有的日程事件被移除

8.9.3. 过滤器: 过滤器接受CalEvent对象作为参数, 在过滤器内部, 通过一些策略处理, 如果需要移除, 则返回true, 否则返回false.

8.9.4. clientEvents: $(‘.selector’).fullCalendar(‘clientEvents’, [idOrFilter]): 返回FullCalendar已经存储到客户端的CalEvents对象数组,  第二个参数和removeEvents方法的第二个参数意义相同, 只不过在过滤器中, 如果返回true, 则该CalEvent对象将被加入到返回的数组中

8.9.5. addEventSource:  $(‘.selector’).fullCalendar(‘addEventSource’, source): 添加一个日程事件源, 添加之后, FullCalendar会马上从该源获取日程事件, 并加载到日历中.  第二个参数和定义Calendar时候使用的url参数一致.

8.9.6. removeEventSource:  $(‘.selector’).fullCalendar(‘removeEventSource’, source)   移除一个日程事件源, 该源上获取得到的日程时间也将被马上从日历中移除.

8.9.7. rerenderEvents: $(‘.selector’).fullCalendar(‘rerenderEvents’)  重新渲染屏幕上的所有日程事件.

8.9.8. refetchEvents:  $(‘.selector’).fullCalendar(‘refetchEvents’)  重新抓取所有的日程事件源上的日程事件并渲染它们.

8.9.9. render:  $(‘.selector’).fullCalendar(‘render’): 该方法用来立刻渲染整个日历, 在一个可见的元素上调用fullCalendar的时候, 该方法会自动调用, 如果是在一个隐藏的元素上调用, 则需要尽快的手动调用使该元素可见并渲染.

9. 触发事件(Triggered Action): 计算机领域中的事件

9.1. viewDisplay: function(view)…..每次日历加载以及日历的view改变的时候触发一次.  接受的view就是前面一直有提到的view对应的对象.

9.2. loading: function(isLoading, view)…..日历开始加载的时候, isLoading参数为true触发一次, 日历加载完毕, isLoading参数为false触发一次.

9.3. windowResize: function(view)   由于包含日历的窗口大小发生变化导致日历控件大小发生变化时触发.   (这个方法中的this变量指向哪个元素不清楚, 因为我这边浏览器改变大小没有导致日历大小改变.)

9.4. dayClick(dayDate, allDay, jsEvent, view): 用户点击day的时候触发, dayDate是点击的day的时间(如果在agenda view, 还包含时间), 在month view下点击一天时, allDay是true, 在agenda模式下, 点击all-day的窄条时, allDay是true, 点击其他的agenda view下的day则为false, jsEvent就是一个普通的javascript事件, 包含的是click事件的基础信息.   在这个方法中, this获得的是一个普通的HTML的DOM元素, 是包含该日期的一个TD

9.5. eventRender: function(calEvent, element, view): 日程事件渲染之前触发.   calEvent是一个CalEvent日程事件对象, element是calEvent对象对应的JQuery对象.  view就是当前所处的view的实例对象, 这个方法中使用关键字this获得的是calEvent对象的引用.   这个事件的处理方法如果返回false, 可以阻止渲染所有的日程事件.   该方法中可以通过修改jquery对象element来改变具体的渲染方式, 因此可以很好的和其他插件结合使用.

9.6. eventClick, eventMouseover, eventMouseout: function(calEvent, jsEvent, view): 日程事件被点击, 鼠标划过, 鼠标离开的事件.  参数和上面介绍过的同名参数一致.    这里的eventClick事件如果返回false, 可以阻止浏览器跳转到对应日程事件在初始配置时指定的url地址.  这种事件的阻止传播可以参照DHTML文档关于事件的传播和原始响应.

9.7. eventDragStart, eventDragStop: function(calEvent, jsEvent, ui, view)日程事件被拖动之前和之后触发.  这里的拖动不一定是一个有效的拖动, 只要日程事件的控件被拖着动了, 事件就触发.  同名参数和上面介绍过的一样.  UI保存的是一个JQuery的UI对象.  可以从该对象中获取位移, 位置等数据.

9.8. eventDrop: function(calEvent, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view)  在一个日程事件被移动, 并成功移动到另外一个日期/时间.

9.8.1. dayDelta: 保存了这次拖动导致该日程事件移动了多少天, 向前为正数, 向后为负数.

9.8.2. minuteDelta: 保存了这次拖动导致该日程事件移动了多少分钟, 向前为正数, 向后为负数.  该值只有在agenda view下有效.

9.8.3. allDay: 如果在month view下移动, 或在agenda view下移动到all-day区域, 则allDay为true, 移动到agenda view的其他区域则为false

9.8.4. revertFunc: 调用该方法, 可以将刚才的拖动恢复到原状.  这个方法多用于ajax的提交, 移动之后, 提交数据到后台, 如果后台更新失败, 根据返回消息, 调用这个方法, 可以使页面回复原状.

9.8.5. eventResizeStart, eventResizeStop: function(calEvent, jsEvent, ui, view):  在一个日程事件改变大小之前之后发生(不一定要改变成功.)  calEvent保存了日程事件信息(date, title, 等等)

9.8.6. eventResize: function(calEvent, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view): 在日程事件改变大小并成功后调用, 参数和eventDrop参数用法一致.

10. View 对象

10.1. name: 前面列举的那些view名称

10.2. title: string: 切换到view的时候, 可以在header中设置的title变量的值.

10.3. start: Date类型, 该view下的第一天.

10.4. end: Date类型, 该view下的最后一天.  由于是一个闭合的值, 所以, 比如在month view下, 10月这个月份, 那么end对应的应该是11月的第一天.

10.5. visStart: Date类型. 在该view下第一个可以访问的day. month view下, 该值是当月的第一天, week view下, 则通常和start一致.

10.6. visEnd: Date类型, 最后一个可访问的day

11. 颜色的修改: 通过重写css实现