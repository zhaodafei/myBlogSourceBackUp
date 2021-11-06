---
title: 浏览器访问网页时发生了什么
categories: 
- WEB
- HTTP
tags:
- WEB
---
浏览器访问网页时发生了什么

1. 浏览器在域名系统（DNS）服务器上找出存放网页的服务器的实际地址（找出商店的位置）。
2. 浏览器发送 HTTP 请求信息到服务器来请拷贝一份网页到客户端（你走到商店并下订单）。这条消息，包括其他所有在客户端和服务器之间传递的数据都是通过互联网使用 TCP/IP 协议传输的。
3. 服务器同意客户端的请求后，会返回一个“200 OK”信息，意味着“你可以查看这个网页，给你～”，然后开始将网页的文件以数据包的形式传输到浏览器（商店给你商品，你将商品带回家）。
4. 浏览器将数据包聚集成完整的网页然后将网页呈现给你（商品到了你的门口 —— 新东西，好棒！）。

[万维网是如何工作的](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

### 其他

HTTP发起请求之前需要TCP协议三次握手

#### TCP 关键词

```
关键词:
ACK: (全称为Acknowledge character）即是确认字符
seq: () 序号 [XYZ 变化]
SYN: (Synchronousidle) 同步字符
FIN: () 报文
NCK: (Negative Acknowledg) 否认字符
PSH:
RST:
URG:
```

#### TCP三次握手

第一次握手：建立连接时，客户端发送syn包（seq=j）到服务器，并进入SYN_SENT状态，等待服务器确认；SYN：同步序列编号。

第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（seq=k），即SYN+ACK包，此时服务器进入SYN_RECV状态。

第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。

相关资料: [TCP三次握手](https://zhidao.baidu.com/question/576079521.html)

```

```

![TCP三次握手](/img/z_interview/web/tcp_3hand.jpg "TCP三次握手")

#### TCP 四次挥手

由于TCP连接是`全双工`的，因此每个方向都必须单独进行关闭。这原则是当一方完成它的数据发送任务后就能发送一个FIN来终止这个方向的连接。收到一个 FIN只意味着这一方向上没有数据流动，一个TCP连接在收到一个FIN后仍能发送数据。首先进行关闭的一方将执行主动关闭，而另一方执行被动关闭。

1. TCP客户端发送一个FIN，用来关闭客户到服务器的数据传送。
2. 服务器收到这个FIN，它发回一个ACK，确认序号为收到的序号加1。和SYN一样，一个FIN将占用一个序号。
3. 服务器关闭客户端的连接，发送一个FIN给客户端。
4. 客户端发回ACK报文确认，并将确认序号设置为收到序号加1

 相关资料: [TCP四次挥手](https://zhidao.baidu.com/question/371736358633764564.html?fr=iks&word=%CB%C4%B4%CE%BB%D3%CA%D6&ie=gbk)

```\

```

![TCP四挥手](/img/z_interview/web/tcp_4hand.jpg "TCP四挥手")

### 其他资料:

[传输控制协议TCP](https://bk.tw.lvfukeji.com/wiki/传输控制协议)

[TCP 为什么是三次握手，而不是两次或四次](https://www.zhihu.com/question/24853633/answer/254224088)































